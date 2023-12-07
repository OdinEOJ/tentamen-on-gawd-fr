function copyText() {
    var inputText = document.getElementById("inputText").value;
    var outputBox = document.getElementById("outputBox");
    var fontSizeSelect = document.getElementById("fontSizeSelect");
    var fontFamilySelect = document.getElementById("fontFamilySelect");
    var fontColorSelect = document.getElementById("fontColorSelect");

    // Copy text to output box
    outputBox.innerText = inputText;

    // Apply styles
    outputBox.style.fontFamily = fontFamilySelect.value;
    outputBox.style.fontSize = fontSizeSelect.value;
    outputBox.style.color = fontColorSelect.value;
    outputBox.style.backgroundColor = "#f0f0f0";
}

function changeStyle() {
    copyText(); // Call the copyText function when styles are changed
}