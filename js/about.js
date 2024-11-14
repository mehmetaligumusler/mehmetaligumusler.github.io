document.getElementById("toggleButton").addEventListener("click", function () {
    const extraContent = document.getElementById("extraContent");
    if (extraContent.classList.contains("show")) {
        extraContent.classList.remove("show");
        this.textContent = "Daha Fazla Gör";
    } else {
        extraContent.classList.add("show");
        this.textContent = "Daha Az Gör";
    }
});