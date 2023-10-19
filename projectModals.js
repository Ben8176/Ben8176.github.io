// Get the modal element and close button
let modal = document.getElementById('projectModal');
let closeBtn = document.querySelector('.modal-close-button');

function openModal(content) {
    modal.querySelector('.modal-body').innerHTML = content;
    modal.style.display = 'flex';
    document.body.classList.add('blur');  // Add the blurred class
}

function closeModal() {
    modal.style.display = 'none';
    document.body.classList.remove('blur');  // Remove the blurred class
}

// Event listener for close button
closeBtn.addEventListener('click', closeModal);

// Event listeners for project tiles
let projectTiles = document.querySelectorAll('.bg-white.p-4.shadow.rounded');
projectTiles.forEach(tile => {
    tile.addEventListener('click', () => {
        let modalContentID = tile.getAttribute('data-modal-content');
        let content = document.getElementById(modalContentID).innerHTML;
        openModal(content);
    });
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {  // Check if the clicked element is the modal background
        closeModal();
    }
});

