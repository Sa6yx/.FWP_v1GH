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

//========== SHOW PEOPLE MESSAGES ==================================================================================================//

document.addEventListener("DOMContentLoaded", () => {
    // Get all message items
    const messageItems = document.querySelectorAll(".message-item");

    // Add click event listener to each message item
    messageItems.forEach((item) => {
        item.addEventListener("click", () => {
            // Remove the "active" class from all items
            messageItems.forEach((i) => i.classList.remove("active"));

            // Add the "active" class to the clicked item
            item.classList.add("active");

            // Get the data-id of the clicked item
            const userId = item.getAttribute("data-id");

            // Update the message details section based on the clicked user
            updateMessageDetails(userId);
        });
    });

    // Function to update the message details section
    function updateMessageDetails(userId) {
        const messageDetails = document.querySelector(".message-details");

        // Example data for different users (you can replace this with dynamic data from an API or database)
        const messagesData = {
            1: {
                name: "Dim Shayahmetov",
                email: "dim@sabytor.com",
                image: "images/user3.jpeg",
                messages: [
                    { reply: "Assalam alaykum!" },
                    { reply: "Agay, this is Sabyr (ComFCI-24)" },
                    { reply: "https://github.com/Sa6yx/.FWP_v1GH <br> can you take a look? Right now only Dashboard, Customers and Settings are working"},
                    { reply: "can I go on? Or is it the wrong ?"},
                    { sender: "Wa alaykum assalam wa rahmatuLallahi wa barakatuh"},
                    { sender: "cool"},
                    { sender: "go on"},
                    { sender: "it's definitely 100 for that"},
                    
                ],
            },
            2: {
                name: "Suguru Geto",
                email: "geto@sabytor.com",
                image: "images/geto.jpg",
                messages: [
                    { sender: "We need to discuss the new project timeline. Are you available for a meeting?" },
                    { reply: "Yes, I'm free tomorrow at 10 AM. Does that work for you?" },
                    { sender: "Tomorrow at 10 AM works perfectly. I'll send you the meeting invite" },
                    { reply: "Sounds good. I'll see you then" },
                    { sender: "Looking forward to it!" },
                    { reply: "Same here!" },
                ],
            },
            3: {
                name: "Choso",
                email: "choso@sabytor.com",
                image: "images/choso.jpg",
                messages: [
                    { sender: "Please review the attached document and let me know your thoughts" },
                    { reply: "I've reviewed the document. It looks great, but I have a few suggestions" },
                    { sender: "What are your suggestions? I'd love to hear them" },
                    { reply: "I'll send you a detailed email with my feedback shortly" },
                    { sender: "Thanks, I appreciate your input" },
                    { reply: "You're welcome!" },
                ],
            },
            4: {
                name: "Toji Fushiguro",
                email: "toji@sabytor.com",
                image: "images/toji.jpg",
                messages: [
                    { sender: "Quick question about the project timeline" },
                    { reply: "Sure, what's your question?" },
                    { sender: "Are we still on track for the original deadline?" },
                    { reply: "Yes, we are currently on schedule" },
                ],
            },
            5: {
                name: "Tazhibaev Khamidillo",
                email: "khamid@sabytor.com",
                image: "images/user3.jpeg",
                messages: [
                    { sender: "Did you get a chance to look at the new design mockups?" },
                    { reply: "Yes, I did. They look very promising" },
                    { sender: "Great! Any initial thoughts?" },
                    { reply: "I think the color scheme is excellent" },
                ],
            },
            6: {
                name: "Ruslan Abdykadyrov",
                email: "ruslan@sabytor.com",
                image: "images/user3.jpeg",
                messages: [
                    { sender: "Just a reminder about the meeting tomorrow morning" },
                    { reply: "Thanks for the reminder! I'll be there" },
                    { sender: "Perfect. See you then" },
                    { reply: "Looking forward to it" },
                ],
            },
            // more users 
        };

        // Get the data for the selected user
        const userData = messagesData[userId];

        if (userData) {
            // Update the message header
            const messageHeader = messageDetails.querySelector(".message-header");
            messageHeader.querySelector("img").src = userData.image;
            messageHeader.querySelector("h4").textContent = userData.name;
            messageHeader.querySelector("small").textContent = userData.email;

            // Update the message content
            const messageContent = messageDetails.querySelector(".message-content");
            messageContent.innerHTML = ""; // Clear previous messages

            userData.messages.forEach((msg) => {
                if (msg.sender) {
                    messageContent.innerHTML += `
                        <div class="sender">
                            <p>${msg.sender}</p>
                        </div>
                    `;
                } else if (msg.reply) {
                    messageContent.innerHTML += `
                        <div class="reply">
                            <p>${msg.reply}</p>
                        </div>
                    `;
                }
            });
        }
    }

    // Initialize the first user's messages (optional)
    if (messageItems.length > 0) {
        messageItems[0].click(); // Simulate a click on the first user
    }
});