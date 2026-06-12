/* app.js — Main application logic, router, and event controllers */

document.addEventListener("DOMContentLoaded", () => {
    // 0. Merge enrichment content (scenarios, exercises, enriched theory/quizzes)
    if (typeof GIT_CONTENT_EXTRA !== "undefined") {
        GIT_ROADMAP_DATA.forEach(day => {
            const extra = GIT_CONTENT_EXTRA[day.day];
            if (!extra) return;
            if (extra.theory) day.theory = extra.theory;
            if (extra.scenario) day.scenario = extra.scenario;
            if (extra.exercises) day.exercises = extra.exercises;
            if (extra.quiz && extra.quiz.length) {
                day.quiz = (day.quiz || []).concat(extra.quiz);
            }
        });
    }

    // 1. Initialize core system components
    // (Live visualizer and terminal simulator removed — this is now a content-focused course.)

    // 2. Application State Variables
    let currentDay = 0; // start on the environment-setup lesson
    let osMode = "mac"; // 'mac' or 'win'
    let activeTab = "theory"; // 'scenario', 'theory', 'practice', 'exercises', or 'quiz'
    let completedDays = JSON.parse(localStorage.getItem("git_completed_days")) || [];
    let quizProgress = JSON.parse(localStorage.getItem("git_quiz_progress")) || {}; // day -> quiz state

    // 3. Select DOM elements
    const sidebarNav = document.getElementById("sidebarNav");
    const progressFill = document.getElementById("progress-fill");
    const progressPercent = document.getElementById("progress-percent");
    const progressDays = document.getElementById("progress-days");
    const currentPhaseBadge = document.getElementById("current-phase-badge");
    const currentDayTitle = document.getElementById("current-day-title");
    const scenarioContent = document.getElementById("scenarioContent");
    const theoryContent = document.getElementById("theoryContent");
    const practiceStepsContainer = document.getElementById("practiceStepsContainer");
    const exercisesContainer = document.getElementById("exercisesContainer");
    const exerciseCountBadge = document.getElementById("exerciseCountBadge");
    const quizContainer = document.getElementById("quizContainer");
    const quizDot = document.getElementById("quizDot");

    // Action handlers
    const btnThemeToggle = document.getElementById("btnThemeToggle");
    const sidebarToggle = document.getElementById("sidebarToggle");
    const appSidebar = document.getElementById("appSidebar");
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const sidebarBackdrop = document.getElementById("sidebarBackdrop");

    // Tab buttons
    const tabScenarioBtn = document.getElementById("tabScenarioBtn");
    const tabTheoryBtn = document.getElementById("tabTheoryBtn");
    const tabPracticeBtn = document.getElementById("tabPracticeBtn");
    const tabExercisesBtn = document.getElementById("tabExercisesBtn");
    const tabQuizBtn = document.getElementById("tabQuizBtn");

    // 4. Initial Launch Sequence
    try {
        initApp();
    } catch (err) {
        console.error("initApp error:", err);
        const errDiv = document.createElement("div");
        errDiv.style.position = "fixed";
        errDiv.style.bottom = "10px";
        errDiv.style.right = "10px";
        errDiv.style.backgroundColor = "darkred";
        errDiv.style.color = "white";
        errDiv.style.padding = "20px";
        errDiv.style.zIndex = "999999";
        errDiv.style.fontFamily = "monospace";
        errDiv.style.whiteSpace = "pre-wrap";
        errDiv.innerHTML = "<strong>initApp Error:</strong> " + err.message + "\nStack:\n" + err.stack;
        document.body.appendChild(errDiv);
    }

    function initApp() {
        // Load saved theme
        const savedTheme = localStorage.getItem("git_theme") || "dark";
        if (savedTheme === "light") {
            document.body.classList.remove("dark-theme");
            document.body.classList.add("light-theme");
            btnThemeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }

        // Build sidebar curriculum
        buildSidebarCurriculum();
        
        // Show current day details
        loadDay(currentDay);

        // Update top-level progress indicators
        updateProgressIndicators();

        // Register core event handlers
        setupEventListeners();
    }

    // 5. Sidebar and Navigation Methods
    function buildSidebarCurriculum() {
        sidebarNav.innerHTML = "";

        const phases = [
            { name: "Getting Started", days: [0, 0] },
            { name: "Phase 1 — Beginner", days: [1, 10] },
            { name: "Phase 2 — Intermediate", days: [11, 20] },
            { name: "Phase 3 — Advanced", days: [21, 30] }
        ];

        phases.forEach(phase => {
            const section = document.createElement("div");
            section.className = "nav-phase-section";

            const title = document.createElement("div");
            title.className = "nav-phase-title";
            title.innerHTML = `<i class="fa-solid fa-graduation-cap"></i> <span>${phase.name}</span>`;
            section.appendChild(title);

            for (let d = phase.days[0]; d <= phase.days[1]; d++) {
                const dayData = GIT_ROADMAP_DATA.find(x => x.day === d);
                if (!dayData) continue;

                const dayLink = document.createElement("a");
                dayLink.className = "day-link-item";
                if (d === currentDay) dayLink.classList.add("active");
                if (completedDays.includes(d)) dayLink.classList.add("completed");
                dayLink.setAttribute("data-day", d);

                const checkIcon = completedDays.includes(d) ? "fa-circle-check" : "fa-circle";
                const numberLabel = d === 0 ? "Setup" : `Lesson ${d}`;
                dayLink.innerHTML = `
                    <span class="check-indicator"><i class="fa-regular ${checkIcon}"></i></span>
                    <span class="day-number-badge">${numberLabel}</span>
                    <span class="day-text">${dayData.title}</span>
                `;

                dayLink.addEventListener("click", (e) => {
                    e.preventDefault();
                    document.querySelectorAll(".day-link-item").forEach(l => l.classList.remove("active"));
                    dayLink.classList.add("active");
                    loadDay(d);
                });

                section.appendChild(dayLink);
            }

            sidebarNav.appendChild(section);
        });
    }

    function loadDay(dayNumber) {
        currentDay = dayNumber;
        const dayData = GIT_ROADMAP_DATA.find(x => x.day === dayNumber);
        if (!dayData) return;

        // Phase and Title
        currentPhaseBadge.textContent = dayData.day === 0
            ? "Getting Started — Setup"
            : `${dayData.phase} Phase — Lesson ${dayData.day}`;
        currentDayTitle.textContent = dayData.title;

        // Scenario Tab Content
        buildScenario(dayData);

        // Theory Tab Content
        theoryContent.innerHTML = dayData.theory;

        // Practical Tab Content
        buildPracticalSteps(dayData.practical);

        // Exercises Tab Content
        buildExercises(dayData);

        // Quiz Tab Content
        buildQuiz(dayData);

        // Set Tab to Scenario (story-first learning flow)
        switchTab("scenario");
    }

    // 5b. Real-World Scenario Renderer
    function buildScenario(dayData) {
        if (!scenarioContent) return;
        if (!dayData.scenario) {
            scenarioContent.innerHTML = `
                <div class="scenario-empty">
                    <i class="fa-solid fa-clapperboard"></i>
                    <p>A real-world scenario for this topic is coming soon. Head to the Theory tab to begin.</p>
                </div>`;
            return;
        }
        scenarioContent.innerHTML = `
            <div class="scenario-banner">
                <i class="fa-solid fa-clapperboard"></i>
                <div>
                    <span class="scenario-kicker">Real-World DevOps Scenario</span>
                    <h2 class="scenario-day-title">${dayData.day === 0 ? "Setup" : "Lesson " + dayData.day}: ${dayData.title}</h2>
                </div>
            </div>
            <div class="scenario-body">${dayData.scenario}</div>
            <div class="scenario-cta">
                <i class="fa-solid fa-arrow-right"></i>
                <span>Now learn how it works in <strong>Theory</strong>, then master it in <strong>Exercises</strong>.</span>
            </div>`;
    }

    // 5c. Hands-on Exercises Renderer
    function buildExercises(dayData) {
        if (!exercisesContainer) return;
        const exercises = dayData.exercises || [];

        if (exerciseCountBadge) {
            exerciseCountBadge.textContent = exercises.length ? exercises.length : "";
        }

        if (!exercises.length) {
            exercisesContainer.innerHTML = `
                <div class="scenario-empty">
                    <i class="fa-solid fa-dumbbell"></i>
                    <p>Hands-on exercises for this topic are coming soon.</p>
                </div>`;
            return;
        }

        exercisesContainer.innerHTML = "";
        exercises.forEach((ex, idx) => {
            const solution = osMode === "win" && ex.solutionWin ? ex.solutionWin : ex.solution;
            const card = document.createElement("div");
            card.className = "exercise-card";

            const difficulty = ex.difficulty || "Practice";
            card.innerHTML = `
                <div class="exercise-header">
                    <span class="exercise-number">Exercise ${idx + 1}</span>
                    <span class="exercise-difficulty diff-${difficulty.toLowerCase()}">${difficulty}</span>
                </div>
                <div class="exercise-task">${ex.task}</div>
                ${ex.hint ? `<div class="exercise-hint"><i class="fa-regular fa-lightbulb"></i> <span>Hint: ${ex.hint}</span></div>` : ""}
                <div class="exercise-actions">
                    <button class="exercise-reveal-btn"><i class="fa-solid fa-eye"></i> Reveal Solution</button>
                </div>
                <div class="exercise-solution" style="display:none;">
                    <div class="exercise-solution-label"><i class="fa-solid fa-check-double"></i> Solution</div>
                    <div class="exercise-code-container">
                        <code class="exercise-code">${solution}</code>
                        <div class="exercise-code-buttons">
                            <button class="exercise-copy-btn" title="Copy"><i class="fa-regular fa-copy"></i></button>
                        </div>
                    </div>
                    ${ex.outcome ? `<div class="exercise-outcome"><strong>Expected result:</strong> ${ex.outcome}</div>` : ""}
                </div>
            `;

            const revealBtn = card.querySelector(".exercise-reveal-btn");
            const solutionEl = card.querySelector(".exercise-solution");
            revealBtn.addEventListener("click", () => {
                const isHidden = solutionEl.style.display === "none";
                solutionEl.style.display = isHidden ? "block" : "none";
                revealBtn.innerHTML = isHidden
                    ? '<i class="fa-solid fa-eye-slash"></i> Hide Solution'
                    : '<i class="fa-solid fa-eye"></i> Reveal Solution';
            });

            const copyBtn = card.querySelector(".exercise-copy-btn");
            if (copyBtn) {
                copyBtn.addEventListener("click", () => {
                    navigator.clipboard.writeText(solution);
                    const i = copyBtn.querySelector("i");
                    i.className = "fa-solid fa-check";
                    setTimeout(() => i.className = "fa-regular fa-copy", 1000);
                });
            }

            exercisesContainer.appendChild(card);
        });
    }

    function buildPracticalSteps(steps) {
        practiceStepsContainer.innerHTML = "";
        if (!steps || steps.length === 0) {
            practiceStepsContainer.innerHTML = "<p class='nav-loading'>No practical steps for today.</p>";
            return;
        }

        steps.forEach((step, idx) => {
            const card = document.createElement("div");
            card.className = "step-card";
            if (idx === 0) card.classList.add("active");

            const command = osMode === "mac" ? step.mac : step.win;

            card.innerHTML = `
                <div class="step-header">
                    <span class="step-number">Step ${idx + 1}</span>
                </div>
                <div class="step-desc">${step.desc}</div>
                <div class="step-code-container">
                    <span class="step-code">${command}</span>
                    <button class="step-code-btn" title="Copy Command"><i class="fa-regular fa-copy"></i></button>
                </div>
            `;

            // Copy listener
            card.querySelector(".step-code-btn").addEventListener("click", (e) => {
                e.stopPropagation();
                navigator.clipboard.writeText(command);
                const copyIcon = card.querySelector(".step-code-btn i");
                copyIcon.className = "fa-solid fa-check";
                setTimeout(() => copyIcon.className = "fa-regular fa-copy", 1000);
            });

            practiceStepsContainer.appendChild(card);
        });
    }

    // 6. Interactive Quiz System
    function buildQuiz(dayData) {
        quizContainer.innerHTML = "";
        
        // Show status dot warning if day is not completed
        const isCompleted = completedDays.includes(dayData.day);
        quizDot.className = "quiz-status-dot " + (isCompleted ? "success active" : "active");

        const quizState = quizProgress[dayData.day] || { currentQuestionIdx: 0, answers: {}, finished: false };

        if (!dayData.quiz || dayData.quiz.length === 0) {
            quizContainer.innerHTML = `
                <div class="quiz-result-screen">
                    <i class="fa-solid fa-circle-check quiz-result-icon"></i>
                    <h2 class="quiz-result-title">Day Completed!</h2>
                    <p class="quiz-result-desc">There is no test for this day. Complete the practical work and proceed.</p>
                    <button class="quiz-submit-btn" id="btnUnlockDay" style="margin: 0 auto;">Unlock Next Day</button>
                </div>
            `;
            
            document.getElementById("btnUnlockDay").addEventListener("click", () => {
                markDayCompleted(dayData.day);
            });
            return;
        }

        if (quizState.finished) {
            renderQuizResults(dayData);
            return;
        }

        const qIdx = quizState.currentQuestionIdx;
        const questionData = dayData.quiz[qIdx];

        const card = document.createElement("div");
        card.className = "quiz-question-card";

        // Question header
        const qHeader = document.createElement("div");
        qHeader.className = "quiz-header-card";
        qHeader.innerHTML = `
            <h2>Question ${qIdx + 1} of ${dayData.quiz.length}</h2>
            <p>Select the correct command or git behavior from the options below.</p>
        `;
        card.appendChild(qHeader);

        // Question text
        const qText = document.createElement("div");
        qText.className = "question-text";
        qText.innerHTML = questionData.question;
        card.appendChild(qText);

        // Options
        const optionsList = document.createElement("div");
        optionsList.className = "quiz-options-list";

        let selectedOptionIdx = null;

        questionData.options.forEach((opt, idx) => {
            const optionRow = document.createElement("div");
            optionRow.className = "quiz-option";
            optionRow.innerHTML = `
                <span class="option-marker">${String.fromCharCode(65 + idx)}</span>
                <span class="option-text">${opt}</span>
            `;

            optionRow.addEventListener("click", () => {
                if (card.querySelector(".quiz-explanation-card")) return; // Question answered already
                
                document.querySelectorAll(".quiz-option").forEach(o => o.classList.remove("selected"));
                optionRow.classList.add("selected");
                selectedOptionIdx = idx;
                submitBtn.disabled = false;
            });

            optionsList.appendChild(optionRow);
        });

        card.appendChild(optionsList);

        // Feedback / Explanation placeholder
        const explanationContainer = document.createElement("div");
        card.appendChild(explanationContainer);

        // Footer Actions
        const footer = document.createElement("div");
        footer.className = "quiz-footer";
        footer.innerHTML = `
            <span class="quiz-progress-text">Step ${qIdx + 1} of ${dayData.quiz.length}</span>
            <button class="quiz-submit-btn" id="quizSubmitBtn" disabled>
                <span>Submit Answer</span> <i class="fa-solid fa-arrow-right"></i>
            </button>
        `;
        card.appendChild(footer);

        quizContainer.appendChild(card);

        const submitBtn = document.getElementById("quizSubmitBtn");
        submitBtn.addEventListener("click", () => {
            const hasExplanation = card.querySelector(".quiz-explanation-card");
            
            if (hasExplanation) {
                // Advance to next question or finish
                if (qIdx + 1 < dayData.quiz.length) {
                    quizState.currentQuestionIdx++;
                    quizProgress[dayData.day] = quizState;
                    localStorage.setItem("git_quiz_progress", JSON.stringify(quizProgress));
                    buildQuiz(dayData);
                } else {
                    quizState.finished = true;
                    quizProgress[dayData.day] = quizState;
                    localStorage.setItem("git_quiz_progress", JSON.stringify(quizProgress));
                    renderQuizResults(dayData);
                }
            } else {
                // Validate selected answer
                const optionRows = document.querySelectorAll(".quiz-option");
                optionRows.forEach(row => row.classList.remove("selected"));
                
                const isCorrect = selectedOptionIdx === questionData.answer;
                
                optionRows[selectedOptionIdx].classList.add(isCorrect ? "correct" : "incorrect");
                optionRows[questionData.answer].classList.add("correct");

                // Render Explanation
                explanationContainer.innerHTML = `
                    <div class="quiz-explanation-card">
                        <i class="fa-solid ${isCorrect ? 'fa-circle-check' : 'fa-circle-xmark'}" style="color: ${isCorrect ? 'var(--color-success)' : 'var(--color-error)'}"></i>
                        <div class="explanation-text">
                            <div class="explanation-title">${isCorrect ? "Correct!" : "Incorrect Answer"}</div>
                            ${questionData.explanation}
                        </div>
                    </div>
                `;

                // Update state
                quizState.answers[qIdx] = isCorrect;
                quizProgress[dayData.day] = quizState;
                localStorage.setItem("git_quiz_progress", JSON.stringify(quizProgress));

                submitBtn.querySelector("span").textContent = (qIdx + 1 < dayData.quiz.length) ? "Next Question" : "View Results";
            }
        });
    }

    function renderQuizResults(dayData) {
        const quizState = quizProgress[dayData.day];
        const totalQuestions = dayData.quiz.length;
        const correctAnswers = Object.values(quizState.answers).filter(Boolean).length;
        const passed = correctAnswers === totalQuestions; // Require perfect score to pass

        quizContainer.innerHTML = `
            <div class="quiz-result-screen">
                <i class="fa-solid ${passed ? 'fa-award quiz-result-icon' : 'fa-triangle-exclamation quiz-result-icon'}" style="color: ${passed ? 'var(--color-success)' : 'var(--color-warning)'}"></i>
                <h2 class="quiz-result-title">${passed ? 'Lesson Mastered!' : 'Keep Practicing!'}</h2>
                <p class="quiz-result-desc">You scored ${correctAnswers} out of ${totalQuestions} correct.</p>
                <div style="display: flex; gap: 12px; justify-content: center;">
                    ${!passed ? '<button class="header-action-btn" id="btnRetryQuiz"><i class="fa-solid fa-rotate-right"></i> Try Again</button>' : ''}
                    <button class="quiz-submit-btn" id="btnUnlockNextDay">Unlock Next Lesson</button>
                </div>
            </div>
        `;

        if (!passed) {
            document.getElementById("btnRetryQuiz").addEventListener("click", () => {
                quizProgress[dayData.day] = { currentQuestionIdx: 0, answers: {}, finished: false };
                localStorage.setItem("git_quiz_progress", JSON.stringify(quizProgress));
                buildQuiz(dayData);
            });
        }

        document.getElementById("btnUnlockNextDay").addEventListener("click", () => {
            markDayCompleted(dayData.day);
        });
    }

    function markDayCompleted(dayNumber) {
        if (!completedDays.includes(dayNumber)) {
            completedDays.push(dayNumber);
            localStorage.setItem("git_completed_days", JSON.stringify(completedDays));
        }

        // Celebrate! Update sidebar indicators
        buildSidebarCurriculum();
        updateProgressIndicators();

        // Advance to next lesson if available
        if (dayNumber < 30) {
            loadDay(dayNumber + 1);
        } else {
            alert("🎉 Congratulations! You've completed the entire Git & GitHub course — from total beginner to advanced. Go at your own pace and revisit any lesson anytime!");
        }
    }

    function updateProgressIndicators() {
        const total = 30;
        const completed = completedDays.filter(d => d >= 1).length; // Day 0 (setup) isn't counted toward the 30
        const percent = Math.round((completed / total) * 100);

        progressFill.style.width = percent + "%";
        progressPercent.textContent = percent + "%";
        progressDays.textContent = `${completed}/${total} Lessons Complete`;
    }

    // 7. General Utility Methods
    function setupEventListeners() {
        // Tab switching
        tabScenarioBtn.addEventListener("click", () => switchTab("scenario"));
        tabTheoryBtn.addEventListener("click", () => switchTab("theory"));
        tabPracticeBtn.addEventListener("click", () => switchTab("practice"));
        tabExercisesBtn.addEventListener("click", () => switchTab("exercises"));
        tabQuizBtn.addEventListener("click", () => switchTab("quiz"));

        // Theme Toggle
        btnThemeToggle.addEventListener("click", () => {
            if (document.body.classList.contains("dark-theme")) {
                document.body.classList.remove("dark-theme");
                document.body.classList.add("light-theme");
                btnThemeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
                localStorage.setItem("git_theme", "light");
            } else {
                document.body.classList.remove("light-theme");
                document.body.classList.add("dark-theme");
                btnThemeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
                localStorage.setItem("git_theme", "dark");
            }
        });

        // Sidebar Toggle Collapse
        sidebarToggle.addEventListener("click", () => {
            if (window.matchMedia("(max-width: 768px)").matches) {
                closeMobileSidebar();
            } else {
                appSidebar.classList.toggle("collapsed");
            }
        });

        // Mobile drawer: open via hamburger, close via backdrop or nav click
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener("click", openMobileSidebar);
        }
        if (sidebarBackdrop) {
            sidebarBackdrop.addEventListener("click", closeMobileSidebar);
        }
        sidebarNav.addEventListener("click", (e) => {
            if (e.target.closest(".day-link-item") &&
                window.matchMedia("(max-width: 768px)").matches) {
                closeMobileSidebar();
            }
        });
    }

    function openMobileSidebar() {
        appSidebar.classList.add("mobile-open");
        if (sidebarBackdrop) sidebarBackdrop.classList.add("visible");
    }

    function closeMobileSidebar() {
        appSidebar.classList.remove("mobile-open");
        if (sidebarBackdrop) sidebarBackdrop.classList.remove("visible");
    }

    function switchTab(tabName) {
        activeTab = tabName;
        
        document.querySelectorAll(".pane-tab-btn").forEach(btn => btn.classList.remove("active"));
        document.querySelectorAll(".tab-pane").forEach(pane => pane.classList.remove("active"));

        if (tabName === "scenario") {
            tabScenarioBtn.classList.add("active");
            document.getElementById("pane-scenario").classList.add("active");
        } else if (tabName === "theory") {
            tabTheoryBtn.classList.add("active");
            document.getElementById("pane-theory").classList.add("active");
        } else if (tabName === "practice") {
            tabPracticeBtn.classList.add("active");
            document.getElementById("pane-practice").classList.add("active");
        } else if (tabName === "exercises") {
            tabExercisesBtn.classList.add("active");
            document.getElementById("pane-exercises").classList.add("active");
        } else if (tabName === "quiz") {
            tabQuizBtn.classList.add("active");
            document.getElementById("pane-quiz").classList.add("active");
        }
    }
});
