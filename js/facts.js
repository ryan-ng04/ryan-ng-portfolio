function initfacts () {
    const facts = [
        "I was born in the UK and lived there till I was 11",
        "Competed in the world championships for Robotics in high school",
        "I like to cook"
    ];

    const fact = document.getElementById("fact");
    const btn = document.getElementById("fact-btn");

    let lastIndex = -1;
    let isVisible = false;

    btn.addEventListener("click", () => {
        if (isVisible) {
            fact.style.opacity = 0;
            setTimeout(() => {
                fact.textContent = "";
                isVisible = false;
            }, 300);
            return
        }



        let randomIndex = Math.floor(Math.random() * facts.length);

        if (randomIndex === lastIndex) {
        randomIndex = (randomIndex + 1) % facts.length;
        }

        lastIndex = randomIndex;
        const randomFact = facts[randomIndex];
        fact.textContent = randomFact;

        fact.style.opacity = 0;
        fact.style.transition = "opacity 0.3s";
        fact.style.maxHeight = "100px"; 

        requestAnimationFrame(() => (fact.style.opacity = 1));
        isVisible = true;
  });
}



