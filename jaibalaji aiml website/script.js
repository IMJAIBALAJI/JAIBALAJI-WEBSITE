// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Form submission handling
$(document).ready(function() {
    $('#registrationForm').submit(function(e) {
        e.preventDefault();
        
        // Simple validation
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var college = $('#college').val();
        var event1 = $('#event1').val();
        
        if(name === '' || email === '' || phone === '' || college === '' || event1 === '') {
            alert('Please fill all required fields');
            return false;
        }
        
        // In a real application, you would send this data to a server
        alert('Registration submitted successfully! We will contact you soon.');
        $('#registrationForm')[0].reset();
        
        return false;
    });
    
    // Change navbar color on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.navbar-default').addClass('navbar-shrink');
        } else {
            $('.navbar-default').removeClass('navbar-shrink');
        }
    });
});