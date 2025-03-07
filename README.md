# Math-Word-Match-Game

# 📌 Matching Word & Number Game  

## 📝 Project Objectives  
This project is an **interactive learning game** that helps users match numbers (1-20) with their word forms. The game aims to:  

- Provide a **fun and engaging way** to reinforce number-word recognition.  
- Ensure a **responsive, accessible, and user-friendly design**.  
- Implement **core JavaScript functionality** to track matches and provide feedback.  
- Offer a **smooth user experience** with visual feedback and a scoring system.  
- Deploy the game on **GitHub Pages** with clean, validated code.  

---

## 📖 User Stories  

### 🟢 User Story 1: As a player, I want to match numbers with their word forms  
**✅ Acceptance Criteria:**  
- The game displays numbers (1-20) and their word equivalents in a **randomized grid**.  
- When a player clicks two elements, the game checks if they match.  
- Correct matches turn **green** and stay visible.  
- Incorrect matches turn **red** and disappear after 1 second.  

**🛠 Tasks:**  
- Create HTML structure for number and word cards.  
- Write JavaScript to handle matching logic.  
- Implement visual feedback for correct/incorrect matches.  

---

### 🟢 User Story 2: As a player, I want to track my score  
**✅ Acceptance Criteria:**  
- A score counter updates when a match is made.  
- The final score is displayed when all matches are completed.  
- A "Play Again" button resets the score and reshuffles cards.  

**🛠 Tasks:**  
- Add a score-tracking variable.  
- Display score in the UI.  
- Implement a game reset function.  

---

### 🟢 User Story 3: As a player, I want to play the game on mobile and desktop  
**✅ Acceptance Criteria:**  
- The game adapts to different screen sizes.  
- Buttons are large enough for easy tapping on mobile.  
- The layout remains **clear and responsive** on all devices.  

**🛠 Tasks:**  
- Use **CSS Flexbox/Grid** for a responsive layout.  
- Add **media queries** for mobile optimization.  
- Test on different devices/browsers.  

---

### 🟢 User Story 4: As a player, I want the game to provide clear instructions  
**✅ Acceptance Criteria:**  
- A brief **"How to Play"** section is displayed.  
- Instructions are clear and concise.  
- Instructions remain visible or accessible at all times.  

**🛠 Tasks:**  
- Write instructional text.  
- Style instructions for readability.  
- Ensure accessibility (e.g., screen readers can read the instructions).  

---

## 🎯 MoSCoW Prioritization  

### ✅ Must-Have (Critical for MVP)  
- Matching functionality for numbers & words.  
- Score tracking & game completion feedback.  
- A "Restart" button that resets the game.  
- Responsive design for mobile & desktop.  
- Basic accessibility (keyboard navigation, color contrast).  
- No critical bugs (game must be playable without crashes).  

### 🟡 Should-Have (Important but not MVP-blocking)  
- A timer that tracks completion time.  
- Sound effects for correct/incorrect matches.  
- Progress indicators (e.g., how many pairs remain).  
- Additional accessibility features (screen reader enhancements).  

### 🔵 Could-Have (Bonus Features if Time Allows)  
- Dark mode toggle for better readability.  
- Customizable difficulty (e.g., different number ranges).  
- Animations for smoother transitions.  
- Themed designs (e.g., fun fonts & styles).  

---
## 🛠 Technologies Used  
- HTML5  
- CSS3  
- JavaScript (ES6)  
- Git & GitHub Pages  

---
## Testing

## Bugs Fixes

🐞 - The SweetAlert popup was shifting the game buttons, causing them to disappear or move.  
⚒️ - The `position: "center"` setting in SweetAlert was affecting the page layout.  
✅ - Changed the position to `"top"` to prevent it from interfering with the game elements.  


## 🔴 Issue 2: Score Button Stacked Below Start Button  
### **Problem**  
- After adding the **Score** button, it appeared **below** the **Start** button instead of beside it.  
- The layout was not as expected.  

### **Testing Process**  
1. Added a **red border** around the buttons to check their position.  
2. Discovered that both buttons were **outside** the intended container.  

### **Fix Implemented**  
- Adjusted the **HTML structure** to ensure both buttons were inside the correct Bootstrap grid layout.  

### **Final Verification**  
✅ The `Start` and `Score` buttons are now **side by side**.  

---

## 🔴 Issue 23: Styling Lost After HTML Changes  
### **Problem**  
- After modifying the **HTML** to fix button alignment, **all styling changed unexpectedly**.  

### **Testing Process**  
1. Inspected the **CSS** to check if the styles were still being applied.  
2. Verified the **Bootstrap** integration to ensure it was still loading.  

### **Fix Implemented**  
- Reapplied the **Bootstrap CDN** to ensure styles were not missing.  
- Checked **CSS file order** to make sure custom styles loaded **after Bootstrap**.  

### **Final Verification**  
✅ Bootstrap styles were **restored** and applied correctly.  

--4

## 🔴 Issue 3: Button Colors & Borders Not Matching  
### **Problem**  
- The `Start` and `Score` buttons did **not have the same color** after Bootstrap was reapplied.  
- Borders appeared around the buttons due to Bootstrap’s default styling.  

### **Testing Process**  
1. Manually set the **background color** to check if the CSS was working.  
2. Used **DevTools** to inspect and identify Bootstrap overrides.  

### **Fix Implemented**  
- Used `!important` in CSS to **override Bootstrap styles**.  
- Removed unwanted **borders** applied by Bootstrap.  

### **Final Verification**  
✅ Buttons now **match in color and styling**.  
✅ Borders are **removed** for a clean look.  

## 📌 Deployment  
The game will be deployed on **GitHub Pages**. Follow these steps to run it locally:  


