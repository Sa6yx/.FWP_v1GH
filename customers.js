const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")

const themeToggler = document.querySelector(".theme-toggler")

//Clock
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours} : ${minutes} : ${seconds}`;
    document.getElementById('clock').textContent = timeString;
  }
  
  updateClock(); // Call the function once to initialize the clock
  setInterval(updateClock, 1000); // Update the clock every second

//show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

//close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

//change theme
document.addEventListener("DOMContentLoaded", () => {
    const themeToggler = document.querySelector(".theme-toggler");
    if (!themeToggler) return; // If there is no switch, abort the execution

    const body = document.body;

    // Function for applying the topic
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

// Clock
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours} : ${minutes} : ${seconds}`;
    document.getElementById('clock').textContent = timeString;
}

updateClock(); // Call the function once to initialize the clock
setInterval(updateClock, 1000); // Update the clock every second

// Show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

// Close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

// ========================= CUSTOMERS ================================================================================================ //

const Customers = [
    {
        customerName: 'Toji Fushiguro', phoneNumber: '+996 500 123 456', location: 'Bishkek, Kyrgyzstan', status: 'Active', profilePicture: 'images/toji.jpg'
    },
    {
        customerName: 'Tadzhibaev Khamidillo', phoneNumber: '+996 550 587 818', location: 'Osh, Kyrgyzstan', status: 'Non-active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Aika Asanova', phoneNumber: '+996 707 987 654', location: 'Karakol, Kyrgyzstan', status: 'Active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Ruslan Abdykadyrov', phoneNumber: '+996 555 121 343', location: 'Bishkek, Kyrgyzstan', status: 'Non-active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Gulnara Sadykova', phoneNumber: '+996 777 567 890', location: 'Jalal-Abad, Kyrgyzstan', status: 'Active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Azamat Tuleberdiev', phoneNumber: '+996 550 901 234', location: 'Naryn, Kyrgyzstan', status: 'Active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Meerim Zhumasheva', phoneNumber: '+996 705 456 789', location: 'Talas, Kyrgyzstan', status: 'Non-active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Erlan Baktybekov', phoneNumber: '+996 559 876 543', location: 'Batken, Kyrgyzstan', status: 'Active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Dinara Esenalieva', phoneNumber: '+996 772 345 678', location: 'Bishkek, Kyrgyzstan', status: 'Active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Bakyt Abdraimov', phoneNumber: '+996 551 789 012', location: 'Osh, Kyrgyzstan', status: 'Non-active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Cholponai Kydykeeva', phoneNumber: '+996 703 654 321', location: 'Karakol, Kyrgyzstan', status: 'Active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Ulan Abdyldaev', phoneNumber: '+996 558 210 987', location: 'Bishkek, Kyrgyzstan', status: 'Active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Janyl Abdullaeva', phoneNumber: '+996 775 890 123', location: 'Jalal-Abad, Kyrgyzstan', status: 'Non-active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Samat Atabaev', phoneNumber: '+996 553 456 789', location: 'Naryn, Kyrgyzstan', status: 'Active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Aidana Askarova', phoneNumber: '+996 709 012 345', location: 'Talas, Kyrgyzstan', status: 'Active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Kubanychbek Tursunbaev', phoneNumber: '+996 557 678 901', location: 'Batken, Kyrgyzstan', status: 'Non-active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Aida Alymbekova', phoneNumber: '+996 771 234 567', location: 'Bishkek, Kyrgyzstan', status: 'Active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Maksat Dzhumagulov', phoneNumber: '+996 556 890 123', location: 'Osh, Kyrgyzstan', status: 'Active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Zarina Kadyrova', phoneNumber: '+996 702 543 210', location: 'Karakol, Kyrgyzstan', status: 'Non-active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Temirlan Asanov', phoneNumber: '+996 554 109 876', location: 'Bishkek, Kyrgyzstan', status: 'Active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Nazgul Abdykerimova', phoneNumber: '+996 779 765 432', location: 'Jalal-Abad, Kyrgyzstan', status: 'Active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Esen Turdubaev', phoneNumber: '+996 552 321 098', location: 'Naryn, Kyrgyzstan', status: 'Non-active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Kanykei Bekturova', phoneNumber: '+996 700 876 543', location: 'Bishkek, Kyrgyzstan', status: 'Active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Nurbek Ibraimov', phoneNumber: '+996 551 234 567', location: 'Osh, Kyrgyzstan', status: 'Active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Asel Akmatova', phoneNumber: '+996 772 987 654', location: 'Jalal-Abad, Kyrgyzstan', status: 'Non-active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Ermek Duisheev', phoneNumber: '+996 502 567 890', location: 'Naryn, Kyrgyzstan', status: 'Active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Meerim Sharshenova', phoneNumber: '+996 709 123 456', location: 'Talas, Kyrgyzstan', status: 'Active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Aibek Omurbekov', phoneNumber: '+996 555 789 012', location: 'Batken, Kyrgyzstan', status: 'Non-active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Jamilya Toktosunova', phoneNumber: '+996 777 456 789', location: 'Karakol, Kyrgyzstan', status: 'Active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Talant Mamytov', phoneNumber: '+996 509 012 345', location: 'Bishkek, Kyrgyzstan', status: 'Active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Bermet Asanalieva', phoneNumber: '+996 701 678 901', location: 'Osh, Kyrgyzstan', status: 'Non-active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Ulukbek Abdykadyrov', phoneNumber: '+996 552 234 567', location: 'Jalal-Abad, Kyrgyzstan', status: 'Active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Aizhan Sadykova', phoneNumber: '+996 779 876 543', location: 'Naryn, Kyrgyzstan', status: 'Active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Kanat Tuleberdiev', phoneNumber: '+996 505 456 789', location: 'Talas, Kyrgyzstan', status: 'Non-active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Nargiza Zhumasheva', phoneNumber: '+996 703 012 345', location: 'Batken, Kyrgyzstan', status: 'Active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Ilim Baktybekov', phoneNumber: '+996 558 678 901', location: 'Karakol, Kyrgyzstan', status: 'Active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Meerim Esenalieva', phoneNumber: '+996 775 234 567', location: 'Bishkek, Kyrgyzstan', status: 'Non-active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Ruslan Abdraimov', phoneNumber: '+996 501 876 543', location: 'Osh, Kyrgyzstan', status: 'Active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Aika Kydykeeva', phoneNumber: '+996 708 456 789', location: 'Jalal-Abad, Kyrgyzstan', status: 'Active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Azamat Abdyldaev', phoneNumber: '+996 553 012 345', location: 'Naryn, Kyrgyzstan', status: 'Non-active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Gulnara Abdullaeva', phoneNumber: '+996 771 678 901', location: 'Talas, Kyrgyzstan', status: 'Active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Erlan Atabaev', phoneNumber: '+996 508 234 567', location: 'Batken, Kyrgyzstan', status: 'Active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Dinara Askarova', phoneNumber: '+996 706 876 543', location: 'Karakol, Kyrgyzstan', status: 'Non-active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Bakyt Tursunbaev', phoneNumber: '+996 551 456 789', location: 'Bishkek, Kyrgyzstan', status: 'Active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Cholponai Alymbekova', phoneNumber: '+996 778 012 345', location: 'Osh, Kyrgyzstan', status: 'Active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Ulan Dzhumagulov', phoneNumber: '+996 503 678 901', location: 'Jalal-Abad, Kyrgyzstan', status: 'Non-active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Janyl Kadyrova', phoneNumber: '+996 701 234 567', location: 'Naryn, Kyrgyzstan', status: 'Active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Samat Asanov', phoneNumber: '+996 559 876 543', location: 'Talas, Kyrgyzstan', status: 'Active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Aidana Abdykerimova', phoneNumber: '+996 776 456 789', location: 'Batken, Kyrgyzstan', status: 'Non-active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Kubanychbek Turdubaev', phoneNumber: '+996 506 012 345', location: 'Karakol, Kyrgyzstan', status: 'Active', profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Aida Bekturova', phoneNumber: '+996 704 678 901', location: 'Bishkek, Kyrgyzstan', status: 'Active', profilePicture: 'images/user3.jpeg'
    }
];

