const postDates = document.querySelectorAll('.date');
postDates.forEach(function (postDate) {
    postDate.textContent = document.lastModified;
});