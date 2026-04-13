# Checkout Proxy Setup (WordPress + WooCommerce)

This project now uses a secure server-side checkout proxy.

## What changed

- Frontend checkout no longer contains WooCommerce consumer key/secret.
- Frontend now calls:
  - `VITE_WP_ORDER_PROXY_ENDPOINT`
  - default: `https://www.techyguide.in/wp-json/techyguide/v1/create-order`
- Redirect behavior and response contract are preserved:
  - required response fields: `id`, `order_key`

## Files added/updated

- Frontend checkout update:
  - `src/CheckOutPage.jsx`
- WordPress endpoint plugin:
  - `wordpress/techyguide-checkout-proxy.php`
- Frontend env template:
  - `.env.example`

## Install on WordPress

1. Copy `wordpress/techyguide-checkout-proxy.php` to your WordPress plugins folder:
   - `wp-content/plugins/techyguide-checkout-proxy/techyguide-checkout-proxy.php`
2. Activate plugin from WP Admin > Plugins.
3. Ensure WooCommerce is active.
4. Ensure your frontend origin is in the plugin's `$allowed_origins` list.

## Frontend env

Create/update `.env` with:

```env
VITE_WP_ORDER_PROXY_ENDPOINT=https://www.techyguide.in/wp-json/techyguide/v1/create-order
VITE_WP_ORDER_PAY_BASE_URL=https://www.techyguide.in
```

## Request body expected by proxy

```json
{
  "payment_method": "razorpay",
  "payment_method_title": "Razorpay",
  "set_paid": false,
  "billing": {
    "first_name": "John",
    "last_name": "Doe",
    "email": "john@example.com",
    "phone": "9876543210",
    "address_1": "Address",
    "city": "City",
    "state": "State",
    "postcode": "560001",
    "country": "IN"
  },
  "line_items": [
    { "product_id": 123, "quantity": 1 }
  ]
}
```

## Response contract

Success response from proxy:

```json
{
  "id": 12345,
  "order_key": "wc_order_abc..."
}
```

The frontend then redirects to:

`/checkout/order-pay/{id}/?pay_for_order=true&key={order_key}`

## Security notes

- WooCommerce API keys are no longer exposed in browser code.
- Proxy includes basic rate limiting by IP.
- CORS is restricted to explicit allowed origins.
- Extend with CAPTCHA/WAF if checkout abuse is observed.
