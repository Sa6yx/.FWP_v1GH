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

// Example JavaScript for orders.js
document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners or other JS functionality here
    const viewButtons = document.querySelectorAll('.primary');
    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('View order details');
        });
    });
});





/////////////////////////////////////////////////////////////////////////////////////////////





//==================== THEME CHANGER =================================================================================================//



// document.addEventListener("DOMContentLoaded", () => {
//     const themeToggler = document.querySelector(".theme-toggler");
//     if (!themeToggler) {
//         console.error("Theme toggler not found!");
//         return;
//     }

//     const body = document.body;

//     // Function for applying the theme
//     function applyTheme(theme) {
//         if (theme === "dark") {
//             body.classList.add("dark-theme-variables");
//             themeToggler.querySelector('i:nth-child(1)').classList.remove('active');
//             themeToggler.querySelector('i:nth-child(2)').classList.add('active');
//         } else {
//             body.classList.remove("dark-theme-variables");
//             themeToggler.querySelector('i:nth-child(1)').classList.add('active');
//             themeToggler.querySelector('i:nth-child(2)').classList.remove('active');
//         }
//     }

//     // Load the theme on page load
//     const savedTheme = localStorage.getItem("theme") || "light";
//     applyTheme(savedTheme);

//     // Theme switch handler
//     themeToggler.addEventListener("click", () => {
//         const newTheme = body.classList.contains("dark-theme-variables") ? "light" : "dark";
//         localStorage.setItem("theme", newTheme);
//         applyTheme(newTheme);
//     });
// });
