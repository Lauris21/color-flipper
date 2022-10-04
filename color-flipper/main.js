import './style.css'

const COLOR_PALETTE = {
  "#ff99c8": "Pink",
  "#fcf6bd": "Yellow",
  "#d0f4de": "Green",
  "#a9def9": "Blue",
  "#e4c1f9": "Lilac"
}

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");
  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = COLOR_PALETTE[color];
    colorPickerSelect.append(option);
  });
}

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");
  const colorName = document.querySelector("#color-name");
  colorPickerSelect.addEventListener("change", (event) => {
    const newColor = event.target.value;
    document.body.style.backgroundColor = newColor;
    colorName.innerText = COLOR_PALETTE[newColor];
    const colorNameText = `${newColor}` 
colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : "-";
  })

}


addOptionsToColorPicker();
addEventListenerToColorPicker();