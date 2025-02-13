let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    showNotification(`${productName} added to cart!`);  
}

function showNotification(message) {
    const notification = document.getElementById('cart-notification');
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log(`Cart initialized with ${cart.length} items`);  
});
