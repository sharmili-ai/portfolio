const text = "I build AI systems that solve real-world problems.";
let i = 0;

function type() {
    if (i < text.length) {
        document.querySelector(".typing").textContent += text.charAt(i);
        i++;
        setTimeout(type, 50);
    }
}

document.querySelector(".typing").textContent = "";
type();
