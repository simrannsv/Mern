// ============================================================
// APP.JS — Main Application Entry Point
// ============================================================

import { getAllProducts, searchProducts, getProductsByCategory } from './product.js';
import { addToCart, getCartItems, getCartTotal, updateQuantity, removeFromCart } from './cart.js';
import { processPayment } from './payment.js';

console.log('=== E-Commerce Store ===\n');


// --- 1. Browse & Search ---
console.log('All Products:');
console.log(getAllProducts());

console.log('\nSearching for "phone":');
console.log(searchProducts('phone'));


// --- 2. Cart Operations ---
console.log('\n=== Adding to Cart ===');
console.log(addToCart(1, 2));   // 2x Laptop
console.log(addToCart(3, 3));   // 3x Headphones
console.log(addToCart(1, 1));   // +1 Laptop → updates quantity to 3

console.log('\n=== Current Cart ===');
console.log(getCartItems());
console.log('Cart Total:', getCartTotal());

console.log('\n=== Updating Quantities ===');
console.log(updateQuantity(1, 2));  // Set Laptop quantity to 2

console.log('\n=== Removing Item ===');
console.log(removeFromCart(3));     // Remove Headphones

console.log('\n=== Updated Cart ===');
console.log(getCartItems());
console.log('Cart Total:', getCartTotal());


// --- 3. Checkout ---
// processPayment(method, couponCode) → validates, applies discount, clears cart
console.log('\n=== Checkout ===');
const order = processPayment('upi', 'WELCOME10');
console.log(order);
