function refreshDropdowns() {
  //get the dropdown
  let objectSelect = document.getElementById("objectSelect");

  let forbiddenTagNames = ["SCRIPT", "HEADER", "NAV"];

  //get all elements in the body
  let allElements = document.querySelectorAll("body *");
  let allElementTypes = [];

  let DOMelements = ["BODY", "HEADER"];

  for (const DOMelement of DOMelements) {
    let option = document.createElement("option");
    option.text = DOMelement.toLowerCase();
    objectSelect.add(option);
  }

  let seperatorOption = document.createElement("option");
  seperatorOption.text = "---Other Elements On Page---";
  objectSelect.add(seperatorOption);

  for (const element of allElements) {
    //get unique elements (just for the name) and add them to the list
    if (
      !allElementTypes.includes(element.tagName) &&
      !forbiddenTagNames.includes(element.tagName)
    ) {
      allElementTypes.push(element.tagName);
      let option = document.createElement("option");
      option.text = element.tagName.toLowerCase();
      objectSelect.add(option);
    }
  }
}

refreshDropdowns();

function isHex(h) {
  let a = parseInt(h, 16);
  return a.toString(16) === h;
}

function getColorFormat(color) {
  //check if color is HEX
  color = color.replace("#", "");
  console.log(isHex(color));
  if (isHex(color)) {
    //color is HEX, but check validity
    if (color.length < 6) {
      color = prompt(
        "Value not valid. Enter a new HEX value or standard naming for the new color:"
      );
      getColorFormat(color);
    }
    return "#" + color.replace("#", "");
  }
  return color;
}

function headerDropdownAction() {
  //get the dropdowns
  let actionSelect = document.getElementById("actionSelect");
  let objectSelect = document.getElementById("objectSelect");

  //get all elements with the selected tagname
  let allElements = document.getElementsByTagName(objectSelect.value);
  for (const element of allElements) {
    let styling = getComputedStyle(element).fontSize;
    if (actionSelect.value === "Text Smaller") {
      element.style.fontSize = parseInt(styling.replace("px", "")) - 4 + "px";
    }
    if (actionSelect.value === "Text Bigger") {
      element.style.fontSize = parseInt(styling.replace("px", "")) + 4 + "px";
    }

    if (actionSelect.value === "Text Color") {
      let color = prompt(
        "Enter a new HEX value or standard naming for the new color:"
      );
      element.style.color = getColorFormat(color);
    }
    if (actionSelect.value === "Background Color") {
      let color = prompt(
        "Enter a new HEX value or standard naming for the new backgroundColor:"
      );
      element.style.backgroundColor = getColorFormat(color);
    }
  }
}
