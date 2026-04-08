# StudyForge — GATE DA 2027 Master Tracker

> *A self-contained, offline-first study tracker built for serious GATE DA aspirants. No server. No login. No fluff. Just your progress, your pace, your plan.*

---

## Table of Contents

- [Overview](#overview)
- [Quick Start](#quick-start)
- [Feature Walkthrough](#feature-walkthrough)
  - [Dashboard](#-dashboard)
  - [GATE DA 2027 Tracker](#-gate-da-2027-tracker)
  - [Pomodoro Timer](#-pomodoro-timer)
  - [Study Logs](#-study-logs)
  - [Study Notes Hub](#-study-notes-hub)
  - [Weekly Goals](#-weekly-goals)
  - [PYQ Tracker](#-pyq-tracker)
  - [Analytics](#-analytics)
  - [Mock Test Hub](#-mock-test-hub)
  - [Formula Deck (Flashcards)](#-formula-deck-flashcards)
  - [Settings](#-settings)
  - [GATE Virtual Calculator](#-gate-virtual-calculator)
  - [Focus Mode](#-focus-mode)
- [Data & Privacy](#data--privacy)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

**StudyForge** is a single-file HTML web application — meaning you download one `.html` file, open it in any browser, and you have a full-featured exam preparation system running entirely on your machine. All data is stored in your browser's `localStorage`. Nothing is sent anywhere.

It was built specifically around the **GATE DA 2027** (Data Science & Artificial Intelligence) syllabus, covering all 8 official units across a structured 10-month plan from April 2026 to February 2027. It also doubles as a general study tracker for anyone preparing for competitive exams.

**Core philosophy:**
- Every study session, subtopic completed, and pomodoro logged feeds into a unified progress picture
- The tracker syncs GATE DA unit progress with the broader roadmap, so checking off a subtopic in either view updates both
- Gamification (XP, levels, coins, streaks) keeps motivation alive over a 10-month grind

---

## Quick Start

1. Download `StudyForge_Tracker_V3.html`
2. Open it in any modern browser (Chrome, Firefox, Edge — no extensions needed)
3. That's it. Your data auto-saves to `localStorage` as you work

> **Tip:** Bookmark the file or pin it to your browser's home screen for quick access. On mobile, you can use "Add to Home Screen" for an app-like experience.

**To back up your data:** Go to `Settings → Export JSON`. This downloads a snapshot of everything. To restore it on any device, use `Settings → Import JSON`.

---

## Feature Walkthrough

---

### 🏠 Dashboard

The command center. Everything you need to know at a glance, without opening a single sub-page.

**Live GATE DA 2027 Countdown**
A real-time ticker at the top of the dashboard counts down to your exam date with precision: months, weeks, days, and a live H:M:S clock that ticks every second. Below the timer, four insight metrics update automatically:
- **Total Days Left** — calendar days until the exam
- **Syllabus Done %** — your current overall completion percentage
- **Avg hrs/day** — how many hours per day you've been averaging since you started
- **Needed hrs/day** — how many hours per day you need from today to finish on pace

**Overall Progress Card**
A dark hero card showing your total syllabus completion percentage as a large number, a thick progress bar, your current phase, days remaining, and exam target.

**Stats Row (4 cards)**
- Topics Done (total completed vs total in syllabus)
- Study Hours (total hours logged across all sessions)
- Pomodoros (total focus sessions completed)
- Completion Forecast (AI-calculated date when you'll finish at your current pace)

**RPG Profile Card**
Your scholar identity. Displays your current Rank (Novice → Scholar → Adept → Sage → Master → Grandmaster → Legend), Level, total XP earned, Forge Coins balance, and Streak Shields held. An XP progress bar shows how close you are to the next level-up.

**Study Engine Insight**
A smart alert card that surfaces one actionable insight based on your actual data:
- If you haven't touched a subject, it calls it out by name
- If your last mock score was below 40, it warns you and points to your weakest area
- If you're on a streak, it acknowledges it and mentions your most-studied subject

**Weekly Progress**
Shows your current week's progress against set goals for study hours and topics completed, with two progress bars. Links directly to the Weekly Goals page.

**Phase Progress**
Three mini progress bars — one per roadmap phase — plus a fourth for GATE DA overall, all updating live as you check off topics.

**This Month's Focus**
Shows what you should be working on this month according to the 10-month plan. If you've pinned any subjects from the GATE DA tracker, they appear at the top under a "📌 Pinned Units" heading, visually separate from the monthly plan items. Pins update this card in real time.

**Motivational Quote**
A random quote from a curated set refreshes each time you visit the dashboard.

---

### ◉ GATE DA 2027 Tracker

The heart of the app. A complete, interactive tracker for the official GATE DA syllabus across all 8 units.

**Hero Stats Bar**
At the top, five chips show: total topics, done topics, overall progress %, a live progress bar, and the start/exam date. All update as you work.

**Four Stat Cards**
- Topics Done
- Subtopics Done
- DA-linked Pomodoros (sessions where you selected a DA subject in the timer)
- Days Left to exam (dynamic, uses your configured exam date)

**Three Tabs**

*📊 Unit Tracker*
The main working view. A left sidebar lists all 8 units with their subtopic progress (e.g. `3/12 · 25%`). Clicking a unit loads its full content on the right.

Each unit shows:
- A unit-level checkbox to mark the entire unit complete in one click
- Unit name, description, and target month
- A progress bar and subtopic count

Each subtopic inside a unit has:
- **Completion checkbox** — check it to mark the subtopic done. Syncs to the Roadmap tracker automatically.
- **Mastery dots** — three colored dots (🔴 Struggling, 🟡 Okay, 🟢 Confident). Click to set your confidence level. Click the active dot again to clear it. Used for self-assessment.
- **📌 Pin button** — pins this subtopic to "Today's Focus" in the dashboard and the focus widget at the top of the page
- **⭐ Revise button** — marks the subtopic for a second-pass revision (different from completion)
- **＋ Resource button** — attach a YouTube or documentation URL to any subtopic. A 🔗 icon appears once attached; clicking it opens the resource in a new tab.

*🗺️ Study Roadmap*
A 7-phase visual timeline from April 2026 to February 2027, showing what to study each month with color-coded tags. Below the timeline, the same phase/subject breakdown from the main Roadmap Tracker is shown, fully interactive.

*💡 Strategy & Tips*
A reference card with:
- Key resources for each subject (NPTEL, textbooks, YouTube channels)
- Exam strategy (high-weight units, what not to skip, when to start mocks)
- Daily study plan template with time blocks
- Key differences between GATE DA and GATE CS

**Global Search**
The search bar in the top bar searches across all GATE DA subtopics in real time. Clicking a result jumps directly to that unit and toggles the subtopic.

---

### ◷ Pomodoro Timer

A full-featured focus timer tightly integrated with the rest of the tracker.

**Timer Modes**
Three modes: Focus (default 25 min), Short Break (5 min), Long Break (15 min). All durations are configurable in the settings panel on the same page.

**Subject Linking**
A dropdown lets you select which DA unit you're studying during the session. When the focus timer completes, it auto-logs a study session entry under that subject — you don't have to go to the Logs page manually. It also increments the "DA Pomodoros" count in the GATE DA tracker.

**Session Tracking**
Three stats update live: Today's Sessions, Focus Time, and Breaks Taken.

**Audio Oasis**
Three ambient audio buttons: 🎧 Lo-Fi Beats, 🌧️ Rainy Night, 🌲 Zen Forest. Click once to play, click again to stop.

**Timer Ring**
An SVG ring animates as time passes, with the stroke color changing by mode (amber for focus, green for short break, blue for long break).

**Recent Pomodoros**
A scrollable list of your last 15 sessions showing subject, date, time completed, and duration.

**Keyboard Shortcut**
Press `Space` while on the Pomodoro page to start/pause the timer without touching the mouse.

**Auto-advance**
Optional setting (in Settings) to automatically start the next session after a break ends.

---

### ◱ Study Logs

Manual session logging for study time that happens outside the Pomodoro timer — textbook reading, lecture watching, problem-solving sessions, etc.

**Add Session Form**
Fields: Date (pre-filled to today), Subject (dropdown of all DA units), Hours Studied, Pomodoro Sessions, and Notes (for what you covered, difficulties, key takeaways).

**Session History Table**
All logged sessions in reverse-chronological order. Each row shows date, subject, hours, pomodoros, and notes. A delete button on each row removes the entry.

**Quick Log**
The "+ Quick Log" button in the top bar from any page jumps straight to the Logs page.

---

### 📝 Study Notes Hub

Structured note-taking organized by GATE DA unit.

**Quick Scratchpad**
A free-form textarea at the top for capturing anything quickly — formulas, reminders, ideas. Auto-saves as you type.

**Unit-organized Notes**
A left sidebar lists all 8 units with a badge showing how many notes you have for each. Clicking a unit filters the notes editor to that unit.

**Adding Notes**
A multi-line textarea lets you write notes of any length. Click "+ Add" to save. Notes support multiple lines and are stored with the date/time added and a unit tag.

**Note Cards**
Each saved note appears as a card with the text, timestamp, and unit tag. Hovering reveals a delete button (✕) in the top-right corner of the card.

---

### 🎯 Weekly Goals

Set and track targets for the week. Useful for holding yourself accountable to a consistent study schedule.

**Setting Goals**
Four numeric inputs: Study Hours, Topics to Complete, Pomodoros, and Mock Tests. Click "💾 Save Goals" to store them for the current week.

**Week Navigation**
← and → arrows let you navigate to previous or future weeks. The label shows "This Week", "Last Week", or the ISO week number.

**Progress Rings**
Four animated circular progress rings (one per goal) show your current progress vs target as a percentage. Rings turn green when you hit 100%.

**Past Weeks History**
A list of all previous weeks where you set goals, showing the targets you set for each.

---

### 📋 PYQ Tracker

Track your attempt status on Previous Year Questions for GATE DA.

**Year Tabs**
Switch between available years (2024, 2025). Each tab shows 65 questions (matching the official GATE DA format).

**Stats Bar**
Four live counters: Solved, Correct, Wrong, and Accuracy % — calculated from your current selections.

**Question List**
Each question row shows:
- Question number
- Topic label (editable — see below)
- Three status buttons: **Correct** (green), **Wrong** (red), **Review** (blue)
- A difficulty tag: **EASY / MEDIUM / HARD** — click to cycle through them

**✏️ Edit Topics Mode**
Click the "✏️ Edit Topics" button to enter edit mode. Every question gets:
- An editable text field for the topic name — rename any question to match the actual question you're tracking
- A notes field to add your own annotations (e.g. "confusing wording", "revisit Bayes", "formula error")

Notes appear in normal view below the topic name. All edits save instantly to localStorage.

---

### ◫ Analytics

A data visualization page for understanding your study patterns over time.

**Activity Heatmap**
GitHub-style heatmap of your last 364 days. Each cell represents one day; color intensity (4 levels) reflects total study hours that day, combining both manual logs and Pomodoro sessions.

**Time Summary**
Three cards: Today's hours, This Week's hours, This Month's hours.

**Last 7 Days Bar Chart**
A bar chart of daily study hours for the past week.

**Subject-wise Study Time Chart**
A bar chart showing total hours logged per subject, sorted descending. Shows up to the top 7 subjects.

**Subject Completion %**
A vertical list of all subjects with individual progress bars showing what percentage of each subject's topics you've completed.

**Pomodoro Stats**
Four cards: Total Pomos, Focus Hours (from pomodoro sessions), Best Streak, Avg Daily Hours.

**Milestones**
Five achievement markers: 1st Topic Done, 25% Complete, 50% Complete, 75% Complete, 10 Pomodoros. Each shows "✓ Reached" or "Pending".

---

### 📈 Mock Test Hub

Log and track your performance on full-length practice tests.

**Log New Result**
Form fields: Test Name, Date, Marks (out of 100), Correct, Incorrect, and Time taken. Click "Add Result" to log it.

**Readiness Curve**
An SVG line chart that plots your scores over time. Shows your score trend across all logged tests. Requires at least 2 results to render.

**Historical Performance Table**
All mock test results in a table: Date, Test Name, Score, Accuracy %, Time, and a delete button.

---

### 🗴 Formula Deck (Flashcards)

Spaced Repetition System (SRS) powered flashcards for active recall of key GATE DA formulas and concepts.

**Adding Cards**
Two fields: Front (concept name, e.g. "Bayes Theorem") and Back (the formula or answer). Click "Add to Deck."

**Reviewing Cards**
Cards display face-down. Click a card to flip it and see the answer. The back of each card has four SRS rating buttons:
- **Again** — forgot completely, review tomorrow
- **Hard** — struggled, short interval
- **Good** — knew it with effort, normal interval
- **Easy** — knew it instantly, longer interval

**SM-2 Algorithm**
The scheduling follows the SM-2 spaced repetition algorithm — the same one used by Anki. The interval between reviews grows based on your rating. Easy answers get progressively longer gaps; wrong answers reset to 1 day.

**Due Count Badge**
The sidebar shows a red badge next to "Formula Deck" with the number of cards due for review today.

**Due Card Highlighting**
Cards due today are highlighted with a red "DUE" badge in the top-left corner.

---

### ⚙️ Settings

**Notifications**
Toggle browser notifications for when a Pomodoro session ends. Triggers a permission request the first time it's enabled.

**Sound on Timer End**
Toggle an audio beep when a focus session completes (uses Web Audio API — no external files needed).

**Auto-advance Pomodoro**
Automatically start the next session (focus → break → focus) without clicking anything.

**Visual Theme**
Eight themes to choose from:
| Theme | Description |
|---|---|
| Desert (Default) | Warm beige and terracotta |
| Midnight Dark | Pure black with purple accents |
| Pure Light | Clean white minimal |
| Cyber Neon | Black with cyan/magenta glow |
| Forest Teal | Deep teal and earthy green |
| Royal Purple | Rich violet and magenta |
| Warm Amber | Golden amber tones |
| Sunset Coral | Warm coral and rust |

**Exam Dates**
Set your **Prep Start Date** and **GATE Exam Date** using date pickers. All countdowns, days-left calculations, and pace metrics use these dates. A preview line shows the formatted dates and days remaining.

**The Forge Shop**
Spend Forge Coins (earned by completing topics and sessions) on:
- **Streak Shield** (50 coins) — protects your streak for one missed day

**Data Management**
- **Force Sync** — re-reads localStorage in case another browser tab made changes
- **Import JSON** — restore a backup file; shows a preview with record counts before confirming. Two modes: *Replace All* (overwrites current data) or *Merge Data* (adds new entries without removing existing ones)
- **Export JSON** — downloads a timestamped backup of everything
- **Reset Weekly Goals** — clears all goal targets (preserves study data)
- **Reset All Data** — factory reset with two confirmation prompts. Clears all localStorage, resets in-memory state, and reloads

---

### 🧮 GATE Virtual Calculator

A floating, draggable calculator accessible from any page via the 🧮 button in the bottom-right corner. Supports basic arithmetic (add, subtract, multiply, divide) with a sub-result display line. Drag it by its header to reposition it anywhere on screen.

---

### 🌙 Focus Mode

A full-screen distraction-free overlay triggered by the 🌙 floating button (bottom-right) or `Ctrl+Shift+F`.

Shows:
- The live Pomodoro timer in large display font
- Current mode label (FOCUS / SHORT BREAK / LONG BREAK)
- Current subject being studied
- Three stats: Pomos Today, Day Streak, Level

Press `Esc` or click "Exit Focus Mode" to return to normal view. The timer keeps running in the background.

---

## Data & Privacy

- **100% local** — no accounts, no servers, no analytics, no tracking
- All data lives in your browser's `localStorage` under the key `studyforge_v1`
- The timer settings are stored separately under `sf_timer`
- Incognito / private browsing mode will not persist data between sessions
- Export your data regularly via `Settings → Export JSON` to avoid browser storage clears wiping your progress
- The app uses cross-tab sync: if you have StudyForge open in two tabs, state changes in one are detected and applied in the other

---

## Tech Stack

| Layer | Technology |
|---|---|
| Structure | Vanilla HTML5 |
| Styling | Vanilla CSS3 (CSS custom properties for theming) |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts (Sora, JetBrains Mono, Fraunces) |
| Charts | SVG (hand-drawn, no library) |
| Storage | Browser `localStorage` |
| Audio | Web Audio API |
| Notifications | Web Notifications API |

Zero npm packages. Zero build steps. Zero dependencies to install. One file.

---

## Screenshots

> *Add screenshots here after upload. Suggested captures:*
> - Dashboard with countdown widget
> - GATE DA Unit Tracker with subtopics expanded
> - Pomodoro timer running in focus mode
> - PYQ Tracker in edit mode
> - Analytics heatmap
> - Settings page with exam date editor

---

## Roadmap

Planned improvements for future versions:

- [ ] Mobile-responsive layout
- [ ] PWA support (installable offline app)
- [ ] GATE CS 2027 tracker module
- [ ] Cloud sync via GitHub Gist or Notion API
- [ ] AI-powered weak area detection using Claude API
- [ ] Custom syllabus builder (for non-GATE exams)
- [ ] Export progress report as PDF
- [ ] Dark mode auto-detect from system preference

---

## Contributing

This is a personal project but PRs are welcome. Since it's a single HTML file, the contribution flow is simple:

1. Fork the repo
2. Edit `StudyForge_Tracker_V3.html`
3. Test in a browser (no build needed)
4. Open a PR with a clear description of what you changed and why

**Conventions:**
- Keep everything in one file
- No external JS/CSS dependencies (fonts from Google Fonts are the only exception)
- New features should degrade gracefully if their localStorage keys are missing
- Always add null checks before accessing DOM elements by ID

---

## License

MIT License. Free to use, modify, and distribute. If you build something cool on top of this, a shoutout would be appreciated but is not required.

---

<div align="center">

Built for GATE DA 2027 aspirants who want to track smarter, not harder.

**Good luck. You've got this. 🎯**

</div>
