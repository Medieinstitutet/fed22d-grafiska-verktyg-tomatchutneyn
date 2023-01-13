const menu = document.querySelector('.menu');
const startingPage = document.querySelector('.startingPage');
const prices = document.querySelector('.prices');
const aboutUs = document.querySelector('.aboutUs');
const cookieBar = document.querySelector('.cookieBar');
const inputField = document.createElement('input');
const registerBtn = document.createElement('button');
const errorElement = document.createElement('div');
const cookieBtn = document.createElement('button');
const overlayColor = document.createElement('div');
const body = document.body;
const popup = document.createElement('div');
const closePopup = document.createElement('button');
const popupText = document.createElement('div');
const startingPageLink = document.querySelector('.startingPageLink');
const pricesLink = document.querySelector('.pricesLink');
const aboutUsLink = document.querySelector('.aboutUsLink');
const gallery = document.getElementsByClassName("gallery");

startingPage.innerHTML += 
`<section class="information-text">
  <h2>Information</h2>
    <p>Lördagen den 30 oktober blir det maskerad i Ljushallen, Stora gatan 29, Stockholm.
        Räkna med en skrämmande upplevelse. Personen med läskigast utklädnad vinner pris!<br>
        <br>O s a senast 22 oktober via anmälan nedan.
    </p>
</section>`;

aboutUs.innerHTML = 
`<section class="about-us-text">
  <h2>Om oss</h2>
    <p>Sedan år 1978 har vi anordnat Stockholms bästa halloweenfester.<br/>
      Varje år får deltagarna chansen att tävla om ett fint pris.</p>
    <p>Frågor? Kontakta oss på<br/> halloween@gmail.com</p>
</section>`;

inputField.placeholder = 'Mailadress här:';
startingPage.appendChild(inputField);

registerBtn.innerHTML = 'Anmäl dig här!';
startingPage.appendChild(registerBtn);

errorElement.innerHTML = `ange giltig e-post`;
errorElement.classList.add('errorElement', 'hidden');
startingPage.appendChild(errorElement);

cookieBar.innerHTML = '<div>Acceptera cookies</div>';
cookieBtn.innerHTML = 'Godkänn';
cookieBar.appendChild(cookieBtn);

closePopup.innerHTML = '<h4>Stäng</h4>';
closePopup.classList.add('closePopup');
popup.append(closePopup);

popupText.innerHTML =
  '<p>Du är nu anmäld till<br>halloweenfesten.<br>Vi ser fram emot att se<br>din utklädnad!</p>';
popupText.classList.add('popupText');
popup.append(popupText);

cookieBtn.addEventListener('click', () => {
  cookieBar.remove();
});

registerBtn.addEventListener('click', () => {
  if (isEmail(inputField.value)) {
    overlayColor.classList.add('overlayColor');
    popup.classList.add('popup');
    body.append(overlayColor);
    overlayColor.append(popup);
    errorElement.classList.add('hidden');
  } else {
    errorElement.classList.remove('hidden');
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

//Prices
let slideIndex = 1;
showSlides(slideIndex);

function nextImage(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  
  if (n > gallery.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = gallery.length
  }
  for (i = 0; i < gallery.length; i++) {
    gallery[i].style.display = "none";
  }

  gallery[slideIndex-1].style.display = "block";
}

startingPageLink.addEventListener('click', () => {
  prices.remove();
  aboutUs.remove();
  body.append(startingPage);
});

pricesLink.addEventListener('click', () => {
  startingPage.remove();
  aboutUs.remove();
  body.append(prices);
});

aboutUsLink.addEventListener('click', () => {
  startingPage.remove();
  prices.remove();
  body.append(aboutUs);
});

aboutUs.remove();
prices.remove();