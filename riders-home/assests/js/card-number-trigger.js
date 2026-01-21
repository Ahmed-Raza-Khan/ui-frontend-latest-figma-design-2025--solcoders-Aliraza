document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    const startCounter = (entries) => {
        entries.forEach(entry => {
            const counter = entry.target;
            const target = +counter.getAttribute('data-target');

            if (entry.isIntersecting) {
                counter.innerText = 0; // jab view mein aaye, fresh start

                const updateCount = () => {
                    const count = +counter.innerText;
                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 15);
                    } else {
                        counter.innerText = target;
                    }
                };

                updateCount();
            } else {
                // 👈 jab view se bahar jaye
                counter.innerText = 0;
            }
        });
    };

    const observer = new IntersectionObserver(startCounter, {
        threshold: 0.5
    });

    counters.forEach(counter => observer.observe(counter));
});