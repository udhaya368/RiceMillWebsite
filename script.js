const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });
});

sections.forEach((section)=>{
    observer.observe(section);
});
// Typing Animation

const title = document.getElementById("typing-title");

if (title) {

    const text = "🌾 Rice Mill Management System";

    let i = 0;

    function typeTitle() {

        if (i < text.length) {

            title.innerHTML += text.charAt(i);

            i++;

            setTimeout(typeTitle, 80);

        }

    }

    setTimeout(typeTitle, 2200);

}
const title = document.getElementById("typing-title");

if (title) {
    const text = title.innerText;
    title.innerText = "";

    let i = 0;

    function typing() {
        if (i < text.length) {
            title.innerText += text.charAt(i);
            i++;
            setTimeout(typing, 80);
        }
    }

    typing();
}