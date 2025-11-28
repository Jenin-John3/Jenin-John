function calculateDiscount() {
    const price = document.getElementById('price').value;
    const discount = document.getElementById('discount').value;

    // Validate inputs
    if (isNaN(price) || isNaN(discount) || price === "" || discount === "") {
        alert("Please enter valid numbers!");
        return;
    }

    const priceNum = parseFloat(price);
    const discountNum = parseFloat(discount);

    // Prevent negative or over 100% discount
    if (priceNum < 0 || discountNum < 0 || discountNum > 100) {
        alert("Enter valid positive values. Discount cannot exceed 100%.");
        return;
    }

    const finalPrice = priceNum - (priceNum * (discountNum / 100));

    // Animate progress bar
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${discountNum}%`;

    // Display final price
    document.getElementById('result').innerText = `Final Price: ₹${finalPrice.toFixed(2)}`;
}
