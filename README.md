# Math-Word-Match-Game

# 📌 Matching Word & Number Game  

![Game Screenshot](assets/screenshots/game.screenshot.png)


## 📝 Project Objectives  
This project is an **interactive learning game** that helps users match numbers (1-10) with their word forms. The game aims to:  

- Provide a **fun and engaging way** to reinforce number-word recognition.  
- Ensure a **responsive, accessible, and user-friendly design**.  
- Implement **core JavaScript functionality** to track matches and provide feedback.  
- Offer a **smooth user experience** with visual feedback and a scoring system.  
- Deploy the game on **GitHub Pages** with clean, validated code.  

---

## 📖 User Stories  

### 🟢 User Story 1: As a player, I want to match numbers with their word forms  
**✅ Acceptance Criteria:**  
- The game displays numbers (1-10) and their word equivalents in a **randomized grid**.  
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

## 🔭 Future Enhancements
- Difficulty levels (e.g., 1–20, 1–100)
- Sound effects toggle
- Dark mode


## 🗺 Wireframes & Mockups

![Wireframe](assets/screenshots/desktop.PNG)
![Wireframe](assets/screenshots/wireframe2.PNG)
![Wireframe](assets/screenshots/mobile.PNG)



## 📁 Folder Structure
```text
Math-Word-Match-Game/
├── index.html
├── README.md
└── assets/
├── css/
│ └── style.css
├── js/
│ └── script.js
└── screenshots/
├── game.screenshot.png
├── jshint-report.png
├── validator.w3.css.png
├── validator.w3.html.png
├── desktop.PNG
├── mobile.PNG
├── wireframe2.PNG


---
## 🛠 Technologies Used  
- HTML5  
- CSS3  
- JavaScript (ES6)  
- Git & GitHub Pages  

## 🛠️ Testing & Bug Fixes  

### 🐞 Issue 1: SweetAlert Popup Moved Game Buttons  
- The popup caused buttons to shift or disappear.  
- `position: "center"` affected layout.  
- ✅ Changed to `"top"` to prevent interference.  

### 🐞 Issue 2: Score Button Was Below Start Button  
- Score button stacked incorrectly under Start.  
- Inspected with a red border and found grid issues.  
- ✅ Fixed Bootstrap layout to align buttons side by side.  

### 🐞 Issue 3: Styling Lost After HTML Changes  
- Bootstrap styles disappeared after modifying HTML.  
- Checked CSS file order and Bootstrap integration.  
- ✅ Reapplied Bootstrap CDN and reordered styles.  

### 🐞 Issue 4: Button Colors & Borders Not Matching  
- Start and Score buttons had different colors/borders.  
- Used DevTools to find Bootstrap overrides.  
- ✅ Applied `!important` in CSS and removed borders.  

### 🐞 Issue 5: Score Not Resetting on Restart  
- Score increased correctly but didn't reset to `0`.  
- Confirmed issue by clicking Start multiple times.  
- ✅ Updated `resetGame(true)` to reset the score.  

### 🐞 Issue 6: Numbers Not Shuffling on Reset (Fixed)  
- Number and word buttons stay in the same order.  
- Need to correctly shuffle on game reset.  
- Fixed
## Final testing
### 🔄 Retesting after changes

- Fixed shuffle logic — tested correct matching and score updates
- Fixed responsive scrolling — tested on Nest Hub 1024x600
- Manual testing on Desktop, Mobile, and Tablet — all functional
- HTML, CSS, and JS validated — no errors
- Responsive test passed (ami.responsivedesign.is)
- Lighthouse Performance: 99, Accessibility: 100


# 🛠 JavaScript Testing  
### **Tool Used:** [JSHint](https://jshint.com/)  
- **Test Date:** **22 june 2025**  
- **Tested File(s):** `script.js`  
- **Purpose:** Ensure there are no syntax errors, unused variables, or bad practices.  
- **Result:** ![JS Hint REport](assets/screenshots/jshint-report.png) 
## 📱 Responsive Testing  
Tested on:  
- Chrome Desktop  
- Firefox Desktop  
- iPhone (Safari)  
- Nest - (Dev Op)

## ✅ Screen Reader Accessibility Test  
**Tested with:** Windows Narrator  
**Result:** All buttons, labels, and interactive elements were read correctly.  
**Fixes Needed:** None – ARIA labels and navigation work as expected.  
---

### B) **Structured Testing** (grouped as they suggested)

Replace your “Final testing / Retesting” area with a structured block like this (you can keep your screenshots):

```md
## ✅ Testing

