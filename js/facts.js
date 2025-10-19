function initfacts () {
    const facts = [
        "I was born in the UK and lived there till I was 11",
        "Competed in the world championships for Robotics in high school",
        "I like to cook"
    ];

    const fact = document.getElementById("fact");
    const btn = document.getElementById("fact-btn");

    btn.addEventListener("click", () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    fact.textContent = randomFact;

        fact.style.opacity = 0;
        fact.style.transition = "opacity 0.3s";
        requestAnimationFrame(() => (fact.style.opacity = 1));
    });
}



