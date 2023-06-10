function previewImage(imageName) {
    var previewModal = document.getElementById('preview-modal');
    var previewImage = document.getElementById('preview-image');
    var downloadLink = document.getElementById('download-link');

    previewImage.src = imageName;
    downloadLink.href = imageName;

    previewModal.style.display = 'block';
}
