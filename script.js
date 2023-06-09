const changeColor = () => {
  // make 5 different color:
  let color1 = getRandomColor();
  let color2 = getRandomColor();
  let color3 = getRandomColor();
  let color4 = getRandomColor();
  let color5 = getRandomColor();

  // HTML elements for colors
  let colorElements = document.querySelectorAll('.random-color');
  colorElements[0].style.backgroundColor = color1;
  colorElements[1].style.backgroundColor = color2;
  colorElements[2].style.backgroundColor = color3;
  colorElements[3].style.backgroundColor = color4;
  colorElements[4].style.backgroundColor = color5;

  let hexName = document.querySelectorAll('.random-hexname');
  hexName[0].innerHTML = color1;
  hexName[1].innerHTML = color2;
  hexName[2].innerHTML = color3;
  hexName[3].innerHTML = color4;
  hexName[4].innerHTML = color5;
}

// random hex code
const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

// Get Data
let palettes = [];

const showPalettes = () => {
  let element = "";
  for (let i = 0; i < palettes.length; i++) {
    element += `
    <div class="palette trend-palette">
      <div class="color first-color" style="background-color: ${palettes[i].firstColor}">
        <p class="hexname">${palettes[i].firstColor}</p>
      </div>
      <div class="color" style="background-color: ${palettes[i].secondColor}">
        <p class="hexname">${palettes[i].secondColor}</p>
      </div>
      <div class="color" style="background-color: ${palettes[i].thirdColor}">
        <p class="hexname" >${palettes[i].thirdColor}</p>
      </div>
      <div class="color" style="background-color: ${palettes[i].fourthColor}">
        <p class="hexname">${palettes[i].fourthColor}</p>
      </div>
      <div class="color fifth-color" style="background-color: ${palettes[i].fifthColor}">
        <p class="hexname">${palettes[i].fifthColor}</p>
      </div>
    </div>
    `
  };

  console.log(element)

  let trendPalette = document.getElementById("trend-palette");
  trendPalette.innerHTML += element;
}

const getPalettes = async () => {
  const response = await fetch("data.json");
  const paletteList = await response.json();
  palettes = paletteList
  showPalettes();
};

getPalettes();