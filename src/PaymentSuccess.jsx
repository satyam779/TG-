import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from './components/SEO';

const styles = {
  page: {
    minHeight: '100vh',
    width: '100%',
    margin: 0,
    padding: '24px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(180deg, #f7fcf9 0%, #eef9f2 100%)'
  },
  card: {
    width: '100%',
    maxWidth: '480px',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    padding: '40px 28px',
    boxShadow: '0 20px 48px rgba(14, 88, 44, 0.12), 0 4px 16px rgba(14, 88, 44, 0.08)'
  },
  iconWrap: {
    width: '96px',
    height: '96px',
    margin: '0 auto 20px auto',
    borderRadius: '50%',
    background: 'radial-gradient(circle at 30% 30%, #3ed46a 0%, #1fa24b 70%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 10px 24px rgba(31, 162, 75, 0.35)'
  },
  tick: {
    color: '#ffffff',
    fontSize: '50px',
    lineHeight: 1,
    fontWeight: 700,
    transform: 'translateY(-2px)'
  },
  heading: {
    margin: 0,
    color: '#113b21',
    fontSize: '30px',
    fontWeight: 700,
    letterSpacing: '0.2px'
  },
  message: {
    margin: '12px 0 28px 0',
    color: '#4b6354',
    fontSize: '16px',
    lineHeight: 1.6
  },
  button: {
    border: 'none',
    borderRadius: '12px',
    backgroundColor: '#1f7a43',
    color: '#ffffff',
    padding: '12px 24px',
    fontSize: '15px',
    fontWeight: 600,
    cursor: 'pointer',
    boxShadow: '0 8px 18px rgba(31, 122, 67, 0.28)'
  }
};

const CART_STORAGE_KEYS = ['cart', 'techyCart', 'openCartOnLoad', 'checkoutData'];

const removeCartRelatedKeys = (storage) => {
  if (!storage) {
    return;
  }

  CART_STORAGE_KEYS.forEach((key) => storage.removeItem(key));
};

const PaymentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    removeCartRelatedKeys(window.localStorage);
    removeCartRelatedKeys(window.sessionStorage);

    if (window.sessionStorage && window.sessionStorage.length > 0) {
      window.sessionStorage.clear();
    }
  }, []);

  const handleGoHome = () => {
    try {
      navigate('/');

      setTimeout(() => {
        if (!window.location.hash || window.location.hash === '#/payment-success') {
          window.location.href = `${window.location.origin}${window.location.pathname}#/`;
        }
      }, 50);
    } catch (err) {
      console.error(err);
      window.location.href = `${window.location.origin}${window.location.pathname}#/`;
    }
  };

  return (
    <div style={styles.page}>
      <SEO
        title="Order Success | TechyGuide"
        description="Your order has been placed successfully. Thank you for choosing TechyGuide."
        canonical="https://techyguide.in/payment-success"
      />
      <main style={styles.card}>
        <div style={styles.iconWrap} aria-hidden="true">
          <span style={styles.tick}>✓</span>
        </div>

        <h1 style={styles.heading}>Payment Successful</h1>
        <p style={styles.message}>Your order has been placed successfully.</p>

        <button type="button" style={styles.button} onClick={handleGoHome}>
          Go to Home
        </button>
      </main>
    </div>
  );
};

export default PaymentSuccess;
