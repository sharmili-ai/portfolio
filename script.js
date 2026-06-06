// Scroll animations
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});

// Simple chatbot
function reply() {
    const input = document.getElementById("userInput");
    const chatlog = document.getElementById("chatlog");

    const msg = input.value;
    if (!msg) return;

    chatlog.innerHTML += "You: " + msg + "<br>";

    let response = "I'm still learning AI concepts 🤖";

    if (msg.toLowerCase().includes("ai")) {
        response = "AI is my passion! I build intelligent systems.";
    }

    chatlog.innerHTML += "Bot: " + response + "<br>";
    input.value = "";
}
