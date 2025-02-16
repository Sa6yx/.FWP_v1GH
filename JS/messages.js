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


//============== CLOCK ===============================================================================================================//
// function updateClock() {
//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, '0');
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     const seconds = now.getSeconds().toString().padStart(2, '0');
//     const timeString = `${hours} : ${minutes} : ${seconds}`;
//     document.getElementById('clock').textContent = timeString;
// }

// updateClock(); // Call the function once to initialize the clock
// setInterval(updateClock, 1000); // Update the clock every second

//========== SHOW SIDEBAR IN SMALL SCREENS ===========================================================================================//

const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")

//show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

//close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})
