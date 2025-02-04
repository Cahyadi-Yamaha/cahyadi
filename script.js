function openModal() {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const profilePic = document.querySelector(".profile-pic");

    modal.style.display = "flex";
    modalImage.src = profilePic.src;
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}