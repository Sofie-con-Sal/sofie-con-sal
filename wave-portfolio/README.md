# Wave Portfolio

## Overview
The Wave Portfolio project is a dynamic web application that features an interactive wave at the bottom of the screen. When users click on the wave, it expands to cover three-quarters of the screen with a red block, revealing an "About Me" section.

## Features
- Interactive wave that expands on click
- "About Me" section displayed in white text
- Responsive design that adapts to different screen sizes

## Project Structure
```
wave-portfolio
├── src
│   ├── index.html        # Main HTML document
│   ├── styles
│   │   └── main.css      # Styles for the project
│   ├── scripts
│   │   └── main.js       # JavaScript logic for the project
│   └── components
│       ├── Wave.js       # Component for the wave
│       └── About.js      # Component for the About Me section
├── package.json          # npm configuration file
├── .gitignore            # Files to ignore in version control
└── README.md             # Project documentation
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd wave-portfolio
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Open `src/index.html` in a web browser to view the application.

## Usage
- Click on the wave at the bottom of the screen to expand it and reveal the "About Me" section.
- The wave will transition smoothly, and the red block will remain until the end of the screen.

## Technologies Used
- HTML
- CSS
- JavaScript
- React (for component structure)

## License
This project is licensed under the MIT License.