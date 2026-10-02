let count = 0;

const counter = document.getElementById("counter");


function updateCounter() {

    counter.textContent = count;

    counter.classList.remove("bump");

    void counter.offsetWidth;

    counter.classList.add("bump");
}


function increaseCount() {

    count++;

    updateCounter();

}


function decreaseCount() {

    if (count > 0) {
        count--;
    }

    updateCounter();

}


function resetCount() {

    count = 0;

    updateCounter();

}


function scrollToInfo() {

    document
        .getElementById("information")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* Mouse Parallax */

document.addEventListener("mousemove", (event) => {

    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;

    const names = document.querySelector(".moving-names");

    names.style.transform =
        `rotate(-15deg) translate(${x * 12}px, ${y * 12}px)`;

});