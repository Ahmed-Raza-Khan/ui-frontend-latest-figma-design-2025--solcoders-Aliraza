document.addEventListener("DOMContentLoaded", () => {
    const slides = [
        {
            heading: `<span>RENT A CAR</span><br>GO ANYWHERE,<br>ANYTIME!`,
            desc: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`
        },
        {
            heading: `<span>BOOK YOUR RIDE</span><br>FAST & EASY`,
            desc: `Choose from our wide range of cars and enjoy smooth travel.`
        },
        {
            heading: `<span>DRIVE SAFE</span><br>TRAVEL SMART`,
            desc: `Well-maintained cars with trusted service anytime, anywhere.`
        }
    ];

    const headingEl = document.getElementById("heroHeading");
    const descEl = document.getElementById("heroDesc");

    let index = 0;

    setInterval(() => {
        index = (index + 1) % slides.length;

        
        headingEl.classList.remove("fade-in");
        descEl.classList.remove("fade-in");

        setTimeout(() => {
            headingEl.innerHTML = slides[index].heading;
            descEl.innerText = slides[index].desc;

            
            headingEl.classList.add("fade-in");
            descEl.classList.add("fade-in");
        }, 300);

    }, 5000);
});