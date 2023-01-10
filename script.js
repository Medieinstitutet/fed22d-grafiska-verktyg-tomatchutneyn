const menu = document.querySelector('.menu');
const startingPage = document.querySelector('.startingPage');
const prices = document.querySelector('.prices');
const aboutUs = document.querySelector('.aboutUs');
const cookieBar = document.querySelector('.cookieBar');
const inputField = document.createElement('input');
const registerBtn = document.createElement('button');
const cookieBtn = document.createElement('button');
const overlayColor = document.createElement('div');
const body = document.body;
const popup = document.createElement('div');

menu.innerHTML =
  '<h4><a href="#">Startsida</a></h4>' +
  '<h4><a href="#">Fina priser</a></h4>' +
  '<h4><a href="#">Om oss</a></h4>';

startingPage.innerHTML +=
  '<h4>Lördagen den 30 oktober blir det maskerad i Ljushallen, Stora gatan 29, Stockholm. Räkna med en skrämmande upplevelse. Personen med läskigast utklädnad vinner pris! <br>' +
  'O s a senast 22 oktober via anmälan nedan.</h4><br>';

inputField.placeholder = 'Mailadress här:';
startingPage.appendChild(inputField);

registerBtn.innerHTML = 'Anmäl dig här!';
startingPage.appendChild(registerBtn);

cookieBar.innerHTML = '<p>Acceptera cookies</p>';
cookieBtn.innerHTML = 'Godkänn';
cookieBar.appendChild(cookieBtn);

cookieBtn.addEventListener('click', () => {
  cookieBar.remove();
});

registerBtn.addEventListener('click', () => {
  overlayColor.classList.add('overlayColor');
  popup.classList.add('popup');
  body.append(overlayColor);
  overlayColor.append(popup);
});
