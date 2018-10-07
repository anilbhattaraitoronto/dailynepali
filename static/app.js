const postDates = document.querySelectorAll('.date');
postDates.forEach(function (postDate) {
    postDate.textContent = new Date(document.lastModified);
})






