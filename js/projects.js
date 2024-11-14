function filterProjects(category) {
    const projects = document.querySelectorAll(".project");
    projects.forEach(project => {
        if (category === 'all' || project.getAttribute("data-category") === category) {
            project.style.display = "inline-block";
        } else {
            project.style.display = "none";
        }
    });
}

function openModal(element) {
    const modal = document.getElementById("projectModal");
    const modalImg = document.getElementById("modalImg");
    const modalCaption = document.getElementById("modalCaption");

    modal.style.display = "block";
    modalImg.src = element.querySelector("img").src;
    modalCaption.innerHTML = `<h3>${element.getAttribute("data-title")}</h3><p>${element.getAttribute("data-description")}</p>`;
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

let scrollAmount = 0;
const scrollStep = 300;

window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}