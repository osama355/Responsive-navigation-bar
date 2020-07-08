function per() {
    var point = document.getElementById("nav-list");
    point.style.transform = "translateX(0%)";
    document.getElementById("cross").style.display = "block";
    document.getElementById("toogle").style.display = "none";
}
document.getElementById("toogle").addEventListener("click", per);

function ret() {
    var point2 = document.getElementById("nav-list");
    point2.style.transform = "translateX(100%)";
    document.getElementById("cross").style.display = "none";
    document.getElementById("toogle").style.display = "block";
}
document.getElementById("cross").addEventListener("click", ret);