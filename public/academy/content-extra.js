/* content-extra.js — Real-world DevOps scenarios + hands-on exercises.
 *
 * This file augments GIT_ROADMAP_DATA (defined in data.js) without modifying it.
 * For each day we add:
 *   - scenario : an HTML string telling a relatable "day in the life of a DevOps
 *                engineer" story so learners understand WHY the topic matters.
 *   - exercises: an array of hands-on challenges. Each has:
 *        task        -> what to do (HTML allowed)
 *        difficulty  -> "Easy" | "Practice" | "Medium" | "Hard"
 *        hint        -> optional nudge
 *        solution    -> the command(s) to run (mac/linux)
 *        solutionWin -> optional Windows variant
 *        outcome     -> what success looks like
 *        action      -> optional visualizer/terminal action key (reuses data.js keys)
 *        runnable    -> set false to hide the "Run in Simulator" button
 *
 * For Days 16-30 we ALSO ship an enriched `theory` (replaces the thin original)
 * and extra `quiz` questions (appended to the originals) so the Advanced phase
 * is as deep as the Beginner phase.
 *
 * app.js merges all of this into GIT_ROADMAP_DATA at startup.
 */

const GIT_CONTENT_EXTRA = {

    /* ===================================================================
       DAY 1 — What is Git & Version Control?
       =================================================================== */
    1: {
        theory: `
            <h2>What is Git — Explained Like You're Brand New</h2>
            <p>Imagine writing a school essay. You save <code>essay.doc</code>, then <code>essay_v2.doc</code>, then <code>essay_final.doc</code>, then <code>essay_final_REALLY.doc</code>. Soon you have no idea which one is the latest. <strong>Git</strong> solves exactly this problem &mdash; for any project, and for whole teams at once.</p>
            <p>Git is a tool that lives on your computer and quietly remembers <em>every version</em> of your files. At any moment you can look back, compare, or rewind to an earlier version. Nothing is ever truly lost.</p>
            <h3>Git vs. GitHub &mdash; they are NOT the same thing</h3>
            <ul>
                <li><strong>Git</strong> is the tool on your laptop that records changes. It works even with no internet.</li>
                <li><strong>GitHub</strong> (also GitLab, Bitbucket) is a website that stores a copy online so your team can share and back up the work.</li>
            </ul>
            <p>Think of Git as the “save history” engine, and GitHub as the shared cloud folder where the whole team meets.</p>
            <h3>Why teams love Git</h3>
            <ul>
                <li><strong>Time travel:</strong> jump back to any earlier version in seconds.</li>
                <li><strong>Teamwork:</strong> many people edit the same project without overwriting each other.</li>
                <li><strong>Clear history:</strong> see who changed what, when, and why.</li>
            </ul>
            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>One-line summary</strong>
                    <p>Git = a super-powered “undo + save history” for your whole project. GitHub = the website that shares it with your team.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>It's your first morning as a junior DevOps engineer at <strong>ShopFast</strong>, a fast-growing online store. Your team lead drops a message:</p>
            <p class="scenario-quote">"Hey! Before you touch anything, get Git set up on your laptop. Yesterday someone emailed a file called <code>final_FINAL_v3_use_this_one.zip</code> and we deployed the wrong version to production. We never want that again."</p>
            <h3>Why this matters</h3>
            <p>Before Git, teams shared code by emailing zip files or copying folders. Nobody knew which copy was the "real" one. <strong>Git</strong> is the tool that records every change, who made it, and when — so the whole team always agrees on the truth.</p>
            <ul>
                <li><strong>Git</strong> = the tool on your laptop that tracks changes.</li>
                <li><strong>GitHub</strong> = the website where the team shares those changes.</li>
            </ul>
            <p>Your first job: prove Git is installed and tell it who you are, so every change you make is correctly stamped with your name.</p>
        `,
        exercises: [
            { difficulty: "Easy", task: "Confirm Git is installed and print its version number.", solution: "git --version", action: "version", outcome: "Git prints a version like <code>git version 2.45.2</code>. If you see 'command not found', Git is not installed yet." },
            { difficulty: "Easy", task: "Tell Git your name so your commits are stamped correctly. Use your real name.", solution: 'git config --global user.name "Asha Rao"', action: "config_name", outcome: "Nothing is printed — Git silently saves it to your global config." },
            { difficulty: "Easy", task: "Set your email address (use the same one as your GitHub account).", solution: 'git config --global user.email "asha@shopfast.com"', action: "config_email", outcome: "Saved silently. GitHub uses this email to link commits to your profile." },
            { difficulty: "Practice", task: "List every Git setting currently configured on your machine to verify your name and email are correct.", solution: "git config --list", action: "config_list", outcome: "You see <code>user.name</code> and <code>user.email</code> in the output." },
            { difficulty: "Practice", task: "Set VS Code as your default Git editor (used when Git asks you to type a message).", hint: "The flag <code>--wait</code> tells Git to pause until you close the editor.", solution: 'git config --global core.editor "code --wait"', outcome: "Git will now open VS Code whenever it needs text input from you." },
            { difficulty: "Practice", task: "Create a new project folder called <code>shopfast-site</code>, move into it, and turn it into a Git repository.", solution: "mkdir shopfast-site && cd shopfast-site && git init", solutionWin: "mkdir shopfast-site && cd shopfast-site && git init", action: "init", outcome: "Git prints <code>Initialized empty Git repository in .../shopfast-site/.git/</code>. A hidden <code>.git</code> folder now exists." },
            { difficulty: "Medium", task: "Check just your configured user name (not the whole list) using a single config command.", hint: "You can read one key by naming it.", solution: "git config --global user.name", runnable: false, outcome: "Git prints only your name, e.g. <code>Asha Rao</code>." },
            { difficulty: "Medium", task: "Set the default branch name for all new repos to <code>main</code> instead of <code>master</code> (modern best practice).", solution: "git config --global init.defaultBranch main", runnable: false, outcome: "Future <code>git init</code> commands will create a <code>main</code> branch by default." }
        ]
    },

    /* ===================================================================
       DAY 2 — Your First Commit
       =================================================================== */
    2: {
        theory: `
            <h2>Saving Your Work: The Commit</h2>
            <p>A <strong>commit</strong> is a saved snapshot of your project at one moment in time &mdash; like a checkpoint in a video game. If something breaks later, you can return to any checkpoint you made.</p>
            <h3>The 3 simple steps of every save</h3>
            <ol>
                <li><strong>Edit</strong> your files like normal.</li>
                <li><strong>Stage</strong> them with <code>git add</code> &mdash; this means “include these in my next save.”</li>
                <li><strong>Commit</strong> them with <code>git commit -m "message"</code> &mdash; this writes the snapshot with a short note describing what you did.</li>
            </ol>
            <p>Every commit gets a unique ID and remembers your name, the time, and your message. That message is a gift to your future self &mdash; write it clearly.</p>
            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Remember the rhythm</strong>
                    <p>Edit &rarr; <code>git add</code> &rarr; <code>git commit</code>. A commit is a permanent checkpoint you can always return to.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>Your <code>shopfast-site</code> repo is empty. Your lead says:</p>
            <p class="scenario-quote">"Start with a README so anyone who clones the project knows what it is. Make your first commit — that's our 'save point' we can always return to."</p>
            <h3>Think of commits like checkpoints in a video game</h3>
            <p>A <strong>commit</strong> is a snapshot of your project at a moment in time. If you break something later, you can reload an earlier checkpoint. Every commit has a unique ID (a long hash like <code>a1b2c3d</code>) so it can never be confused with another.</p>
            <p>Files travel through three areas before they're safely saved:</p>
            <ul>
                <li><strong>Working Directory</strong> — where you edit files.</li>
                <li><strong>Staging Area</strong> — the "loading dock" where you pick exactly what goes into the next commit.</li>
                <li><strong>Repository</strong> — the permanent history once you commit.</li>
            </ul>
        `,
        exercises: [
            { difficulty: "Easy", task: "Create a <code>README.md</code> file with the line <code># ShopFast Website</code> inside your repo.", solution: 'echo "# ShopFast Website" > README.md', action: "create_readme", outcome: "A new file <code>README.md</code> appears in your working directory." },
            { difficulty: "Easy", task: "Check the status of your repo to see that README.md is currently 'untracked'.", solution: "git status", action: "status_untracked", outcome: "Git lists <code>README.md</code> under 'Untracked files'." },
            { difficulty: "Practice", task: "Move README.md to the staging area so it's ready to be committed.", solution: "git add README.md", action: "stage_readme", outcome: "Run <code>git status</code> again and README.md now shows as a 'change to be committed'." },
            { difficulty: "Practice", task: "Make your first commit with a clear message describing what you did.", solution: 'git commit -m "Add project README"', action: "commit_readme", outcome: "Git prints something like <code>[main (root-commit) a1b2c3d] Add project README</code>." },
            { difficulty: "Practice", task: "View the history to confirm your commit was saved.", solution: "git log --oneline", action: "log", outcome: "You see one line with a short hash and your message." },
            { difficulty: "Medium", task: "Stage ALL changed files at once (instead of naming each file), then commit them with the message <code>Add homepage</code>. First create an <code>index.html</code> file.", hint: "<code>git add .</code> stages everything in the current folder.", solution: 'echo "<h1>Home</h1>" > index.html && git add . && git commit -m "Add homepage"', action: "commit_log1", outcome: "Both files are committed in one snapshot." },
            { difficulty: "Medium", task: "You staged a file by mistake. Remove <code>index.html</code> from the staging area WITHOUT deleting the file itself.", hint: "The modern command is <code>git restore --staged</code>.", solution: "git restore --staged index.html", action: "unstage", outcome: "index.html returns to 'untracked/modified' but the file content is untouched." },
            { difficulty: "Medium", task: "Create a <code>.gitignore</code> file that tells Git to ignore a <code>secrets.env</code> file so credentials are never committed.", hint: "Each line in .gitignore is a pattern to ignore.", solution: 'echo "secrets.env" > .gitignore', runnable: false, outcome: "Even if you create <code>secrets.env</code>, <code>git status</code> will no longer show it." }
        ]
    },

    /* ===================================================================
       DAY 3 — Staging & Unstaging Changes
       =================================================================== */
    3: {
        theory: `
            <h2>The Staging Area: Your Packing Box</h2>
            <p>Before Git saves a snapshot, you choose <em>exactly</em> which changes go in. The <strong>staging area</strong> is like a packing box: you put in only the items you want to ship in this commit, and leave the rest for later.</p>
            <h3>Why not just commit everything?</h3>
            <p>Maybe you fixed a bug AND started a half-finished feature. You can stage just the bug fix, commit it cleanly, and keep working on the rest. This keeps your history tidy and easy to understand.</p>
            <h3>The key commands</h3>
            <ul>
                <li><code>git status</code> &mdash; shows what's changed and what's staged (your most-used command).</li>
                <li><code>git add file</code> &mdash; put a file in the box.</li>
                <li><code>git restore --staged file</code> &mdash; take it back out of the box (unstage).</li>
            </ul>
            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Habit to build</strong>
                    <p>Run <code>git status</code> constantly &mdash; it's like checking your mirrors while driving.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>You've been editing three files: a bug fix in <code>checkout.js</code>, a typo fix in <code>README.md</code>, and some half-finished experiment in <code>test.js</code>. Your lead says:</p>
            <p class="scenario-quote">"Only commit the bug fix and the typo fix. Keep the experiment out — it's not ready."</p>
            <h3>The staging area is your filter</h3>
            <p>Real work is messy — you often change many files at once but want to commit them in clean, logical groups. The <strong>staging area</strong> lets you hand-pick exactly which changes go into a commit, leaving the rest for later. This is how professionals keep history readable.</p>
        `,
        exercises: [
            { difficulty: "Easy", task: "Create three files: <code>checkout.js</code>, <code>readme-note.txt</code>, and <code>experiment.js</code>.", solution: 'echo "fix" > checkout.js && echo "note" > readme-note.txt && echo "wip" > experiment.js', action: "create_files", outcome: "Three untracked files appear." },
            { difficulty: "Easy", task: "Stage only <code>checkout.js</code> (not the others).", solution: "git add checkout.js", action: "stage_file1", outcome: "Only checkout.js moves to 'staged'; the other two stay untracked." },
            { difficulty: "Practice", task: "Use <code>git status</code> to confirm exactly one file is staged and two are untracked.", solution: "git status", action: "status_untracked", outcome: "checkout.js under 'to be committed'; the other two under 'untracked'." },
            { difficulty: "Practice", task: "See the difference between what's staged and the last commit.", hint: "The <code>--staged</code> flag shows staged changes.", solution: "git diff --staged", action: "diff_staged", outcome: "A diff showing the new content of checkout.js." },
            { difficulty: "Practice", task: "Also stage <code>readme-note.txt</code>, then commit both staged files together with a clear message.", solution: 'git add readme-note.txt && git commit -m "Fix checkout bug and add readme note"', action: "commit_readme", outcome: "Two files committed; experiment.js remains uncommitted." },
            { difficulty: "Medium", task: "You staged <code>experiment.js</code> by accident. Unstage it so it won't be in your next commit.", solution: "git restore --staged experiment.js", action: "unstage", outcome: "experiment.js returns to untracked without losing changes." },
            { difficulty: "Medium", task: "See the changes in your working directory that are NOT yet staged.", solution: "git diff", action: "diff_unstaged", outcome: "Shows unstaged modifications only." },
            { difficulty: "Hard", task: "You edited a tracked file but want to throw away those edits and restore it to the last committed version. Discard changes in <code>checkout.js</code>.", hint: "This is destructive — the edits are gone.", solution: "git restore checkout.js", runnable: false, outcome: "checkout.js reverts to its last committed content." }
        ]
    },

    /* ===================================================================
       DAY 4 — Viewing History
       =================================================================== */
    4: {
        theory: `
            <h2>Reading Your Project's Story</h2>
            <p>Every commit you make builds a timeline. <strong>Viewing history</strong> lets you read that timeline &mdash; who changed what, when, and why.</p>
            <h3>The commands that show the past</h3>
            <ul>
                <li><code>git log</code> &mdash; the full list of commits, newest first.</li>
                <li><code>git log --oneline</code> &mdash; the same list, one tidy line per commit.</li>
                <li><code>git show</code> &mdash; zoom into one commit to see the exact lines that changed.</li>
                <li><code>git blame file</code> &mdash; see who last touched each line (great for “why is this here?”).</li>
            </ul>
            <p>History is read-only and safe to explore &mdash; you can't break anything just by looking.</p>
            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Quick win</strong>
                    <p><code>git log --oneline</code> is your fast map of the project's journey.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>A customer reports that the "Buy Now" button broke last Tuesday. Your manager asks:</p>
            <p class="scenario-quote">"Who changed the checkout code recently, and what exactly did they change? Find out before we point fingers."</p>
            <h3>History is your time machine and your audit log</h3>
            <p>Git records every commit with the author, date, and message. As a DevOps engineer you'll constantly read history to answer "what changed, when, and why?" — during incidents, code reviews, and audits. Mastering <code>git log</code> turns chaos into a clear timeline.</p>
        `,
        exercises: [
            { difficulty: "Easy", task: "Show the full commit history of the repository.", solution: "git log", action: "log", outcome: "A list of commits with hash, author, date, and message." },
            { difficulty: "Easy", task: "Show a compact one-line-per-commit view of history.", solution: "git log --oneline", action: "log", outcome: "Each commit shown as <code>shorthash message</code>." },
            { difficulty: "Practice", task: "Show history as a visual graph including all branches.", solution: "git log --oneline --graph --all", action: "log_graph", outcome: "An ASCII graph showing commits and branch lines." },
            { difficulty: "Practice", task: "Show only the last 2 commits.", hint: "Use a number flag.", solution: "git log -2", action: "log", outcome: "Only the two most recent commits are listed." },
            { difficulty: "Practice", task: "Inspect the most recent commit in full detail, including the code changes (diff).", solution: "git show HEAD", action: "show_head", outcome: "Full commit metadata plus the diff of what changed." },
            { difficulty: "Medium", task: "Find out who last changed each line of a file (great for the 'who broke checkout' question). Run blame on <code>checkout.js</code>.", solution: "git blame checkout.js", action: "blame", outcome: "Each line is annotated with the commit hash and author who last touched it." },
            { difficulty: "Medium", task: "Search history for commits whose message contains the word <code>checkout</code>.", hint: "Use <code>--grep</code>.", solution: 'git log --grep="checkout"', runnable: false, outcome: "Only commits mentioning 'checkout' are shown." },
            { difficulty: "Hard", task: "Show all commits made by a specific author in the last week.", solution: 'git log --author="Asha" --since="1 week ago"', runnable: false, outcome: "A filtered list of that author's recent commits." }
        ]
    },

    /* ===================================================================
       DAY 5 — Branching Basics
       =================================================================== */
    5: {
        theory: `
            <h2>Branches: Parallel Universes for Your Code</h2>
            <p>A <strong>branch</strong> is a separate copy of your project where you can experiment freely without affecting the main version. Imagine writing a risky new chapter in a <em>copy</em> of your book &mdash; if it works, you merge it in; if not, you throw the copy away. The original is never at risk.</p>
            <h3>Why branches are a superpower</h3>
            <ul>
                <li>Build a new feature while the live website stays stable on <code>main</code>.</li>
                <li>Several teammates work on different branches at the same time without clashing.</li>
                <li>Branches are cheap and instant in Git &mdash; make as many as you like.</li>
            </ul>
            <h3>Everyday commands</h3>
            <ul>
                <li><code>git branch</code> &mdash; list branches.</li>
                <li><code>git switch -c feature/login</code> &mdash; create and jump to a new branch.</li>
                <li><code>git switch main</code> &mdash; go back to the main branch.</li>
            </ul>
            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Mental model</strong>
                    <p><code>main</code> = the official version. A branch = a safe sandbox to try things before they become official.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>The product team wants a new "login with Google" feature, but the live website must keep working while you build it. Your lead says:</p>
            <p class="scenario-quote">"Never build features directly on <code>main</code> — that's what customers see. Make a branch, build there, and we'll merge when it's tested."</p>
            <h3>Branches = parallel universes for your code</h3>
            <p>A <strong>branch</strong> is a separate line of work. You can experiment freely on a feature branch without affecting the stable <code>main</code> branch. This is the single most important habit in team development — every feature, every bug fix gets its own branch.</p>
        `,
        exercises: [
            { difficulty: "Easy", task: "List all branches in your repository and see which one you're on.", solution: "git branch", action: "list_branches", outcome: "The current branch is marked with a <code>*</code>." },
            { difficulty: "Easy", task: "Create a new branch called <code>feature/login</code> AND switch to it in one command.", hint: "Modern Git uses <code>git switch -c</code>.", solution: "git switch -c feature/login", action: "switch_branch", outcome: "Git prints <code>Switched to a new branch 'feature/login'</code>." },
            { difficulty: "Practice", task: "Create a login file, commit it on the feature branch.", solution: 'echo "<form>login</form>" > login.html && git add . && git commit -m "Add login page"', action: "commit_on_branch", outcome: "A new commit exists only on feature/login, not on main." },
            { difficulty: "Practice", task: "Switch back to the <code>main</code> branch and confirm <code>login.html</code> is NOT there.", solution: "git switch main", action: "switch_back_main", outcome: "main has no login.html — proving branches isolate work." },
            { difficulty: "Practice", task: "List branches again to confirm both <code>main</code> and <code>feature/login</code> exist.", solution: "git branch", action: "list_branches", outcome: "Two branches listed; the active one marked with <code>*</code>." },
            { difficulty: "Medium", task: "Rename the branch <code>feature/login</code> to <code>feature/google-login</code>.", hint: "Use <code>git branch -m</code>.", solution: "git branch -m feature/login feature/google-login", runnable: false, outcome: "The branch now has the clearer name." },
            { difficulty: "Medium", task: "Create a branch from a specific older commit instead of the current one.", hint: "Pass the commit hash as the start point.", solution: "git switch -c hotfix/old-bug a1b2c3d", runnable: false, outcome: "A new branch starts from that exact commit." },
            { difficulty: "Hard", task: "Delete a branch you no longer need (<code>feature/google-login</code>) after its work is merged.", hint: "Use <code>-d</code> for safe delete (refuses if unmerged).", solution: "git branch -d feature/google-login", runnable: false, outcome: "Git removes the branch pointer; commits remain reachable if merged." }
        ]
    },

    /* ===================================================================
       DAY 6 — Merging Branches & Conflicts
       =================================================================== */
    6: {
        theory: `
            <h2>Merging: Bringing Your Work Back Together</h2>
            <p><strong>Merging</strong> takes the work you did on a branch and combines it into another branch (usually <code>main</code>). It's how a finished feature becomes part of the real project.</p>
            <h3>What is a merge conflict?</h3>
            <p>Most merges happen automatically. But if two people changed the <em>same line</em> in the same file, Git can't guess who's right &mdash; that's a <strong>conflict</strong>. Git pauses and asks you to choose. It's not an error; it's Git being careful.</p>
            <h3>Fixing a conflict in 3 steps</h3>
            <ol>
                <li>Open the file &mdash; Git marks the clashing parts with <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code> and <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>.</li>
                <li>Edit it so it reads correctly, and delete the marker lines.</li>
                <li><code>git add</code> the file and <code>git commit</code> to finish the merge.</li>
            </ol>
            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Don't panic</strong>
                    <p>A conflict just means “two edits, same spot &mdash; please pick.” You're always in control.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>Your login feature is tested and ready. Time to combine it back into <code>main</code> so it ships. But a teammate also edited the same footer file on a different branch. Your lead warns:</p>
            <p class="scenario-quote">"When two people change the same lines, Git can't guess who's right — that's a merge conflict. Don't panic, just resolve it carefully."</p>
            <h3>Merging brings parallel work together</h3>
            <p>A <strong>merge</strong> combines another branch's commits into your current branch. Most merges are automatic. A <strong>conflict</strong> happens only when the same lines were changed in both branches — Git pauses and asks YOU to choose the final version. Learning to resolve conflicts calmly is a rite of passage.</p>
        `,
        exercises: [
            { difficulty: "Easy", task: "Make sure you're on <code>main</code> before merging anything into it.", solution: "git switch main", action: "switch_back_main", outcome: "You're on the branch that will receive the changes." },
            { difficulty: "Practice", task: "Merge the <code>feature/login</code> branch into <code>main</code>.", solution: "git merge feature/login", action: "merge_ff", outcome: "Git fast-forwards or creates a merge commit; login.html now exists on main." },
            { difficulty: "Practice", task: "Create a footer branch, change the footer there, and commit.", solution: 'git switch -c feature/footer && echo "Footer A" > footer.txt && git add . && git commit -m "Add footer A"', action: "commit_footer", outcome: "footer.txt with 'Footer A' on the feature branch." },
            { difficulty: "Medium", task: "Switch to main, change the SAME footer file differently, and commit — setting up a conflict.", solution: 'git switch main && echo "Footer B" > footer.txt && git add . && git commit -m "Add footer B"', action: "commit_conflict_main", outcome: "main and feature/footer now disagree on footer.txt." },
            { difficulty: "Medium", task: "Attempt to merge <code>feature/footer</code> into main and trigger the conflict.", solution: "git merge feature/footer", action: "merge_conflict", outcome: "Git reports <code>CONFLICT</code> and pauses the merge." },
            { difficulty: "Medium", task: "After manually editing footer.txt to the correct content, mark the conflict resolved by staging the file and completing the merge.", hint: "Stage the fixed file, then commit.", solution: 'git add footer.txt && git commit -m "Resolve footer conflict"', runnable: false, outcome: "The merge completes with your chosen content." },
            { difficulty: "Medium", task: "Merge a branch but FORCE a merge commit even if a fast-forward was possible (keeps history explicit).", hint: "Use <code>--no-ff</code>.", solution: "git merge --no-ff feature/login", runnable: false, outcome: "A dedicated merge commit is created for traceability." },
            { difficulty: "Hard", task: "A merge is going badly and you want to bail out completely and return to the pre-merge state.", solution: "git merge --abort", runnable: false, outcome: "The repo returns to exactly how it was before you started the merge." }
        ]
    },

    /* ===================================================================
       DAY 7 — Remote Repos & GitHub
       =================================================================== */
    7: {
        theory: `
            <h2>Going Online: Remotes &amp; GitHub</h2>
            <p>So far everything lives only on your laptop. A <strong>remote</strong> is a copy of your repository stored online &mdash; usually on GitHub &mdash; so your team can access it and your work is safely backed up.</p>
            <h3>The words you'll hear every day</h3>
            <ul>
                <li><strong>origin</strong> &mdash; the nickname for your main remote (the GitHub copy).</li>
                <li><strong>push</strong> &mdash; upload your local commits to GitHub.</li>
                <li><strong>pull</strong> &mdash; download teammates' commits to your laptop.</li>
                <li><strong>clone</strong> &mdash; make a full local copy of a GitHub project.</li>
            </ul>
            <h3>The typical first-time flow</h3>
            <p>Create a repo on GitHub &rarr; <code>git remote add origin &lt;url&gt;</code> &rarr; <code>git push -u origin main</code>. After that, sharing your work is just <code>git push</code>.</p>
            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Setup reminder</strong>
                    <p>You'll need a free account at <strong>github.com</strong> (or gitlab.com) to push code online. It takes two minutes to create &mdash; do this before today's exercises.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>Everything has lived only on your laptop. If your hard drive dies, the whole project is gone. Your lead says:</p>
            <p class="scenario-quote">"Push your repo to GitHub so the team can see it and it's backed up. From now on, <code>origin</code> is our shared source of truth."</p>
            <h3>Remotes connect your laptop to the team</h3>
            <p>A <strong>remote</strong> is a copy of your repository hosted elsewhere (usually GitHub). The default remote is named <code>origin</code>. You <code>push</code> your commits up to share them and <code>pull</code> to get teammates' commits down. This is the heartbeat of collaboration and the foundation of every CI/CD pipeline.</p>
        `,
        exercises: [
            { difficulty: "Easy", task: "Connect your local repo to a GitHub remote named <code>origin</code>.", solution: "git remote add origin git@github.com:shopfast/shopfast-site.git", action: "remote_add", outcome: "The remote is registered (nothing printed)." },
            { difficulty: "Easy", task: "Verify the remote was added correctly and see its URLs.", solution: "git remote -v", action: "remote_list", outcome: "Shows origin with fetch and push URLs." },
            { difficulty: "Practice", task: "Push your <code>main</code> branch to GitHub for the first time and set it to track the remote.", hint: "The <code>-u</code> flag sets up tracking so future pushes are just <code>git push</code>.", solution: "git push -u origin main", action: "remote_push", outcome: "Branch uploaded; future pushes need no arguments." },
            { difficulty: "Practice", task: "Clone an existing team repository to your machine to start contributing.", solution: "git clone git@github.com:shopfast/payments-service.git", runnable: false, outcome: "A full copy of the repo (with history) is downloaded into a new folder." },
            { difficulty: "Practice", task: "Push your <code>feature/login</code> branch to the remote so a teammate can review it.", solution: "git push origin feature/login", action: "remote_push", outcome: "The feature branch appears on GitHub." },
            { difficulty: "Medium", task: "Change a remote's URL (e.g. you switched from HTTPS to SSH).", solution: "git remote set-url origin git@github.com:shopfast/shopfast-site.git", runnable: false, outcome: "origin now points to the new URL." },
            { difficulty: "Medium", task: "List all remote branches that exist on the server.", solution: "git branch -r", runnable: false, outcome: "Shows branches like <code>origin/main</code>, <code>origin/feature/login</code>." },
            { difficulty: "Hard", task: "Remove a remote you no longer use called <code>upstream</code>.", solution: "git remote remove upstream", runnable: false, outcome: "The upstream remote connection is deleted locally." }
        ]
    },

    /* ===================================================================
       DAY 8 — git fetch vs. git pull
       =================================================================== */
    8: {
        theory: `
            <h2>Staying in Sync: Fetch vs. Pull</h2>
            <p>When teammates push new work to GitHub, your laptop doesn't know about it yet. Two commands bring you up to date &mdash; and the difference between them matters.</p>
            <h3>The key difference</h3>
            <ul>
                <li><strong>git fetch</strong> = “just <em>look</em> at what's new online.” It downloads the updates but does NOT change your files. Safe to run anytime.</li>
                <li><strong>git pull</strong> = “download AND merge it into my files right now.” It's <code>fetch</code> + <code>merge</code> in one step.</li>
            </ul>
            <p>Think of <code>fetch</code> as checking your mailbox, and <code>pull</code> as checking it AND opening the letters onto your desk.</p>
            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Safe habit</strong>
                    <p>Unsure? <code>git fetch</code> first to see what's coming, then <code>git pull</code> when you're ready.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>You come back from lunch and three teammates have pushed changes. You want to update your local copy — but carefully. Your senior engineer cautions:</p>
            <p class="scenario-quote">"Always <code>fetch</code> first to SEE what changed before you <code>pull</code> and merge it into your work. Blindly pulling has caused us painful surprises."</p>
            <h3>Fetch = look, Pull = look + apply</h3>
            <ul>
                <li><strong>git fetch</strong> downloads the latest commits from the remote but does <em>not</em> change your working files. It's a safe preview.</li>
                <li><strong>git pull</strong> = <code>fetch</code> + <code>merge</code>. It downloads AND immediately merges into your branch.</li>
            </ul>
            <p>Understanding this difference prevents accidental conflicts and lost work.</p>
        `,
        exercises: [
            { difficulty: "Easy", task: "Download the latest changes from the remote WITHOUT merging them into your files.", solution: "git fetch origin", action: "fetch", outcome: "Remote-tracking branches update; your working files stay the same." },
            { difficulty: "Practice", task: "Compare your local <code>main</code> with the remote <code>origin/main</code> to see what's new.", hint: "You can diff two branch references.", solution: "git log main..origin/main --oneline", action: "compare_commits", outcome: "Lists commits the remote has that you don't." },
            { difficulty: "Practice", task: "Now bring those changes into your branch by pulling.", solution: "git pull origin main", action: "pull", outcome: "Your branch fast-forwards or merges to include the new commits." },
            { difficulty: "Practice", task: "Pull using a rebase instead of a merge to keep history linear (no merge commits).", hint: "Add <code>--rebase</code>.", solution: "git pull --rebase origin main", runnable: false, outcome: "Your local commits are replayed on top of the latest remote commits." },
            { difficulty: "Medium", task: "Fetch updates for ALL remotes and prune branches that were deleted on the server.", hint: "<code>--prune</code> cleans up stale references.", solution: "git fetch --all --prune", runnable: false, outcome: "Everything is up to date and deleted remote branches are removed locally." },
            { difficulty: "Medium", task: "Configure Git so that <code>git pull</code> always uses rebase by default.", solution: "git config --global pull.rebase true", runnable: false, outcome: "All future pulls rebase instead of merge." },
            { difficulty: "Hard", task: "You fetched and see <code>origin/main</code> has diverged. Show a side-by-side of commits unique to each side.", solution: "git log --left-right --oneline main...origin/main", runnable: false, outcome: "Commits marked with <code>&lt;</code> (yours) and <code>&gt;</code> (theirs)." }
        ]
    },

    /* ===================================================================
       DAY 9 — Tags & Releases
       =================================================================== */
    9: {
        theory: `
            <h2>Tags: Bookmarking Important Versions</h2>
            <p>A <strong>tag</strong> is a permanent label you stick on a specific commit to mark it as special &mdash; almost always a <em>release</em> like <code>v1.0.0</code>. Unlike a branch, a tag never moves; it always points to that exact moment.</p>
            <h3>Why tags matter</h3>
            <p>When you ship version 1.0 of the ShopFast website, you tag it. Months later, if v2.0 has a bug, you can instantly find and compare against the exact code that was v1.0.</p>
            <h3>Two kinds of tags</h3>
            <ul>
                <li><strong>Lightweight</strong> &mdash; just a name on a commit.</li>
                <li><strong>Annotated</strong> (recommended) &mdash; includes who, when, and a message. Created with <code>git tag -a v1.0.0 -m "First release"</code>.</li>
            </ul>
            <p>Tags don't upload automatically &mdash; push them with <code>git push origin v1.0.0</code>.</p>
            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Versioning tip</strong>
                    <p>Most teams use <em>semantic versioning</em>: v<strong>MAJOR.MINOR.PATCH</strong> (e.g. v2.3.1).</p>
                </div>
            </div>
        `,
        scenario: `
            <p>The team is about to ship version 1.0 of the website to customers. Your release manager says:</p>
            <p class="scenario-quote">"Tag this exact commit as <code>v1.0.0</code>. When something breaks in three months, we need to know exactly which code is in production."</p>
            <h3>Tags are permanent bookmarks for releases</h3>
            <p>A <strong>tag</strong> marks a specific commit as important — almost always a release version. Unlike branches, tags don't move. <code>v1.0.0</code> will forever point to the same commit. Combined with <strong>Semantic Versioning</strong> (MAJOR.MINOR.PATCH), tags make rollbacks and deployments reliable.</p>
        `,
        exercises: [
            { difficulty: "Easy", task: "Create a lightweight tag named <code>v0.1-beta</code> on the current commit.", solution: "git tag v0.1-beta", action: "tag_lightweight", outcome: "A simple tag is created (no extra metadata)." },
            { difficulty: "Practice", task: "Create an annotated tag <code>v1.0.0</code> with a release message (the recommended kind for releases).", hint: "Annotated tags use <code>-a</code> and <code>-m</code>.", solution: 'git tag -a v1.0.0 -m "First public release"', action: "tag_annotated", outcome: "A full tag object with author, date, and message is created." },
            { difficulty: "Practice", task: "List all tags in the repository.", solution: "git tag", action: "tag_list", outcome: "Shows v0.1-beta and v1.0.0." },
            { difficulty: "Practice", task: "Push the <code>v1.0.0</code> tag to GitHub (tags are NOT pushed automatically).", solution: "git push origin v1.0.0", action: "tag_push", outcome: "The tag appears under Releases/Tags on GitHub." },
            { difficulty: "Medium", task: "Push ALL local tags to the remote at once.", solution: "git push origin --tags", runnable: false, outcome: "Every local tag is uploaded." },
            { difficulty: "Medium", task: "See the details (message, commit, author) of the <code>v1.0.0</code> tag.", solution: "git show v1.0.0", runnable: false, outcome: "Tag metadata plus the commit it points to." },
            { difficulty: "Medium", task: "Tag an OLD commit (not the latest one) as <code>v0.9.0</code> using its hash.", solution: "git tag -a v0.9.0 a1b2c3d -m 'Pre-release build'", runnable: false, outcome: "The tag is placed on the historical commit." },
            { difficulty: "Hard", task: "You tagged the wrong commit. Delete the local tag <code>v0.1-beta</code> AND remove it from the remote.", hint: "Deleting on the remote uses the <code>--delete</code> flag.", solution: "git tag -d v0.1-beta && git push origin --delete v0.1-beta", runnable: false, outcome: "The tag is gone both locally and on GitHub." }
        ]
    },

    /* ===================================================================
       DAY 10 — .gitignore Deep Dive & Stashing
       =================================================================== */
    10: {
        theory: `
            <h2>Ignoring Junk &amp; Parking Half-Done Work</h2>
            <p>Two everyday helpers in one lesson.</p>
            <h3>.gitignore &mdash; keep junk out of Git</h3>
            <p>Some files should never be saved in Git: passwords, huge build folders, and OS clutter like <code>.DS_Store</code>. A file called <strong>.gitignore</strong> lists patterns Git should pretend don't exist.</p>
            <ul>
                <li><code>node_modules/</code> &mdash; ignore a whole folder.</li>
                <li><code>*.log</code> &mdash; ignore every file ending in .log.</li>
                <li><code>.env</code> &mdash; ignore your secret settings file.</li>
            </ul>
            <h3>git stash &mdash; a “pause button” for messy work</h3>
            <p>Boss needs an urgent fix but your current work is half-done? <code>git stash</code> tucks your unfinished changes away safely, giving you a clean workspace. Later, <code>git stash pop</code> brings them right back.</p>
            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Golden rule</strong>
                    <p>Never commit secrets. Add <code>.env</code> to <code>.gitignore</code> on day one of every project.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>You're halfway through a risky change when production goes down. Your lead pings urgently:</p>
            <p class="scenario-quote">"Drop everything and fix the prod bug NOW — but don't commit your half-done work and don't lose it either!"</p>
            <p>Also, a teammate just accidentally committed a 500MB log file and an <code>.env</code> full of passwords. Both problems have the same root cause: not controlling what Git tracks.</p>
            <h3>Two survival skills</h3>
            <ul>
                <li><strong>.gitignore</strong> keeps junk (logs, build files, secrets, <code>node_modules</code>) out of Git forever.</li>
                <li><strong>git stash</strong> shelves your unfinished work safely so you can switch tasks instantly, then restore it later.</li>
            </ul>
        `,
        exercises: [
            { difficulty: "Easy", task: "Create a <code>.gitignore</code> that ignores the <code>node_modules/</code> folder and all <code>.log</code> files.", solution: 'printf "node_modules/\\n*.log\\n" > .gitignore', runnable: false, outcome: "Those files no longer appear in <code>git status</code>." },
            { difficulty: "Practice", task: "Add a <code>.env</code> rule to .gitignore so secrets are never committed.", solution: 'echo ".env" >> .gitignore', runnable: false, outcome: ".env is now ignored (the <code>&gt;&gt;</code> appends without erasing the file)." },
            { difficulty: "Practice", task: "You're mid-change on a file. Stash your work to clean your working directory instantly.", solution: "git stash", action: "stash_push", outcome: "Working directory is clean; your changes are safely saved on the stash stack." },
            { difficulty: "Practice", task: "List everything currently stashed.", solution: "git stash list", action: "stash_list", outcome: "Shows <code>stash@{0}</code> with its description." },
            { difficulty: "Practice", task: "After fixing the prod bug, restore your stashed work and remove it from the stash.", hint: "<code>pop</code> applies AND deletes the stash entry.", solution: "git stash pop", action: "stash_pop", outcome: "Your in-progress changes come back to the working directory." },
            { difficulty: "Medium", task: "Stash your work but include a descriptive message so you remember what it was.", solution: 'git stash push -m "WIP: refactor checkout total"', runnable: false, outcome: "The stash is labeled with your message." },
            { difficulty: "Medium", task: "A file (<code>app.log</code>) is already tracked by Git but you just added it to .gitignore. Stop tracking it without deleting it from disk.", hint: "<code>git rm --cached</code> untracks but keeps the file.", solution: "git rm --cached app.log", runnable: false, outcome: "Git stops tracking app.log; the file stays on your disk." },
            { difficulty: "Hard", task: "Apply a specific stash (<code>stash@{1}</code>) without removing it from the stack, in case you need it again.", solution: "git stash apply stash@{1}", runnable: false, outcome: "That stash's changes are applied but the entry remains saved." }
        ]
    },

    /* ===================================================================
       DAY 11 — Rebasing Basics
       =================================================================== */
    11: {
        theory: `
            <h2>Rebasing: Tidying Your History</h2>
            <p><strong>Rebasing</strong> moves your branch so it starts from the latest version of <code>main</code>, making the project history a clean, straight line instead of a tangled web.</p>
            <h3>Merge vs. Rebase &mdash; the simple picture</h3>
            <ul>
                <li><strong>Merge</strong> keeps the exact history, adding a “merge commit” where branches join (a bit messy, but honest).</li>
                <li><strong>Rebase</strong> rewrites your branch's commits as if you started from the newest <code>main</code> &mdash; giving a tidy, linear story.</li>
            </ul>
            <h3>The golden rule of rebasing</h3>
            <p><strong>Never rebase commits you've already pushed and shared.</strong> Rebasing rewrites history, which confuses teammates who already have the old version. Rebase your <em>local, private</em> work only.</p>
            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Plain English</strong>
                    <p>Rebase = “replay my changes on top of the latest code” for a clean history. Use it on your own un-shared branches.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>Your feature branch is 5 days old. Meanwhile <code>main</code> moved ahead with 10 new commits from teammates. When you open a Pull Request, the reviewer says:</p>
            <p class="scenario-quote">"Your branch is behind and the history is a tangled mess of merge commits. Rebase onto the latest main so it's a clean, straight line — then I'll review it."</p>
            <h3>Rebase rewrites your branch onto a new base</h3>
            <p>Instead of <em>merging</em> main into your branch (which adds a merge commit), <strong>rebase</strong> picks up your commits and replays them on top of the latest main — as if you started your work today. The result is a clean, linear history that's easy to read. Golden rule: <strong>never rebase commits you've already shared/pushed to a shared branch.</strong></p>
        `,
        exercises: [
            { difficulty: "Easy", task: "Create a feature branch <code>feature/api</code> and add a commit on it.", solution: 'git switch -c feature/api && echo "api" > api.js && git add . && git commit -m "Add API layer"', action: "commit_rebase_feat", outcome: "One commit exists on feature/api." },
            { difficulty: "Practice", task: "Simulate main moving ahead: switch to main and add a commit.", solution: 'git switch main && echo "docs" >> README.md && git add . && git commit -m "Update docs"', action: "commit_main_rebase", outcome: "main now has a commit your branch doesn't." },
            { difficulty: "Practice", task: "Switch back to your feature branch and rebase it onto the updated main.", solution: "git switch feature/api && git rebase main", action: "rebase_exec", outcome: "Your commits are replayed on top of main; history is linear." },
            { difficulty: "Medium", task: "A conflict appears during rebase. After fixing the file, continue the rebase.", hint: "Stage the resolved file, then continue (not commit).", solution: "git add api.js && git rebase --continue", runnable: false, outcome: "The rebase proceeds to the next commit." },
            { difficulty: "Medium", task: "The rebase is going wrong. Abort it and return your branch to its original state.", solution: "git rebase --abort", runnable: false, outcome: "The branch is restored to exactly how it was before the rebase." },
            { difficulty: "Medium", task: "Skip a problematic commit during a rebase (its changes are dropped).", solution: "git rebase --skip", runnable: false, outcome: "The current commit is omitted and the rebase continues." },
            { difficulty: "Hard", task: "Rebase your branch onto main but only take the commits AFTER a given commit (using onto).", hint: "<code>git rebase --onto</code> takes new-base, old-base, branch.", solution: "git rebase --onto main feature/api~3 feature/api", runnable: false, outcome: "Only the desired range of commits is replayed onto main." }
        ]
    },

    /* ===================================================================
       DAY 12 — Interactive Rebase & Squash
       =================================================================== */
    12: {
        theory: `
            <h2>Interactive Rebase: Editing the Past</h2>
            <p>While building a feature you might make 6 messy commits: “wip”, “fix typo”, “oops”, “try again”. Before sharing, you can clean these up with <strong>interactive rebase</strong> &mdash; like editing a rough draft into a clean final version.</p>
            <h3>What you can do</h3>
            <ul>
                <li><strong>squash</strong> &mdash; combine several small commits into one meaningful commit.</li>
                <li><strong>reword</strong> &mdash; fix a bad commit message.</li>
                <li><strong>drop</strong> &mdash; delete a commit you no longer want.</li>
                <li><strong>reorder</strong> &mdash; change the order of commits.</li>
            </ul>
            <p>Start it with <code>git rebase -i HEAD~6</code> (the last 6 commits). Git opens a list; you mark what to do with each line.</p>
            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Why bother</strong>
                    <p>Reviewers and your future self prefer one clean commit over ten “fix” commits. Only do this before pushing.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>Your PR has 7 messy commits: "wip", "fix typo", "oops", "actually fix it", "wip again"... The reviewer sighs:</p>
            <p class="scenario-quote">"Our <code>main</code> history should read like a clean changelog. Squash these into one or two meaningful commits before merging."</p>
            <h3>Interactive rebase = edit your history</h3>
            <p><code>git rebase -i</code> opens an editor where you can <strong>squash</strong> (combine), <strong>reword</strong> (rename), <strong>reorder</strong>, <strong>edit</strong>, or <strong>drop</strong> commits. It's how professionals turn messy work-in-progress into a polished, reviewable story before merging.</p>
        `,
        exercises: [
            { difficulty: "Easy", task: "Create three small 'wip' commits to practice cleaning up.", solution: 'echo 1 > a.txt && git add . && git commit -m "wip 1" && echo 2 >> a.txt && git add . && git commit -m "wip 2" && echo 3 >> a.txt && git add . && git commit -m "wip 3"', action: "commit_log2", outcome: "Three throwaway commits exist." },
            { difficulty: "Practice", task: "Open an interactive rebase to edit the last 3 commits.", hint: "<code>HEAD~3</code> means 'the last 3 commits'.", solution: "git rebase -i HEAD~3", action: "interactive_rebase", outcome: "An editor opens listing the 3 commits with action keywords." },
            { difficulty: "Practice", task: "In the rebase editor, you'd mark the 2nd and 3rd commits with which keyword to merge them into the first? (Type the command that achieves squashing the last 3 into one non-interactively isn't possible — describe by running interactive rebase.)", hint: "The keyword is <code>squash</code> (or <code>s</code>).", solution: "git rebase -i HEAD~3   # change 'pick' to 'squash' on lines 2 and 3", runnable: false, outcome: "The three commits become one combined commit with a merged message." },
            { difficulty: "Medium", task: "Reword just the most recent commit message without changing its content.", solution: 'git commit --amend -m "feat: add user profile page"', runnable: false, outcome: "The last commit keeps its changes but gets the new message." },
            { difficulty: "Medium", task: "You forgot to include a file in your last commit. Add it to the previous commit without creating a new one.", hint: "Stage the file, then amend.", solution: "git add forgotten.js && git commit --amend --no-edit", runnable: false, outcome: "The file joins the previous commit; the message stays the same." },
            { difficulty: "Hard", task: "Use autosquash: create a fixup commit targeting an earlier commit, then auto-squash it during rebase.", hint: "<code>--fixup</code> + <code>--autosquash</code>.", solution: "git commit --fixup a1b2c3d && git rebase -i --autosquash HEAD~5", runnable: false, outcome: "The fixup commit is automatically positioned and squashed into its target." }
        ]
    },

    /* ===================================================================
       DAY 13 — Cherry-pick
       =================================================================== */
    13: {
        theory: `
            <h2>Cherry-pick: Grabbing One Specific Commit</h2>
            <p><strong>Cherry-picking</strong> means copying a single commit from one branch onto another &mdash; without merging the whole branch. Like picking one ripe cherry instead of taking the entire tree.</p>
            <h3>A real example</h3>
            <p>You fixed an urgent bug on a <code>feature</code> branch, but the rest of that branch isn't ready to ship. You can cherry-pick just the bug-fix commit onto <code>main</code> and release it immediately.</p>
            <h3>How it works</h3>
            <ol>
                <li>Find the commit ID with <code>git log --oneline</code>.</li>
                <li>Switch to the branch that should receive it (e.g. <code>main</code>).</li>
                <li>Run <code>git cherry-pick &lt;commit-id&gt;</code>.</li>
            </ol>
            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>When to use</strong>
                    <p>Use cherry-pick for hotfixes &mdash; when you need <em>one</em> change in another branch right now.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>There's a critical security fix sitting on the <code>develop</code> branch, but you can't ship all of develop to production yet — it has unfinished features. Your lead says:</p>
            <p class="scenario-quote">"Just grab THAT one commit with the fix and apply it to the <code>release</code> branch. Don't bring anything else with it."</p>
            <h3>Cherry-pick = copy one specific commit</h3>
            <p><strong>git cherry-pick</strong> takes a single commit from anywhere in your history and re-applies it onto your current branch. It's perfect for hotfixes and backporting bug fixes to older release lines without merging entire branches.</p>
        `,
        exercises: [
            { difficulty: "Easy", task: "Create a hotfix branch and commit a security fix on it.", solution: 'git switch -c hotfix/patch && echo "patch" > fix.js && git add . && git commit -m "fix: patch XSS vulnerability"', action: "commit_hotfix", outcome: "The fix commit exists on the hotfix branch." },
            { difficulty: "Practice", task: "Note the hotfix commit's hash, then switch to <code>main</code>.", solution: "git switch main", action: "switch_main_cherry", outcome: "You're on main, ready to receive just that one commit." },
            { difficulty: "Practice", task: "Cherry-pick the security fix commit onto main using its hash.", solution: "git cherry-pick a1b2c3d", action: "cherry_pick_exec", outcome: "A copy of the fix commit is applied to main." },
            { difficulty: "Medium", task: "Cherry-pick a RANGE of commits (from one hash to another) at once.", hint: "Use <code>A^..B</code> to include A through B.", solution: "git cherry-pick a1b2c3d^..f4e5d6c", runnable: false, outcome: "All commits in the range are applied in order." },
            { difficulty: "Medium", task: "Cherry-pick a commit but DON'T commit it automatically — just stage the changes so you can review first.", hint: "<code>-n</code> means no-commit.", solution: "git cherry-pick -n a1b2c3d", runnable: false, outcome: "Changes are staged but not committed, giving you a chance to edit." },
            { difficulty: "Medium", task: "A cherry-pick caused a conflict. After resolving and staging, continue it.", solution: "git add . && git cherry-pick --continue", runnable: false, outcome: "The cherry-pick completes with your resolution." },
            { difficulty: "Hard", task: "Abort a cherry-pick that went wrong and return to the clean pre-pick state.", solution: "git cherry-pick --abort", runnable: false, outcome: "The branch returns to how it was before the cherry-pick started." }
        ]
    },

    /* ===================================================================
       DAY 14 — git reset vs. git revert
       =================================================================== */
    14: {
        theory: `
            <h2>Undoing Mistakes Safely</h2>
            <p>Everyone makes mistakes. Git gives you two different “undo” tools, and choosing the right one matters a lot.</p>
            <h3>The crucial difference</h3>
            <ul>
                <li><strong>git revert</strong> &mdash; creates a NEW commit that undoes a previous one. Safe for shared/pushed work because it doesn't erase history.</li>
                <li><strong>git reset</strong> &mdash; moves your branch backward, effectively deleting commits. Powerful but dangerous on shared branches.</li>
            </ul>
            <h3>Three flavours of reset</h3>
            <ul>
                <li><code>--soft</code> &mdash; undo the commit but keep your changes staged.</li>
                <li><code>--mixed</code> (default) &mdash; undo the commit, keep changes but unstaged.</li>
                <li><code>--hard</code> &mdash; undo the commit AND throw away the changes (careful!).</li>
            </ul>
            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Rule of thumb</strong>
                    <p>Already pushed? Use <code>git revert</code>. Still local and private? <code>git reset</code> is fine.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>Two different "undo" emergencies hit on the same day:</p>
            <p class="scenario-quote">"Emergency 1: I committed a password to a LOCAL branch I haven't pushed. Wipe it like it never happened.<br>Emergency 2: A bad commit is already on <code>main</code> and customers have it. Undo its effect but keep the history honest for the audit."</p>
            <h3>Reset rewrites history, Revert adds a new 'undo' commit</h3>
            <ul>
                <li><strong>git reset</strong> moves your branch pointer backwards. Great for LOCAL, unshared commits. Three modes: <code>--soft</code> (keep staged), <code>--mixed</code> (keep in working dir), <code>--hard</code> (destroy changes).</li>
                <li><strong>git revert</strong> creates a NEW commit that undoes a previous one. Safe for SHARED history because it doesn't rewrite anything.</li>
            </ul>
            <p>Rule of thumb: <strong>reset for private, revert for public.</strong></p>
        `,
        exercises: [
            { difficulty: "Easy", task: "Create a commit you'll practice undoing.", solution: 'echo "oops" > bad.txt && git add . && git commit -m "Add bad file"', action: "reset_setup", outcome: "A commit to undo now exists." },
            { difficulty: "Practice", task: "Undo the last commit but KEEP its changes staged (you'll re-commit differently).", hint: "<code>--soft</code> keeps everything staged.", solution: "git reset --soft HEAD~1", action: "reset_soft", outcome: "The commit is gone but its changes remain staged." },
            { difficulty: "Practice", task: "Undo the last commit and unstage its changes, but keep them in your working directory.", hint: "<code>--mixed</code> is the default.", solution: "git reset --mixed HEAD~1", action: "reset_soft", outcome: "Commit removed; changes sit unstaged in the working directory." },
            { difficulty: "Medium", task: "DANGER: completely discard the last commit AND its changes (use only on local, unshared work).", hint: "<code>--hard</code> is irreversible (except via reflog).", solution: "git reset --hard HEAD~1", action: "reset_hard", outcome: "The commit and its file changes are wiped from the working directory." },
            { difficulty: "Medium", task: "A bad commit is already on shared <code>main</code>. Safely undo it by creating a new reverting commit.", solution: "git revert a1b2c3d", runnable: false, outcome: "A new commit is added that cancels the changes — history stays intact." },
            { difficulty: "Medium", task: "Revert a commit but DON'T auto-commit, so you can combine several reverts into one.", solution: "git revert -n a1b2c3d", runnable: false, outcome: "The reverting changes are staged without committing." },
            { difficulty: "Hard", task: "You did a <code>reset --hard</code> by mistake and lost a commit. Recover its hash so you can restore it.", hint: "Tomorrow's topic — the reflog records everything.", solution: "git reflog", action: "reflog", outcome: "The lost commit's hash appears in the reflog; you can <code>git reset --hard &lt;hash&gt;</code> to recover." },
            { difficulty: "Hard", task: "Revert a MERGE commit (must tell Git which parent is the mainline).", hint: "<code>-m 1</code> selects the first parent.", solution: "git revert -m 1 a1b2c3d", runnable: false, outcome: "The merge's changes are undone while keeping mainline history." }
        ]
    },

    /* ===================================================================
       DAY 15 — Git Workflows
       =================================================================== */
    15: {
        theory: `
            <h2>Git Workflows: How Teams Actually Use Git</h2>
            <p>Knowing commands is one thing; a <strong>workflow</strong> is the agreed set of rules a team follows so everyone works the same way without chaos.</p>
            <h3>Common workflows</h3>
            <ul>
                <li><strong>GitHub Flow</strong> (simplest): one <code>main</code> branch that's always deployable; make a short-lived feature branch, open a Pull Request, merge. Great for websites and continuous delivery.</li>
                <li><strong>Git Flow</strong>: separate <code>main</code> and <code>develop</code> branches plus feature/release/hotfix branches. More structure, good for scheduled releases.</li>
                <li><strong>Trunk-based</strong>: everyone commits small changes to <code>main</code> very frequently, hidden behind feature flags.</li>
            </ul>
            <h3>The shared idea</h3>
            <p>Protect <code>main</code>, work in branches, review before merging. That's 90% of every good workflow.</p>
            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Starting out?</strong>
                    <p>Use GitHub Flow. It's simple, safe, and used by millions of teams.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>ShopFast is growing and the "everyone commits to main" chaos is causing bugs in production. Your lead schedules a meeting:</p>
            <p class="scenario-quote">"We need a real branching strategy. Should we use Gitflow, GitHub Flow, or Trunk-Based Development? Let's pick one and stick to it."</p>
            <h3>Workflows are team agreements, not Git commands</h3>
            <p>A <strong>workflow</strong> defines which branches exist, who can write to them, and how code reaches production. Choosing the right one prevents merge chaos:</p>
            <ul>
                <li><strong>Gitflow</strong> — structured, long-lived branches (main, develop, feature, release, hotfix). Good for scheduled releases.</li>
                <li><strong>GitHub Flow</strong> — one main branch + short feature branches + PRs. Great for continuous deployment.</li>
                <li><strong>Trunk-Based</strong> — everyone commits to main behind feature flags. Used by elite, high-frequency teams.</li>
            </ul>
        `,
        exercises: [
            { difficulty: "Easy", task: "Set up the long-lived <code>develop</code> branch used in Gitflow.", solution: "git switch -c develop", action: "gitflow_init", outcome: "You're on a new develop branch." },
            { difficulty: "Practice", task: "Create a feature branch off develop following the <code>feature/*</code> naming convention.", solution: "git switch -c feature/billing develop", action: "gitflow_create_feature", outcome: "feature/billing branches from develop." },
            { difficulty: "Practice", task: "Commit work on the feature branch.", solution: 'echo "billing" > bill.js && git add . && git commit -m "feat: add billing"', action: "gitflow_commit_feature", outcome: "Feature work is committed in isolation." },
            { difficulty: "Practice", task: "Merge the feature back into develop forcing a merge commit (Gitflow tracks merges explicitly).", solution: "git switch develop && git merge --no-ff feature/billing", action: "gitflow_merge_feature", outcome: "A merge commit records the feature integration." },
            { difficulty: "Medium", task: "Create an emergency <code>hotfix/*</code> branch directly off <code>main</code> (the Gitflow way to patch production).", solution: "git switch -c hotfix/payment-bug main", runnable: false, outcome: "A hotfix branch starts from production code." },
            { difficulty: "Medium", task: "GitHub Flow style: create a short-lived feature branch and push it to open a PR immediately.", solution: "git switch -c feature/search && git push -u origin feature/search", runnable: false, outcome: "The branch is on GitHub, ready for a Pull Request." },
            { difficulty: "Hard", task: "Create and push a <code>release/1.2.0</code> branch for final stabilization before a Gitflow release.", solution: "git switch -c release/1.2.0 develop && git push -u origin release/1.2.0", runnable: false, outcome: "A release branch exists for last-minute fixes before tagging." }
        ]
    },

    /* ===================================================================
       DAY 16 — Pull Requests & Code Reviews  (ENRICHED)
       =================================================================== */
    16: {
        theory: `
            <h2>Pull Requests: Asking “Can We Add My Work?”</h2>
            <p>A <strong>Pull Request</strong> (PR) is simply a polite request that says: “I finished my work on my branch &mdash; please look at it and add it to the main project.” On GitLab it's called a Merge Request; it's the same idea.</p>
            <p>Think of it like handing in an assignment: before it counts, someone checks it. The PR is the place where teammates read your changes, leave comments, and click <strong>Approve</strong> when it's good.</p>
            <h3>Why every team uses them</h3>
            <ul>
                <li><strong>A second pair of eyes</strong> catches mistakes before customers do.</li>
                <li><strong>Automatic tests</strong> can run on your PR to check nothing broke.</li>
                <li><strong>A record</strong> of what changed and why is kept forever.</li>
            </ul>
            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>In one line</strong>
                    <p>A Pull Request = “please review my work and add it in.” It keeps the main project safe and reviewed.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>You finished the search feature and pushed your branch. Now you need it on <code>main</code>, but ShopFast has a rule:</p>
            <p class="scenario-quote">"Nothing reaches main without a Pull Request, a green CI build, and one approval. No exceptions — not even for the CTO."</p>
            <h3>Why this rule saved the team</h3>
            <p>Last quarter someone pushed directly to main, the tests were skipped, and the checkout broke for 2 hours. Now every change flows through a PR where automated tests and a human reviewer catch problems <em>before</em> customers ever see them.</p>
        `,
        exercises: [
            { difficulty: "Easy", task: "Create and push a feature branch so you can open a PR from it.", solution: "git switch -c feature/search && git push -u origin feature/search", runnable: false, outcome: "The branch exists on GitHub with a 'Compare & pull request' button." },
            { difficulty: "Practice", task: "After review comments, make a fix and push it — watch the PR update automatically.", solution: 'git add . && git commit -m "Address review feedback" && git push', runnable: false, outcome: "The new commit appears in the open PR and re-triggers CI." },
            { difficulty: "Practice", task: "Keep your PR branch up to date with main before merging.", solution: "git fetch origin && git rebase origin/main", runnable: false, outcome: "Your branch sits on top of the latest main, avoiding stale-branch warnings." },
            { difficulty: "Medium", task: "Use the GitHub CLI to create a PR from your current branch directly from the terminal.", hint: "The GitHub CLI is <code>gh</code>.", solution: 'gh pr create --base main --head feature/search --title "Add product search" --body "Implements search bar and results page"', runnable: false, outcome: "A PR is opened without leaving the terminal." },
            { difficulty: "Medium", task: "Check out a teammate's PR branch locally to test it before approving.", solution: "gh pr checkout 42", runnable: false, outcome: "PR #42's branch is checked out locally for hands-on testing." },
            { difficulty: "Medium", task: "View the status of CI checks on the current PR from the terminal.", solution: "gh pr checks", runnable: false, outcome: "A list of CI checks with pass/fail status." },
            { difficulty: "Hard", task: "Squash-merge a PR from the CLI and delete the branch automatically after merge.", solution: "gh pr merge 42 --squash --delete-branch", runnable: false, outcome: "PR #42 becomes one clean commit on main and the branch is removed." }
        ]
    },

    /* ===================================================================
       DAY 17 — Commit Message Conventions  (ENRICHED)
       =================================================================== */
    17: {
        theory: `
            <h2>Writing Clear Commit Messages</h2>
            <p>Every time you save (commit), Git asks for a short note. That note is a message to your future self and your teammates explaining <strong>what you changed and why</strong>. “fix” or “stuff” tells nobody anything; a clear message saves hours later.</p>
            <h3>A simple, popular format</h3>
            <p>Many teams start the message with a one-word <em>type</em> so it's instantly clear what kind of change it is:</p>
            <ul>
                <li><code>feat</code> &mdash; a new feature</li>
                <li><code>fix</code> &mdash; a bug fix</li>
                <li><code>docs</code> &mdash; documentation changes</li>
                <li><code>chore</code> &mdash; routine maintenance</li>
            </ul>
            <p>Example: <code>fix: stop charging customers twice on slow internet</code>.</p>
            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Good vs. bad</strong>
                    <p>❌ “fixed it” &nbsp;&nbsp; ✅ “fix: prevent double charge on slow networks”. Write the message for someone reading it months from now.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>A new engineer keeps writing commits like "update", "asdf", and "final fix". During release, the team can't build a changelog and nobody knows what shipped. Your lead announces:</p>
            <p class="scenario-quote">"From today we use Conventional Commits. Our release notes and version numbers are generated automatically from commit messages — so write them properly."</p>
            <h3>The payoff</h3>
            <p>With clean <code>feat:</code> and <code>fix:</code> prefixes, a bot now writes the changelog and tags the right version on every release. Good messages literally automate the paperwork.</p>
        `,
        exercises: [
            { difficulty: "Easy", task: "Write a properly formatted feature commit for adding a wishlist.", solution: 'git commit -m "feat(cart): add wishlist button to product page"', runnable: false, outcome: "A clear, type-prefixed commit that tools can parse." },
            { difficulty: "Easy", task: "Write a bug-fix commit with a scope.", solution: 'git commit -m "fix(auth): reject expired session tokens"', runnable: false, outcome: "A fix-type commit that will bump the patch version." },
            { difficulty: "Practice", task: "Write a commit with a body explaining WHY, using multiple -m flags.", solution: 'git commit -m "fix(checkout): debounce submit button" -m "Customers double-clicked on slow connections, causing duplicate orders."', runnable: false, outcome: "First -m becomes the summary, the second becomes the body." },
            { difficulty: "Practice", task: "Write a docs-only commit.", solution: 'git commit -m "docs(readme): add local setup instructions"', runnable: false, outcome: "A docs-type commit that won't trigger a version bump." },
            { difficulty: "Medium", task: "Write a commit that signals a breaking API change in the footer.", hint: "Use a <code>BREAKING CHANGE:</code> footer.", solution: 'git commit -m "feat(api): rename /users to /accounts" -m "BREAKING CHANGE: clients must update the endpoint path"', runnable: false, outcome: "Tools will bump the MAJOR version because of the breaking-change footer." },
            { difficulty: "Medium", task: "Link a commit to issue #57 so it auto-closes when merged.", solution: 'git commit -m "fix(cart): correct tax rounding" -m "Closes #57"', runnable: false, outcome: "Merging this will automatically close GitHub issue #57." },
            { difficulty: "Hard", task: "Install a commit-message linter (commitlint via a git hook) so badly formatted messages are rejected. Create the hook file.", solution: 'echo \'npx --no -- commitlint --edit "$1"\' > .git/hooks/commit-msg && chmod +x .git/hooks/commit-msg', runnable: false, outcome: "Commits that violate the convention are blocked before they're created." }
        ]
    },

    /* ===================================================================
       DAY 18 — Git Hooks  (ENRICHED)
       =================================================================== */
    18: {
        theory: `
            <h2>Git Hooks: Helpers That Run Automatically</h2>
            <p>A <strong>Git hook</strong> is a little script that runs by itself at certain moments &mdash; for example, right before you commit. It's like a spell-checker that pops up automatically so you never forget to use it.</p>
            <h3>What people use them for</h3>
            <ul>
                <li>Check the code is tidy before each commit.</li>
                <li>Block a commit if it accidentally contains a password or secret key.</li>
                <li>Run the tests automatically before code is pushed.</li>
            </ul>
            <p>The big win: the computer enforces the rules, so nobody has to <em>remember</em> to follow them.</p>
            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Why it helps</strong>
                    <p>A good “before-commit” hook catches mistakes the moment they happen &mdash; long before they reach your teammates or customers.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>Twice this week, teammates pushed code that failed linting, and once someone almost committed an AWS key. Your lead asks you to automate prevention:</p>
            <p class="scenario-quote">"Make it impossible to commit unformatted code or secrets. I don't want to rely on people remembering — make the computer enforce it."</p>
            <h3>The fix</h3>
            <p>You set up a <code>pre-commit</code> hook that runs the linter and a secret scanner automatically. Now bad commits are blocked the instant someone types <code>git commit</code> — no human discipline required.</p>
        `,
        exercises: [
            { difficulty: "Easy", task: "List the sample hooks Git ships with in a new repo.", solution: "ls .git/hooks/", runnable: false, outcome: "You see files like <code>pre-commit.sample</code>, <code>commit-msg.sample</code>, etc." },
            { difficulty: "Practice", task: "Create a simple <code>pre-commit</code> hook that prints a message, and make it executable.", solution: 'echo \'#!/bin/sh\\necho "Running pre-commit checks..."\' > .git/hooks/pre-commit && chmod +x .git/hooks/pre-commit', runnable: false, outcome: "Every <code>git commit</code> now prints your message first." },
            { difficulty: "Practice", task: "Write a pre-commit hook that blocks the commit if any staged file contains the word <code>AKIA</code> (AWS key prefix).", hint: "Exit non-zero to abort the commit.", solution: 'printf \'#!/bin/sh\\nif git diff --cached | grep -q "AKIA"; then echo "Blocked: possible AWS key!"; exit 1; fi\' > .git/hooks/pre-commit && chmod +x .git/hooks/pre-commit', runnable: false, outcome: "Commits containing an AWS key pattern are rejected." },
            { difficulty: "Medium", task: "Skip hooks for a single emergency commit (use sparingly!).", hint: "<code>--no-verify</code> bypasses pre-commit and commit-msg hooks.", solution: 'git commit --no-verify -m "emergency: bypass hooks"', runnable: false, outcome: "The commit is created without running the hooks." },
            { difficulty: "Medium", task: "Set up Husky in a Node project so hooks are shared with the whole team via the repo.", solution: "npx husky init", runnable: false, outcome: "A <code>.husky/</code> folder is created and committed, installing hooks for every teammate." },
            { difficulty: "Medium", task: "Add a pre-push hook with Husky that runs the test suite before allowing a push.", solution: 'echo "npm test" > .husky/pre-push', runnable: false, outcome: "Pushing is blocked if tests fail." },
            { difficulty: "Hard", task: "Use the <code>pre-commit</code> framework (Python) by creating its config file to run multiple linters.", solution: 'printf "repos:\\n  - repo: https://github.com/pre-commit/pre-commit-hooks\\n    rev: v4.6.0\\n    hooks:\\n      - id: trailing-whitespace\\n      - id: detect-private-key\\n" > .pre-commit-config.yaml && pre-commit install', runnable: false, outcome: "Configured linters and a private-key detector run on every commit." }
        ]
    },

    /* ===================================================================
       DAY 19 — Submodules & Subtrees  (ENRICHED)
       =================================================================== */
    19: {
        theory: `
            <h2>Using One Project Inside Another</h2>
            <p>Sometimes your project needs another project inside it &mdash; for example, a shared set of buttons and colors used by several apps. Git gives you two ways to do this: <strong>submodules</strong> and <strong>subtrees</strong>.</p>
            <h3>The simple difference</h3>
            <ul>
                <li>A <strong>submodule</strong> is like a bookmark: it just remembers “use this other project, at this exact version.” The files aren't copied in &mdash; teammates run one extra command to download them.</li>
                <li>A <strong>subtree</strong> actually copies the other project's files into a folder of yours. Nothing extra to download, but your project gets bigger.</li>
            </ul>
            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Good to know</strong>
                    <p>For most code, a normal package manager (like npm or pip) is easier. Save submodules/subtrees for shared things those tools can't handle.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>ShopFast has a shared <code>design-system</code> repo used by five different apps. Your team needs it inside the main website repo, locked to a tested version. Your architect says:</p>
            <p class="scenario-quote">"Add the design-system as a submodule pinned to the version we QA'd. I don't want a random newer version sneaking into production."</p>
            <h3>Why pinning matters</h3>
            <p>If the design system updated automatically, an untested button change could break checkout. A submodule locks you to an exact, approved commit — you upgrade deliberately, never by accident.</p>
        `,
        exercises: [
            { difficulty: "Easy", task: "Add the design-system repo as a submodule in a <code>libs/design-system</code> folder.", solution: "git submodule add git@github.com:shopfast/design-system.git libs/design-system", runnable: false, outcome: "A <code>.gitmodules</code> file is created and the submodule is registered." },
            { difficulty: "Practice", task: "A teammate just cloned the repo and the submodule folder is empty. Help them download the submodule contents.", hint: "init then update.", solution: "git submodule update --init --recursive", runnable: false, outcome: "All submodule files are downloaded at the pinned commit." },
            { difficulty: "Practice", task: "Clone a repo AND all its submodules in one command.", solution: "git clone --recurse-submodules git@github.com:shopfast/website.git", runnable: false, outcome: "The repo and every submodule are fetched together." },
            { difficulty: "Medium", task: "Update the submodule to the latest commit on its tracked branch.", solution: "git submodule update --remote libs/design-system", runnable: false, outcome: "The submodule pointer advances to the newest upstream commit." },
            { difficulty: "Medium", task: "Run a command (git pull) inside every submodule at once.", solution: 'git submodule foreach "git pull origin main"', runnable: false, outcome: "Each submodule pulls its latest main." },
            { difficulty: "Medium", task: "Add a subtree instead: bring the <code>shared-scripts</code> repo into a <code>scripts/</code> folder with its files included.", solution: "git subtree add --prefix scripts git@github.com:shopfast/shared-scripts.git main --squash", runnable: false, outcome: "The scripts files are copied in; cloning needs no extra steps." },
            { difficulty: "Hard", task: "Remove a submodule cleanly (deinit, remove from index, delete the .git/modules entry).", solution: "git submodule deinit -f libs/design-system && git rm -f libs/design-system && rm -rf .git/modules/libs/design-system", runnable: false, outcome: "The submodule is fully removed from the repo." }
        ]
    },

    /* ===================================================================
       DAY 20 — Git Bisect & Debugging  (ENRICHED)
       =================================================================== */
    20: {
        theory: `
            <h2>Finding Which Change Caused a Bug</h2>
            <p>Suppose your app worked last month but is broken today, and there were hundreds of changes in between. Checking each one would take forever. <strong>git bisect</strong> finds the guilty change for you using a clever guessing game.</p>
            <h3>How the guessing game works</h3>
            <ol>
                <li>You point to a version that is <strong>broken</strong> (usually today).</li>
                <li>You point to a version that <strong>worked</strong> (some date in the past).</li>
                <li>Git jumps to the middle and asks: “Does it work here?”</li>
                <li>You answer good or bad, and Git keeps halving the range until only the one bad change is left.</li>
            </ol>
            <p>Halving like this means even 1,000 changes take only about 10 checks.</p>
            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Why it's loved</strong>
                    <p>During an emergency, bisect answers “which change broke this?” in minutes instead of hours.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>It's 9 a.m. and the checkout page throws errors. It worked perfectly in last week's release (<code>v1.3.0</code>). Between then and now, the team merged 60 commits. Your manager is anxious:</p>
            <p class="scenario-quote">"Customers can't pay. I don't care HOW — find which commit broke it, fast."</p>
            <h3>Bisect to the rescue</h3>
            <p>Instead of reading 60 commits, you mark today as <code>bad</code> and <code>v1.3.0</code> as <code>good</code>. Git walks you through ~6 tests using binary search and pinpoints the exact breaking commit. Crisis solved before coffee gets cold.</p>
        `,
        exercises: [
            { difficulty: "Easy", task: "Start a bisect session.", solution: "git bisect start", action: "bisect_start", outcome: "Git enters bisect mode, waiting for good/bad markers." },
            { difficulty: "Practice", task: "Mark the current (broken) commit as bad.", solution: "git bisect bad", action: "bisect_start", outcome: "Git records the latest commit as where the bug exists." },
            { difficulty: "Practice", task: "Mark the last known-good release <code>v1.3.0</code> as good — Git will then jump to the midpoint.", solution: "git bisect good v1.3.0", runnable: false, outcome: "Git checks out a commit halfway between good and bad for you to test." },
            { difficulty: "Practice", task: "After testing the checked-out commit and finding it works, mark it good.", solution: "git bisect good", runnable: false, outcome: "Git narrows the search to the newer half and checks out the next midpoint." },
            { difficulty: "Medium", task: "End the bisect session and return to your original branch.", solution: "git bisect reset", runnable: false, outcome: "You're back on your normal branch; bisect state is cleared." },
            { difficulty: "Hard", task: "Fully automate bisect: let Git run a test script on each step to find the bad commit hands-free.", hint: "Exit 0 = good, non-zero = bad.", solution: "git bisect start HEAD v1.3.0 && git bisect run ./run-tests.sh", runnable: false, outcome: "Git automatically tests commits and reports the first bad one." },
            { difficulty: "Hard", task: "Tell bisect to skip a commit that can't be tested (e.g. it doesn't build).", solution: "git bisect skip", runnable: false, outcome: "Git excludes that commit and picks another to test." }
        ],
        quiz: [
            { question: "Roughly how many commits does bisect need to test among 1024 commits?", options: ["1024", "512", "About 10", "100"], answer: 2, explanation: "Binary search needs about log₂(1024) = 10 steps, dramatically faster than checking each commit." },
            { question: "What does 'git bisect run ./test.sh' do?", options: ["Runs the test once at the end", "Automatically tests each midpoint commit using the script's exit code to mark good/bad", "Deletes failing commits", "Runs tests on the remote server"], answer: 1, explanation: "If the script exits 0 it's marked good, non-zero marks bad — Git fully automates the search." }
        ]
    },

    /* ===================================================================
       DAY 21 — Advanced Branching  (ENRICHED)
       =================================================================== */
    21: {
        theory: `
            <h2>Organizing Branches on Big Teams</h2>
            <p>A small team is fine with <code>main</code> plus a few feature branches. Bigger teams add a little more structure so everyone knows what's going on.</p>
            <h3>Two common ideas</h3>
            <ul>
                <li><strong>Maintenance branches:</strong> if some customers still use an older version (say 1.x) while you build 2.x, you keep a branch like <code>release/1.x</code> just to send them important fixes.</li>
                <li><strong>Clear branch names:</strong> names like <code>feature/search-bar</code> or <code>hotfix/payment</code> instantly tell everyone the purpose.</li>
            </ul>
            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Golden habit</strong>
                    <p>Keep branches short-lived. The longer a branch sits unmerged, the more it drifts from <code>main</code> and the harder it becomes to combine.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>ShopFast now has enterprise clients locked on version 1.x, while your team builds 2.x. A serious bug is found that affects BOTH. Your engineering manager says:</p>
            <p class="scenario-quote">"Fix it on main for 2.x, then backport the same fix to the <code>release/1.x</code> branch so our enterprise customers get it too. Keep the branches clean and clearly named."</p>
            <h3>Why maintenance branches exist</h3>
            <p>You can't force enterprise clients to upgrade overnight. A dedicated <code>release/1.x</code> branch lets you ship them critical patches without dragging in unfinished 2.x features.</p>
        `,
        exercises: [
            { difficulty: "Easy", task: "Create a maintenance branch <code>release/1.x</code> from the v1.3.0 tag.", solution: "git switch -c release/1.x v1.3.0", action: "env_branch", outcome: "A long-lived branch for patching the 1.x line." },
            { difficulty: "Practice", task: "Create a well-named bugfix branch referencing a ticket.", solution: "git switch -c bugfix/SHOP-456-tax-rounding main", runnable: false, outcome: "A branch whose name clearly states its purpose and ticket." },
            { difficulty: "Practice", task: "List branches that have already been merged into main (safe to delete).", solution: "git branch --merged main", runnable: false, outcome: "Shows branches whose work is fully in main." },
            { difficulty: "Practice", task: "List branches NOT yet merged into main (still have unique work).", solution: "git branch --no-merged main", runnable: false, outcome: "Shows branches you must not delete yet." },
            { difficulty: "Medium", task: "Backport: cherry-pick the fix commit from main onto the release/1.x branch.", solution: "git switch release/1.x && git cherry-pick a1b2c3d", action: "cherry_pick_exec", outcome: "The 2.x fix is applied to the 1.x maintenance line." },
            { difficulty: "Medium", task: "Clean up all local branches already merged into main (one-liner).", hint: "Pipe merged branches to delete, excluding main.", solution: "git branch --merged main | grep -v 'main' | xargs -r git branch -d", runnable: false, outcome: "All stale merged branches are removed at once." },
            { difficulty: "Hard", task: "Set the upstream tracking branch for release/1.x so push/pull need no arguments.", solution: "git push -u origin release/1.x", runnable: false, outcome: "release/1.x now tracks origin/release/1.x." }
        ],
        quiz: [
            { question: "Why are long-lived branches considered risky?", options: ["They use more disk space", "They diverge from main over time, making merges harder and conflicts more likely", "Git can't track them", "They cannot be pushed"], answer: 1, explanation: "The longer a branch lives, the more main moves on, increasing divergence and painful merge conflicts." },
            { question: "How do you ship a critical fix to old customers on a 1.x maintenance branch?", options: ["Force everyone to upgrade", "Cherry-pick or backport the fix commit onto the release/1.x branch", "Delete the 1.x branch", "Rebase 1.x onto 2.x"], answer: 1, explanation: "Cherry-picking the specific fix commit onto the maintenance branch delivers the patch without pulling in unrelated new features." }
        ]
    },

    /* ===================================================================
       DAY 22 — Git Internals  (ENRICHED)
       =================================================================== */
    22: {
        theory: `
            <h2>A Peek at How Git Works Inside</h2>
            <p>You don't need this to use Git, but a simple mental picture makes everything click. Git is basically a <strong>box of snapshots</strong>. Every time you commit, Git takes a full photo of your files and files it away with a unique ID code.</p>
            <h3>Two helpful facts</h3>
            <ul>
                <li>Git stores <strong>complete snapshots</strong>, not just the differences. Identical files are smartly stored only once.</li>
                <li>A <strong>branch</strong> is just a tiny note pointing at one snapshot. That's why making a branch is instant &mdash; it's like adding a sticky note, not copying everything.</li>
            </ul>
            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>The big idea</strong>
                    <p>Commits are snapshots; branches are sticky notes pointing at them. Simple pieces, powerful results.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>A teammate insists "Git stores diffs between versions." During a debugging session you need to prove how Git actually stores data to resolve a corruption issue. Your principal engineer challenges you:</p>
            <p class="scenario-quote">"If you really understand Git, show me the object behind HEAD and prove that two identical files share one blob. Internals knowledge is what separates a Git user from a Git expert."</p>
            <h3>Why it matters</h3>
            <p>When repos get corrupted, when you need to recover lost objects, or when you optimize a huge repo, surface-level knowledge isn't enough. Understanding the object store is the difference between guessing and knowing.</p>
        `,
        exercises: [
            { difficulty: "Easy", task: "Show what type of object HEAD points to.", solution: "git cat-file -t HEAD", action: "cat_file_type", outcome: "Prints <code>commit</code>." },
            { difficulty: "Practice", task: "Print the full contents of the HEAD commit object (tree, parent, author, message).", solution: "git cat-file -p HEAD", runnable: false, outcome: "Shows the tree hash, parent hash, author, and commit message." },
            { difficulty: "Practice", task: "Compute the Git hash a file WOULD get, without storing it.", solution: "git hash-object README.md", runnable: false, outcome: "Prints the SHA-1 that Git would use for that file's blob." },
            { difficulty: "Practice", task: "Resolve a branch name or HEAD to its full commit hash.", solution: "git rev-parse HEAD", runnable: false, outcome: "Prints the full 40-character commit hash." },
            { difficulty: "Medium", task: "List the tree (files and sub-trees) of the current commit.", solution: "git cat-file -p HEAD^{tree}", runnable: false, outcome: "Shows blob/tree entries with their modes and names." },
            { difficulty: "Medium", task: "Count how many objects are in your repository and their disk usage.", solution: "git count-objects -vH", runnable: false, outcome: "Reports object count and size, useful for spotting bloat." },
            { difficulty: "Hard", task: "Manually create a blob object from text and read it back to see content-addressing in action.", solution: 'echo "hello" | git hash-object -w --stdin', runnable: false, outcome: "Git writes a blob and returns its hash; identical input always yields the same hash." }
        ],
        quiz: [
            { question: "Does Git store file diffs or full snapshots?", options: ["Diffs between versions", "Full content snapshots stored as objects, deduplicated by hash", "Only the latest version", "Compressed patches only"], answer: 1, explanation: "Git stores complete snapshots as objects; identical content is deduplicated because the hash (and thus the object) is the same." },
            { question: "What is a Git branch, physically?", options: ["A copy of all files", "A small file containing a single commit hash", "A database table", "A compressed archive"], answer: 1, explanation: "A branch is just a tiny ref file pointing to one commit hash — that's why branching is instant and cheap." }
        ]
    },

    /* ===================================================================
       DAY 23 — Advanced Merging Strategies  (ENRICHED)
       =================================================================== */
    23: {
        theory: `
            <h2>Smarter Ways to Combine Branches</h2>
            <p>Most of the time <code>git merge</code> just works. But a few handy options make tricky merges easier when two people changed the same lines.</p>
            <h3>Useful helpers</h3>
            <ul>
                <li><strong>Prefer one side:</strong> if you know one branch's version is correct for the clashing lines, you can tell Git to automatically keep “ours” or “theirs.”</li>
                <li><strong>Remember my fix:</strong> turning on a setting called <code>rerere</code> makes Git memorize how you solved a conflict, so if the same clash appears again it fixes it for you.</li>
            </ul>
            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Reading a conflict</strong>
                    <p>When Git marks a conflict, the top part is your version and the bottom part is the incoming version. Edit it to what you actually want, delete the marker lines, then save.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>A massive config-file merge keeps conflicting on the same lines every time you rebase your long-running branch. You're resolving the SAME conflict for the fourth time and you're frustrated. A senior engineer smiles:</p>
            <p class="scenario-quote">"Turn on <code>rerere</code> — Git will remember how you resolved it and do it for you automatically next time. And for that auto-generated lockfile, just take <code>theirs</code> every time."</p>
            <h3>Working smarter</h3>
            <p>Advanced merge options turn repetitive, error-prone conflict resolution into something Git handles for you — critical when maintaining long-lived branches.</p>
        `,
        exercises: [
            { difficulty: "Easy", task: "Merge a branch while automatically preferring YOUR side on any conflicting lines.", solution: "git merge -X ours feature/footer", action: "merge_ours", outcome: "Conflicts are auto-resolved in favor of your current branch." },
            { difficulty: "Practice", task: "Merge a branch automatically preferring THEIR side on conflicts.", solution: "git merge -X theirs feature/footer", runnable: false, outcome: "Conflicting hunks take the incoming branch's version." },
            { difficulty: "Practice", task: "Merge two feature branches at once using the octopus strategy.", solution: "git merge feature/a feature/b", runnable: false, outcome: "Both branches merge in a single commit (if conflict-free)." },
            { difficulty: "Medium", task: "Mark an obsolete branch as merged WITHOUT taking any of its file changes, using the ours strategy.", hint: "<code>-s ours</code> (strategy), not <code>-X ours</code>.", solution: "git merge -s ours old-experiment", runnable: false, outcome: "A merge commit is recorded but main's files are unchanged." },
            { difficulty: "Medium", task: "Enable rerere so Git remembers conflict resolutions and replays them.", solution: "git config --global rerere.enabled true", runnable: false, outcome: "Future identical conflicts resolve themselves automatically." },
            { difficulty: "Medium", task: "During a conflict, see all three versions (base, ours, theirs) of a file.", solution: "git show :1:config.yml; git show :2:config.yml; git show :3:config.yml", runnable: false, outcome: "Stage 1 = ancestor, 2 = ours, 3 = theirs." },
            { difficulty: "Hard", task: "Merge but ignore pure whitespace changes to avoid noise conflicts.", solution: "git merge -X ignore-all-space feature/reformat", runnable: false, outcome: "Whitespace-only differences no longer cause conflicts." }
        ],
        quiz: [
            { question: "What's the difference between '-X ours' and '-s ours'?", options: ["They are identical", "'-X ours' resolves conflicting lines in your favor during a normal merge; '-s ours' records a merge but discards the other branch's content entirely", "'-s ours' is for rebasing only", "'-X ours' deletes the other branch"], answer: 1, explanation: "'-X ours' is a conflict hint within a real 3-way merge; '-s ours' keeps only your tree and ignores the other branch's changes." },
            { question: "What does 'git rerere' do?", options: ["Re-runs the last command", "Records how you resolved a conflict and reapplies that resolution automatically next time", "Reverts a merge", "Renames a remote"], answer: 1, explanation: "'reuse recorded resolution' saves and replays your conflict fixes, huge for repetitive rebases." }
        ]
    },

    /* ===================================================================
       DAY 24 — Reflog & Recovery  (ENRICHED)
       =================================================================== */
    24: {
        theory: `
            <h2>Git's Safety Net: the Reflog</h2>
            <p>New users often panic, thinking they deleted their work for good. Usually it's still there. Git quietly keeps a private diary of <strong>everywhere you've been</strong>, called the <strong>reflog</strong>.</p>
            <p>Even if you undo too far, delete a branch, or make a mess, the reflog still remembers the point you were at &mdash; so you can jump right back to it.</p>
            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>One catch</strong>
                    <p>The reflog can rescue work you <em>committed</em> (saved). Changes you never saved at all can't be recovered &mdash; so commit early and often.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>A teammate runs <code>git reset --hard HEAD~5</code> on the wrong branch and erases a full day of committed work. They're pale and panicking:</p>
            <p class="scenario-quote">"I lost everything! Five commits, gone. Do I have to redo the whole day?!"</p>
            <h3>You stay calm</h3>
            <p>You know the reflog recorded every HEAD movement. In 30 seconds you find the pre-reset hash and restore all five commits. The team now calls you "the Git wizard." This skill alone makes you invaluable.</p>
        `,
        exercises: [
            { difficulty: "Easy", task: "View the reflog to see recent HEAD movements.", solution: "git reflog", action: "reflog", outcome: "A list like <code>HEAD@{0}</code>, <code>HEAD@{1}</code>... with hashes and actions." },
            { difficulty: "Practice", task: "Recover from a bad reset: move HEAD back to where it was one step ago.", hint: "<code>HEAD@{1}</code> is the previous position.", solution: "git reset --hard HEAD@{1}", runnable: false, outcome: "Your branch jumps back to the state before the last reset." },
            { difficulty: "Practice", task: "Instead of resetting, create a recovery branch pointing at a lost commit hash.", solution: "git branch recovered f4e5d6c", runnable: false, outcome: "A new branch 'recovered' preserves the lost commit safely." },
            { difficulty: "Practice", task: "View the reflog of a specific branch (not just HEAD).", solution: "git reflog show main", runnable: false, outcome: "Shows how the main branch pointer moved over time." },
            { difficulty: "Medium", task: "Find dangling commits and blobs that aren't reachable from any branch.", solution: "git fsck --lost-found", action: "fsck", outcome: "Lists dangling objects you may want to recover." },
            { difficulty: "Medium", task: "Recover a deleted branch: find its tip in the reflog, then recreate it.", solution: "git reflog | grep 'feature/login' && git branch feature/login <hash>", runnable: false, outcome: "The deleted branch is recreated at its last known commit." },
            { difficulty: "Hard", task: "You cherry-pick a dangling commit found via fsck back onto your current branch.", solution: "git cherry-pick f4e5d6c", action: "cherry_pick_exec", outcome: "The recovered commit's changes are reapplied to your branch." }
        ],
        quiz: [
            { question: "Can the reflog recover changes you NEVER committed?", options: ["Yes, always", "No — reflog only tracks committed states/HEAD movements; uncommitted changes lost to reset --hard are usually gone", "Only on GitHub", "Only with sudo"], answer: 1, explanation: "The reflog records HEAD positions (commits). Work that was never committed isn't in any object, so it can't be recovered." },
            { question: "Is the reflog shared when you push to a remote?", options: ["Yes, it's pushed automatically", "No, the reflog is local to your machine only", "Only annotated reflogs are pushed", "It's stored on GitHub"], answer: 1, explanation: "The reflog lives in your local .git and is never pushed — it's your personal undo history." }
        ]
    },

    /* ===================================================================
       DAY 25 — git worktree  (ENRICHED)
       =================================================================== */
    25: {
        theory: `
            <h2>Working on Two Branches at the Same Time</h2>
            <p>Normally you can only have one branch open at a time, so switching means saving or stashing your current work first. <strong>git worktree</strong> lets you open a second branch in a <em>separate folder</em> &mdash; like having two windows of the same project open side by side.</p>
            <h3>When it's handy</h3>
            <ul>
                <li>An urgent fix comes in while you're mid-task &mdash; handle it in a second folder without disturbing your current work.</li>
                <li>Compare an old version and a new version running at the same time.</li>
            </ul>
            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Why it's nice</strong>
                    <p>No more risky stashing just to jump to an emergency. Your half-done work stays exactly where you left it.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>You're three hours deep into a complex refactor — files half-edited everywhere — when production alerts fire. The on-call lead pings:</p>
            <p class="scenario-quote">"Need a one-line hotfix on main RIGHT NOW. But don't you dare stash or lose your refactor."</p>
            <h3>Worktree saves the day</h3>
            <p>Instead of risky stashing, you create a fresh worktree on <code>main</code> in a separate folder, make the hotfix there, push it, and delete the worktree — all while your refactor sits perfectly preserved in your original folder.</p>
        `,
        exercises: [
            { difficulty: "Easy", task: "Create a new worktree for the <code>main</code> branch in a sibling folder.", solution: "git worktree add ../hotfix main", solutionWin: "git worktree add ..\\hotfix main", action: "worktree_add", outcome: "A new folder <code>../hotfix</code> checked out on main appears." },
            { difficulty: "Practice", task: "List all active worktrees and the branch each is on.", solution: "git worktree list", runnable: false, outcome: "Shows each worktree path, its HEAD, and branch." },
            { difficulty: "Practice", task: "Create a worktree AND a brand-new branch for it at the same time.", solution: "git worktree add -b hotfix/payment ../payfix main", solutionWin: "git worktree add -b hotfix/payment ..\\payfix main", runnable: false, outcome: "A new branch hotfix/payment is created and checked out in ../payfix." },
            { difficulty: "Medium", task: "After finishing the hotfix, remove the worktree cleanly.", solution: "git worktree remove ../hotfix", solutionWin: "git worktree remove ..\\hotfix", runnable: false, outcome: "The worktree folder and its registration are removed." },
            { difficulty: "Medium", task: "Check out a teammate's PR branch in a separate worktree for review.", solution: "git worktree add ../review feature/search", solutionWin: "git worktree add ..\\review feature/search", runnable: false, outcome: "Their branch is testable in isolation without touching your work." },
            { difficulty: "Hard", task: "You deleted a worktree folder manually and Git still thinks it exists. Clean up the stale references.", solution: "git worktree prune", runnable: false, outcome: "Git removes administrative records for worktrees that no longer exist." }
        ],
        quiz: [
            { question: "What's a key advantage of a worktree over cloning the repo again?", options: ["It's encrypted", "All worktrees share one .git object store, saving disk and avoiding re-downloading history", "It runs faster tests", "It auto-merges branches"], answer: 1, explanation: "Worktrees share the same repository data, so you get independent checkouts without duplicating the entire history." },
            { question: "Can the same branch be checked out in two worktrees at once?", options: ["Yes, unlimited", "No — a branch can only be active in one worktree at a time", "Only main can", "Only with --force always"], answer: 1, explanation: "Git prevents checking out the same branch in multiple worktrees to avoid conflicting writes." }
        ]
    },

    /* ===================================================================
       DAY 26 — CI/CD & Git Actions  (ENRICHED)
       =================================================================== */
    26: {
        theory: `
            <h2>Automating Tests and Deploys (CI/CD)</h2>
            <p>Good teams don't test and publish by hand &mdash; the computer does it whenever code changes. This is called <strong>CI/CD</strong>:</p>
            <ul>
                <li><strong>CI</strong> (Continuous Integration): every time you push code, it automatically builds and runs the tests to check nothing broke.</li>
                <li><strong>CD</strong> (Continuous Delivery): when code is approved and merged, it automatically gets published to the live website.</li>
            </ul>
            <p>On GitHub this is done with <strong>GitHub Actions</strong> &mdash; you add a small instructions file to your project, and GitHub runs it for you on every change.</p>
            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Golden rule</strong>
                    <p>If it isn't saved in Git, it shouldn't go live. Automation always builds from the saved code, so every release is consistent.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>Deployments at ShopFast are manual: someone SSHes into a server and copies files. Last week a wrong file went live and checkout broke. The CTO mandates:</p>
            <p class="scenario-quote">"No more manual deploys. Every push to a PR must run tests automatically, and merging to main must deploy itself. Set up GitHub Actions."</p>
            <h3>The transformation</h3>
            <p>You add a workflow file to the repo. Now every PR shows a green checkmark only if tests pass, and merging to main deploys automatically with the exact committed code — no human copying files, no surprises.</p>
        `,
        exercises: [
            { difficulty: "Easy", task: "Create the GitHub Actions workflows directory and an empty CI file.", solution: "mkdir -p .github/workflows && touch .github/workflows/ci.yml", solutionWin: "mkdir .github\\workflows && type nul > .github\\workflows\\ci.yml", action: "create_ci", outcome: "The workflow file exists, ready to be filled in." },
            { difficulty: "Practice", task: "Commit and push the workflow so GitHub starts running it.", solution: 'git add .github/workflows/ci.yml && git commit -m "ci: add test pipeline" && git push', runnable: false, outcome: "GitHub detects the workflow and runs it on the next event." },
            { difficulty: "Practice", task: "Trigger CI by pushing a commit to a PR branch.", solution: "git push origin feature/search", runnable: false, outcome: "A CI run starts automatically and reports status on the PR." },
            { difficulty: "Practice", task: "Trigger a release pipeline by pushing a version tag.", solution: "git tag -a v1.4.0 -m 'release' && git push origin v1.4.0", runnable: false, outcome: "A tag-triggered deploy workflow begins." },
            { difficulty: "Medium", task: "Use the GitHub CLI to watch the latest workflow run from your terminal.", solution: "gh run watch", runnable: false, outcome: "Live status of the running pipeline in your terminal." },
            { difficulty: "Medium", task: "View logs of the most recent failed workflow run.", solution: "gh run view --log-failed", runnable: false, outcome: "Shows the log output of the steps that failed." },
            { difficulty: "Hard", task: "Re-run only the failed jobs of a pipeline without re-running everything.", solution: "gh run rerun --failed", runnable: false, outcome: "Only the failed jobs are retried, saving CI minutes." }
        ],
        quiz: [
            { question: "Where do GitHub Actions workflow files live?", options: ["/ci/", "package.json", ".github/workflows/ as YAML files", ".git/hooks/"], answer: 2, explanation: "GitHub looks for YAML workflow files inside the .github/workflows/ directory." },
            { question: "What does the 'on:' key in a workflow define?", options: ["The operating system", "Which Git events (push, pull_request, tag...) trigger the workflow", "The output folder", "The on-call engineer"], answer: 1, explanation: "'on:' specifies the events that start the workflow, tying automation directly to Git activity." }
        ]
    },

    /* ===================================================================
       DAY 27 — Large File Storage (Git LFS)  (ENRICHED)
       =================================================================== */
    27: {
        theory: `
            <h2>Handling Big Files (Git LFS)</h2>
            <p>Git was designed for text and code. Big files like videos, large images, or design files make the project huge and slow, because every copy of every version piles up and everyone has to download all of it.</p>
            <p><strong>Git LFS (Large File Storage)</strong> fixes this. Instead of storing the heavy file inside Git, it stores a tiny “ticket” that points to the real file kept elsewhere. The big file downloads only when you actually need it.</p>
            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>In short</strong>
                    <p>LFS keeps your project light and fast by storing only a pointer to big files, not the files themselves.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>The design team started committing 300 MB Photoshop files directly. Cloning the repo now takes 20 minutes and CI keeps timing out. Your lead is fed up:</p>
            <p class="scenario-quote">"Our repo ballooned to 8 GB because of design assets. Set up Git LFS so the heavy files don't bloat everyone's clone."</p>
            <h3>The fix</h3>
            <p>You configure LFS to track <code>*.psd</code> and <code>*.mp4</code>. Now the repo stores tiny pointers, clones are fast again, and the actual binaries download only when someone needs that specific asset.</p>
        `,
        exercises: [
            { difficulty: "Easy", task: "Install Git LFS support in your repository (one-time setup).", solution: "git lfs install", runnable: false, outcome: "LFS hooks are installed for this repo." },
            { difficulty: "Practice", task: "Track all Photoshop files with LFS.", solution: 'git lfs track "*.psd"', action: "lfs_track", outcome: "A rule is added to <code>.gitattributes</code> for *.psd." },
            { difficulty: "Practice", task: "Also track all MP4 videos.", solution: 'git lfs track "*.mp4"', runnable: false, outcome: "*.mp4 is now managed by LFS too." },
            { difficulty: "Practice", task: "Commit the .gitattributes file so the whole team uses the same LFS rules.", solution: 'git add .gitattributes && git commit -m "chore: track binaries with Git LFS"', runnable: false, outcome: "Teammates automatically get LFS tracking for those file types." },
            { difficulty: "Medium", task: "List all files currently managed by Git LFS.", solution: "git lfs ls-files", runnable: false, outcome: "Shows each LFS-tracked file and its pointer hash." },
            { difficulty: "Medium", task: "See which patterns are tracked by LFS.", solution: "git lfs track", runnable: false, outcome: "Prints the list of tracked patterns from .gitattributes." },
            { difficulty: "Hard", task: "Migrate existing large files ALREADY in history into LFS (rewrites history).", hint: "Use the migrate subcommand.", solution: 'git lfs migrate import --include="*.psd"', runnable: false, outcome: "Past commits are rewritten so those files become LFS pointers, shrinking the repo." }
        ],
        quiz: [
            { question: "What does Git actually commit when a file is tracked by LFS?", options: ["The full binary, compressed", "A small text pointer file containing the object's hash and size", "Nothing", "A zip archive"], answer: 1, explanation: "LFS stores a tiny pointer in Git while the real binary lives on the LFS server, keeping history light." },
            { question: "Which file records your LFS tracking patterns and should be committed?", options: [".gitignore", ".gitattributes", ".gitlfs", "lfs.config"], answer: 1, explanation: "'git lfs track' writes patterns to .gitattributes, which you commit so the whole team shares the rules." }
        ]
    },

    /* ===================================================================
       DAY 28 — Git Security & Secrets  (ENRICHED)
       =================================================================== */
    28: {
        theory: `
            <h2>Keeping Passwords and Secrets Safe</h2>
            <p>A <strong>secret</strong> is anything private &mdash; a password, an access key, a certificate. Accidentally saving one into Git is a serious and very common mistake. If it lands in a public project, robots find it within <em>minutes</em> and may misuse it.</p>
            <h3>How to stay safe</h3>
            <ul>
                <li>Never type secrets directly into your code &mdash; keep them in a separate, private place.</li>
                <li>List secret files (like <code>.env</code>) in your <code>.gitignore</code> so they're never saved.</li>
                <li>If a secret <em>does</em> slip out, <strong>change it immediately</strong> &mdash; assume the old one is already stolen.</li>
            </ul>
            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Most important step</strong>
                    <p>If a secret leaks, replace it first. Cleaning it out of history afterward is good housekeeping, but the leaked one must be cancelled right away.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>A junior dev pushes a commit containing the production database password to the public repo. GitHub's secret scanner emails an alert within 90 seconds. Your security lead declares an incident:</p>
            <p class="scenario-quote">"Rotate that DB password RIGHT NOW — assume it's already stolen. THEN scrub it from history. And let's set up gitleaks so this never happens again."</p>
            <h3>Why speed matters</h3>
            <p>Automated bots find public secrets in seconds. Deleting the file in a new commit is useless — it's still in history. The only real protection is revoking the credential immediately, then rewriting history to remove traces.</p>
        `,
        exercises: [
            { difficulty: "Easy", task: "Add common secret files to .gitignore so they're never committed.", solution: 'printf ".env\\n*.pem\\n*.key\\ncredentials.json\\n" >> .gitignore', runnable: false, outcome: "These sensitive files are now ignored by Git." },
            { difficulty: "Practice", task: "Scan your repository for leaked secrets using gitleaks.", solution: "gitleaks detect --source . --verbose", runnable: false, outcome: "Reports any secrets found in the working tree or history." },
            { difficulty: "Practice", task: "Enable automatic GPG signing for all your commits.", solution: "git config --global commit.gpgsign true", action: "secure_sign", outcome: "Future commits are cryptographically signed." },
            { difficulty: "Practice", task: "Configure SSH-based commit signing (simpler than GPG).", solution: 'git config --global gpg.format ssh && git config --global user.signingkey ~/.ssh/id_ed25519.pub', runnable: false, outcome: "Commits will be signed with your SSH key." },
            { difficulty: "Medium", task: "A secret file was committed. After rotating the credential, remove the file from ALL history using git filter-repo.", solution: "git filter-repo --path secrets.env --invert-paths", runnable: false, outcome: "secrets.env is purged from every commit in history." },
            { difficulty: "Medium", task: "Verify the signature status of recent commits.", solution: "git log --show-signature -3", runnable: false, outcome: "Shows whether each commit is 'Good signature' / Verified." },
            { difficulty: "Hard", task: "Install a gitleaks pre-commit hook so secrets are blocked before they're ever committed.", solution: 'echo "gitleaks protect --staged --verbose" > .git/hooks/pre-commit && chmod +x .git/hooks/pre-commit', runnable: false, outcome: "Any commit containing a detectable secret is rejected automatically." }
        ],
        quiz: [
            { question: "You accidentally pushed an API key to a public repo. What's the FIRST thing to do?", options: ["Delete the file in a new commit", "Rotate/revoke the key immediately — assume it's already compromised", "Make the repo private", "Rename the file"], answer: 1, explanation: "Bots scrape public secrets in seconds. Revoking the key is the only thing that actually stops misuse; history cleanup comes after." },
            { question: "What do signed commits prove?", options: ["The code is bug-free", "Cryptographic proof of who really authored the commit (author name alone can be faked)", "The commit passed CI", "The file size"], answer: 1, explanation: "Anyone can set any author name; GPG/SSH signing cryptographically verifies the real committer's identity." }
        ]
    },

    /* ===================================================================
       DAY 29 — Monorepos  (ENRICHED)
       =================================================================== */
    29: {
        theory: `
            <h2>Keeping Many Projects in One Place</h2>
            <p>A <strong>monorepo</strong> means putting several projects &mdash; like the website, the app, and shared bits &mdash; together in a single repository. Big companies such as Google do this. The other approach, one repository per project, is called a <strong>polyrepo</strong>.</p>
            <h3>The simple trade-off</h3>
            <ul>
                <li><strong>Monorepo:</strong> easy to share code and change everything together &mdash; but the repository can grow very large.</li>
                <li><strong>Polyrepo:</strong> each project stays small and separate &mdash; but sharing code between them takes more effort.</li>
            </ul>
            <p>For huge monorepos, Git can download just the folders you need instead of everything, which keeps things fast.</p>
            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Reality check</strong>
                    <p>Neither way is “better.” Pick a monorepo only when sharing code between projects is your real headache &mdash; not just because big companies do it.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>ShopFast merges its 12 separate service repos into one monorepo for easier shared code. But the combined repo is 15 GB and a full clone takes forever on developer laptops and CI. The platform lead tasks you:</p>
            <p class="scenario-quote">"Make it so a frontend dev can clone and work on ONLY the web app folder without downloading the entire 15 GB history. Use sparse and partial clone."</p>
            <h3>The solution</h3>
            <p>With partial clone + sparse-checkout, a developer downloads only the <code>apps/web</code> directory and recent history — turning a 20-minute, 15 GB clone into a fast, lightweight checkout.</p>
        `,
        exercises: [
            { difficulty: "Easy", task: "Initialize sparse-checkout in cone mode for selective directory checkout.", solution: "git sparse-checkout init --cone", action: "sparse_init", outcome: "Sparse-checkout is enabled in the simple cone mode." },
            { difficulty: "Practice", task: "Check out only the <code>apps/web</code> and <code>libs/ui</code> directories.", solution: "git sparse-checkout set apps/web libs/ui", runnable: false, outcome: "Only those folders populate your working directory." },
            { difficulty: "Practice", task: "See which directories are currently included by sparse-checkout.", solution: "git sparse-checkout list", runnable: false, outcome: "Lists the active sparse paths." },
            { difficulty: "Medium", task: "Do a partial clone that skips downloading all historical file blobs.", hint: "<code>--filter=blob:none</code>.", solution: "git clone --filter=blob:none git@github.com:shopfast/monorepo.git", runnable: false, outcome: "Clone is fast; file contents download lazily when needed." },
            { difficulty: "Medium", task: "Combine partial + sparse: clone with no checkout and blob filter, ready to select folders.", solution: "git clone --filter=blob:none --no-checkout git@github.com:shopfast/monorepo.git", runnable: false, outcome: "A minimal clone you can then sparse-checkout into." },
            { difficulty: "Medium", task: "Do a shallow clone with only the latest commit to speed up CI.", solution: "git clone --depth=1 git@github.com:shopfast/monorepo.git", runnable: false, outcome: "Only the most recent commit is fetched — ideal for CI builds." },
            { difficulty: "Hard", task: "Add another directory to an existing sparse-checkout without replacing the current set.", solution: "git sparse-checkout add services/payments", runnable: false, outcome: "services/payments is added to the working tree alongside existing paths." }
        ],
        quiz: [
            { question: "What does 'git clone --filter=blob:none' achieve?", options: ["Clones nothing", "A partial clone that skips downloading historical file contents, fetching them on demand", "Removes all branches", "Compresses the repo"], answer: 1, explanation: "Partial clone defers downloading file blobs until they're actually needed, dramatically speeding up clones of huge repos." },
            { question: "What problem does sparse-checkout solve in a monorepo?", options: ["It encrypts files", "It lets you populate only the directories you need instead of the entire tree", "It merges branches", "It signs commits"], answer: 1, explanation: "Sparse-checkout limits your working directory to selected folders, so you don't materialize the whole massive repo." }
        ]
    },

    /* ===================================================================
       DAY 30 — Git Aliases, Best Practices & Review  (ENRICHED)
       =================================================================== */
    30: {
        theory: `
            <h2>Wrapping Up: Be Fast and Tidy</h2>
            <p>You've learned the commands. Becoming an expert is mostly about using them <strong>quickly</strong> and <strong>consistently</strong>. Two simple ideas help most: shortcuts and good habits.</p>
            <h3>Shortcuts (aliases)</h3>
            <p>An <strong>alias</strong> is a nickname for a longer command, so you type less. For example, you can set up <code>git st</code> to mean the longer status command. Set them once and they work everywhere on your computer.</p>
            <h3>Healthy habits</h3>
            <ul>
                <li>Save (commit) small changes often, with a clear message.</li>
                <li>Use a new branch for each piece of work.</li>
                <li>Get the latest changes before you push.</li>
                <li>Never save passwords or huge files into Git.</li>
                <li>Use Pull Requests so someone reviews changes before they go live.</li>
            </ul>
            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>The real secret</strong>
                    <p>You get good by <em>using Git every day</em>. Every “oh no” moment you recover from makes you calmer and faster next time. Congratulations &mdash; you've made it through all 30 days!</p>
                </div>
            </div>
        `,
        scenario: `
            <p>It's your 30-day review. Your manager looks at your progress and says:</p>
            <p class="scenario-quote">"You started knowing nothing about Git. Now you recover lost commits, run clean PR workflows, set up CI/CD, and handle security incidents. Let's make you even faster — set up your aliases and document our team's Git standards."</p>
            <h3>Graduation</h3>
            <p>The final step of mastery is making good practices effortless and shareable. You configure productivity aliases and write down the team conventions so every new hire ramps up the way you just did.</p>
        `,
        exercises: [
            { difficulty: "Easy", task: "Create a short alias <code>st</code> for a clean status view.", solution: 'git config --global alias.st "status -sb"', action: "alias_add_st", outcome: "<code>git st</code> now shows a concise status." },
            { difficulty: "Easy", task: "Create an alias <code>lg</code> for a visual history graph.", solution: 'git config --global alias.lg "log --oneline --graph --all --decorate"', action: "alias_add_lg", outcome: "<code>git lg</code> prints a pretty commit graph." },
            { difficulty: "Practice", task: "Create an <code>undo</code> alias that softly undoes the last commit.", solution: 'git config --global alias.undo "reset --soft HEAD~1"', runnable: false, outcome: "<code>git undo</code> removes the last commit, keeping its changes staged." },
            { difficulty: "Practice", task: "Create a shell-escape alias that stages everything and commits a WIP checkpoint.", hint: "Shell aliases start with <code>!</code>.", solution: "git config --global alias.wip '!git add -A && git commit -m \"WIP\"'", runnable: false, outcome: "<code>git wip</code> instantly checkpoints all your work." },
            { difficulty: "Practice", task: "List all your configured aliases.", solution: "git config --get-regexp '^alias\\.'", runnable: false, outcome: "Prints every alias and its expansion." },
            { difficulty: "Medium", task: "Set up a global gitignore for OS/editor junk (e.g. .DS_Store) across ALL your repos.", solution: 'git config --global core.excludesfile ~/.gitignore_global && printf ".DS_Store\\n*.swp\\n.idea/\\n" >> ~/.gitignore_global', runnable: false, outcome: "Editor/OS clutter is ignored in every repository automatically." },
            { difficulty: "Medium", task: "Prune local references to remote branches that were deleted on the server.", solution: "git remote prune origin", runnable: false, outcome: "Stale origin/* branches are removed locally." },
            { difficulty: "Hard", task: "Create a 'cleanup' alias that deletes all local branches already merged into main.", solution: "git config --global alias.cleanup '!git branch --merged main | grep -v main | xargs -r git branch -d'", runnable: false, outcome: "<code>git cleanup</code> removes all stale merged branches in one go." }
        ],
        quiz: [
            { question: "Where are global Git aliases stored?", options: ["In each project folder", "In the global ~/.gitconfig under the [alias] section", "On GitHub", "In .git/hooks"], answer: 1, explanation: "Global aliases live in ~/.gitconfig, making them available in every repository on your machine." },
            { question: "What does an alias beginning with '!' allow?", options: ["Nothing special", "Running arbitrary shell commands, not just Git subcommands", "Deleting the repo", "Signing commits"], answer: 1, explanation: "A leading '!' tells Git to execute the alias as a shell command, enabling powerful multi-step one-liners." }
        ]
    }
};

