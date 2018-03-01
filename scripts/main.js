var DETAIL_IMAGE_SELECTOR = "[data-image-role=\"target\"]";
var DETAIL_TITLE_SELECTOR = "[data-image-role=\"title\"]";
var THUMBNAIL_LINK_SELECTOR = "[data-image-role=\"trigger\"]";
var currIndex;

function setDetails(imageUrl, titleText) {
  "use strict";
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute("src", imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  "use strict";
  return thumbnail.getAttribute("data-image-url");
}

function titleFromThumb(thumbnail) {
  "use strict";
  return thumbnail.getAttribute("data-image-title");
}

function setDetailsFromThumb(thumbnail) {
  "use strict";
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
  currIndex = Number(thumbnail.getAttribute("img-index"));
}

function addThumbClickHandler(thumb) {
  "use strict";
  thumb.addEventListener("click", function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
  });
}

function getThumbnailsArray() {
  "use strict";
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function imgForward() {
  "use strict";
  var thumbnails = getThumbnailsArray();

  if (currIndex + 1 > 4) {
    currIndex = 0;
  } else {
    currIndex++;
  }

  setDetails(imageFromThumb(thumbnails[currIndex]), titleFromThumb(thumbnails[currIndex]));
}

function imgBack() {
  "use strict";
  var thumbnails = getThumbnailsArray();

  if (currIndex - 1 < 0) {
    currIndex = 4;
  } else {
    currIndex--;
  }

  setDetails(imageFromThumb(thumbnails[currIndex]), titleFromThumb(thumbnails[currIndex]));
}

function initializeEvents() {
  "use strict";
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
  currIndex = 0;
}


initializeEvents();
