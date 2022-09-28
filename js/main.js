let header = document.createElement('h1');
header.innerText = "WeatherApp";
document.body.appendChild(header);
header.id = 'headerID';

let btn = document.createElement("button");
btn.innerHTML = "Get Weather";
document.body.appendChild(btn);
btn.id = 'buttonID';

let zipform = document.createElement('input');
zipform.placeholder = 'Enter Zipcode';
document.body.appendChild(zipform);
zipform.id = 'formID';
