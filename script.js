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

startingPage.innerHTML +=
  '<h4>Lördagen den 30 oktober blir det maskerad i Ljushallen, Stora gatan 29, Stockholm. Räkna med en skrämmande upplevelse. Personen med läskigast utklädnad vinner pris! <br>' +
  'O s a senast 22 oktober via anmälan nedan.</h4><br>';

inputField.placeholder = 'Mailadress här:';
startingPage.appendChild(inputField);

registerBtn.innerHTML = 'Anmäl dig här!';
startingPage.appendChild(registerBtn);

errorElement.innerHTML = `ange giltig e-post`;
errorElement.classList.add('errorElement', 'hidden');
startingPage.appendChild(errorElement);

cookieBar.innerHTML = '<p>Acceptera cookies</p>';
cookieBtn.innerHTML = 'Godkänn';
cookieBar.appendChild(cookieBtn);

closePopup.innerHTML = '<h4>Stäng</h4>';
closePopup.classList.add('closePopup');
popup.append(closePopup);

popupText.innerHTML = '<h4>Du är nu anmäld till<br>halloweenfesten.<br>Vi ser fram emot att se<br>din utklädnad!</h4>';
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
};

startingPageLink.addEventListener('click', () => {
  prices.remove();
  aboutUs.remove();
  body.append(startingPage)
});

pricesLink.addEventListener('click', () => {
  startingPage.remove();
  aboutUs.remove();
  body.append(prices)
});

aboutUsLink.addEventListener('click', () => {
  startingPage.remove();
  prices.remove();
  body.append(aboutUs)
});