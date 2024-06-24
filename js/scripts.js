// Slider Pada banner
document.addEventListener('DOMContentLoaded', function() {
    const productItems = document.querySelectorAll('.product-item, .PL');
    productItems.forEach(function(item) {
        const h3Element = item.querySelector('h3');
        const text = h3Element.textContent;
        const maxLength = 30;
        if (text.length > maxLength) {
            h3Element.textContent = text.slice(0, maxLength) + '...';
        }
    });
});



// Slider Pada Produk Item
let sliderIndex = {};

function initializeSlider(sliderId) {
    sliderIndex[sliderId] = 0;
}

function slideLeft(sliderId) {
    const slider = document.getElementById(sliderId).querySelector('.slider');
    const items = slider.querySelectorAll('.PL');
    const itemsPerPage = 4.8;
    sliderIndex[sliderId] = Math.max(sliderIndex[sliderId] - itemsPerPage, 0);
    const itemWidth = items[0].clientWidth;
    slider.style.transform = `translateX(-${sliderIndex[sliderId] * itemWidth}px)`;
}

function slideRight(sliderId) {
    const slider = document.getElementById(sliderId).querySelector('.slider');
    const items = slider.querySelectorAll('.PL');
    const itemsPerPage = 4.8;
    const maxIndex = items.length - itemsPerPage;
    sliderIndex[sliderId] = Math.min(sliderIndex[sliderId] + itemsPerPage, maxIndex);
    const itemWidth = items[0].clientWidth;
    slider.style.transform = `translateX(-${sliderIndex[sliderId] * itemWidth}px)`;
}

function getCurrentTransform(slider) {
    const style = window.getComputedStyle(slider);
    const matrix = new WebKitCSSMatrix(style.transform);
    return matrix.m41;
}

document.addEventListener('DOMContentLoaded', function() {
    initializeSlider('slider1');
    initializeSlider('slider2');
    initializeSlider('slider3');
});


// Icon Dropdown
document.querySelector('.dropdown').addEventListener('mouseenter', function() {
    this.querySelector('i').classList.remove('fa-caret-right');
    this.querySelector('i').classList.add('fa-caret-down');
  });

  document.querySelector('.dropdown').addEventListener('mouseleave', function() {
    this.querySelector('i').classList.remove('fa-caret-down');
    this.querySelector('i').classList.add('fa-caret-right');
  });