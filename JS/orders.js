//====== IN DASHBOARD ==================================================================================================================//

const Orders = [
    {
        productName: 'Drone with camera',
        productNumber: '00010',
        paymentStatus: 'Paid',
        shipping: 'Delivered'
    },
    {
        productName: 'RUKO f11 pro',
        productNumber: '00020',
        paymentStatus: 'Due',
        shipping: 'Pending'
    },
    {
        productName: 'IPhone 16 pro max',
        productNumber: '00030',
        paymentStatus: 'Refunded',
        shipping: 'Declined'
    },
    {
        productName: 'Samsung Galaxy S24 Ultra',
        productNumber: '00040',
        paymentStatus: 'Paid',
        shipping: 'Shipped'
    },
    {
        productName: 'MacBook Pro M3',
        productNumber: '00050',
        paymentStatus: 'Due',
        shipping: 'Pending'
    },
    {
        productName: 'Sony PlayStation 6',
        productNumber: '00060',
        paymentStatus: 'Paid',
        shipping: 'Delivered'
    },
    {
        productName: 'Apple Watch Ultra 2',
        productNumber: '00070',
        paymentStatus: 'Refunded',
        shipping: 'Declined'
    },
    {
        productName: 'DJI Mini 4 Pro',
        productNumber: '00080',
        paymentStatus: 'Paid',
        shipping: 'Shipped'
    },
    {
        productName: 'Nikon Z9 Camera',
        productNumber: '00090',
        paymentStatus: 'Due',
        shipping: 'Pending'
    },
    {
        productName: 'ASUS ROG Strix RTX 5090',
        productNumber: '00100',
        paymentStatus: 'Paid',
        shipping: 'Delivered'
    },
    {
        productName: 'Xbox Series X Pro',
        productNumber: '00110',
        paymentStatus: 'Refunded',
        shipping: 'Declined'
    },
    {
        productName: 'Tesla Model 3 Key Fob',
        productNumber: '00120',
        paymentStatus: 'Due',
        shipping: 'Pending'
    },
    {
        productName: 'Bose QuietComfort Ultra',
        productNumber: '00130',
        paymentStatus: 'Paid',
        shipping: 'Shipped'
    }
    
]


//============ IN ORDERS =============================================================================================================//


//====== SORT SYSTEM ================//

function sortTable(column) {
    const table = document.querySelector('.recent-orders table');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const header = table.querySelector(`th[onclick="sortTable('${column}')"]`);
    const isAscending = header.classList.toggle('asc');

    rows.sort((a, b) => {
        const aValue = a.querySelector(`td:nth-child(${getColumnIndex(column)})`).textContent.trim();
        const bValue = b.querySelector(`td:nth-child(${getColumnIndex(column)})`).textContent.trim();

        if (column === 'amount') {
            // Sort by numeric value for the "Amount" column
            return isAscending ? parseFloat(aValue.replace('$', '')) - parseFloat(bValue.replace('$', '')) :
                                parseFloat(bValue.replace('$', '')) - parseFloat(aValue.replace('$', ''));
        } else {
            // Sort by string for other columns
            return isAscending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        }
    });

    // Clear the table and append sorted rows
    tbody.innerHTML = '';
    rows.forEach(row => tbody.appendChild(row));
}

// Helper function to get the column index based on the column name
function getColumnIndex(column) {
    const headers = document.querySelectorAll('.recent-orders table th');
    for (let i = 0; i < headers.length; i++) {
        if (headers[i].getAttribute('onclick')?.includes(column)) {
            return i + 1; // +1 because nth-child is 1-based
        }
    }
    return 1; // Default to the first column if not found
}