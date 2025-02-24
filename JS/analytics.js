
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ========= ANALYTICS ============================================================================================================= //
document.addEventListener('DOMContentLoaded', function () {
    // Sales Chart
    const salesCtx = document.getElementById('salesChart').getContext('2d');
    const salesChart = new Chart(salesCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Sales',
                data: [12000, 19000, 3000, 5000, 2000, 3000, 45000, 20000, 12000, 34000, 45000, 39000],
                backgroundColor: 'rgba(115, 128, 236, 0.2)',
                borderColor: 'rgba(115, 128, 236, 1)',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Revenue Chart
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    const revenueChart = new Chart(revenueCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Revenue',
                data: [5000, 7000, 10000, 12000, 15000, 18000, 20000, 23000, 25000, 28000, 30000, 35000],
                backgroundColor: 'rgba(115, 128, 236, 0.2)',
                borderColor: 'rgba(115, 128, 236, 1)',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Customer Insights Chart
    const customerCtx = document.getElementById('customerChart').getContext('2d');
    const customerChart = new Chart(customerCtx, {
        type: 'bar',
        data: {
            labels: ['New Customers', 'Returning Customers'],
            datasets: [{
                label: 'Customers',
                data: [150, 1050],
                backgroundColor: [
                    'rgba(54, 235, 93, 0.2)',
                    'rgba(99, 128, 255, 0.2)'
                ],
                borderColor: [
                    'rgb(54, 235, 105)',
                    'rgb(99, 172, 255)'
                ],
                borderWidth: 2
            }]
        }
    });

    // Product Performance Chart
    const productCtx = document.getElementById('productChart').getContext('2d');
    const productChart = new Chart(productCtx, {
        type: 'bar',
        data: {
            labels: ['Laptop Pro X', 'Smartphone Ultra', 'Smart Watch', 'Wireless Earbuds'],
            datasets: [{
                label: 'Units Sold',
                data: [500, 300, 200, 150],
                backgroundColor: 'rgba(115, 128, 236, 0.2)',
                borderColor: 'rgba(115, 128, 236, 1)',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});