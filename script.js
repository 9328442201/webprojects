// Function to handle the 'Buy Now' button click
document.addEventListener('DOMContentLoaded', () => {
    const buyNowBtn = document.querySelector('.btn-buy');

    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', (event) => {
            event.preventDefault(); // Stop the default link action
            console.log('Buy Now button clicked! Redirecting to checkout...');
            // In a real application, you would add logic here
            // e.g., window.location.href = '/checkout';
            alert('Redirecting to the checkout page!');
        });
    }

    // You can add more JavaScript logic here for things like:
    // 1. Smooth scrolling navigation (if you add a menu)
    // 2. Image carousels (if you add multiple images)
    // 3. Form validation
});