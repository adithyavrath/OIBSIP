# 🧮 Smart Calculator

A feature-rich calculator application built with vanilla JavaScript, HTML5, and CSS3. I designed this project to go beyond basic arithmetic by incorporating advanced mathematical functions and an intuitive user interface.

## 📋 Project Overview

I built this calculator as part of my frontend development portfolio journey alongside other projects like a landing page, temperature converter, tribute page, and personal portfolio. This specific project helped me master DOM manipulation, event handling, and responsive design. The application performs standard arithmetic operations while also supporting trigonometric and logarithmic functions. One of the key features I implemented was a real-time calculation history panel that tracks all user operations.

## ✨ Features

- **Basic Arithmetic**: Addition, subtraction, multiplication, and division
- **Advanced Functions**: Sine, cosine, logarithm, and square root calculations
- **Parentheses Support**: Full support for operation grouping with parentheses
- **Calculation History**: Tracks all previous calculations in a scrollable history panel
- **Theme Toggle**: Dark and light mode switching for comfortable viewing in different environments
- **Keyboard Support**: Full keyboard compatibility for all operations including Enter to calculate, Backspace to delete, and Delete to clear
- **Error Handling**: Graceful error messages for invalid expressions
- **Responsive Design**: Works seamlessly on desktop and tablet screens

## 🛠️ Tech Stack

- **HTML5**: Semantic markup and form elements
- **CSS3**: Flexbox and Grid layouts, gradients, transitions, and responsive design
- **JavaScript**: Vanilla JS (no frameworks) for all calculations and DOM manipulation
- **Chart.js**: Integrated for potential graph visualization

## 💡 How It Works

The calculator operates on a simple principle:

1. **Input Capture**: I implemented the `append()` function to capture numeric and operator inputs, building the expression as the user types
2. **Expression Parsing**: When the user clicks equals, the `calculate()` function converts mathematical function names (sin, cos, log, √) into their JavaScript `Math` equivalents
3. **Evaluation**: Using `eval()`, I execute the parsed expression and display the result
4. **History Tracking**: Each calculation is automatically logged in the history panel using the `addHistory()` function
5. **Theme Management**: The theme toggle adds/removes a CSS class to switch between dark and light mode

## 🚀 Installation & Usage

1. Clone or download the project files
2. Open `index.html` in your web browser
3. Start calculating:
   - Click buttons or use your keyboard to input values
   - Use the theme button (🌙/☀️) to switch themes
   - View all previous calculations in the history panel
   - Press Enter or click = to calculate

## 📱 Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)

## 🔮 Future Improvements

- Add scientific notation support
- Implement a graph visualization for complex expressions
- Add keyboard shortcuts cheat sheet
- Store calculation history in localStorage for persistence
- Create unit conversion features
- Add copy-to-clipboard functionality for results

## 👤 Author

**Nalla Adithya Vrath**

This calculator is one of several projects in my frontend development portfolio. I've built various web applications including a landing page, temperature converter, tribute page, and personal portfolio—all designed to strengthen my skills in HTML5, CSS3, and vanilla JavaScript.

**My Projects**:
- 🧮 Smart Calculator
- 🚀 NexoraTech Landing Page
- 🌡️ Temperature Converter
- 🌟 Tribute Page (Ratan Tata)
- 👨‍💻 Personal Portfolio

---

*Built with dedication to frontend fundamentals and best practices as part of my continuous learning journey.*
