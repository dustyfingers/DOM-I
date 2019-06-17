const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


// NAV && LOGO
let navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link, idx) => {
  let navItem = siteContent['nav'][`nav-item-${idx + 1}`];
  link.textContent = navItem;
});

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


// CTA SECTION
let h1 = document.querySelector('h1');
h1.textContent = siteContent['cta']['h1'];

let ctaBtn = document.querySelector('.cta button');
ctaBtn.textContent = siteContent['cta']['button'];

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);


// MAIN CONTENT SECTION
//find h4 keys in the main-content object and map those to the '.text-content h4' elements 
let headerElements = document.querySelectorAll('.text-content h4');
let headers = [];
for(const [key, value] of Object.entries(siteContent['main-content'])) {
  if (key.includes('-h4')) headers.push(value);
}
headerElements.forEach(( element, idx) => {
  element.textContent = headers[idx];
});

// find sentences and map those to the '.text-content p' elements
let textElements = document.querySelectorAll('.text-content p');
let paragraphs = [];
for(const [key, value] of Object.entries(siteContent['main-content'])) {
  if (key.includes('content')) paragraphs.push(value);
}
textElements.forEach((element, idx) => {
  element.textContent = paragraphs[idx];
});

// middle img
let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

