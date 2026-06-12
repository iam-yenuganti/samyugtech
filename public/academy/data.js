/* data.js — Curriculum database for Git & GitHub Mastery */

const GIT_ROADMAP_DATA = [
    {
        day: 0,
        phase: "Getting Started",
        title: "Set Up Your Environment",
        theory: `
            <h2>Before You Start: Get Your Tools Ready</h2>
            <p>Think of this like setting up a new kitchen before you cook. You don't need to know anything about Git yet. In this lesson we'll do four simple things, one at a time:</p>
            <ul>
                <li><strong>1.</strong> Install Git on your computer (the free tool you'll use every day).</li>
                <li><strong>2.</strong> Create a free account on GitHub (an online home for your projects).</li>
                <li><strong>3.</strong> Connect your computer to that account safely.</li>
                <li><strong>4.</strong> Create your very first project (called a "repository") and copy it to your computer.</li>
            </ul>
            <p>Do these in order. By the end you'll have a working setup and be ready for Lesson 1.</p>

            <h3>Step 1 — Install Git on your laptop</h3>
            <p>Git is free. Pick your computer type and download it:</p>
            <ul>
                <li><strong>Windows:</strong> Download from <a href="https://git-scm.com/download/win" target="_blank" rel="noopener">git-scm.com/download/win</a>. Run the installer and keep clicking <em>Next</em> (the default options are fine). This also gives you a program called <strong>Git Bash</strong> — a window where you type Git commands.</li>
                <li><strong>Mac:</strong> Download from <a href="https://git-scm.com/download/mac" target="_blank" rel="noopener">git-scm.com/download/mac</a>. The easiest way is to install <a href="https://brew.sh" target="_blank" rel="noopener">Homebrew</a> first, then type <code>brew install git</code> in the Terminal app.</li>
                <li><strong>Linux:</strong> Open your terminal and type <code>sudo apt install git</code> (Ubuntu/Debian) or <code>sudo dnf install git</code> (Fedora). More options: <a href="https://git-scm.com/download/linux" target="_blank" rel="noopener">git-scm.com/download/linux</a>.</li>
            </ul>
            <p>To check it worked, open your terminal (or Git Bash on Windows) and type <code>git --version</code>. If you see a version number, you're done.</p>

            <h3>Step 2 — Tell Git who you are</h3>
            <p>Git stamps your name and email on everything you save, so teammates know who did what. Set this once (use the email you'll use for GitHub):</p>
            <p>Run the two "config" commands in the <strong>Try It Yourself</strong> tab. You only have to do this one time per computer.</p>

            <h3>Step 3 — Create a free GitHub account</h3>
            <p><strong>GitHub</strong> is the most popular website for storing Git projects online and sharing them with others. A free account is all you need.</p>
            <ol>
                <li>Go to <a href="https://github.com/signup" target="_blank" rel="noopener">github.com/signup</a>.</li>
                <li>Enter your email, pick a username and password, and verify the puzzle.</li>
                <li>Confirm the code sent to your email. That's it — the free plan is plenty for learning.</li>
            </ol>
            <p><strong>Prefer GitLab?</strong> It works the same way. Sign up free at <a href="https://gitlab.com/users/sign_up" target="_blank" rel="noopener">gitlab.com/users/sign_up</a>. Everything in this course applies to both.</p>

            <h3>Step 4 — Connect your computer to GitHub (SSH key)</h3>
            <p>Your computer needs a secure way to prove it's really you when it talks to GitHub. The cleanest method is an <strong>SSH key</strong> — think of it as a special matching pair of keys: one stays private on your computer, the other you hand to GitHub.</p>
            <ol>
                <li>Generate the key pair (see the command in <strong>Try It Yourself</strong>). Press Enter to accept the defaults.</li>
                <li>Copy the <em>public</em> key (the one that's safe to share).</li>
                <li>On GitHub, click your profile photo → <strong>Settings</strong> → <strong>SSH and GPG keys</strong> → <strong>New SSH key</strong>, paste it, and save.</li>
                <li>Test it by running the connection command — GitHub will greet you by your username.</li>
            </ol>

            <h3>Step 5 — Create your first project (repository)</h3>
            <p>A <strong>repository</strong> (or "repo") is just a folder for one project that Git watches. Let's make one on GitHub:</p>
            <ol>
                <li>On GitHub, click the <strong>+</strong> in the top-right → <strong>New repository</strong>.</li>
                <li>Give it a name like <code>my-first-repo</code>.</li>
                <li>Tick <strong>"Add a README file"</strong> so it isn't empty.</li>
                <li>Click <strong>Create repository</strong>. Done — your project now lives online!</li>
            </ol>

            <h3>Step 6 — Copy the project to your computer</h3>
            <p>To work on it, you "clone" it (download a full copy). On the repo page click the green <strong>Code</strong> button, choose <strong>SSH</strong>, and copy the address. Then run the <code>git clone</code> command from the <strong>Try It Yourself</strong> tab. A new folder appears on your computer — you're ready to start.</p>

            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>You're all set!</strong>
                    <p>Git installed ✔ &nbsp; Account created ✔ &nbsp; Computer connected ✔ &nbsp; First repo cloned ✔. You won't repeat steps 1–4 again. From here on you'll learn what to actually do inside a repo, starting with Lesson 1.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>You've just joined ShopFast as a brand-new junior engineer. On day one, your mentor drops by your desk with a friendly checklist:</p>
            <p class="scenario-quote">"Before you can touch any code, let's get your machine ready. Install Git, make a GitHub account, connect it securely with an SSH key, and clone your first practice repo. Once that's working, you're officially set up to learn."</p>
            <h3>Why this matters</h3>
            <p>Every developer, everywhere, does this exact setup on a new laptop. Get comfortable with it once and you'll never be blocked by "it won't connect" problems again.</p>
        `,
        practical: [
            { mac: "git --version", win: "git --version", desc: "Check that Git installed correctly. You should see a version number." },
            { mac: 'git config --global user.name "Your Name"', win: 'git config --global user.name "Your Name"', desc: "Tell Git your name (do this once)." },
            { mac: 'git config --global user.email "you@example.com"', win: 'git config --global user.email "you@example.com"', desc: "Tell Git your email — use the same one as your GitHub account." },
            { mac: 'ssh-keygen -t ed25519 -C "you@example.com"', win: 'ssh-keygen -t ed25519 -C "you@example.com"', desc: "Create your secure SSH key pair. Press Enter to accept the defaults." },
            { mac: "pbcopy < ~/.ssh/id_ed25519.pub", win: "clip < ~/.ssh/id_ed25519.pub", desc: "Copy your PUBLIC key to the clipboard, then paste it into GitHub → Settings → SSH and GPG keys." },
            { mac: "ssh -T git@github.com", win: "ssh -T git@github.com", desc: "Test the connection. GitHub will greet you by your username if it worked." },
            { mac: "git clone git@github.com:your-username/my-first-repo.git", win: "git clone git@github.com:your-username/my-first-repo.git", desc: "Download your new repository to your computer (replace with your own repo address)." }
        ],
        exercises: [
            { difficulty: "Easy", task: "Confirm Git is installed and see which version you have.", solution: "git --version", outcome: "Prints something like 'git version 2.45.0', confirming Git is ready." },
            { difficulty: "Easy", task: "Set your name and email so your saves are labelled correctly.", solution: 'git config --global user.name "Your Name" && git config --global user.email "you@example.com"', outcome: "Git now stamps every commit with your identity." },
            { difficulty: "Practice", task: "Generate a secure SSH key so your computer can connect to GitHub.", hint: "Press Enter at each prompt to accept the defaults.", solution: 'ssh-keygen -t ed25519 -C "you@example.com"', outcome: "Creates a private and public key pair in your ~/.ssh folder." },
            { difficulty: "Practice", task: "Copy your PUBLIC key so you can paste it into GitHub.", solution: "pbcopy < ~/.ssh/id_ed25519.pub", solutionWin: "clip < ~/.ssh/id_ed25519.pub", outcome: "Your public key is now on the clipboard, ready to paste into GitHub settings." },
            { difficulty: "Practice", task: "Test that your computer can talk to GitHub securely.", solution: "ssh -T git@github.com", outcome: "GitHub responds with a 'Hi <username>!' greeting if the connection works." },
            { difficulty: "Medium", task: "After creating a repo on GitHub, download a copy to your computer.", solution: "git clone git@github.com:your-username/my-first-repo.git", outcome: "A new project folder appears locally, fully connected to GitHub." }
        ],
        quiz: [
            { question: "What is the difference between Git and GitHub?", options: ["They are the same thing", "Git is the free tool on your computer; GitHub is a website that stores your projects online", "GitHub is older than Git", "Git only works on Windows"], answer: 1, explanation: "Git is the version-control tool you install locally. GitHub (like GitLab) is an online platform that hosts your Git projects and lets teams collaborate." },
            { question: "Why do you add an SSH key to GitHub?", options: ["To make your code run faster", "To securely prove your computer is really you when connecting, without typing a password each time", "To delete old files", "To change your username"], answer: 1, explanation: "An SSH key is a secure, password-free way for your computer to authenticate with GitHub." },
            { question: "What does it mean to 'clone' a repository?", options: ["Delete it", "Make a full copy of the online project onto your computer to work on", "Rename it", "Share it publicly"], answer: 1, explanation: "Cloning downloads a complete copy of the repository (including its history) to your machine." }
        ]
    },
    {
        day: 1,
        phase: "Beginner",
        title: "What is Git & Version Control?",
        theory: `
            <h2>Understanding Version Control</h2>
            <p>A <strong>Version Control System (VCS)</strong> is a software tool that helps software developers manage changes to source code over time. It keeps track of every modification to the code in a special database. If a mistake is made, developers can turn back the clock and compare earlier versions of the code to help fix the mistake while minimizing disruption to all team members.</p>
            
            <h3>Centralized vs. Distributed VCS</h3>
            <table class="theory-table">
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>Centralized (CVCS - e.g., SVN)</th>
                        <th>Distributed (DVCS - e.g., Git)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Repository Location</strong></td>
                        <td>Single central server.</td>
                        <td>Every developer has a full copy of the history locally.</td>
                    </tr>
                    <tr>
                        <td><strong>Offline Work</strong></td>
                        <td>Impossible. Must be connected to the network.</td>
                        <td>Fully functional offline. Commits can be done locally.</td>
                    </tr>
                    <tr>
                        <td><strong>Speed</strong></td>
                        <td>Slower, as every action requires server communication.</td>
                        <td>Extremely fast since operations are local.</td>
                    </tr>
                </tbody>
            </table>

            <h3>What is Git?</h3>
            <p>Git was created in 2005 by <strong>Linus Torvalds</strong> (the creator of the Linux kernel) to manage the Linux development lifecycle. It is designed around speed, data integrity, and support for distributed, non-linear workflows.</p>

            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Key Concept: Git vs. GitHub</strong>
                    <p>Git is the local version control command-line tool. GitHub, GitLab, and Bitbucket are cloud hosting platforms that store your Git repositories online, allowing teams to collaborate.</p>
                </div>
            </div>
        `,
        practical: [
            {
                mac: "mkdir git-learning && cd git-learning",
                win: "mkdir git-learning && cd git-learning",
                desc: "Make a fresh practice folder and move into it. (You already installed Git and set your name in the Setup lesson.)"
            },
            {
                mac: "git init",
                win: "git init",
                desc: "Turn this ordinary folder into a Git project. From now on, Git watches everything inside it.",
                action: "init"
            },
            {
                mac: "git status",
                win: "git status",
                desc: "Ask Git what it sees. Right now the folder is empty, so there's nothing to track yet."
            },
            {
                mac: "ls -la",
                win: "dir /a",
                desc: "Notice the hidden .git folder that appeared — that's where Git quietly stores all your project's history."
            }
        ],
        quiz: [
            {
                question: "Who created Git in 2005?",
                options: ["Bill Gates", "Linus Torvalds", "Steve Jobs", "Guido van Rossum"],
                answer: 1,
                explanation: "Linus Torvalds created Git in 2005 to coordinate the development of the Linux kernel."
            },
            {
                question: "Which of the following is true about Distributed VCS?",
                options: [
                    "You cannot commit files without an internet connection",
                    "There is only one single copy of the repository database on a central server",
                    "Every client contains a complete local mirror of the repository history",
                    "It is slower than Centralized VCS"
                ],
                answer: 2,
                explanation: "In a Distributed VCS like Git, clients don't just check out the latest snapshot of the files; they fully mirror the repository, including its history."
            }
        ]
    },
    {
        day: 2,
        phase: "Beginner",
        title: "Your First Commit",
        theory: `
            <h2>The Three Git States</h2>
            <p>Git has three main states that your files can reside in:</p>
            <ul>
                <li><strong>Working Directory:</strong> The local workspace folder where you modify and create files. Files here are "Untracked" or "Modified".</li>
                <li><strong>Staging Area (Index):</strong> A staging file/cache that stores info about what will go into your next commit. This lets you craft precise commits.</li>
                <li><strong>Committed (Repository):</strong> The database (.git folder) where Git stores metadata and the compressed files representing history snapshots.</li>
            </ul>

            <p>A commit is a snapshot of your staged files at a specific point in time. It is identified by a unique 40-character <strong>SHA-1 hash</strong> (e.g., <code>a1b2c3d...</code>), representing data integrity.</p>

            <h3>The Role of .gitignore</h3>
            <p>A <code>.gitignore</code> file specifies untracked files that Git should deliberately ignore (e.g., build assets like <code>node_modules/</code>, logs, secrets like <code>.env</code>).</p>
        `,
        practical: [
            {
                mac: 'echo "# Git Learning" > README.md',
                win: 'echo "# Git Learning" > README.md',
                desc: "Create a README.md file in the working directory.",
                action: "create_readme"
            },
            {
                mac: "git status",
                win: "git status",
                desc: "Check the status of your working directory (shows untracked README.md).",
                action: "status_untracked"
            },
            {
                mac: "git add README.md",
                win: "git add README.md",
                desc: "Add README.md to the staging area.",
                action: "stage_readme"
            },
            {
                mac: 'git commit -m "Initial commit: add README"',
                win: 'git commit -m "Initial commit: add README"',
                desc: "Commit the staged files with an informative message.",
                action: "commit_readme"
            },
            {
                mac: "git log --oneline",
                win: "git log --oneline",
                desc: "Inspect the commit history in a simplified layout.",
                action: "log"
            }
        ],
        quiz: [
            {
                question: "Which Git state represents files that have been modified but not prepared for commit?",
                options: ["Staging Area", "Working Directory", "Repository", "Remote Store"],
                answer: 1,
                explanation: "The Working Directory contains modified files that have not yet been staged using 'git add'."
            },
            {
                question: "What does the 40-character hash (SHA-1) represent in Git?",
                options: [
                    "A password for GitHub login",
                    "A unique identifier for a commit",
                    "An encryption key for SSH",
                    "A file path"
                ],
                answer: 1,
                explanation: "Every commit in Git is securely hashed using SHA-1. The hash acts as a unique ID representing the content and parent metadata of the commit."
            }
        ]
    },
    {
        day: 3,
        phase: "Beginner",
        title: "Staging & Unstaging Changes",
        theory: `
            <h2>Advanced Staging Controls</h2>
            <p>Git provides flexible mechanisms to prepare files for a commit:</p>
            <ul>
                <li><code>git add &lt;file&gt;</code>: Stages a specific file.</li>
                <li><code>git add .</code>: Stages all files in the current folder and subfolders.</li>
                <li><code>git diff</code>: Displays differences in files in the working directory that are <em>not yet staged</em>.</li>
                <li><code>git diff --staged</code>: Displays differences between <em>staged files</em> and the last commit.</li>
            </ul>

            <h3>Unstaging and Amending Commits</h3>
            <p>If you staged a file by mistake, you can remove it from staging with <code>git restore --staged &lt;file&gt;</code>. To modify your last commit (e.g. adjust commit message or add forgotten files), use <code>git commit --amend</code>.</p>
        `,
        practical: [
            {
                mac: 'echo "Line 1" > file1.txt && echo "Line 2" > file2.txt',
                win: 'echo "Line 1" > file1.txt && echo "Line 2" > file2.txt',
                desc: "Create two new text files in your workspace.",
                action: "create_files"
            },
            {
                mac: "git add file1.txt",
                win: "git add file1.txt",
                desc: "Stage only file1.txt, leaving file2.txt unstaged.",
                action: "stage_file1"
            },
            {
                mac: "git diff",
                win: "git diff",
                desc: "See unstaged changes (shows changes in file2.txt).",
                action: "diff_unstaged"
            },
            {
                mac: "git diff --staged",
                win: "git diff --staged",
                desc: "See staged changes (shows changes in file1.txt).",
                action: "diff_staged"
            },
            {
                mac: "git restore --staged file1.txt",
                win: "git restore --staged file1.txt",
                desc: "Unstage file1.txt (moves it back to untracked status).",
                action: "unstage"
            }
        ],
        quiz: [
            {
                question: "Which command shows the changes in your working directory that are NOT yet staged?",
                options: ["git status", "git diff", "git diff --staged", "git log"],
                answer: 1,
                explanation: "Running 'git diff' without options shows modifications in the working directory compared to the staging area."
            },
            {
                question: "How do you unstage a file without losing its local content modifications?",
                options: ["git checkout <file>", "git restore --staged <file>", "git rm <file>", "git reset --hard"],
                answer: 1,
                explanation: "'git restore --staged <file>' removes the file from the Index (staging) but leaves the working copy in place."
            }
        ]
    },
    {
        day: 4,
        phase: "Beginner",
        title: "Viewing History",
        theory: `
            <h2>Navigating the Git Log</h2>
            <p>Git logs are the ledger of your project. As repositories grow, standard logs become hard to read. You can use search criteria parameters to filter history:</p>
            <ul>
                <li><code>--oneline</code>: Condenses each commit to a single line showing the short hash and subject message.</li>
                <li><code>--graph</code>: Renders an ASCII text-graph showing branch structures and merges.</li>
                <li><code>--author="Name"</code>: Shows only commits from a specific author.</li>
                <li><code>--since="yesterday"</code> or <code>--since="2 weeks ago"</code>: Filters commits by time constraints.</li>
            </ul>

            <h3>Inspecting specific commits</h3>
            <p>The command <code>git show &lt;hash&gt;</code> is used to inspect details of a specific commit. The command <code>git blame &lt;file&gt;</code> is a diagnostic utility displaying line-by-line details of who wrote a line, commit hash, and timestamp.</p>
        `,
        practical: [
            {
                mac: 'echo "Commit 1" >> history.txt && git add . && git commit -m "feat: add first log entry"',
                win: 'echo "Commit 1" >> history.txt && git add . && git commit -m "feat: add first log entry"',
                desc: "Create a new log entry file and commit it.",
                action: "commit_log1"
            },
            {
                mac: 'echo "Commit 2" >> history.txt && git add . && git commit -m "feat: add second log entry"',
                win: 'echo "Commit 2" >> history.txt && git add . && git commit -m "feat: add second log entry"',
                desc: "Create a second commit updating history.txt.",
                action: "commit_log2"
            },
            {
                mac: "git log --oneline --graph --all",
                win: "git log --oneline --graph --all",
                desc: "View commit history as a graphical, linear chain.",
                action: "log_graph"
            },
            {
                mac: "git show HEAD",
                win: "git show HEAD",
                desc: "Inspect the details and diff of the last commit (HEAD).",
                action: "show_head"
            },
            {
                mac: "git blame history.txt",
                win: "git blame history.txt",
                desc: "Inspect file lines to see authorship history.",
                action: "blame"
            }
        ],
        quiz: [
            {
                question: "What does HEAD represent in Git?",
                options: [
                    "The original master branch copy",
                    "A special pointer to the current active commit/branch",
                    "The remote repository main directory",
                    "A diagnostic command"
                ],
                answer: 1,
                explanation: "HEAD is the pointer to the currently checked-out commit or active local branch."
            },
            {
                question: "Which command shows who changed each line in a file and when?",
                options: ["git log --oneline", "git blame", "git show", "git diff"],
                answer: 1,
                explanation: "'git blame' annotates each line of a file with information about the last commit that edited it."
            }
        ]
    },
    {
        day: 5,
        phase: "Beginner",
        title: "Branching Basics",
        theory: `
            <h2>What is a Branch?</h2>
            <p>In Git, a <strong>branch</strong> is a lightweight, moveable pointer to a specific commit. The default branch name is usually <code>main</code> or <code>master</code>. Creating a branch spawns a new pointer pointing to the active commit, isolating development.</p>

            <p>Working in branches allows you to build features, fix bugs, or experiment without affecting the primary <code>main</code> production line.</p>

            <h3>Branch Navigation Commands</h3>
            <ul>
                <li><code>git branch &lt;name&gt;</code>: Creates a new branch at your current commit.</li>
                <li><code>git switch &lt;name&gt;</code> (or <code>git checkout &lt;name&gt;</code>): Switches your workspace to the specified branch.</li>
                <li><code>git switch -c &lt;name&gt;</code>: Creates and switches to a new branch in a single command.</li>
                <li><code>git branch -d &lt;name&gt;</code>: Deletes the branch (safe check ensures changes are merged first).</li>
            </ul>
        `,
        practical: [
            {
                mac: "git branch feature/login",
                win: "git branch feature/login",
                desc: "Create a branch pointer named feature/login.",
                action: "create_branch"
            },
            {
                mac: "git switch feature/login",
                win: "git switch feature/login",
                desc: "Switch your workspace context to the feature/login branch.",
                action: "switch_branch"
            },
            {
                mac: 'echo "Login Page Content" > login.html && git add . && git commit -m "feat: design login page"',
                win: 'echo "Login Page Content" > login.html && git add . && git commit -m "feat: design login page"',
                desc: "Add a file and commit changes on the branch.",
                action: "commit_on_branch"
            },
            {
                mac: "git switch main",
                win: "git switch main",
                desc: "Switch back to the main branch (notice that login.html is isolated and missing here!).",
                action: "switch_back_main"
            },
            {
                mac: "git branch",
                win: "git branch",
                desc: "List local branches (current branch has * prefix).",
                action: "list_branches"
            }
        ],
        quiz: [
            {
                question: "What is a branch in Git's internal object model?",
                options: [
                    "A folder inside the directory",
                    "A duplicate copy of all codebase files",
                    "A lightweight moveable pointer to a commit",
                    "An external server connection path"
                ],
                answer: 2,
                explanation: "Unlike other VCSs that copy files, Git branches are incredibly lightweight: they are simple text files containing the 40-character commit SHA they point to."
            },
            {
                question: "Which command creates and switches to a new branch simultaneously?",
                options: ["git branch -new", "git checkout -b <name> / git switch -c <name>", "git switch <name>", "git merge <name>"],
                answer: 1,
                explanation: "Both 'git checkout -b' (legacy) and 'git switch -c' (modern, recommended) create the branch pointer and update HEAD to it immediately."
            }
        ]
    },
    {
        day: 6,
        phase: "Beginner",
        title: "Merging Branches & Conflicts",
        theory: `
            <h2>Understanding Git Merges</h2>
            <p>Merging takes the historical lines of your branches and combines them. There are two primary types of merges:</p>
            <ul>
                <li><strong>Fast-Forward Merge:</strong> Occurs when the destination branch has no new commits since the source branch split off. Git simply advances the destination branch pointer.</li>
                <li><strong>3-Way Merge (Merge Commit):</strong> Occurs when the branches have diverged (both have commits). Git finds a common ancestor and creates a new "Merge Commit" linking both histories together.</li>
            </ul>

            <h3>Resolving Merge Conflicts</h3>
            <p>A merge conflict occurs when modifications are made to the <em>same line of the same file</em> on two different branches, and they are merged. Git pauses the merge process and markers are placed inside the file:</p>
            <pre><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
Main branch content
=======
Feature branch content
&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature/login</code></pre>
            <p>You must open the file, select which lines to keep, remove the markers, stage the file, and commit.</p>
        `,
        practical: [
            {
                mac: "git merge feature/login",
                win: "git merge feature/login",
                desc: "Perform a fast-forward merge of feature/login into main.",
                action: "merge_ff"
            },
            {
                mac: "git switch -c feature/footer",
                win: "git switch -c feature/footer",
                desc: "Create and switch to a feature/footer branch.",
                action: "create_footer_branch"
            },
            {
                mac: 'echo "Footer V1" > footer.txt && git add . && git commit -m "feat: add footer"',
                win: 'echo "Footer V1" > footer.txt && git add . && git commit -m "feat: add footer"',
                desc: "Create and commit a file on the feature/footer branch.",
                action: "commit_footer"
            },
            {
                mac: "git switch main",
                win: "git switch main",
                desc: "Switch back to the main branch.",
                action: "switch_main_diverge"
            },
            {
                mac: 'echo "Footer V2" > footer.txt && git add . && git commit -m "fix: change footer content"',
                win: 'echo "Footer V2" > footer.txt && git add . && git commit -m "fix: change footer content"',
                desc: "Create a conflict by committing changes to the same file (footer.txt) on main.",
                action: "commit_conflict_main"
            },
            {
                mac: "git merge feature/footer",
                win: "git merge feature/footer",
                desc: "Merge feature/footer (This will result in a CONFLICT!).",
                action: "merge_conflict"
            }
        ],
        quiz: [
            {
                question: "What is a fast-forward merge?",
                options: [
                    "A merge that skips checks",
                    "A merge where Git simply moves the branch pointer forward because there is no divergence",
                    "A merge that deletes history",
                    "An automatic conflict resolution"
                ],
                answer: 1,
                explanation: "If the target branch has no diverging commits, Git moves the reference pointer directly to the branch being merged without creating a new commit."
            },
            {
                question: "What represents the conflict delimiter in conflicting files?",
                options: [
                    "--- conflict ---",
                    "<<<<<<< , ======= , >>>>>>>",
                    "/* conflict start */",
                    "=== CONT ==="
                ],
                answer: 1,
                explanation: "Git annotates conflicting code sections using '<' (current branch/HEAD), '=' (separator), and '>' (incoming branch commit)."
            }
        ]
    },
    {
        day: 7,
        phase: "Beginner",
        title: "Remote Repos & GitHub",
        theory: `
            <h2>Connecting to Remote Repositories</h2>
            <p>A remote repository is a version of your project hosted on the internet or network. Collaborating with others involves pushing your commits and fetching/pulling from their remotes.</p>

            <h3>Authentication Mechanisms</h3>
            <ul>
                <li><strong>HTTPS:</strong> Uses standard usernames and Personal Access Tokens (PAT) for credentials. Good for fast access.</li>
                <li><strong>SSH (Secure Shell):</strong> Uses cryptographic public-private keypairs. Highly secure and doesn't prompt for password.</li>
            </ul>

            <h3>Remote Commands</h3>
            <ul>
                <li><code>git remote add origin &lt;URL&gt;</code>: Registers a remote link alias (usually named <code>origin</code>) to the local repo.</li>
                <li><code>git push -u origin main</code>: Pushes local commits to the remote. The <code>-u</code> sets upstream tracking, linking the branches.</li>
                <li><code>git clone &lt;URL&gt;</code>: Downloads an entire remote repository, keeping history intact.</li>
            </ul>
        `,
        practical: [
            {
                mac: "git remote add origin git@github.com:user/git-learning.git",
                win: "git remote add origin https://github.com/user/git-learning.git",
                desc: "Add a remote repository pointing to origin.",
                action: "remote_add"
            },
            {
                mac: "git remote -v",
                win: "git remote -v",
                desc: "List all configured remote paths.",
                action: "remote_list"
            },
            {
                mac: "git push -u origin main",
                win: "git push -u origin main",
                desc: "Simulate pushing your main branch commits to the remote store.",
                action: "remote_push"
            }
        ],
        quiz: [
            {
                question: "What is the convention 'origin' in Git remote commands?",
                options: [
                    "The primary default branch name",
                    "The default alias given to the remote URL repository you cloned from/pushed to",
                    "An integrity tag",
                    "The local folder path"
                ],
                answer: 1,
                explanation: "When you clone a repository or add a remote, Git sets up the default alias 'origin' to represent that remote server URL."
            },
            {
                question: "What does the '-u' flag do in 'git push -u origin main'?",
                options: [
                    "Uninstalls old files",
                    "Updates commit names",
                    "Sets upstream tracking, linking local and remote branches",
                    "Unlocks repository permissions"
                ],
                answer: 2,
                explanation: "The '-u' (upstream) option configures tracking. Future pushes/pulls on the branch won't require arguments: just 'git push' or 'git pull'."
            }
        ]
    },
    {
        day: 8,
        phase: "Beginner",
        title: "git fetch vs. git pull",
        theory: `
            <h2>Understanding Fetch, Pull, and Force Pushes</h2>
            <p>Collaborating on Git means syncing your workspace with changes on the remote branch:</p>
            <ul>
                <li><strong>git fetch:</strong> Downloads commits and branches from remote. It does <em>not</em> modify your local working directory files. It updates your remote-tracking branches (e.g. <code>origin/main</code>). Safe to run.</li>
                <li><strong>git pull:</strong> Does a <code>git fetch</code> followed immediately by a <code>git merge</code> of the tracking branch into your current local branch. It modifies your local files.</li>
                <li><strong>git pull --rebase:</strong> Fetches and replays your local commits on top of the fetched remote commits, keeping history linear.</li>
            </ul>

            <h3>The Danger of Force Pushing</h3>
            <p>If you rewrite local history (using rebase or amend) and try to push, Git rejects it because the remote has different history. Running <code>git push --force</code> overwrites remote branches with your local state, potentially deleting others' work. Use <code>git push --force-with-lease</code> to protect remote work.</p>
        `,
        practical: [
            {
                mac: "git fetch origin",
                win: "git fetch origin",
                desc: "Fetch updates from the remote. Updates tracking branch origin/main.",
                action: "fetch"
            },
            {
                mac: "git log main..origin/main --oneline",
                win: "git log main..origin/main --oneline",
                desc: "Compare local commits against the remote commits fetched.",
                action: "compare_commits"
            },
            {
                mac: "git pull origin main",
                win: "git pull origin main",
                desc: "Fetch remote updates and merge them directly into main.",
                action: "pull"
            }
        ],
        quiz: [
            {
                question: "What is the primary difference between git fetch and git pull?",
                options: [
                    "Fetch deletes local files; Pull restores them",
                    "Fetch downloads remote changes without merging them; Pull downloads and merges them immediately",
                    "Fetch updates local branches; Pull updates remote ones",
                    "There is no difference"
                ],
                answer: 1,
                explanation: "Git fetch is a read-only command that safely retrieves code history. Git pull is equivalent to running fetch followed by merge."
            },
            {
                question: "Why is git push --force-with-lease safer than git push --force?",
                options: [
                    "It works faster",
                    "It refuses to push if someone else has pushed new commits to the remote branch",
                    "It automatically resolves conflicts",
                    "It signs the commits"
                ],
                answer: 1,
                explanation: "Unlike a blind force push, '--force-with-lease' verifies if the remote tracking copy matches what is on the server, protecting others' work."
            }
        ]
    },
    {
        day: 9,
        phase: "Beginner",
        title: "Tags & Releases",
        theory: `
            <h2>Understanding Git Tags</h2>
            <p>Tags are references pointing to specific commits, used to mark release checkpoints (e.g. <code>v1.0.0</code>). They do not move like branches.</p>
            
            <h3>Tag Types</h3>
            <ul>
                <li><strong>Lightweight Tags:</strong> Like a branch that doesn't change. It is a pointer pointing to a commit hash.</li>
                <li><strong>Annotated Tags:</strong> Stored as full checksummed objects in the Git database. They contain creator name, email, date, tag message, and can be signed (GPG). Recommended for official releases.</li>
            </ul>

            <h3>Semantic Versioning (SemVer)</h3>
            <p>Release tags typically follow SemVer <code>vMAJOR.MINOR.PATCH</code>:</p>
            <ul>
                <li><strong>MAJOR:</strong> Incompatible API changes.</li>
                <li><strong>MINOR:</strong> Backward-compatible features.</li>
                <li><strong>PATCH:</strong> Backward-compatible bug fixes.</li>
            </ul>
        `,
        practical: [
            {
                mac: "git tag v0.1-beta",
                win: "git tag v0.1-beta",
                desc: "Create a lightweight tag pointing to the current commit.",
                action: "tag_lightweight"
            },
            {
                mac: 'git tag -a v1.0.0 -m "First stable release production v1.0.0"',
                win: 'git tag -a v1.0.0 -m "First stable release production v1.0.0"',
                desc: "Create an annotated tag with metadata details.",
                action: "tag_annotated"
            },
            {
                mac: "git tag",
                win: "git tag",
                desc: "List all tags in the repository.",
                action: "tag_list"
            },
            {
                mac: "git push origin v1.0.0",
                win: "git push origin v1.0.0",
                desc: "Push a specific tag to the remote server.",
                action: "tag_push"
            }
        ],
        quiz: [
            {
                question: "What is the difference between a branch and a tag?",
                options: [
                    "Tags require a server; branches are local",
                    "Branches move automatically as you commit; tags are static reference points that do not move",
                    "Branches store file contents; tags store settings",
                    "They are identical"
                ],
                answer: 1,
                explanation: "Branches represent active lines of development and automatically move to point to new commits. Tags are permanent, unchangeable bookmarks."
            },
            {
                question: "In Semantic Versioning (v1.2.3), what does the number '3' represent?",
                options: ["Major Version", "Minor Version", "Patch Version", "Build ID"],
                answer: 2,
                explanation: "The components represent MAJOR.MINOR.PATCH. Thus, the third number represents patch releases containing bug fixes."
            }
        ]
    },
    {
        day: 10,
        phase: "Beginner",
        title: ".gitignore Deep Dive & Stashing",
        theory: `
            <h2>Structuring .gitignore Patterns</h2>
            <p>A <code>.gitignore</code> uses glob patterns to match file paths:</p>
            <ul>
                <li><code>*.log</code>: Ignores all files ending with .log.</li>
                <li><code>dist/</code>: Ignores the dist folder and all its contents recursively.</li>
                <li><code>!important.log</code>: Negation pattern (tracks important.log even if *.log is ignored).</li>
            </ul>

            <h2>Temporarily Shelving Work with Git Stash</h2>
            <p>If you are working on a feature, your working directory is dirty, and you must switch branches to fix a bug, you cannot commit half-done code. <strong>git stash</strong> temporarily saves (shelves) your modifications and cleans the workspace.</p>
            <ul>
                <li><code>git stash push -m "WIP name"</code>: Saves changes.</li>
                <li><code>git stash list</code>: Lists stashed changes.</li>
                <li><code>git stash pop</code>: Reapplies the latest stash and deletes it from stash history.</li>
                <li><code>git stash apply</code>: Reapplies the latest stash but keeps it in the stash.</li>
            </ul>
        `,
        practical: [
            {
                mac: 'echo "Stash work" >> wip.txt && git add wip.txt',
                win: 'echo "Stash work" >> wip.txt && git add wip.txt',
                desc: "Modify a file to simulate unfinished work in your directory.",
                action: "dirty_workdir"
            },
            {
                mac: 'git stash push -m "WIP: login form half done"',
                win: 'git stash push -m "WIP: login form half done"',
                desc: "Stash your local changes, returning working directory to a clean state.",
                action: "stash_push"
            },
            {
                mac: "git stash list",
                win: "git stash list",
                desc: "List all saved stashes.",
                action: "stash_list"
            },
            {
                mac: "git stash pop",
                win: "git stash pop",
                desc: "Pop the stash, reapplying the changes back to your workspace.",
                action: "stash_pop"
            }
        ],
        quiz: [
            {
                question: "Which pattern will ignore all files in 'build/' but keep 'build/keep.json'?",
                options: [
                    "build/\n!build/keep.json",
                    "build/*\n!build/keep.json",
                    "ignore build/",
                    "keep build/keep.json"
                ],
                answer: 1,
                explanation: "Ignoring 'build/*' and using '!build/keep.json' allows tracking keep.json. Note that ignoring the directory itself ('build/') prevents Git from scanning inside it at all."
            },
            {
                question: "What does 'git stash pop' do?",
                options: [
                    "Deletes the branch",
                    "Reapplies the most recent stashed change and removes it from the stash stack",
                    "Creates a backup file copy",
                    "Pushes the stash to remote origin"
                ],
                answer: 1,
                explanation: "'pop' reapplies your stashed modifications and immediately drops them from the stack, unlike 'apply' which keeps them."
            }
        ]
    },
    {
        day: 11,
        phase: "Intermediate",
        title: "Rebasing Basics",
        theory: `
            <h2>What is git rebase?</h2>
            <p>Rebasing is the process of moving or combining a sequence of commits to a new base commit. Internally, Git achieves this by creating new commits and applying them on top of the specified base, rewriting history.</p>
            
            <p>Rebase is often preferred over merging because it results in a linear, clean project history without redundant merge commits.</p>

            <div class="takeaway-card">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <div class="takeaway-content">
                    <strong>The Golden Rule of Rebasing</strong>
                    <p>Never rebase commits that have been pushed to a public repository (shared with others). Rebasing rewrites commit hashes, which will break collaborators' local copies.</p>
                </div>
            </div>
        `,
        practical: [
            {
                mac: "git switch -c feature/api-rebase",
                win: "git switch -c feature/api-rebase",
                desc: "Create and switch to a feature/api-rebase branch.",
                action: "create_rebase_branch"
            },
            {
                mac: 'echo "API v1" > api.js && git add . && git commit -m "feat: design API layer"',
                win: 'echo "API v1" > api.js && git add . && git commit -m "feat: design API layer"',
                desc: "Commit a change on the feature branch.",
                action: "commit_rebase_feat"
            },
            {
                mac: "git switch main",
                win: "git switch main",
                desc: "Switch back to the main branch.",
                action: "switch_main_rebase"
            },
            {
                mac: 'echo "Docs update" >> README.md && git add . && git commit -m "docs: improve project instructions"',
                win: 'echo "Docs update" >> README.md && git add . && git commit -m "docs: improve project instructions"',
                desc: "Simulate divergence by making a new commit on main.",
                action: "commit_main_rebase"
            },
            {
                mac: "git switch feature/api-rebase",
                win: "git switch feature/api-rebase",
                desc: "Switch back to the feature branch.",
                action: "switch_feat_rebase"
            },
            {
                mac: "git rebase main",
                win: "git rebase main",
                desc: "Rebase the feature branch onto main (replays feature commits on top of main's commits).",
                action: "rebase_exec"
            }
        ],
        quiz: [
            {
                question: "What is the primary benefit of rebasing over merging?",
                options: [
                    "It resolves conflicts automatically",
                    "It maintains a linear, cleaner commit history without extra merge commits",
                    "It is safer for public repositories",
                    "It works offline, while merging doesn't"
                ],
                answer: 1,
                explanation: "Rebasing moves the entire branch base to the tip of main, keeping commits arranged linearly."
            },
            {
                question: "Why is rebasing public commits dangerous?",
                options: [
                    "It corrupts local file folders",
                    "It deletes file contents",
                    "It rewrites history, creating duplicate commits and causing divergence for other team members",
                    "It increases repository size"
                ],
                answer: 2,
                explanation: "Since rebasing rewrites commit hashes, anyone pulling your updated branch will have mismatched histories, requiring manual intervention to resolve."
            }
        ]
    },
    {
        day: 12,
        phase: "Intermediate",
        title: "Interactive Rebase & Squash",
        theory: `
            <h2>Clean Commits with Interactive Rebase</h2>
            <p>Interactive rebasing (<code>git rebase -i</code>) allows you to clean up commit history before sharing your code. When launched, Git opens an editor detailing the commits and allows you to run actions:</p>
            <ul>
                <li><strong>pick:</strong> Keep the commit as-is.</li>
                <li><strong>reword:</strong> Keep the commit content but change the commit message.</li>
                <li><strong>squash:</strong> Merge the commit's changes into the previous commit, combining their messages.</li>
                <li><strong>fixup:</strong> Merge the commit's changes into the previous commit, discarding this commit's message.</li>
                <li><strong>drop:</strong> Delete the commit from history entirely.</li>
            </ul>
        `,
        practical: [
            {
                mac: 'echo "A" > a.txt && git add . && git commit -m "WIP: half-done auth"',
                win: 'echo "A" > a.txt && git add . && git commit -m "WIP: half-done auth"',
                desc: "Make a placeholder commit with unfinished work.",
                action: "messy_commit_1"
            },
            {
                mac: 'echo "B" > b.txt && git add . && git commit -m "feat: complete login authentication"',
                win: 'echo "B" > b.txt && git add . && git commit -m "feat: complete login authentication"',
                desc: "Make a final clean feature commit.",
                action: "messy_commit_2"
            },
            {
                mac: "git rebase -i HEAD~2",
                win: "git rebase -i HEAD~2",
                desc: "Launch interactive rebase on the last two commits (Simulate squashing the WIP commit into the clean feature commit).",
                action: "interactive_rebase"
            }
        ],
        quiz: [
            {
                question: "Which interactive rebase option combines a commit into the previous one and discards its commit message?",
                options: ["squash", "fixup", "reword", "drop"],
                answer: 1,
                explanation: "'fixup' (f) works like 'squash' but discards the commit message of the squashed commit, keeping only the previous commit's message."
            },
            {
                question: "What is the command to launch interactive rebase on the last 4 commits?",
                options: ["git rebase -i 4", "git rebase --interactive HEAD~4", "git rebase -clean 4", "git rebase HEAD-4"],
                answer: 1,
                explanation: "'git rebase -i HEAD~4' opens the interactive script listing the last 4 commits (from oldest to newest)."
            }
        ]
    },
    {
        day: 13,
        phase: "Intermediate",
        title: "Cherry-pick",
        theory: `
            <h2>Understanding git cherry-pick</h2>
            <p>Cherry-picking in Git allows you to choose specific commits from one branch and apply them to another. This is useful when you want to port a bug fix from a development branch to a stable release branch without merging the entire feature history.</p>

            <h3>How it Works</h3>
            <p>Git copies the patch represented by the target commit and applies it to the current branch as a new commit, with a new SHA-1 hash.</p>
            <ul>
                <li><code>git cherry-pick &lt;commit-hash&gt;</code>: Applies a single commit.</li>
                <li><code>git cherry-pick &lt;hash-a&gt;^..&lt;hash-b&gt;</code>: Applies a range of commits.</li>
            </ul>
        `,
        practical: [
            {
                mac: "git switch -c hotfix/patch",
                win: "git switch -c hotfix/patch",
                desc: "Create and switch to a hotfix/patch branch.",
                action: "create_hotfix_branch"
            },
            {
                mac: 'echo "Security fix" > fix.js && git add . && git commit -m "fix: patch critical vulnerability"',
                win: 'echo "Security fix" > fix.js && git add . && git commit -m "fix: patch critical vulnerability"',
                desc: "Make a critical patch commit.",
                action: "commit_hotfix"
            },
            {
                mac: "git switch main",
                win: "git switch main",
                desc: "Switch back to the main branch.",
                action: "switch_main_cherry"
            },
            {
                mac: "git cherry-pick HEAD@{1}",
                win: "git cherry-pick HEAD@{1}",
                desc: "Cherry-pick the specific patch commit from the hotfix branch into main.",
                action: "cherry_pick_exec"
            }
        ],
        quiz: [
            {
                question: "When would you prefer 'cherry-pick' over 'merge'?",
                options: [
                    "When you want to merge all commits of another branch",
                    "When you want to bring only one specific commit (like a bug fix) from another branch without bringing the rest of the commits",
                    "When you want to delete a branch",
                    "When working offline"
                ],
                answer: 1,
                explanation: "Cherry-picking applies a single commit's changes to your current branch, allowing selective history promotion."
            },
            {
                question: "Does cherry-picking preserve the original commit hash?",
                options: [
                    "Yes, the commit hash remains exactly the same",
                    "No, Git creates a new commit with a new hash because the base commit and timestamp differ",
                    "Only if forced",
                    "Only on remote branches"
                ],
                answer: 1,
                explanation: "Since cherry-picking creates a new commit on the target branch (which has a different parent history), it gets a fresh commit SHA-1 hash."
            }
        ]
    },
    {
        day: 14,
        phase: "Intermediate",
        title: "git reset vs. git revert",
        theory: `
            <h2>Undoing Changes in Git</h2>
            <p>Git provides different mechanisms to undo changes, depending on whether the changes have been pushed to public remotes:</p>

            <h3>1. git reset (Rewriting Local History)</h3>
            <p>Moves the current branch pointer backward in time. It is unsafe for public commits. It has three primary modes:</p>
            <ul>
                <li><code>--soft</code>: Undoes the commit, but keeps your files changed and staged in the Staging Area.</li>
                <li><code>--mixed</code> (Default): Undoes the commit, keeps files changed, but unstages them (moves them to Working Directory).</li>
                <li><code>--hard</code>: Undoes the commit, unstages files, and discards all changes. <strong>DANGER:</strong> Uncommitted changes are permanently lost.</li>
            </ul>

            <h3>2. git revert (Safe Public Undo)</h3>
            <p>Creates a brand new commit that does the exact opposite of a target commit. This is safe for public branches since it does not rewrite history.</p>

            <h3>The Safety Net: git reflog</h3>
            <p>Git reflog records every movement of HEAD. If you accidentally run <code>git reset --hard</code> and lose commits, you can find the lost commit hash in the reflog and restore it.</p>
        `,
        practical: [
            {
                mac: 'echo "Data" > test.txt && git add . && git commit -m "feat: add test data"',
                win: 'echo "Data" > test.txt && git add . && git commit -m "feat: add test data"',
                desc: "Create a commit to test resets on.",
                action: "reset_setup"
            },
            {
                mac: "git reset --soft HEAD~1",
                win: "git reset --soft HEAD~1",
                desc: "Soft reset the commit (files are preserved in the staging area).",
                action: "reset_soft"
            },
            {
                mac: "git reset --hard HEAD",
                win: "git reset --hard HEAD",
                desc: "Hard reset the changes (discards all staged and unstaged work).",
                action: "reset_hard"
            },
            {
                mac: "git reflog",
                win: "git reflog",
                desc: "View the reflog journal showing the history of HEAD movements.",
                action: "reflog"
            }
        ],
        quiz: [
            {
                question: "Which reset mode discards all changes in the staging area and working directory?",
                options: ["--soft", "--mixed", "--hard", "--keep"],
                answer: 2,
                explanation: "'--hard' resets the index and working tree. Any changes since the target commit are discarded."
            },
            {
                question: "Why should you use 'git revert' instead of 'git reset' on public branches?",
                options: [
                    "It works offline",
                    "It deletes remote files",
                    "Revert creates a new commit representing the undo action without modifying existing history, avoiding conflicts for others",
                    "Revert is faster"
                ],
                answer: 2,
                explanation: "Resetting public branches breaks others' history. Reverting appends new history, which is safe to push."
            }
        ]
    },
    {
        day: 15,
        phase: "Intermediate",
        title: "Git Workflows",
        theory: `
            <h2>Common Team Workflows</h2>
            <p>Different workflows suit different teams, depending on release cadences and team sizes:</p>
            
            <h3>1. Gitflow Workflow</h3>
            <p>A strict branch-based model for managing large releases. It uses long-lived branches:</p>
            <ul>
                <li><code>main</code>: Production-ready code only.</li>
                <li><code>develop</code>: Integration branch for features.</li>
                <li><code>feature/*</code>: Short-lived feature branches branching from and merging into develop.</li>
                <li><code>release/*</code>: Pre-release stabilization branches.</li>
                <li><code>hotfix/*</code>: Critical production patches.</li>
            </ul>

            <h3>2. GitHub Flow</h3>
            <p>A lightweight workflow ideal for continuous deployment. It has one master branch (<code>main</code>), with feature branches and Pull Requests (PRs) merged directly into main.</p>

            <h3>3. Trunk-Based Development</h3>
            <p>Developers collaborate on a single branch (the "trunk" or <code>main</code>), using feature flags to hide incomplete work. Branches are extremely short-lived (hours or a day).</p>
        `,
        practical: [
            {
                mac: "git switch -c develop",
                win: "git switch -c develop",
                desc: "Initialize the develop branch (Gitflow model).",
                action: "gitflow_init"
            },
            {
                mac: "git switch -c feature/billing develop",
                win: "git switch -c feature/billing develop",
                desc: "Create a feature branch branching from develop.",
                action: "gitflow_create_feature"
            },
            {
                mac: 'echo "Billing" > bill.js && git add . && git commit -m "feat: implement payment integration"',
                win: 'echo "Billing" > bill.js && git add . && git commit -m "feat: implement payment integration"',
                desc: "Commit billing code to the feature branch.",
                action: "gitflow_commit_feature"
            },
            {
                mac: "git switch develop && git merge --no-ff feature/billing",
                win: "git switch develop && git merge --no-ff feature/billing",
                desc: "Merge feature/billing into develop using --no-ff (forces a merge commit for tracking).",
                action: "gitflow_merge_feature"
            }
        ],
        quiz: [
            {
                question: "In Gitflow, which branch contains production-ready code?",
                options: ["develop", "feature", "main / master", "release"],
                answer: 2,
                explanation: "The 'main' branch stores official release history. Develop is used for ongoing feature integration."
            },
            {
                question: "What is the key principle of Trunk-Based Development?",
                options: [
                    "Using long-lived release branches that span months",
                    "Developers merge code frequently to the main branch ('trunk') to avoid integration conflicts",
                    "Never committing directly to main",
                    "A strict division of roles"
                ],
                answer: 1,
                explanation: "Trunk-based development focuses on committing small changes to a single main branch frequently, preventing merge conflicts."
            }
        ]
    },
    // Adding highlights for later days to ensure data loads smoothly.
    // Days 16-30 will be structurally present to allow seamless navigation
    {
        day: 16,
        phase: "Intermediate",
        title: "Pull Requests & Code Reviews",
        theory: `
            <h2>Understanding Pull Requests</h2>
            <p>A Pull Request (PR) is a GitHub mechanism that lets you tell others about changes you've pushed to a branch in a repository on GitHub. Once a PR is opened, you can discuss and review the potential changes with collaborators before they are merged into the main branch.</p>
            <h3>Code Review Etiquette</h3>
            <ul>
                <li>Keep PRs small and focused on a single task.</li>
                <li>Write detailed descriptions explaining *why* the changes were made.</li>
                <li>Ensure branch protection rules are set up to require approvals before merging.</li>
            </ul>
        `,
        practical: [
            {
                mac: "mkdir -p .github && touch .github/pull_request_template.md",
                win: "mkdir .github && echo. > .github\\pull_request_template.md",
                desc: "Create a PR template for structured code reviews.",
                action: "pr_template"
            }
        ],
        quiz: [
            {
                question: "What is a Pull Request?",
                options: ["A git download command", "A request to review and merge changes from a branch on GitHub", "A security scanner", "A server backup"],
                answer: 1,
                explanation: "PRs are GitHub-specific interfaces that facilitate discussion, testing, and approval before merging branch changes."
            }
        ]
    },
    {
        day: 17,
        phase: "Intermediate",
        title: "Commit Message Conventions",
        theory: `
            <h2>Conventional Commits</h2>
            <p>Conventional Commits is a specification that adds a human and machine readable meaning to commit messages. It provides rules for creating commit history, making it easier to write automated tools (like semantic versioning tools).</p>
            <p>Structure: <code>type(scope): description</code></p>
            <ul>
                <li><strong>feat:</strong> Introduces a new feature.</li>
                <li><strong>fix:</strong> Fixes a bug.</li>
                <li><strong>docs:</strong> Documentation changes.</li>
                <li><strong>chore:</strong> Build process or tooling changes.</li>
            </ul>
        `,
        practical: [
            {
                mac: 'git commit -m "feat(auth): add google oauth login"',
                win: 'git commit -m "feat(auth): add google oauth login"',
                desc: "Simulate committing changes following conventional commit syntax.",
                action: "conv_commit"
            }
        ],
        quiz: [
            {
                question: "Which commit type represents a bug fix in Conventional Commits?",
                options: ["feat", "bug", "fix", "patch"],
                answer: 2,
                explanation: "The 'fix' type represents bug corrections in the source code."
            }
        ]
    },
    {
        day: 18,
        phase: "Intermediate",
        title: "Git Hooks",
        theory: `
            <h2>Automating with Git Hooks</h2>
            <p>Git hooks are scripts that run automatically when specific events occur in a Git repository. They reside in the <code>.git/hooks/</code> directory and are not committed to source control by default.</p>
            <ul>
                <li><strong>pre-commit:</strong> Runs before commit message is created. Used to check code formatting or run linters.</li>
                <li><strong>commit-msg:</strong> Runs after message is typed. Used to validate commit message structure.</li>
                <li><strong>pre-push:</strong> Runs before pushing to remote. Used to run integration tests.</li>
            </ul>
        `,
        practical: [
            {
                mac: "ls .git/hooks/",
                win: "dir .git\\hooks\\",
                desc: "Inspect available sample hooks in the repository.",
                action: "hooks_list"
            }
        ],
        quiz: [
            {
                question: "Where do local Git hooks reside?",
                options: [".github/workflows/", ".git/hooks/", ".gitignore", "hooks.json"],
                answer: 1,
                explanation: "Hooks are stored in the local hidden '.git/hooks/' folder of the repository."
            }
        ]
    },
    {
        day: 19,
        phase: "Intermediate",
        title: "Submodules & Subtrees",
        theory: `
            <h2>Managing Dependencies with Submodules</h2>
            <p>Git submodules allow you to keep a Git repository as a subdirectory of another Git repository. This lets you clone another repository into your project and keep your commits separate.</p>
            <h3>Trade-offs</h3>
            <ul>
                <li><strong>Submodules:</strong> Stores a pointer pointing to a specific commit of the dependency. Requires manual updates.</li>
                <li><strong>Subtrees:</strong> Copies the files of the external repo into your folder structure. Simpler to clone but harder to push back.</li>
            </ul>
        `,
        practical: [
            {
                mac: "git submodule add https://github.com/twbs/bootstrap.git libs/bootstrap",
                win: "git submodule add https://github.com/twbs/bootstrap.git libs/bootstrap",
                desc: "Add bootstrap repository as a submodule dependency.",
                action: "submodule_add"
            }
        ],
        quiz: [
            {
                question: "What does Git store when you add a submodule?",
                options: ["The full codebase duplicate", "A reference to a specific commit hash of the external repository", "A simple link address", "A zip file"],
                answer: 1,
                explanation: "Submodules track specific commit SHA-1 references, locking dependencies to tested releases."
            }
        ]
    },
    {
        day: 20,
        phase: "Intermediate",
        title: "Git Bisect & Debugging",
        theory: `
            <h2>Binary Search with Git Bisect</h2>
            <p>Git bisect is a debugging tool that uses binary search to find the commit that introduced a bug in your project history. You mark the current state as "bad" and a past stable commit as "good", and Git splits the commits in half to help you isolate the bug.</p>
        `,
        practical: [
            {
                mac: "git bisect start && git bisect bad",
                win: "git bisect start && git bisect bad",
                desc: "Start the bisect debugging run.",
                action: "bisect_start"
            }
        ],
        quiz: [
            {
                question: "Which search algorithm does 'git bisect' use?",
                options: ["Linear search", "Depth-First search", "Binary search", "A* search"],
                answer: 2,
                explanation: "'git bisect' uses binary search, splitting history in half repeatedly to locate the bug source in O(log N) commits."
            }
        ]
    },
    {
        day: 21,
        phase: "Advanced",
        title: "Advanced Branching",
        theory: `
            <h2>Long-lived vs. Environment Branches</h2>
            <p>In large enterprises, developers manage multiple active release lines simultaneously using stable branches mapped to environments (e.g. dev, staging, production) or LTS channels.</p>
        `,
        practical: [
            {
                mac: "git switch -c production",
                win: "git switch -c production",
                desc: "Create environment-specific branch pointer.",
                action: "env_branch"
            }
        ],
        quiz: [
            {
                question: "What is an environment branch?",
                options: ["A branch for system variables", "A branch representing code deployed to specific servers (e.g., staging, prod)", "A branch created in the cloud only", "A deleted branch"],
                answer: 1,
                explanation: "Environment branches track code state corresponding to deployments in production, testing, or staging."
            }
        ]
    },
    {
        day: 22,
        phase: "Advanced",
        title: "Git Internals",
        theory: `
            <h2>The Git Object Store</h2>
            <p>Git is a content-addressable filesystem. Everything in Git is stored inside the <code>.git/objects/</code> directory, hashed using SHA-1 keys. The four object types are:</p>
            <ul>
                <li><strong>Blobs:</strong> Stores raw file content data (no filenames or metadata).</li>
                <li><strong>Trees:</strong> Stores directory structures (directory lists mapping blobs/subtrees to filenames).</li>
                <li><strong>Commits:</strong> Stores pointers to the root tree, parent commits, author, date, and commit message.</li>
                <li><strong>Tags:</strong> Stores annotated references pointing to commits.</li>
            </ul>
        `,
        practical: [
            {
                mac: "git cat-file -t HEAD",
                win: "git cat-file -t HEAD",
                desc: "Inspect the object type of the HEAD pointer reference.",
                action: "cat_file_type"
            }
        ],
        quiz: [
            {
                question: "Which Git object type stores raw file content without filenames?",
                options: ["Commit", "Tree", "Blob", "Ref"],
                answer: 2,
                explanation: "Blobs store only binary file contents, keeping Git lightweight by deduplicating identical files across directories."
            }
        ]
    },
    {
        day: 23,
        phase: "Advanced",
        title: "Advanced Merging Strategies",
        theory: `
            <h2>Git Merge Strategies</h2>
            <p>Git uses different strategies to merge branches, depending on the branch structure:</p>
            <ul>
                <li><strong>Recursive:</strong> The default strategy when merging diverged branches. Uses a 3-way merge algorithm.</li>
                <li><strong>Ours / Theirs:</strong> Specific flag overrides (<code>-X ours</code>) that resolve conflicts automatically by preferring one side.</li>
                <li><strong>Octopus:</strong> Merges more than two branches at the same time. Useful for combining multiple independent feature lines.</li>
            </ul>
        `,
        practical: [
            {
                mac: "git merge -X ours feature/footer",
                win: "git merge -X ours feature/footer",
                desc: "Merge feature/footer, resolving all conflicts using our current changes.",
                action: "merge_ours"
            }
        ],
        quiz: [
            {
                question: "What merge strategy lets you merge 3 or more branches at once?",
                options: ["Recursive", "Octopus", "Subtree", "Ours"],
                answer: 1,
                explanation: "The Octopus merge strategy is designed to merge multiple branches together safely, provided there are no complex conflicts."
            }
        ]
    },
    {
        day: 24,
        phase: "Advanced",
        title: "Reflog & Recovery",
        theory: `
            <h2>Recovering from Disasters</h2>
            <p>Because Git keeps a reference history of everything you do locally (recorded in <code>git reflog</code>), you can recover almost anything that was once committed, even if a branch was force-deleted.</p>
        `,
        practical: [
            {
                mac: "git fsck --lost-found",
                win: "git fsck --lost-found",
                desc: "Check the database for dangling, orphaned objects.",
                action: "fsck"
            }
        ],
        quiz: [
            {
                question: "Can you recover a commit deleted by a hard reset if it wasn't pushed?",
                options: ["No, it is gone forever", "Yes, using git reflog to find its SHA-1 hash and checking it out", "Only on GitHub", "Only using GPG keys"],
                answer: 1,
                explanation: "Because Git reflog tracks HEAD movements, you can retrieve the commit hash and restore it using checkout or reset."
            }
        ]
    },
    {
        day: 25,
        phase: "Advanced",
        title: "git worktree",
        theory: `
            <h2>Working on Multiple Branches Simultaneously</h2>
            <p>Normally, Git allows only one active working directory branch at a time. The <code>git worktree</code> command allows you to check out multiple branches of the same repository into separate local directories simultaneously. This is useful when you need to make a quick hotfix without stashing or disturbing your active work in progress.</p>
        `,
        practical: [
            {
                mac: "git worktree add ../hotfix-worktree main",
                win: "git worktree add ..\\hotfix-worktree main",
                desc: "Add a secondary directory running the main branch.",
                action: "worktree_add"
            }
        ],
        quiz: [
            {
                question: "Why would you use 'git worktree'?",
                options: ["To backup files", "To work on multiple branches of the same repository simultaneously in separate directories", "To host Git on a server", "To track large files"],
                answer: 1,
                explanation: "Worktrees checkout branches into separate filesystem paths, allowing concurrent edit contexts."
            }
        ]
    },
    {
        day: 26,
        phase: "Advanced",
        title: "CI/CD & Git Actions",
        theory: `
            <h2>Integrating Git with Automation Pipelines</h2>
            <p>Modern DevOps pipelines trigger automation workflows on Git events (like push, pull request, or tagging). GitHub Actions uses YAML workflow templates in the <code>.github/workflows/</code> directory to automate testing, build packaging, and cloud deployment.</p>
        `,
        practical: [
            {
                mac: "mkdir -p .github/workflows && touch .github/workflows/ci.yml",
                win: "mkdir .github\\workflows && echo. > .github\\workflows\\ci.yml",
                desc: "Create a standard GitHub Actions CI/CD configuration template file.",
                action: "create_ci"
            }
        ],
        quiz: [
            {
                question: "Where are GitHub Actions workflow configurations stored in a repository?",
                options: [".git/hooks/", "package.json", ".github/workflows/", "ci.json"],
                answer: 2,
                explanation: "Workflows must be stored in the '.github/workflows/' directory as YAML files (e.g. '.yml' or '.yaml')."
            }
        ]
    },
    {
        day: 27,
        phase: "Advanced",
        title: "Large File Storage (Git LFS)",
        theory: `
            <h2>Managing Binaries with Git LFS</h2>
            <p>Git is not designed to track large binary files (like video assets, 3D models, or trained ML weights). Tracking them in standard Git balloons repository sizes because every version is downloaded by everyone. <strong>Git LFS (Large File Storage)</strong> replaces large files with tiny text pointers in Git, storing the actual binaries on an external assets server.</p>
        `,
        practical: [
            {
                mac: "git lfs track '*.psd'",
                win: "git lfs track '*.psd'",
                desc: "Configure Git LFS to track Photoshop files.",
                action: "lfs_track"
            }
        ],
        quiz: [
            {
                question: "How does Git LFS store large files inside the Git repository itself?",
                options: ["As compressed zip files", "As tiny text pointers containing SHA hashes of the files", "Directly in the commit objects", "On local floppy drives"],
                answer: 1,
                explanation: "Git LFS keeps Git history lightweight by checking in tiny text pointers. The actual files are downloaded on-demand from the storage server."
            }
        ]
    },
    {
        day: 28,
        phase: "Advanced",
        title: "Git Security & Secrets",
        theory: `
            <h2>Protecting Repositories from Secret Leaks</h2>
            <p>Committing secrets (API tokens, database credentials, certificates) is one of the most common security vulnerabilities. Tools like <code>gitleaks</code> scan history for keys. If you commit a secret, you must rotate it immediately and wipe history using <code>git filter-repo</code>.</p>
        `,
        practical: [
            {
                mac: "git config --global commit.gpgsign true",
                win: "git config --global commit.gpgsign true",
                desc: "Configure global Git settings to sign all commits automatically with GPG keys.",
                action: "secure_sign"
            }
        ],
        quiz: [
            {
                question: "What is the recommended action if you commit a secret (like an API key) to a public repo?",
                options: [
                    "Delete the repository immediately",
                    "Change the file and make a new commit",
                    "Rotate/revoke the secret immediately, then clean up the history using git filter-repo before force-pushing",
                    "Rename the secret file"
                ],
                answer: 2,
                explanation: "Once pushed, a secret is compromised. You must immediately revoke it (rotate keys), and then clean the history to prevent easy discovery."
            }
        ]
    },
    {
        day: 29,
        phase: "Advanced",
        title: "Monorepos",
        theory: `
            <h2>Managing Code at Scale</h2>
            <p>A monorepo is a software development strategy where code for multiple projects is stored in the same repository. To scale large monorepos, Git supports advanced performance optimizations:</p>
            <ul>
                <li><strong>Sparse Checkout:</strong> Allows checking out only a subset of directories, speeding up workspace operations.</li>
                <li><strong>Partial Clones:</strong> Skips downloading historical file blobs, downloading files only when checked out.</li>
            </ul>
        `,
        practical: [
            {
                mac: "git sparse-checkout init --cone",
                win: "git sparse-checkout init --cone",
                desc: "Initialize sparse checkout in the repository to target specific directories.",
                action: "sparse_init"
            }
        ],
        quiz: [
            {
                question: "What does 'git sparse-checkout' allow developers to do?",
                options: [
                    "Ignore empty directories",
                    "Clone only a small part of the branch commit history",
                    "Check out only a specific subset of directories from a large repository onto their disk",
                    "Compress repository packfiles"
                ],
                answer: 2,
                explanation: "Sparse checkout makes working on massive monorepos fast by downloading and updating only the directories the developer needs."
            }
        ]
    },
    {
        day: 30,
        phase: "Advanced",
        title: "Git Aliases, Best Practices & Review",
        theory: `
            <h2>Maxing out Git Productivity</h2>
            <p>To speed up daily Git interactions, you can configure shorthand <strong>aliases</strong> in your global <code>.gitconfig</code> file. Additionally, maintaining team alignment on commit quality, branch rules, and pruning merged references ensures long-term sanity.</p>
        `,
        practical: [
            {
                mac: "git config --global alias.st 'status -sb'",
                win: "git config --global alias.st 'status -sb'",
                desc: "Register shorthand 'git st' to print status in a concise format.",
                action: "alias_add_st"
            },
            {
                mac: "git config --global alias.lg 'log --oneline --graph --all'",
                win: "git config --global alias.lg 'log --oneline --graph --all'",
                desc: "Register shorthand 'git lg' to print visual history graphs.",
                action: "alias_add_lg"
            }
        ],
        quiz: [
            {
                question: "How are Git aliases saved on your system?",
                options: ["In local text files in every folder", "In the global .gitconfig configuration file under the [alias] section", "In custom system scripts", "On GitHub servers"],
                answer: 1,
                explanation: "Global aliases are saved in the user's home directory '.gitconfig' file, making them available across all repositories."
            }
        ]
    }
];

const GIT_ALIASES_LIST = [
    {
        alias: "st",
        cmd: "status -sb",
        desc: "Show status in a short, clean format showing branch sync info."
    },
    {
        alias: "lg",
        cmd: "log --oneline --graph --all --decorate",
        desc: "Interactive visual tree showing commits, branches, merges, and tags."
    },
    {
        alias: "undo",
        cmd: "reset HEAD~1 --mixed",
        desc: "Undo the last local commit, keeping changes unstaged in your workspace."
    },
    {
        alias: "unstage",
        cmd: "restore --staged",
        desc: "Remove files from the staging area (Index) quickly."
    },
    {
        alias: "last",
        cmd: "log -1 HEAD --stat",
        desc: "View detailed statistics and modified files of the last commit."
    },
    {
        alias: "wip",
        cmd: "!git add -A && git commit -m 'WIP: checkpoint'",
        desc: "Shell escape alias: stages all files and creates a temporary WIP commit."
    },
    {
        alias: "unwip",
        cmd: "!git log -n 1 | grep -q 'WIP' && git reset HEAD~1",
        desc: "Shell escape alias: safely undoes the WIP checkpoint if it matches."
    }
];
