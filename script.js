function previewImage(imageUrl) {
    var previewModal = document.getElementById('preview-modal');
    var previewImage = document.getElementById('preview-image');
    var downloadLink = document.getElementById('download-link');

    previewImage.src = imageUrl;
    downloadLink.href = imageUrl;

    previewModal.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    var previewModal = document.getElementById('preview-modal');

    previewModal.addEventListener('click', function() {
        previewModal.style.display = 'none';
    });
});
