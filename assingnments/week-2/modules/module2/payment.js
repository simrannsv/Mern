import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

// Valid payment methods
const VALID_PAYMENT_METHODS = ['card', 'upi', 'cod'];

// Generate a simple unique order ID
function generateOrderId() {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 10000);
  return `ORD-${timestamp}-${random}`;
}

// Simulate payment processing per method
function simulatePayment(paymentMethod, amount) {
  switch (paymentMethod) {
    case 'card':
      return { success: true, message: `Card payment of ₹${amount} processed successfully.` };
    case 'upi':
      return { success: true, message: `UPI payment of ₹${amount} processed successfully.` };
    case 'cod':
      return { success: true, message: `Cash on Delivery order placed for ₹${amount}.` };
    default:
      return { success: false, message: 'Payment failed: Unknown payment method.' };
  }
}

export function processPayment(paymentMethod, couponCode = null) {
  // 1. Get cart items and total
  const cartItems = getCartItems();
  const cartTotal = getCartTotal();

  if (!cartItems || cartItems.length === 0) {
    return {
      orderId: null,
      items: [],
      subtotal: 0,
      discount: 0,
      total: 0,
      paymentMethod,
      status: 'failed',
      message: 'Cart is empty. Please add items before checkout.'
    };
  }

  // 2. Apply discount if coupon provided
  let subtotal = cartTotal;
  let discount = 0;
  let discountMessage = '';

  if (couponCode) {
    const discountResult = applyDiscount(cartTotal, couponCode, cartItems);
    subtotal        = discountResult.originalTotal;
    discount        = discountResult.discount;
    discountMessage = discountResult.message;
  }

  const total = subtotal - discount;

  // 3. Validate payment method
  if (!VALID_PAYMENT_METHODS.includes(paymentMethod)) {
    return {
      orderId: null,
      items: cartItems,
      subtotal,
      discount,
      total,
      paymentMethod,
      status: 'failed',
      message: `Invalid payment method. Choose from: ${VALID_PAYMENT_METHODS.join(', ')}.`
    };
  }

  // 4. Process payment (simulate)
  const paymentResult = simulatePayment(paymentMethod, total);

  if (!paymentResult.success) {
    return {
      orderId: null,
      items: cartItems,
      subtotal,
      discount,
      total,
      paymentMethod,
      status: 'failed',
      message: paymentResult.message
    };
  }

  // 5. Reduce stock for all cart items
  cartItems.forEach(item => {
    reduceStock(item.id, item.quantity);
  });

  // 6. Clear cart
  clearCart();

  // 7. Generate and return order summary
  return {
    orderId: generateOrderId(),
    items: cartItems,
    subtotal,
    discount,
    total,
    paymentMethod,
    status: 'success',
    message: couponCode
      ? `${paymentResult.message} Coupon applied: ${discountMessage}`
      : paymentResult.message
  };
}

// Valid payment methods
export function validatePaymentMethod(method) {
  // Check if method is valid (card/upi/cod)
  if (!method) {
    return { valid: false, message: 'Payment method is required.' };
  }

  const normalizedMethod = method.trim().toLowerCase();

  if (!VALID_PAYMENT_METHODS.includes(normalizedMethod)) {
    return {
      valid: false,
      message: `Invalid payment method "${method}". Accepted methods: ${VALID_PAYMENT_METHODS.join(', ')}.`
    };
  }

  return { valid: true, message: `${normalizedMethod.toUpperCase()} is a valid payment method.` };
}

function generateOrderId() {
  // Generate random order ID
  const timestamp = Date.now();                            // e.g. 1718000000000
  const random    = Math.floor(Math.random() * 10000)     // e.g. 4823
    .toString()
    .padStart(4, '0');                                     // always 4 digits

  return `ORD-${timestamp}-${random}`;                    // e.g. ORD-1718000000000-4823
}