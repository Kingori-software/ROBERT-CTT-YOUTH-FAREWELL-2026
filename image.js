const params = new URLSearchParams(
window.location.search
);

const image = params.get("img");

const fullImage =
document.getElementById("fullImage");

if (image) {

fullImage.src = image;

} else {

fullImage.alt = "Image unavailable";

}