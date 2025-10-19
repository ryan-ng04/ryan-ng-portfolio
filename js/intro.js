function typing() {
    const text = ["Hi, I'm Ryan!", "Aspiring Engineer", "Big Eater"];
    const fact = document.querySelector("#intro");
    let i = 0;
    let j = 0;
    let current = text[0];
    let isDeleting = false;


    function type() {
        if (!isDeleting && j < current.length) {
        // typing forward
            fact.textContent += current.charAt(j++);
            setTimeout(type, 80);
        } else if (isDeleting && j > 0) {
            // deleting backward
            fact.textContent = current.substring(0, --j) || "\u00A0";
            setTimeout(type, 40);
        } else {
        // pause at end or start
        if (!isDeleting && j === current.length) {
            isDeleting = true;
            setTimeout(type, 1200);
        } else {
            isDeleting = false;
            i = (i + 1) % text.length;
            current = text[i];
            setTimeout(type, 300);
        }
        }
    }
    type();
}
  


