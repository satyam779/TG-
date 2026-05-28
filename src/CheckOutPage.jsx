import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from './components/SEO';
import './CheckOutPage.css';

const CheckOutPage = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [schoolOrCompany, setSchoolOrCompany] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [zip, setZip] = useState('');
	const [country, setCountry] = useState('India');
	const [cartItems, setCartItems] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [loading, setLoading] = useState(false);
	const [isCartEmpty, setIsCartEmpty] = useState(false);

	const CHECKOUT_PROXY_ENDPOINT = '/wp-json/techyguide/v1/create-order/';
	const ORDER_PAY_BASE_URL = import.meta.env.VITE_WP_ORDER_PAY_BASE_URL || 'https://www.techyguide.in';
	const formatPrice = (price) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);


	useEffect(() => {
		const savedData = JSON.parse(localStorage.getItem('checkoutData'));

		if (savedData) {
			setEmail(savedData.email || '');
			setPhone(savedData.phone || '');
			setSchoolOrCompany(savedData.schoolOrCompany || '');
			setFirstName(savedData.firstName || '');
			setLastName(savedData.lastName || '');
			setAddress(savedData.address || '');
			setCity(savedData.city || '');
			setState(savedData.state || '');
			setZip(savedData.zip || '');
			setCountry(savedData.country || 'India');
		}
	}, []);

	useEffect(() => {
		const data = {
			email,
			phone,
			schoolOrCompany,
			firstName,
			lastName,
			address,
			city,
			state,
			zip,
			country
		};

		localStorage.setItem('checkoutData', JSON.stringify(data));
	}, [email, phone, schoolOrCompany, firstName, lastName, address, city, state, zip, country]);

	useEffect(() => {
		let cart = JSON.parse(localStorage.getItem('techyCart')) || [];

		function initCheckout() {
			if (cart.length === 0) {
				setIsCartEmpty(true);
				setCartItems([]);
				setTotalPrice(0);
				setTimeout(() => { window.location.href = '/#/'; }, 2000);
				return;
			}

			let total = 0;
			setIsCartEmpty(false);
			setCartItems(cart);
			cart.forEach((item) => {
				total += item.price * item.quantity;
			});

			setTotalPrice(total);
		}

		initCheckout();

		return () => { };
	}, []);

	const handlePayment = async () => {
		if (loading) {
			return;
		}

		if (!email || !phone || !firstName || !lastName || !address || !city || !state || !zip) {
			alert('Please fill all required fields');
			return;
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			alert('Enter a valid email address');
			return;
		}

		const phoneDigits = phone.replace(/\D/g, '');
		if (phoneDigits.length !== 10) {
			alert('Enter a valid 10-digit phone number');
			return;
		}

		if (!cartItems.length || totalPrice <= 0) {
			alert('Cart is empty');
			return;
		}

		if (!cartItems.every((item) => item.product_id)) {
			alert('Missing product_id in cart');
			return;
		}

		const orderData = {
			payment_method: 'razorpay',
			payment_method_title: 'Razorpay',
			set_paid: false,
			billing: {
				first_name: firstName,
				last_name: lastName,
				email: email,
				phone: phone,
				address_1: address,
				city: city,
				state: state,
				postcode: zip,
				country: 'IN'
			},
			line_items: cartItems.map((item) => ({
				product_id: item.product_id,
				quantity: item.quantity || 1
			}))
		};

		try {
			setLoading(true);

			const response = await fetch(CHECKOUT_PROXY_ENDPOINT, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(orderData)
			});

			const contentType = response.headers.get('content-type');
			if (contentType && contentType.includes('text/html')) {
				const htmlContent = await response.text();
				throw new Error(`Server returned HTML (likely a 404 or redirect). Start: ${htmlContent.substring(0, 50)}...`);
			}

			const data = await response.json();

			if (!response.ok) {
				setLoading(false);
				alert(`ERROR: ${data.message || 'Order failed'}`);
				return;
			}

			if (!data.id || !data.order_key) {
				throw new Error('Order created but required payment fields are missing.');
			}

			window.location.href = `${ORDER_PAY_BASE_URL}/checkout/order-pay/${data.id}/?pay_for_order=true&key=${data.order_key}`;
		} catch (error) {
			console.error('Detailed Payment Error:', error);
			setLoading(false);
			alert(`Checkout Error: ${error.message || 'Something went wrong. Please check your network or browser console for details.'}`);
		}
	};

	return (
		<div className="checkout-page-root checkout-page">
			<SEO
				title="Checkout | TechyGuide Shop"
				description="Securely complete your purchase of TechyGuide robotics kits and STEM courses."
				canonical="https://techyguide.in/checkout"
			/>
			<div className="checkout-container">

				<div className="checkout-left">
					<div className="header-logo">
						<a href="#/shop" onClick={(e) => { e.preventDefault(); localStorage.setItem('openCartOnLoad', 'true'); navigate('/shop'); }}>&larr; Back to Cart</a>
						<h2>Checkout</h2>
					</div>

					<h2 className="checkout-heading">Billing &amp; Shipping Details</h2>

					<form id="checkoutForm">
						<section className="form-section">
							<h3>Contact Information</h3>
							<div className="form-group">
								<label>Email Address</label>
								<input type="email" placeholder="you@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
							</div>
							<div className="form-group">
								<label>Phone Number</label>
								<input type="tel" placeholder="+91 98765 43210" required value={phone} onChange={(e) => setPhone(e.target.value)} />
							</div>
							<div className="form-group">
								<label>School or Company <span style={{ color: '#999', fontSize: '12px' }}>(Optional)</span></label>
								<input type="text" placeholder="e.g., ABC School / TechCorp Inc" value={schoolOrCompany} onChange={(e) => setSchoolOrCompany(e.target.value)} />
							</div>
							<div className="form-row">
								<div className="form-group half">
									<label>First Name</label>
									<input type="text" placeholder="" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
								</div>
								<div className="form-group half">
									<label>Last Name</label>
									<input type="text" placeholder="" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
								</div>
							</div>
							<div className="form-group">
								<label>Address</label>
								<input type="text" placeholder="123 Tech Street, Robotics Lab" required value={address} onChange={(e) => setAddress(e.target.value)} />
							</div>
							<div className="form-group">
								<label>Country</label>
								<input type="text" required value={country} readOnly />
							</div>
							<div className="form-row">
								<div className="form-group third">
									<label>City</label>
									<input type="text" placeholder="Bengaluru" required value={city} onChange={(e) => setCity(e.target.value)} />
								</div>
								<div className="form-group third">
									<label>State</label>
									<input type="text" placeholder="Karnataka" required value={state} onChange={(e) => setState(e.target.value)} />
								</div>
								<div className="form-group third">
									<label>ZIP Code</label>
									<input type="text" placeholder="560001" required value={zip} onChange={(e) => setZip(e.target.value)} />
								</div>
							</div>
						</section>

						<div className="payment-trust-section">
							<p>Secure Payment powered by Razorpay</p>
							<span>UPI • Cards • Netbanking • Wallets</span>
						</div>
						<button type="button" className="btn-pay" onClick={handlePayment} disabled={loading}>
							{loading ? 'Processing...' : 'Proceed to Payment'}
						</button>
						<p className="payment-note">A secure Razorpay popup will open to complete payment</p>
					</form>
				</div>

				<div className="checkout-right">
					<div className="summary-card">
						<h3>Order Summary</h3>

						<div className="order-items" id="orderItemsList">
							{isCartEmpty ? (
								<p style={{ color: '#666' }}>Your cart is empty. Redirecting...</p>
							) : (
								cartItems.map((item) => (
									<div className="summary-item" key={`${item.product_id || item.id}-${item.title}`}>
										<div className="item-img-box">
											<img src={item.image} alt={item.title} />
											<span className="item-qty-badge">{item.quantity}</span>
										</div>
										<div className="item-info">
											<div className="item-name">{item.title}</div>
											<div className="item-meta">Qty: {item.quantity}</div>
										</div>
										<div className="item-price">{formatPrice(item.price * item.quantity)}</div>
									</div>
								))
							)}
						</div>

						<div className="price-breakdown">
							<div className="price-row">
								<span>Subtotal</span>
								<span id="summarySubtotal">{formatPrice(totalPrice)}</span>
							</div>
							<div className="price-row">
								<span>Shipping</span>
								<span>Free</span>
							</div>
							<div className="price-row total">
								<span>Total</span>
								<span id="summaryTotal">{formatPrice(totalPrice)}</span>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
};

export default CheckOutPage;