// Function to fill the customers table
function fillCustomersTable(customersToShow) {
    const tableBody = document.querySelector('.recent-customers table tbody');
    tableBody.innerHTML = ''; // Clear the table before filling

    customersToShow.forEach(customer => {
        const tr = document.createElement('tr');
        const trContent = `
            <td>
                <div class="profile-photo">
                    <img src="${customer.profilePicture}" alt="${customer.customerName}">
                </div>
            </td>
            <td>${customer.customerName}</td>
            <td>${customer.phoneNumber}</td>
            <td>${customer.location}</td>
            <td class="${customer.status === 'Active'? 'success': customer.status === 'Non-active'? 'danger': 'primary'}">${customer.status}</td>
            <td class="primary">Details</td>
        `;
        tr.innerHTML = trContent;
        tableBody.appendChild(tr);
    });
}

// Function to filter customers by region
function filterCustomersByRegion(region) {
    if (region === "All") {
        fillCustomersTable(Customers.slice(0, 8)); // Show only 8 customers initially
    } else {
        const filteredCustomers = Customers.filter(customer => customer.location.includes(region));
        fillCustomersTable(filteredCustomers); // Show customers from the selected region
    }
}
//search
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredCustomers = Customers.filter(customer => 
        customer.customerName.toLowerCase().includes(searchTerm) || 
        customer.phoneNumber.toLowerCase().includes(searchTerm) || 
        customer.location.toLowerCase().includes(searchTerm)
    );
    fillCustomersTable(filteredCustomers);
});
//sort
function sortTable(column) {
    Customers.sort((a, b) => {
        if (a[column] < b[column]) return -1;
        if (a[column] > b[column]) return 1;
        return 0;
    });
    fillCustomersTable(Customers);
}

