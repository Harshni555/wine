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
//login//

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


// Search filtering for region dropdown
document.getElementById('regionSearch').addEventListener('keyup', function() {
    var searchValue = this.value.toLowerCase();  // Get the search query
    var regionItems = document.querySelectorAll('.sub-menu li');  // Select all region list items

    regionItems.forEach(function(regionItem) {
        var regionText = regionItem.textContent.toLowerCase();  // Get the text of each region
        
        // Show or hide regions based on the search query
        if (regionText.includes(searchValue)) {
            regionItem.style.display = 'block';  // Show if it matches
        } else {
            regionItem.style.display = 'none';  // Hide if it doesn't match
        }
    });
});

// Optional: Add event listener for region clicks
document.querySelectorAll('.sub-menu li a').forEach(function(regionLink) {
    regionLink.addEventListener('click', function() {
        alert('You selected: ' + this.dataset.region);  // Display an alert for selected region
    });
});

//about//
// About Us Modal
// Get the modal, button, and close elements
var modal = document.getElementById("aboutUsModal");
var link = document.getElementById("aboutUsLink");
var closeBtn = document.querySelector(".close-out");

// Open modal when "ABOUT US" link is clicked
link.onclick = function(event) {
    event.preventDefault(); // Prevent default link behavior
    modal.style.display = "block"; // Show modal
};

// Close modal when "x" button is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
};

// Close modal when clicking outside of modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};