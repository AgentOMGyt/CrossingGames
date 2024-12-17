window.addEventListener("scroll", () => {
    const logo = document.getElementById("logo");
    const banner = document.getElementById("deco");
    const hotbar = document.getElementById("hotbar");
    const leftButton = document.getElementById("leftButton");
    const rightButton = document.getElementById("rightButton");
    const back = document.getElementById("pageBody");
    const scrollY = window.scrollY;
            
    // Déplacer le logo vers le haut de l'écran
    if (scrollY > 50) {
        logo.style.position = "fixed";
        logo.style.top = "80px";
        logo.style.left = "50%";
        logo.style.width = "20%"; // Optionnel, pour réduire la taille
        logo.style.height = "auto"; // Maintenir le ratio

        // Afficher la hotbar
        hotbar.style.height = "100px";
                        
        // Faire apparaître les boutons
        leftButton.style.transform = "translateY(0)";
        leftButton.style.opacity = "1";
        rightButton.style.transform = "translateY(0)";
        rightButton.style.opacity = "1";

        back.style.background = "#FFC787";
    } else {
        logo.style.position = "absolute";
        logo.style.top = "50%";
        logo.style.left = "50%";
        logo.style.transform = "translate(-50%, -50%)";
        logo.style.width = "400px"; // Taille d'origine
        logo.style.height = "150px"; // Taille d'origine

        // Masquer la hotbar
        hotbar.style.height = "0";

        // Réinitialiser les boutons
        leftButton.style.transform = "translateY(-100px)";
        leftButton.style.opacity = "0";
        rightButton.style.transform = "translateY(-100px)";
        rightButton.style.opacity = "0";

        back.style.background = "#FCAB42";
    }
            
    // Réduire l'opacité de l'image de fond
    const opacity = Math.max(1 - scrollY / 300, 0);
    banner.style.opacity = opacity.toString();
});

window.addEventListener("resize", () => {
    const déco_1 = document.getElementById("déco_1");
    const déco_2 = document.getElementById("déco_2");
    const trailer = document.getElementById("trailer");
    const transitionframe = document.getElementById("transition-frame");
    if (window.innerWidth <= 1000) {
        déco_1.style.display = "none";
        déco_2.style.display = "none";
    } else {
        déco_1.style.display = "block";
        déco_2.style.display = "block";
    }
});

window.addEventListener("DOMContentLoaded", function() {
    const déco_1 = document.getElementById("déco_1");
    const déco_2 = document.getElementById("déco_2");
    const trailer = document.getElementById("trailer");
    const transitionframe = document.getElementById("transition-frame");
    if (window.innerWidth <= 1000) {
        déco_1.style.display = "none";
        déco_2.style.display = "none";
    } else {
        déco_1.style.display = "block";
        déco_2.style.display = "block";
    }
});

function IpCopy() {
    navigator.clipboard.writeText("PLAY.CROSSI.FR");
    alert("Copied");
}