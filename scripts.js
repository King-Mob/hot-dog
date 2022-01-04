let hueRotation = 0;
let offset = 0;

const changeColours = () => {
  const bunBottom = document.getElementById("bun-bottom");
  const bunTop = document.getElementById("bun-top");
  const sausage = document.getElementById("sausage");

  bunBottom.style.filter = `hue-rotate(${hueRotation + offset}deg)`;
  bunTop.style.filter = `hue-rotate(${120 + hueRotation + offset}deg)`;
  sausage.style.filter = `hue-rotate(${200 + hueRotation + offset}deg)`;

  hueRotation = (hueRotation + 1) % 360;
};

setInterval(changeColours, 50);