//pagination
let currentPage = 1;
const customersPerPage = 8;

function updatePagination() {
    const start = (currentPage - 1) * customersPerPage;
    const end = start + customersPerPage;
    fillCustomersTable(Customers.slice(start, end));
    document.getElementById('page-info').textContent = `Page ${currentPage} of ${Math.ceil(Customers.length / customersPerPage)}`;
}

document.getElementById('next-page').addEventListener('click', () => {
    if (currentPage < Math.ceil(Customers.length / customersPerPage)) {
        currentPage++;
        updatePagination();
    }
});

document.getElementById('prev-page').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updatePagination();
    }
});

// Add event listener for region filter
    const regionSelect = document.getElementById('region-select');
    regionSelect.addEventListener('change', (event) => {
    const selectedRegion = event.target.value;
    filterCustomersByRegion(selectedRegion);
});

// Initially show only 8 customers
fillCustomersTable(Customers.slice(0, 8));

// Show All / Show Less functionality
const showAllBtn = document.querySelector('.recent-customers a');

showAllBtn.addEventListener('click', () => {
    const selectedRegion = document.getElementById('region-select').value;
    if (showAllBtn.textContent === 'Show All') {
        if (selectedRegion === "All") {
            fillCustomersTable(Customers); // Show all customers
        } else {
            const filteredCustomers = Customers.filter(customer => customer.location.includes(selectedRegion));
            fillCustomersTable(filteredCustomers); // Show all customers from the selected region
        }
        showAllBtn.textContent = 'Show Less';
    } else {
        if (selectedRegion === "All") {
            fillCustomersTable(Customers.slice(0, 8)); // Show only 8 customers
        } else {
            const filteredCustomers = Customers.filter(customer => customer.location.includes(selectedRegion));
            fillCustomersTable(filteredCustomers.slice(0, 8)); // Show only 8 customers from the selected region
        }
        showAllBtn.textContent = 'Show All';
    }
});