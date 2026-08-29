const form = document.getElementById("messageForm");

const nameInput = document.getElementById("name");
const messageInput = document.getElementById("messageInput");
const messagesContainer = document.getElementById("messagesContainer");


// ======================================================
// FAREWELL MESSAGES
// ======================================================

const messages = [

    {
        message: `On behalf of the Media Department, we honor Robert, our skilled Sound Technician who for years, has served quietly behind the scenes to make sure God's people could worship without distraction.

Robert, your excellence was never about perfection, it was worship. You showed up early, stayed late, trained others with patience, and treated every service as sacred.

As you transition to CITAM Ruiru, we pray that God expands your territories, grants you favor and continues to use you for His glory.

Bye Bye.`,
        name: "Willis Mutisya"
    },


    {
        message: `Hi Robert, even though I've known you for the shortest time possible, I've gotten really close to you and I can't complain, actually I can, because unanichapanga😭😭.

Anyway I'll really miss you, but at least it's not the last time seeing you. You'll probably see me a lot, especially after I'm done with my exams.

I know you won't forget me and I promise not to forget you tooo.

(Almost cried while writing this)

From katoto kako😭`,
        name: "Florence"
    },


    {
        message: `For welcoming me warmly, guiding and being patient with me and of course the fun and food along the way, I'm beyond grateful.

May God's grace and favour be in abundance as you start a new chapter.`,
        name: "Anonymous"
    }

];


// ======================================================
// DISPLAY MESSAGES
// ======================================================

function displayMessages() {

    messagesContainer.innerHTML = "";

    messages.forEach((item, index) => {

        const card = document.createElement("article");

        card.className = "message-card";

        card.style.animationDelay = `${index * 0.15}s`;


        card.innerHTML = `

            <div class="message-icon">
                ✦
            </div>

            <div class="message-content">

                <p class="message-text">
                    "${escapeHTML(item.message)}"
                </p>

                <div class="message-author">
                    — ${escapeHTML(item.name || "Anonymous")}
                </div>

            </div>

        `;


        messagesContainer.appendChild(card);

    });

}


// ======================================================
// FORM
// ======================================================

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();


    if (!message) {

        return;

    }


    const newMessage = {

        message: message,

        name: name || "Anonymous"

    };


    messages.unshift(newMessage);


    form.reset();

    displayMessages();


    messagesContainer.scrollIntoView({
        behavior: "smooth"
    });

});


// ======================================================
// SECURITY
// Prevent HTML from being inserted into messages
// ======================================================

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


displayMessages();