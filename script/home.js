const navBar = document.querySelector(".navbar");

window.addEventListener('scroll', () => {
    const windowPosition = window.scrollY > 0;
    navBar.classList.toggle("scrolling-active", windowPosition);
});

const readMore = (n) => {
    let dots = document.getElementById(`dots${n}`);
    let moreText = document.getElementById(`more${n}`);
    let btnText = document.getElementById(`myBtn${n}`);
    

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read More";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "inline";
    }
}

const init = () => {
    for (let i = 1; i <= 6; i++) {
        const cur = document.getElementById(`more${i}`);
        cur.style.display = "none";
    }
}
