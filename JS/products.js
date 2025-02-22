
//=====================================================================================================================================//
// Activate category items and filter products
const categoryItems = document.querySelectorAll(".category-item");
const productCards = document.querySelectorAll(".product-card");

categoryItems.forEach((item) => {
    item.addEventListener("click", () => {
        // Remove active class from all items
        categoryItems.forEach((i) => i.classList.remove("active"));
        // Add active class to the clicked item
        item.classList.add("active");

        // Filter products based on the category
        const targetCategory = item.dataset.target;
        productCards.forEach((card) => {
            if (card.dataset.category === targetCategory || targetCategory === "all") {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// Activate the first category by default
categoryItems[0].click();

// Handle "Add to Cart" button clicks
const addToCartButtons = document.querySelectorAll(".btn-primary");

addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const productCard = button.closest(".product-card");
        const productName = productCard.querySelector("h3").textContent;
        const productPrice = productCard.querySelector(".price").textContent;

        alert(`Added to cart: ${productName} - ${productPrice}`);
        // You can add logic here to update the cart or send data to the server
    });
});