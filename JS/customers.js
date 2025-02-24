
//============== CLOCK ===============================================================================================================//
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

// ========================= CUSTOMERS ================================================================================================ //

//==================== FILL CUSTOMERS TABLE ============================================================================================//
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

// Initially show only 8 customers
fillCustomersTable(Customers.slice(0, 8));

// ======= SHOW ALL/LESS ==============================================================================================================//
const showAllBtn = document.querySelector('.pagination a');

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

// =========== FILTER CUSTOMERS BY REGION ============================================================================================ //
function filterCustomersByRegion(region) {
    if (region === "All") {
        fillCustomersTable(Customers.slice(0, 8)); // Show only 8 customers initially
    } else {
        const filteredCustomers = Customers.filter(customer => customer.location.includes(region));
        fillCustomersTable(filteredCustomers); // Show customers from the selected region
    }
}

// Add event listener for region filter
const regionSelect = document.getElementById('region-select');
regionSelect.addEventListener('change', (event) => {
const selectedRegion = event.target.value;
filterCustomersByRegion(selectedRegion);
});

// ===== SEARCH CUSTOMERS BY /NAME /PHONE-NUMBER/ REGION/ ============================================================================ //
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
//========= SORT SYSTEM =============================================================================================================== //
function sortTable(column) {
    Customers.sort((a, b) => {
        if (a[column] < b[column]) return -1;
        if (a[column] > b[column]) return 1;
        return 0;
    });
    fillCustomersTable(Customers);
}

//========== PAGINATION =============================================================================================================== //
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

// ============== ADD CUSTOMERS ======================================================================================================= //
document.getElementById('add-customer-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const customerName = document.getElementById('customer-name').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const location = document.getElementById('location').value;
    const status = document.getElementById('status').value;
    const profilePictureInput = document.getElementById('profile-picture');
    const profilePicture = profilePictureInput.files[0] ? URL.createObjectURL(profilePictureInput.files[0]) : 'images/user3.jpeg'; // Default image

    // Create new customer object
    const newCustomer = {
        customerName,
        phoneNumber,
        location,
        status,
        profilePicture,
    };

    // Add the new customer to the Customers array
    Customers.push(newCustomer);

    // Refresh  table
    fillCustomersTable(Customers.slice(0, 8)); // Show only 8 customers initially

    // Reset form
    document.getElementById('add-customer-form').reset();

    // Success message
    alert('Customer added successfully!');
});