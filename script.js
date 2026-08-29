const form = document.getElementById("messageForm");

const nameInput = document.getElementById("name");

const messageInput =
    document.getElementById("messageInput");

const messagesContainer =
    document.getElementById("messagesContainer");


let messages =
    JSON.parse(localStorage.getItem("robertMessages")) || [];


function displayMessages() {

    messagesContainer.innerHTML = "";

    if (messages.length === 0) {

        messagesContainer.innerHTML = `
            <div class="empty-message">
                <span>💌</span>
                <p>Your message could be the first.</p>
            </div>
        `;

        return;
    }


    messages.forEach((item) => {

        const card = document.createElement("article");

        card.className = "message-card";


        card.innerHTML = `

            <div class="message-icon">
                ✦
            </div>

            <div class="message-content">

                <p class="message-text">
                    "${escapeHTML(item.message)}"
                </p>

                <div class="message-author">
                    — ${escapeHTML(item.name)}
                </div>

            </div>

        `;


        messagesContainer.appendChild(card);

    });

}


form.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        nameInput.value.trim();

    const message =
        messageInput.value.trim();


    if (!name || !message) {

        return;

    }


    const newMessage = {

        name: name,

        message: message,

        date: new Date().toISOString()

    };


    messages.unshift(newMessage);


    localStorage.setItem(
        "robertMessages",
        JSON.stringify(messages)
    );


    form.reset();


    displayMessages();


    document
        .getElementById("messagesContainer")
        .scrollIntoView({
            behavior: "smooth"
        });

});


function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


displayMessages();