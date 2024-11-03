(function ($) {
    ("use strict");

    //canvas menu activation

    $(".canvas_open").on("click", function () {
        $(".offcanvas_menu_wrapper, .off_canvas_overlay").addClass("active");
    });

    $(".canvas_close").on("click", function () {
        $(".offcanvas_menu_wrapper, .off_canvas_overlay").removeClass("active");
    });

    // offcanvas menu
    var $offcanvasNav = $(".offcanvas_main_menu"),
        $offcanvasNavSubMenu = $offcanvasNav.find(".sub-menu");
    $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="fa fa-angle-down"></i></span>');

    $offcanvasNavSubMenu.slideUp();

    $offcanvasNav.on("click", "li a, li .menu-expand", function (e) {
        var $this = $(this);
        if ($this.parent().attr("class").match(/\b(menu-item-has-children| has-children | has-sub-menu)\b/) && ($this.attr("href") === "#" || $this.hasClass("menu-expand"))) {
            e.preventDefault();
            if ($this.siblings("ul:visible").length) {
                $this.siblings("ul").slideUp("slow");
            }
            else {
                $this.closest("li").siblings("li").find("ul:visible").slideUp("slow");
                $this.siblings("ul").slideDown("slow");
            }
        }

        if ($this.is("a") || $this.is("span") || $this.attr("class").match(/\b(menu-expand)\b/)) {
            $this.parent().toggleClass("menu-open");
        }
        else if ($this.is("li") && $this.attr("class").match(/\b('menu-item-has-children')\b/)) {
            $this.toggleClass("menu-open");
        }

    });

    //search box toggle
    $(".search_box > a").on("click", function () {
        $(this).toggleClass("active");
        $(".search_widget").slideToggle("medium");
    });

    //mini cart activation
    $(".mini_cart_wrapper > a").on("click", function () {
        if ($(window).width() < 991) {
            $(".mini_cart").slideToggle("medium");
        }
    });

    // header sticky
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".sticky-header").removeClass("sticky");
        } else {
            $(".sticky-header").addClass("sticky");
        }
    });

    //master slider carousel

    var slider = new MasterSlider();
    slider.setup('masterslider', {
        width: 1024,
        height: 650,
        fullwidth: true,
        centerControls: false,
        speed: 18,
        view: 'flow',
        overPause: false,
        autoplay: true
    });

    slider.control('bullets', {
        autohide: false
    });

    // product 
    $(".product-slider").owlCarousel({
        loop: true,
        margin: 15,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                dots: false
            }
        }
    });

})(jQuery);

//login
// Get modal elements
var loginModal = document.getElementById('loginModal');
var signupModal = document.getElementById('signupModal');

// Get button elements
var loginBtn = document.getElementById('loginBtn');
var signupBtn = document.getElementById('signupBtn');

// Get close elements
var closeLogin = document.getElementById('closeLogin');
var closeSignup = document.getElementById('closeSignup');

// Debug: Check if elements are properly selected
console.log("Login Button:", loginBtn);
console.log("Sign Up Button:", signupBtn);
console.log("Login Modal:", loginModal);
console.log("Sign Up Modal:", signupModal);

// Open login modal
loginBtn.onclick = function() {
    console.log("Login button clicked"); // Debug line
    if (loginModal) {
        loginModal.style.display = 'block';
    } else {
        console.error("Login modal is undefined");
    }
};

// Open signup modal
signupBtn.onclick = function() {
    console.log("Sign Up button clicked"); // Debug line
    if (signupModal) {
        signupModal.style.display = 'block';
    } else {
        console.error("Sign Up modal is undefined");
    }
};

// Close login modal
closeLogin.onclick = function() {
    if (loginModal) {
        loginModal.style.display = 'none';
    }
};

// Close signup modal
closeSignup.onclick = function() {
    if (signupModal) {
        signupModal.style.display = 'none';
    }
};

// Close modals when clicking outside of the modal
window.onclick = function(event) {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target === signupModal) {
        signupModal.style.display = 'none';
    }
};

 // Offcanvas menu toggle
 const offCanvasOverlay = document.querySelector('.off_canvas_overlay');
 const offCanvasWrapper = document.querySelector('.offcanvas_menu_wrapper');
 const openMenu = document.querySelector('.canvas_open a');
 const closeMenu = document.querySelector('.canvas_close a');
// Get modal and buttons
const modal = document.getElementById("myModal");
const mobileLoginLink = document.getElementById("mobileLogin");
const closeButton = document.querySelector(".modal .close");

// Open modal when "Log In" in the mobile menu is clicked
mobileLoginLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    modal.style.display = "block"; // Show modal
});

// Close modal when clicking on the close button
closeButton.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


//aboutus
document.addEventListener('DOMContentLoaded', function () {
    // Open and close modal
    const aboutUsLink = document.getElementById('aboutUsLink');
    const aboutUsModal = document.getElementById('aboutUsModal');
    const closeModal = document.querySelector('.close-out');

    aboutUsLink.addEventListener('click', function(event) {
        event.preventDefault();
        aboutUsModal.style.display = 'block';
    });

    closeModal.addEventListener('click', function() {
        aboutUsModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == aboutUsModal) {
            aboutUsModal.style.display = 'none';
        }
    });

    // Filter regions in Region dropdown
    const regionSearch = document.getElementById('regionSearch');
    const regionLinks = document.querySelectorAll('.sub-menu li a[data-region]');

    regionSearch.addEventListener('keyup', function() {
        const filter = regionSearch.value.toUpperCase();
        regionLinks.forEach(link => {
            const text = link.textContent || link.innerText;
            link.parentElement.style.display = text.toUpperCase().includes(filter) ? '' : 'none';
        });
    });

    // Offcanvas menu toggle
    const offCanvasOverlay = document.querySelector('.off_canvas_overlay');
    const offCanvasWrapper = document.querySelector('.offcanvas_menu_wrapper');
    const openMenu = document.querySelector('.canvas_open a');
    const closeMenu = document.querySelector('.canvas_close a');

    openMenu.addEventListener('click', function () {
        offCanvasOverlay.style.display = 'block';
        offCanvasWrapper.style.right = '0';
    });

    closeMenu.addEventListener('click', function () {
        offCanvasOverlay.style.display = 'none';
        offCanvasWrapper.style.right = '-300px';
    });

    offCanvasOverlay.addEventListener('click', function () {
        offCanvasOverlay.style.display = 'none';
        offCanvasWrapper.style.right = '-300px';
    });
});