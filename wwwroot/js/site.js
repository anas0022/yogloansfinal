var menu = document.getElementById('menu');
var close = document.getElementById('close');
var res = document.getElementById('res-menu');

menu.onclick = function() {
 
    res.style.width = '60%';
}

close.onclick = function() {
    res.style.width = '0%';
   
}

var gold = document.getElementById('gold');
var business = document.getElementById('business');
var cd = document.getElementById('cd');
var vehicle = document.getElementById('vehicle');
var head = document.getElementById('header');
var sub = document.getElementById('sub');
var detail = document.getElementById('detail-para');
var point1 = document.getElementById('point1');
var point2 = document.getElementById('point2');
var point3 = document.getElementById('point3');
var welcome = document.getElementsByClassName('welcome-container')[0];
gold.onclick = function () {
    gold.classList.add('active');
    business.classList.remove('active');
    cd.classList.remove('active');
    vehicle.classList.remove('active');
    head.textContent = "Gold Loan";
    sub.textContent = "Experience Door Step Gold Loan Services";
    point3.style.display = "block";
    welcome.style.backgroundImage = "url(images/welcome/front-view-arrangement-economy-elements.jpg)";
    detail.textContent = "A Gold Loan is a convenient and secure way to access instant funds by pledging your gold ornaments as collateral. With minimal documentation and quick processing, it is an ideal solution for urgent financial needs such as business expansion, medical emergencies, or education expenses. The loan amount is determined based on the purity and weight of the gold, offering competitive interest rates and flexible repayment options to suit your needs. ";
    point1.innerHTML = `<img src="images/icon/checklist.png" alt="" srcset=""> Quick Processing`;
    point2.innerHTML = `<img src="images/icon/checklist.png" alt="" srcset=""> Minimal Documentation`;
    point3.innerHTML = `<img src="images/icon/checklist.png" alt="" srcset=""> Competitive Rates`;
}
business.onclick = function () {
    gold.classList.remove('active');
    business.classList.add('active');
    cd.classList.remove('active');
    vehicle.classList.remove('active');
    head.textContent = "Business Loan";
    sub.textContent = "Loan Provided Minimum 5 Members And Maximum 1 Member ";
    welcome.style.backgroundImage = "url(images/welcome/business-background.png)";
    point3.style.display = "block";
    detail.textContent = "Business Loan is a small value unsecured loan granted to individuals engaged in retail trade for development of their business for augmenting the working capital and/or for meeting capital expenditure. ";
    point1.innerHTML = `<img src="images/icon/checklist.png" alt="" srcset=""> Low interest rate`;
    point2.innerHTML = `<img src="images/icon/checklist.png" alt="" srcset=""> Unsecured upto Rs.200000 for eligible customers`;
    point3.innerHTML = `<img src="images/icon/checklist.png" alt="" srcset=""> Daily collection facility`;
}
cd.onclick = function () {
    gold.classList.remove('active');
    business.classList.remove('active');
    cd.classList.add('active');
    vehicle.classList.remove('active');
    head.textContent = "Consumer Durable Loan";
    sub.textContent = "The Second Co-Applicant Shall Be A Person From The Same Group ";
    welcome.style.backgroundImage = "url(images/welcome/consumer-durables-background.png)";
    detail.textContent = " ";
    point1.innerHTML = `<img src="images/icon/checklist.png" alt="" srcset=""> Low interest rate. `;
    point2.innerHTML = `<img src="images/icon/checklist.png" alt="" srcset=""> Unsecured upto Rs.200000 for eligible customers`;
    point3.style.display = "none";
}
vehicle.onclick = function () {
    gold.classList.remove('active');
    business.classList.remove('active');
    cd.classList.remove('active');
    vehicle.classList.add('active');
    head.textContent = "Vehicle Loan";
    sub.textContent = "Finance Facility Upto Onroad Price For Eligible Customers  ";
    welcome.style.backgroundImage = "url(images/welcome/bike-background.png)";
    detail.textContent = "A Vehicle Loan is a convenient and secure way to access instant funds by pledging your vehicle as collateral. With minimal documentation and quick processing, it is an ideal solution for urgent financial needs such as business expansion, medical emergencies, or education expenses. The loan amount is determined based on the value of the vehicle, offering competitive interest rates and flexible repayment options to suit your needs.  ";
    point1.innerHTML = `<img src="images/icon/checklist.png" alt="" srcset=""> Low interest rate. `;
    point3.style.display = "block";
    point2.innerHTML = `<img src="images/icon/checklist.png" alt="" srcset=""> Loan amount upto Rs.200000. `;
    point3.innerHTML = `<img src="images/icon/checklist.png" alt="" srcset="">Maximum duration 48 month. `;
}

