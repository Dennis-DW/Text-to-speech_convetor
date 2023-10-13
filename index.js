let speech = new SpeechSynthesisUtterance();
let voices = [];
let voicesSelect = document.querySelector("select");
const textArea = document.querySelector("textarea");
const speakButton = document.querySelector("button");

// Function to update voices list
function updateVoicesList() {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[1];
  voicesSelect.innerHTML = ""; // Clear the existing options
  voices.forEach((voice, i) => {
    const option = new Option(voice.name, i);
    voicesSelect.appendChild(option);
  });
}

// Event listener for voices list change
voicesSelect.addEventListener("change", () => {
  speech.voice = voices[voicesSelect.value];
});

// Event listener for the button click
speakButton.addEventListener("click", () => {
  speech.text = textArea.value;
  window.speechSynthesis.speak(speech);
});

// Event listener to update voices list when voices change
window.speechSynthesis.onvoiceschanged = updateVoicesList;


// Function to save the content to local storage
function saveContentToLocalStorage() {
  localStorage.setItem("textAreaContent", textArea.value);
}

// Function to load content from local storage
function loadContentFromLocalStorage() {
  const savedContent = localStorage.getItem("textAreaContent");
  if (savedContent) {
    textArea.value = savedContent;
  }
}

// Initial update of the voices list, styles, and loading content
updateVoicesList();
adjustStylesForMobile();
loadContentFromLocalStorage();

// Event listener to adjust styles on window resize
window.addEventListener("resize", adjustStylesForMobile);

// Event listener to save content on text area change
textArea.addEventListener("input", saveContentToLocalStorage);