### 1) Functional Testing
| Feature | Test | Expected | Result |
|---|---|---|---|
| Match logic | Click a number then its word | Correct pair triggers success modal; score +1 | Pass |
| Wrong pair | Pick mismatched pair | Error modal; selections reset | Pass |
| Restart | Click “ReStart” | Score resets to 0; buttons reshuffle | Pass |
| Accessibility | Navigate buttons via keyboard | Focus ring visible; Enter/Space activates | Pass |

### 2) UI/UX + Responsiveness
- Devices tested: Chrome Desktop, Firefox Desktop, iPhone (Safari), **Nest Hub 1024×600**  
- **Nest Hub fix:** enabled vertical scroll in game area; sticky full-width header; buttons resized to fit single row.  
- Screenshots:  
  - `assets/screenshots/desktop.PNG`  
  - `assets/screenshots/mobile.PNG`  
  - `assets/screenshots/wireframe2.PNG`

### 3) Validation
- **HTML:** W3C Markup Validator — _No errors_  
  ![HTML Validator Report](assets/screenshots/validator.w3.html.png)
- **CSS:** W3C CSS Validator — _No errors_  
  ![CSS Validator Report](assets/screenshots/validator.w3.css.png)
- **JavaScript:** JSHint — _No critical issues_  
  ![JSHint Report](assets/screenshots/jshint-report.png)

### 4) Performance (Lighthouse)
**Desktop**
| Category | Score |
|---|---|
| Performance | 99 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 90 |

**Mobile**
| Category | Score |
|---|---|
| Performance | 80–89 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 90 |

_Notes:_ Mobile performance varies depending on network conditions and Chrome extensions. Tested incognito; CDNs (Bootstrap & SweetAlert2) add a small delay but no blocking errors.

## 🔧 Recent Fixes and Improvements
- **Responsiveness (Nest Hub 1024×600):** header converted to full-width `container-fluid`, game area now scrolls vertically; removed overlapping and extra top gap.
- **Button layout:** reduced button size/margins so all 10 fit on one row; added horizontal scroll fallback on very small widths.
- **Modal alignment:** removed custom fixed positioning; SweetAlert centered, `heightAuto: false` to prevent layout shift.
- **Folder structure:** consolidated under `assets/` (`assets/css`, `assets/js`, `assets/screenshots`).
- **Validation:** removed stray/duplicate code; fixed Google Fonts URL; eliminated default body margin to avoid gaps.


**Deployment**  
👉
The game is deployed on [GitHub Pages](https://helenlloydjeng.github.io/Math-Word-Match-Game/)
## 🚀 Deployment

### GitHub Pages
This project is deployed using GitHub Pages.

- **Repository:** https://github.com/HelenLloydJeng/Math-Word-Match-Game  
- **Live Site:** https://helenlloydjeng.github.io/Math-Word-Match-Game/

**Steps to deploy:**
1. Push your latest changes to the `main` branch.
2. In GitHub, go to **Settings → Pages**.
3. Under **Branch**, select `main` and `/ (root)` and click **Save**.
4. Wait for Pages to build; your site will be available at the “Live Site” URL above.

### Run Locally
1. Clone the repo:
   ```bash
   git clone https://github.com/HelenLloydJeng/Math-Word-Match-Game.git
   cd Math-Word-Match-Game
2. Open index.html directly in your browser or run a local server:

# Python 3
python -m http.server 5500
# then open http://localhost:5500


## 🎓 Credits & Resources  

### 🙌 Special Thanks  

- **Richard Wells** (mentor) — for guidance, support, and feedback  
- **ChatGPT and CoPilot** (OpenAI) — for code review assistance, bug fixing, testing advice, and README editing  
- Fellow students on **Code Institute Slack Community** — for advice and encouragement  

---

### 📚 Learning Resources  

- [W3Schools](https://www.w3schools.com/) — General HTML, CSS, JavaScript  
- [Code Institute Tutorials](https://learn.codeinstitute.net/ci_program/diwad_v2_9)
- [MDN Web Docs](https://developer.mozilla.org/) — Advanced JavaScript, HTML, CSS  
- [JavaScript.info](https://javascript.info/) — In-depth JavaScript tutorials  
- [Slack Community](https://slack.com/) — Peer discussions and troubleshooting  
- [ChatGPT (OpenAI)](https://chat.openai.com/) — for additional learning support  

---

### 🛠 Tools & Libraries Used  

- [SweetAlert2](https://sweetalert2.github.io/) — Custom pop-up alerts  
- [Bootstrap](https://getbootstrap.com/) — Responsive styling and layout  
- [Google Fonts](https://fonts.google.com/) — Comic Neue font  
- [CSS Keyframes & Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS) — For animations and responsiveness  
- [Git & GitHub](https://github.com/) — Version control and deployment  

---

_This project was created as part of the **Diploma in Full Stack Software Development** with **Code Institute**._

 