document.addEventListener('DOMContentLoaded', function() {
    const servicesLink = document.querySelector('.services-link');
    const servicesList = document.querySelector('.service-list');

    servicesLink.addEventListener('mouseover', function(e) {
        servicesList.style.opacity = '1';
        servicesList.style.display = 'flex';
    });

    servicesLink.addEventListener('mouseout', function(e) {
        servicesList.style.opacity = '0';
    });

    servicesList.addEventListener('mouseover', function(e) {
        servicesList.style.opacity = '1';
        servicesList.style.display = 'flex';
    });

    servicesList.addEventListener('mouseout', function(e) {
        servicesList.style.opacity = '0';
        servicesList.style.zIndex = '0';
        servicesList.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuBtn = document.getElementById('menu');
    const closeBtn = document.getElementById('close');
    const resMenu = document.getElementById('res-menu');
    
    menuBtn.addEventListener('click', function() {
        resMenu.style.width = '100%';
    });
    
    closeBtn.addEventListener('click', function() {
        resMenu.style.width = '0';
    });

    // Mobile services dropdown
const servicesLinks = document.querySelector('.services-link2');
const servicesList = document.querySelector('.service-list2');

servicesLinks.onclick = function () {
  const isActive = servicesList.classList.contains('active');

  if (isActive) {
    // Collapse
    servicesList.style.height = servicesList.scrollHeight + 'px'; // set current height to allow transition
    requestAnimationFrame(() => {
      servicesList.style.height = '0px';
    });
    servicesList.classList.remove('active');
  } else {
    // Expand
    servicesList.classList.add('active');
    const fullHeight = servicesList.scrollHeight + 'px';
    servicesList.style.height = fullHeight;

    // After transition ends, remove the fixed height so it adapts naturally
    servicesList.addEventListener(
      'transitionend',
      () => {
        if (servicesList.classList.contains('active')) {
          servicesList.style.height = 'auto';
        }
      },
      { once: true }
    );
  }
};

    
    });
 document.addEventListener('DOMContentLoaded', function() {
        const carousel = document.querySelector('.reviews-carousel');
        const cards = Array.from(document.querySelectorAll('.review-card'));
        const leftBtn = document.querySelector('.review-arrow.left');
        const rightBtn = document.querySelector('.review-arrow.right');
        
        // Function to update button visibility based on scroll position
        function updateButtonVisibility() {
            leftBtn.style.visibility = carousel.scrollLeft === 0 ? 'hidden' : 'visible';
            rightBtn.style.visibility = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth ? 'hidden' : 'visible';
        }

        leftBtn.addEventListener('click', function() {
            // Scroll left by the width of one card
            carousel.scrollBy({ left: -cards[0].offsetWidth - 20, behavior: 'smooth' }); // Subtracting gap
        });

        rightBtn.addEventListener('click', function() {
            // Scroll right by the width of one card
             carousel.scrollBy({ left: cards[0].offsetWidth + 20, behavior: 'smooth' }); // Adding gap
        });

        // Update button visibility on scroll
        carousel.addEventListener('scroll', updateButtonVisibility);

        // Initial update
        updateButtonVisibility();
    });
    