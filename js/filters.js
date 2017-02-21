// Filter toggle
var filterActive = false;
var filterOpen = document.querySelector('.c-form__filters-link');
var hiddenFilters = document.querySelector('.c-form__hidden-filters');
var filtersArrow = document.querySelector('.c-form__filters-link .fa');
var listingSearch = document.querySelectorAll('.c-form--listing-search');
var header = document.querySelector('.header');
var body = document.querySelector('body');

if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv 11/)) || (typeof jQuery.browser !== "undefined" && jQuery.browser.msie == 1)) {
  filterActive = true;
  hiddenFilters.classList.add("c-form__hidden-filters--ie");
  filtersArrow.classList.remove("fa-arrow-down");
  filtersArrow.classList.add("fa-arrow-up");

  [].forEach.call(listingSearch, function (listingSearchEl) {
    listingSearchEl.classList.add("is-hidden");
  });
}

if (filterOpen) {

  filterOpen.addEventListener("click", function (event) {
    event.preventDefault();

    if (filterActive === false) {
      filterActive = true;
      body.style.maxHeight = '100%';
      body.style.overflow = 'hidden';
      header.classList.add("is-hidden");
      hiddenFilters.classList.add("c-form__hidden-filters--active");
      filtersArrow.classList.remove("fa-arrow-down");
      filtersArrow.classList.add("fa-arrow-up");
    }
    else {
      filterActive = false;
      header.classList.remove("is-hidden");
      body.style.maxHeight = 'auto';
      body.style.overflow = 'visible';
      hiddenFilters.classList.remove("c-form__hidden-filters--active");
      filtersArrow.classList.add("fa-arrow-down");
      filtersArrow.classList.remove("fa-arrow-up");
    }
  });
}