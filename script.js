const menu = document.querySelector('.menu');
const startingPage = document.querySelector('.startingPage');
const prices = document.querySelector('.prices');
const aboutUs = document.querySelector('.aboutUs');
const cookieBar = document.querySelector('.cookieBar');
const inputField = document.createElement('input');
const inputFieldTablet = document.createElement('input');
const registerBtn = document.createElement('button');
const registerBtnTablet = document.createElement('button');
const errorElement = document.createElement('div');
const errorElementTablet = document.createElement('div');
const cookieBtn = document.createElement('button');
const overlayColor = document.createElement('div');
const popup = document.createElement('div');
const closePopup = document.createElement('button');
const popupText = document.createElement('div');
const startingPageLink = document.querySelector('.startingPageLink');
const pricesLink = document.querySelector('.pricesLink');
const aboutUsLink = document.querySelector('.aboutUsLink');
const welcomeHeader = document.getElementById('welcomeHeader');
const gallery = document.getElementsByClassName('gallery');
const tabletSlider = document.getElementsByClassName('tabletSlider');
const tabletOnly = document.querySelector('.tabletOnly');
const introText = document.querySelector('.introText');
const tabletRegister = document.createElement('div');
const pageContent = document.querySelector('.pageContent');
const aboutUsTitle = document.createElement('div');
const header = document.querySelector('header');

startingPage.innerHTML += `<section class="information-text">
<div id="info-container">  
<h2 class="desktopOnly">Information</h2>
    <img src="./assets/Pumpkin-Clipart-Transparent-PNG.png" class="desktopOnly" id ="pumpkin-desktop" alt="Spinning Pumpkin">
</div>    
    <p>Lördagen den 30 oktober blir det maskerad i Ljushallen, Stora gatan 29, Stockholm. <br class="desktopOnly">
        Räkna med en skrämmande upplevelse. Personen med läskigast utklädnad vinner pris!<br>
        <br>O s a senast 22 oktober via anmälan nedan.
    </p>
</section>`;

introText.innerHTML += `<section class="information-text">
    <p>Lördagen den 30 oktober blir det maskerad i Ljushallen, Stora gatan 29, Stockholm.
        Räkna med en skrämmande upplevelse. Personen med läskigast utklädnad vinner pris!<br>
        <br>O s a senast 22 oktober via anmälan nedan.
    </p>
</section>`;

aboutUs.innerHTML = `<section class="about-us-text">
<h2 class="notTablet">Om oss</h2>
    <p>Sedan år 1978 har vi anordnat Stockholms bästa halloweenfester.<br class="mobileOnly">
      Varje år får deltagarna chansen att tävla om ett fint pris.</p>
    <p>Frågor? Kontakta oss på<br/> halloween@gmail.com</p>
</section>`;

aboutUsTitle.innerHTML = '<h2 class="showInTablet">Om oss</h2>';
aboutUsTitle.classList.add('aboutUsTitle');

tabletRegister.classList.add('tabletRegister');
tabletOnly.append(tabletRegister);

inputField.placeholder = 'Mailadress här:';
startingPage.appendChild(inputField);
inputFieldTablet.placeholder = 'Mailadress här:';
tabletRegister.appendChild(inputFieldTablet);

registerBtn.innerHTML = 'Anmäl dig här!';
startingPage.appendChild(registerBtn);
registerBtnTablet.innerHTML = 'Anmäl dig här!';
tabletRegister.appendChild(registerBtnTablet);

errorElement.innerHTML = `Ange giltig e-post`;
errorElement.classList.add('errorElement', 'hidden');
startingPage.appendChild(errorElement);
errorElementTablet.innerHTML = `Ange giltig e-post`;
errorElementTablet.classList.add('errorElement', 'hidden');
tabletRegister.appendChild(errorElementTablet);

cookieBar.innerHTML = '<div>Acceptera cookies</div>';
cookieBtn.innerHTML = 'Godkänn';
cookieBar.appendChild(cookieBtn);

closePopup.innerHTML = '<p class="close-popup-text">Stäng</p>';
closePopup.classList.add('closePopup');
popup.append(closePopup);

popupText.innerHTML =
  '<p>Du är nu anmäld till <br class="mobileOnly">halloweenfesten.<br>Vi ser fram emot att se <br class="mobileOnly">din utklädnad!</p>';
popupText.classList.add('popupText');
popup.append(popupText);

cookieBtn.addEventListener('click', () => {
  cookieBar.remove();
});

registerBtn.addEventListener('click', () => {
  if (isEmail(inputField.value)) {
    overlayColor.classList.add('overlayColor');
    popup.classList.add('popup');
    pageContent.append(overlayColor);
    overlayColor.append(popup);
    errorElement.classList.add('hidden');
    inputField.value = '';
  } else {
    errorElement.classList.remove('hidden');
  }
});

registerBtnTablet.addEventListener('click', () => {
  if (isEmail(inputFieldTablet.value)) {
    overlayColor.classList.add('overlayColor');
    popup.classList.add('popup');
    pageContent.append(overlayColor);
    overlayColor.append(popup);
    errorElementTablet.classList.add('hidden');
    inputFieldTablet.value = '';
  } else {
    errorElementTablet.classList.remove('hidden');
  }
});

closePopup.addEventListener('click', () => {
  overlayColor.remove();
  popup.remove();
});

function isEmail(maybeEmail) {
  return String(maybeEmail)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
}

//Slider function in mobile and desktop
let slideIndex = 1;
showSlides(slideIndex);

function nextImage(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;

  if (n > gallery.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = gallery.length;
  }

  for (i = 0; i < gallery.length; i++) {
    gallery[i].style.display = 'none';
  }

  gallery[slideIndex - 1].style.display = 'block';
}

//Slider function in tablet
let slideIndexTablet = 1;
showSlidesTablet(slideIndexTablet);

function nextImageTablet(n) {
  showSlidesTablet((slideIndexTablet += n));
}

function showSlidesTablet(n) {
  let i;

  if (n > tabletSlider.length) {
    slideIndexTablet = 1;
  }

  if (n < 1) {
    slideIndexTablet = tabletSlider.length;
  }

  for (i = 0; i < tabletSlider.length; i++) {
    tabletSlider[i].style.display = 'none';
  }

  tabletSlider[slideIndexTablet - 1].style.display = 'block';
}

startingPageLink.addEventListener('click', () => {
  prices.remove();
  aboutUs.remove();
  aboutUsTitle.remove();
  header.classList.remove('mobileTablet');
  pageContent.append(startingPage);
  welcomeHeader.className = '';
  welcomeHeader.classList.add('welcomeStart');
  pageContent.append(tabletOnly);
});

pricesLink.addEventListener('click', () => {
  startingPage.remove();
  aboutUs.remove();
  aboutUsTitle.remove();
  header.classList.add('mobileTablet');
  pageContent.append(prices);
  welcomeHeader.className = '';
  welcomeHeader.classList.add('welcomePrice');
  pageContent.append(tabletOnly);
});

aboutUsLink.addEventListener('click', () => {
  startingPage.remove();
  tabletOnly.remove();
  prices.remove();
  header.classList.add('mobileTablet');
  pageContent.append(aboutUsTitle);
  pageContent.append(aboutUs);
  welcomeHeader.className = '';
  welcomeHeader.classList.add('welcomeAbout');
});

aboutUs.remove();
prices.remove();
header.classList.remove('mobileTablet');
