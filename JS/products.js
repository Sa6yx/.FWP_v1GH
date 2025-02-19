//==================== THEME CHANGER =================================================================================================//

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    const themeToggler = document.querySelector(".theme-toggler");
    if (!themeToggler) {
        console.error("Theme toggler not found!");
        return;
    }

    const body = document.body;

    // Function for applying the theme
    function applyTheme(theme) {
        if (theme === "dark") {
            body.classList.add("dark-theme-variables");
            themeToggler.querySelector('i:nth-child(1)').classList.remove('active');
            themeToggler.querySelector('i:nth-child(2)').classList.add('active');
        } else {
            body.classList.remove("dark-theme-variables");
            themeToggler.querySelector('i:nth-child(1)').classList.add('active');
            themeToggler.querySelector('i:nth-child(2)').classList.remove('active');
        }
    }

    // Load the theme on page load
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);

    // Theme switch handler
    themeToggler.addEventListener("click", () => {
        const newTheme = body.classList.contains("dark-theme-variables") ? "light" : "dark";
        localStorage.setItem("theme", newTheme);
        applyTheme(newTheme);
    });
});

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