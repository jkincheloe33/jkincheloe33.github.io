let currentImageIndex = -1,
    maxImageIndex = 0,
    images = [],
    changeInterval = 1500;

let setUp = function () {
    images = document.getElementsByClassName("selfiestop");
    maxImageIndex = images.length;
    currentImageIndex = 0;
};

let changeImage = function () {
    var i;

    // either re-set the index to 0 if the max length was reached or increase the index by 1
    currentImageIndex = (currentImageIndex >= maxImageIndex - 1) ? 0 : currentImageIndex += 1;

    for (i = 0; i < maxImageIndex; i += 1) {
        images[i].hidden = (i !== currentImageIndex);
    }
};

window.onload = function () {
    setUp();

    images[currentImageIndex].hidden = false; // show the first banner image;

    setInterval(changeImage, changeInterval); // following a delay, keep changing the banner image by the specified interval
};