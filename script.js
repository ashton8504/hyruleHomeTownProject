const guideName = document.querySelector('.guideName');
const miniBio = document.querySelector('.miniBio');

guideName.addEventListener('click', function() {
  miniBio.style.display = miniBio.style.display === 'none' ? 'block' : 'none';
});

const guideImage = document.querySelector('.guideImage');

guideImage.addEventListener('mouseover', () => {
    const newImageSrc = guideImage.getAttribute('data-alt-src');
    if (newImageSrc) {
        guideImage.setAttribute('src', newImageSrc);
    }
});   

guideImage.addEventListener('mouseout', () => {
    const originalImageSrc = guideImage.getAttribute('src');
    const altImageSrc = guideImage.getAttribute('data-alt-src');
    if (altImageSrc === originalImageSrc) {
        guideImage.setAttribute('src', originalImageSrc);
    }
});

const activityImageWrappers = document.querySelectorAll('.activityImgWrapper');

activityImageWrappers.forEach((activityImageWrapper, index) => {
    const activityImage = activityImageWrapper.querySelector('.activityImg');
    const originalImageSrc = activityImage.getAttribute('src');
    const newImageSrc = `images/linkRetro${index === 0 ? 'One' : index === 1 ? 'Two' : 'Three'}.gif`;


    activityImageWrapper.addEventListener('mouseover', () => {
        activityImage.setAttribute('src', newImageSrc);
    });

    activityImageWrapper.addEventListener('mouseout', () => {
        activityImage.setAttribute('src', originalImageSrc);
    });
});


const heading = document.querySelector('.heading');

heading.addEventListener('mouseover', () => {
    heading.classList.add('color-transition');
});

heading.addEventListener('mouseout', () => {
    heading.classList.remove('color-transition');
});


// Logic for scroll button

window.addEventListener("scroll", function() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (window.pageYOffset > (document.documentElement.scrollHeight - window.innerHeight) / 2) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
