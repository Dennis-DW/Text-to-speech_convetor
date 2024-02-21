
# Speech Synthesis Application

This is a simple web application that utilizes the Speech Synthesis API to convert text into speech. Users can input text into a textarea, select a preferred voice from the available options, and click a button to hear the text spoken aloud.

![Screenshot from 2023-10-13 17-22-38](https://github.com/Dennis-DW/Text-to-speech_convetor/assets/115493939/981c43dc-a91e-4027-bd45-a77f8112674c)

## Features

- **Text-to-Speech Conversion**: Users can input text and have it converted into speech.
- **Voice Selection**: Users can choose from a list of available voices for the speech output.
- **Persistent Content**: Text entered into the textarea is automatically saved to local storage, allowing users to retrieve their previous input upon revisiting the page.
- **Responsive Design**: The application's interface is responsive, ensuring a seamless experience across different devices.

## Usage

1. Enter the desired text into the textarea.
2. Select a preferred voice from the dropdown menu.
3. Click the "Speak" button to hear the text spoken aloud.

## Implementation Details

- The application utilizes the SpeechSynthesisUtterance interface to configure the speech synthesis process.
- Available voices are fetched using the `speechSynthesis.getVoices()` method, and users can select their preferred voice from a dropdown menu.
- Text entered into the textarea is automatically saved to local storage using the `localStorage.setItem()` method.
- The application adjusts its styles for mobile devices to ensure optimal usability.

## Installation

1. Clone the repository:

    ```
    git clone https://github.com/Dennis-DW/Text-to-speech_convetor.git
    ```

2. Open the `index.html` file in a web browser to use the application.

## Technologies Used

- JavaScript
- Speech Synthesis API

## Credits

This project is inspired by various speech synthesis applications available online.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


