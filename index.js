const app = document.querySelector(".app");
const searchIcon = document.querySelector('.search-icon');
const searchIcon2 = document.querySelector('.search-icon-2');
const searchCloseIcon = document.querySelector('.search-close-icon');
const searchForm = document.querySelector('.search_form');
const searchWrapper = document.querySelector('.search-wrapper');
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search_button');
const headerMode = document.querySelector('.header__mode');
const lightModeIcon = document.querySelector('.light-mode-icon');
const darktModeIcon = document.querySelector('.dark-mode-icon');
const prevNav = document.querySelectorAll('.btn-nav-prev');
const navPrevLink = document.querySelectorAll('.nav-prev-link');
const navNextLink = document.querySelectorAll('.nav-next-link');
const nextNav = document.querySelectorAll('.btn-nav-next');
const contents = document.querySelector('.contents');
const menu = document.querySelector('.menu');
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal__overlay');
const mobileWrapper = document.querySelector('.mobile-wrapper');
const listMenuItemModal = document.querySelectorAll('.menu-item-modal');
const closeIcon = document.querySelector('.close-icon');



searchIcon.onclick = function () {
        searchIcon.classList.add('hidden')
        searchCloseIcon.classList.remove('hidden')
        searchForm.classList.remove('hidden')
}

searchCloseIcon.onclick = function () {
        searchCloseIcon.classList.add('hidden')
        searchIcon.classList.remove('hidden')
        searchForm.classList.add('hidden')
}

const setBackgroundColorBtnNavDarkMode = function() {
    prevNav.forEach(function (prev) {
        prev.style.background = 'var(--white-color)'
    })
    nextNav.forEach(function (next) {
        next.style.background = 'var(--white-color)'
    })
}

const setBackgroundColorBtnNavLightMode = function() {
    prevNav.forEach(function (prev) {
        prev.style.background = 'rgba(0,0,0,.4)'
    })
    nextNav.forEach(function (next) {
        next.style.background = 'rgba(0,0,0,.4)'
    })
}



var islightMode;
headerMode.onclick = function () {
    islightMode = (contents.classList.contains('light-mode'))
    if(islightMode) {
        contents.classList.remove('light-mode')
        setBackgroundColorBtnNavDarkMode()
        searchForm.style.removeProperty('background-color')
        searchForm.style.removeProperty('border')
        searchWrapper.style.removeProperty('background-color')
        searchWrapper.style.removeProperty('border')
        searchInput.style.removeProperty('background-color')
        searchInput.style.removeProperty('border')
        searchIcon2.style.removeProperty('color')
        searchButton.style.removeProperty('background-color')
    }
    else {
        contents.classList.add('light-mode')
        searchForm.style.backgroundColor = "#212121"
        searchForm.style.border = "1px solid #303030"
        searchWrapper.style.border = '1px solid #303030'
        searchWrapper.style.background = '#131313'
        searchInput.style.background = '#131313'
        searchIcon2.style.color = 'var(--white-color)'
        searchButton.style.backgroundColor = '#131313'
        setBackgroundColorBtnNavLightMode()
    }

    if(lightModeIcon.classList.contains('hidden')) {
        lightModeIcon.classList.remove('hidden')
        darktModeIcon.classList.add('hidden')
    }
    else {
        lightModeIcon.classList.add('hidden')
        darktModeIcon.classList.remove('hidden')
    }
}

searchInput.onfocus = function () {
    searchWrapper.style.boxShadow = 'inset 0 2px 2px rgb(0 0 0 / 5%)'
}

window.onclick = function(event) {
    if (!event.target.matches('.search-input')) {        
        searchWrapper.style.boxShadow = 'inset 0 0 15px 0 rgb(0 0 0 / 8%)'         
    }
}

prevNav.forEach(function (prev) {
    if(prev.classList.contains('disabled')) {
        prev.onclick = function (e) {
            e.preventDefault()
        }
    }
})

nextNav.forEach(function (next) {
    if(next.classList.contains('disabled')) {
        next.onclick = function (e) {
            e.preventDefault()
        }
    }
})


menu.onclick = function (e) {
    e.preventDefault()
    modal.style.display = 'block'
    mobileWrapper.style.transform = 'translateX(0)'
    mobileWrapper.style.opacity = "1"
    disableBodyScroll()
}

modal.onclick = function (e) {
    mobileWrapper.style.transform = 'translateX(-100%)'
    modal.style.display = 'none'
    mobileWrapper.style.opacity = "0"
    enableBodyScroll()
}

function disableBodyScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}
  
function enableBodyScroll() {
    window.onscroll = function() {};
}

mobileWrapper.onclick = function (e) {
    e.stopPropagation()
}

var defaultSubMenuModal = function () {
    listMenuItemModal.forEach(function (menuItemModal) {
        if(menuItemModal.children.length !== 1) {
            menuItemModal.children[menuItemModal.children.length - 1].style.display = 'none';
            menuItemModal.children[0].style.color = "var(--white-color)"
            menuItemModal.children[1].style.transform = "rotate(0deg)"
        }
    })
}

defaultSubMenuModal();
var isHidden;
listMenuItemModal.forEach(menuItemModal => {
    if(menuItemModal.children.length !== 1) {
        menuItemModal.onclick = function (e) {      
            isHidden = (menuItemModal.children[menuItemModal.children.length - 1].style.display === "none" );    
            defaultSubMenuModal();
            menuItemModal.children[menuItemModal.children.length - 1].style.display = isHidden ? "block" : "none";
            menuItemModal.children[1].style.transform = isHidden ? "rotate(90deg)" : "rotate(0deg)"
            menuItemModal.children[0].style.color = "#1e73be"
        }
    }
});
