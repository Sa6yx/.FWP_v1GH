// ==================== SETTINGS  =================================================================================================== //

// 1. Theme Toggler
const themeToggler = document.querySelector(".theme-toggler");
if (themeToggler) {
    themeToggler.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme-variables");

        // Toggle active class for theme icons
        themeToggler.querySelector("i:nth-child(1)").classList.toggle("active");
        themeToggler.querySelector("i:nth-child(2)").classList.toggle("active");

        // Save theme preference to localStorage
        const isDarkMode = document.body.classList.contains("dark-theme-variables");
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    });

    // Load saved theme on page load
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme-variables");
        themeToggler.querySelector("i:nth-child(1)").classList.remove("active");
        themeToggler.querySelector("i:nth-child(2)").classList.add("active");
    }
}

// 2. Language Selector
const languageSelector = document.querySelector("#language-selector");
if (languageSelector) {
    languageSelector.addEventListener("change", (event) => {
        const selectedLanguage = event.target.value;
        alert(`Language changed to: ${selectedLanguage}`);
        // Save language preference to localStorage
        localStorage.setItem("language", selectedLanguage);
    });

    // Load saved language on page load
    const savedLanguage = localStorage.getItem("language") || "en";
    languageSelector.value = savedLanguage;
}

// 3. Notification Toggle
const notificationToggle = document.querySelector("#notification-toggle");
if (notificationToggle) {
    notificationToggle.addEventListener("change", (event) => {
        const isNotificationsEnabled = event.target.checked;
        alert(`Notifications are now ${isNotificationsEnabled ? "enabled" : "disabled"}`);
        // Save notification preference to localStorage
        localStorage.setItem("notificationsEnabled", isNotificationsEnabled);
    });

    // Load saved notification preference on page load
    const savedNotificationsEnabled = localStorage.getItem("notificationsEnabled") === "true";
    notificationToggle.checked = savedNotificationsEnabled;
}

// 4. Dynamic Content Switching for Settings Sections
const settingItems = document.querySelectorAll(".setting-item");
const settingSections = document.querySelectorAll(".setting-section");

if (settingItems.length > 0 && settingSections.length > 0) {
    settingItems.forEach((item) => {
        item.addEventListener("click", () => {
            // Remove active class from all items and sections
            settingItems.forEach((i) => i.classList.remove("active"));
            settingSections.forEach((s) => s.classList.remove("active"));

            // Add active class to the clicked item and corresponding section
            item.classList.add("active");
            const targetSection = document.querySelector(`#${item.dataset.target}`);
            if (targetSection) {
                targetSection.classList.add("active");
            }
        });
    });

    // Activate the first setting item by default
    settingItems[0].click();
}

// 5. Save Username
const usernameInput = document.querySelector("#username");
const saveUsernameButton = document.querySelector("#save-username");
if (saveUsernameButton) {
    saveUsernameButton.addEventListener("click", () => {
        const newUsername = usernameInput.value;
        if (newUsername) {
            alert(`Username changed to: ${newUsername}`);
            // Save username to localStorage
            localStorage.setItem("username", newUsername);
        } else {
            alert("Please enter a new username");
        }
    });

    // Load saved username on page load
    const savedUsername = localStorage.getItem("username") || "";
    usernameInput.value = savedUsername;
}

// 6. Update Profile Picture
const profilePictureInput = document.querySelector("#profile-picture-input");
const profilePicture = document.querySelector("#profile-picture");
if (profilePictureInput) {
    profilePictureInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                profilePicture.src = e.target.result;
                // Save profile picture to localStorage (as a data URL)
                localStorage.setItem("profilePicture", e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });

    // Load saved profile picture on page load
    const savedProfilePicture = localStorage.getItem("profilePicture");
    if (savedProfilePicture) {
        profilePicture.src = savedProfilePicture;
    }
}

// ==================== SCROLL REVEAL ================================================================================================== //

// Function to check if the user has scrolled to the bottom of the settings list
function checkScroll() {
    const settingsList = document.querySelector(".settings-list");
    const accountSection = document.querySelector(".setting-item[data-target='account-settings']");
    const securitySection = document.querySelector(".setting-item[data-target='security-settings']");

    if (settingsList && accountSection && securitySection) {
        // Calculate the scroll position
        const scrollTop = settingsList.scrollTop;
        const scrollHeight = settingsList.scrollHeight;
        const clientHeight = settingsList.clientHeight;

        // If the user has scrolled near the bottom, reveal the hidden sections
        if (scrollTop + clientHeight >= scrollHeight - 50) {
            accountSection.classList.remove("hidden"); // Reveal Account section
            securitySection.classList.remove("hidden"); // Reveal Security section
        }
    }
}

// Add scroll event listener to the settings list
const settingsList = document.querySelector(".settings-list");
if (settingsList) {
    settingsList.addEventListener("scroll", checkScroll);
}

// Initially hide the Account and Security sections
const accountSection = document.querySelector(".setting-item[data-target='account-settings']");
const securitySection = document.querySelector(".setting-item[data-target='security-settings']");
