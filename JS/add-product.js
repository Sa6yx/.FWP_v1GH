// Handle form submission
document.getElementById("productForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form data
    const formData = new FormData(this);

    // Validate required fields
    const productName = formData.get("productName");
    const productDescription = formData.get("productDescription");
    const productPrice = formData.get("productPrice");
    const productCategory = formData.get("productCategory");
    const productStock = formData.get("productStock");
    const productImages = formData.getAll("productImages");

    if (!productName || !productDescription || !productPrice || !productCategory || !productStock || productImages.length === 0) {
        alert("Please fill out all required fields.");
        return;
    }

    // Log form data to the console (for testing purposes)
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }

    // Display success message
    alert("Product added successfully!");

    // Reset the form
    this.reset();
});

// Image Preview Functionality
const imageInput = document.getElementById("productImages");
const imagePreviewContainer = document.createElement("div");
imagePreviewContainer.classList.add("image-preview-container");
document.querySelector(".add-product-form").appendChild(imagePreviewContainer);

imageInput.addEventListener("change", function () {
    imagePreviewContainer.innerHTML = ""; // Clear previous previews

    const files = this.files;
    if (files.length > 0) {
        for (let file of files) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = document.createElement("img");
                img.src = e.target.result;
                img.classList.add("image-preview");
                imagePreviewContainer.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    }
});

// Add some basic styling for image previews
const style = document.createElement("style");
style.textContent = `
    .image-preview-container {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 1rem;
    }
    .image-preview {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: var(--border-radius-1);
        border: 1px solid var(--color-light);
    }
`;
document.head.appendChild(style);