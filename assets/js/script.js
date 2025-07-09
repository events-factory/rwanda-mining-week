/**
 * Rwanda Mining Week 2025 - Main JavaScript file
 */

$(document).ready(function () {
  // Navbar scroll behavior
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.navbar').addClass('scrolled');
    } else {
      $('.navbar').removeClass('scrolled');
    }
  });

  // Initialize countdown timer
  initCountdown();

  // Smooth scrolling for anchor links
  $('a.nav-link, a.btn').on('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault();
      const hash = this.hash;

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 70,
        },
        800
      );
    }
  });

  // Form submission with ajax
  $('.subscribe-form').on('submit', function (e) {
    e.preventDefault();
    const email = $(this).find('input[type="email"]').val();

    // Simulate ajax call
    setTimeout(function () {
      alert('Thank you for subscribing with ' + email);
      $('.subscribe-form')[0].reset();
    }, 500);
  });
});

// Countdown Timer Function
function initCountdown() {
  // Set the conference date - September 15, 2025
  const conferenceDate = new Date('Dec 02, 2025 09:00:00').getTime();

  // Update the countdown every 1 second
  const countdownTimer = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the conference date
    const distance = conferenceDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById('days').innerHTML = formatTime(days);
    document.getElementById('hours').innerHTML = formatTime(hours);
    document.getElementById('minutes').innerHTML = formatTime(minutes);
    document.getElementById('seconds').innerHTML = formatTime(seconds);

    // If the countdown is over, display message
    if (distance < 0) {
      clearInterval(countdownTimer);
      document.getElementById('countdown').innerHTML =
        '<h3 class="text-center">The Conference Has Started!</h3>';
    }
  }, 1000);
}

// Helper function to format time (add leading zero)
function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

// Initialize AOS animation library if included
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 1000,
    once: true,
  });
}

// Gallery lightbox functionality for travel page if included
if ($('.gallery-item').length) {
  $('.gallery-item').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
    },
  });
}
