/* linux-data.js — Curriculum database for the Linux & Shell course.
   Same data shape as the Git course so it plugs into the shared engine (app.js).
   Every explanation is written in plain English for absolute beginners. */

const LINUX_ROADMAP_DATA = [
    {
        day: 0,
        phase: "Getting Started",
        title: "Get a Terminal You Can Practice In",
        theory: `
            <h2>Before You Start: Open a Place to Type Commands</h2>
            <p>Learning Linux is like learning to drive: you need a car to practice in. In Linux, that "car" is a black window called a <strong>terminal</strong> (also called a <strong>shell</strong> or <strong>command line</strong>). You type a command, press Enter, and the computer does it.</p>
            <p>Don't worry — you can't break anything by reading. And the practice we do here is safe. Pick the option below that matches your computer.</p>

            <h3>On a Mac (easiest — you already have it)</h3>
            <p>Macs come with a terminal built in, and it understands almost all the same commands as Linux.</p>
            <ol>
                <li>Press <strong>Cmd + Space</strong> to open Spotlight search.</li>
                <li>Type <code>Terminal</code> and press Enter.</li>
                <li>A window opens with a prompt ending in <code>$</code> or <code>%</code>. That's it — you're ready.</li>
            </ol>

            <h3>On Windows</h3>
            <p>Windows isn't Linux, but Microsoft gives you a free, real Linux inside Windows called <strong>WSL</strong> (Windows Subsystem for Linux).</p>
            <ol>
                <li>Open the <strong>Start menu</strong>, type <code>PowerShell</code>, right-click it and choose <strong>Run as administrator</strong>.</li>
                <li>Type <code>wsl --install</code> and press Enter. This installs Ubuntu (a popular, friendly version of Linux).</li>
                <li>Restart your computer when asked. Then open the <strong>Ubuntu</strong> app from the Start menu and pick a username and password.</li>
                <li>You now have a genuine Linux terminal. Use it for every lesson.</li>
            </ol>
            <p>More details: <a href="https://learn.microsoft.com/windows/wsl/install" target="_blank" rel="noopener">Microsoft's WSL install guide</a>.</p>

            <h3>On a computer already running Linux</h3>
            <p>Look for an app called <strong>Terminal</strong> in your menu, or press <strong>Ctrl + Alt + T</strong>. Done.</p>

            <h3>No computer access? Practice in your browser</h3>
            <p>You can try commands online without installing anything, for example on a free sandbox like the playgrounds at <a href="https://killercoda.com/playgrounds" target="_blank" rel="noopener">killercoda.com/playgrounds</a>. Great for quick practice, but installing a real terminal (above) is better for the long run.</p>

            <h3>Read the prompt</h3>
            <p>When the terminal is waiting for you, it shows a <strong>prompt</strong> — usually something like <code>user@computer:~$</code>. The <code>$</code> means "your turn, type something". You type after it and press Enter. Throughout this course, when you see a command, type the part <em>after</em> the <code>$</code>.</p>

            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>You're ready!</strong>
                    <p>You have a terminal open and you know that the <code>$</code> prompt means it's waiting for you. That's all the setup you need. In Lesson 1 we'll type our very first real commands.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>It's your first morning at a new job. Your laptop is set up, and a teammate says: "Most of our servers don't have a mouse or screen — you control them by typing. Let's make sure you can open a terminal and read the prompt before we go further."</p>
            <p class="scenario-quote">"Once you can open that black window and you understand the little <code>$</code> sign, you'll be able to follow along with everything else. That's the only thing you need today."</p>
            <h3>Why this matters</h3>
            <p>Every Linux task — on your laptop or a server far away in a data center — starts in this same window. Get comfortable opening it once, and nothing later will feel scary.</p>
        `,
        practical: [
            { mac: "echo \"Hello, terminal!\"", win: "echo \"Hello, terminal!\"", desc: "Print a message. If you see the words appear, your terminal works." },
            { mac: "whoami", win: "whoami", desc: "Show the username you're logged in as." },
            { mac: "date", win: "date", desc: "Show the current date and time — a harmless way to prove commands run." }
        ],
        exercises: [
            { difficulty: "Easy", task: "Make the terminal print the words: I am learning Linux", solution: "echo \"I am learning Linux\"", outcome: "The exact text is printed back to you on the next line." },
            { difficulty: "Easy", task: "Find out what username you are currently using.", solution: "whoami", outcome: "Prints your account name, e.g. 'alex'." },
            { difficulty: "Practice", task: "Ask the computer for today's date and time.", solution: "date", outcome: "Shows the full current date and time." }
        ],
        quiz: [
            { question: "What is a 'terminal' (or 'shell')?", options: ["A type of computer virus", "A window where you type commands for the computer to run", "A website for downloading Linux", "A kind of mouse"], answer: 1, explanation: "The terminal is the text window where you type commands and the computer carries them out." },
            { question: "On the prompt user@computer:~$, what does the $ usually mean?", options: ["You owe money", "An error happened", "The terminal is ready and waiting for you to type", "The computer is switched off"], answer: 2, explanation: "The $ (or %) at the end of the prompt means the shell is ready for your next command." },
            { question: "What does the echo command do?", options: ["Deletes files", "Prints text back out to the screen", "Restarts the computer", "Connects to the internet"], answer: 1, explanation: "echo simply prints whatever text you give it — handy for testing and for showing messages." }
        ]
    },
    {
        day: 1,
        phase: "Beginner",
        title: "Where Am I? Moving Around Folders",
        theory: `
            <h2>Finding Your Way Around</h2>
            <p>A Linux computer stores everything in <strong>folders</strong> (also called <strong>directories</strong>) nested inside each other, just like folders on your phone or in a filing cabinet. When you're in the terminal, you are always "standing" inside one folder. Three commands let you find and change where you stand.</p>

            <h3>1. <code>pwd</code> — "Where am I right now?"</h3>
            <p><code>pwd</code> stands for <em>print working directory</em>. It shows the full path of the folder you're currently in, like <code>/home/alex</code>. Think of it as asking "what's my current address?"</p>

            <h3>2. <code>ls</code> — "What's in here?"</h3>
            <p><code>ls</code> (short for <em>list</em>) shows the files and folders inside your current folder — like opening a drawer and seeing what's inside.</p>

            <h3>3. <code>cd</code> — "Take me to another folder"</h3>
            <p><code>cd</code> means <em>change directory</em>. You tell it where to go: <code>cd Documents</code> walks you into the Documents folder. A few handy shortcuts:</p>
            <ul>
                <li><code>cd ..</code> — go up one level (back to the folder that contains this one).</li>
                <li><code>cd ~</code> — go to your <strong>home</strong> folder (your personal space, where you start).</li>
                <li><code>cd /</code> — go to the very top, the <strong>root</strong> of the whole system.</li>
            </ul>

            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Remember the trio</strong>
                    <p><code>pwd</code> = where am I, <code>ls</code> = what's here, <code>cd</code> = go somewhere. You'll use these every single day.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>You log into a server to fix a problem. There's no desktop, no icons — just a blinking cursor. Your teammate asks: "Can you check what's inside the website folder?" You realize you first need to know where you are and how to walk to that folder.</p>
            <p class="scenario-quote">"Always start by getting your bearings: where am I, what's here, and how do I move. Once that's second nature, navigating a server feels exactly like browsing folders on your own laptop."</p>
            <h3>Why this matters</h3>
            <p>You can't fix, copy, or open a file until you can reach the folder it lives in. Moving around confidently is the foundation for everything else.</p>
        `,
        practical: [
            { mac: "pwd", win: "pwd", desc: "Show the full path of the folder you're currently in." },
            { mac: "ls", win: "ls", desc: "List the files and folders in your current location." },
            { mac: "cd ~", win: "cd ~", desc: "Jump to your home folder (your personal starting space)." },
            { mac: "cd ..", win: "cd ..", desc: "Move up one level to the parent folder." },
            { mac: "cd /", win: "cd /", desc: "Go to the very top of the file system (the root)." }
        ],
        exercises: [
            { difficulty: "Easy", task: "Print the address of the folder you are currently standing in.", solution: "pwd", outcome: "Shows something like /home/yourname." },
            { difficulty: "Easy", task: "List everything inside your current folder.", solution: "ls", outcome: "Displays the files and folders in that location." },
            { difficulty: "Practice", task: "Go to your home folder, then confirm where you landed.", hint: "Two commands: move, then check.", solution: "cd ~ && pwd", outcome: "Moves to your home folder and prints its path." },
            { difficulty: "Practice", task: "From your home folder, move up one level and list what's there.", solution: "cd .. && ls", outcome: "Shows the contents of the folder above your home folder." },
            { difficulty: "Medium", task: "Go to the very top of the system and see the main folders Linux is built from.", solution: "cd / && ls", outcome: "Lists top-level folders like bin, etc, home, usr, var." }
        ],
        quiz: [
            { question: "Which command tells you the folder you are currently in?", options: ["ls", "cd", "pwd", "echo"], answer: 2, explanation: "pwd ('print working directory') shows your current folder's full path." },
            { question: "What does cd .. do?", options: ["Deletes the folder", "Moves up one level to the parent folder", "Lists files", "Creates a folder"], answer: 1, explanation: "Two dots (..) mean 'the folder above this one', so cd .. moves up a level." },
            { question: "How do you get back to your personal home folder quickly?", options: ["cd /", "cd ..", "cd ~", "cd home"], answer: 2, explanation: "The tilde ~ is a shortcut for your home folder, so cd ~ always takes you there." }
        ]
    },
    {
        day: 2,
        phase: "Beginner",
        title: "Looking Inside Folders (ls in Detail)",
        theory: `
            <h2>Seeing More with <code>ls</code></h2>
            <p>The plain <code>ls</code> command lists names, but it can show much more when you add little switches called <strong>options</strong> (also called <em>flags</em>). An option is usually a dash followed by a letter, like <code>-l</code>.</p>

            <h3>Useful <code>ls</code> options</h3>
            <ul>
                <li><code>ls -l</code> — a long, detailed list: one item per line with its size, owner, and the date it changed.</li>
                <li><code>ls -a</code> — show <strong>all</strong> items, including hidden ones (files starting with a dot, like <code>.bashrc</code>, are normally hidden).</li>
                <li><code>ls -h</code> — show file sizes in friendly units like <code>4K</code> or <code>2M</code> instead of huge numbers. Usually combined with <code>-l</code>.</li>
            </ul>

            <h3>Combining options</h3>
            <p>You can stack options together. <code>ls -lah</code> means "long list, include hidden, human-friendly sizes" all at once. The order of the letters doesn't matter.</p>

            <h3>Hidden files — what are they?</h3>
            <p>Files whose names start with a dot (<code>.</code>) are hidden on purpose. They're usually settings files that you don't need to see every day. <code>ls -a</code> reveals them.</p>

            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Tip</strong>
                    <p><code>ls -lah</code> is one of the most-typed commands in the world. It shows you everything, neatly, with readable sizes.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>A teammate says a configuration file is "missing", but you suspect it's just hidden. With a normal listing you see nothing unusual. You add one option and suddenly the hidden settings file appears — it was there all along.</p>
            <p class="scenario-quote">"Half of 'lost' files aren't lost at all — they're hidden or you're looking in the wrong place. Learn to really see what's in a folder and you'll solve these in seconds."</p>
            <h3>Why this matters</h3>
            <p>Knowing how to reveal hidden files and read file details (size, date, owner) saves hours of confusion when something looks like it's not there.</p>
        `,
        practical: [
            { mac: "ls -l", win: "ls -l", desc: "Show a detailed, one-per-line listing with sizes and dates." },
            { mac: "ls -a", win: "ls -a", desc: "Show all files, including hidden ones that start with a dot." },
            { mac: "ls -lah", win: "ls -lah", desc: "Combine all three: long, all files, human-friendly sizes." },
            { mac: "ls -lt", win: "ls -lt", desc: "Sort the detailed list by time, newest first." }
        ],
        exercises: [
            { difficulty: "Easy", task: "Show a detailed listing of your current folder.", solution: "ls -l", outcome: "Each item appears on its own line with extra details." },
            { difficulty: "Easy", task: "Reveal any hidden files in your home folder.", hint: "Go home first, then list all.", solution: "cd ~ && ls -a", outcome: "Hidden dot-files like .bashrc become visible." },
            { difficulty: "Practice", task: "List everything with readable file sizes and including hidden files.", solution: "ls -lah", outcome: "A full, tidy listing with sizes like 4.0K, 1.2M." },
            { difficulty: "Medium", task: "List files sorted so the most recently changed one is at the top.", solution: "ls -lt", outcome: "Newest files appear first — handy for finding what just changed." }
        ],
        quiz: [
            { question: "What does the -a option add to ls?", options: ["Sorts alphabetically", "Shows hidden files too", "Deletes files", "Adds colours"], answer: 1, explanation: "-a means 'all', including hidden files whose names start with a dot." },
            { question: "Which command gives a detailed list with human-friendly sizes and hidden files?", options: ["ls", "ls -l", "ls -lah", "ls -x"], answer: 2, explanation: "ls -lah stacks long (-l), all (-a), and human-readable (-h) together." },
            { question: "Files that start with a dot (like .bashrc) are…", options: ["Broken files", "Hidden settings files", "Always huge", "Owned by the internet"], answer: 1, explanation: "A leading dot marks a file as hidden — usually a configuration file." }
        ]
    },
    {
        day: 3,
        phase: "Beginner",
        title: "Making Folders and Files",
        theory: `
            <h2>Creating Things</h2>
            <p>So far we've only looked around. Now let's create. Two simple commands make new folders and new empty files.</p>

            <h3><code>mkdir</code> — make a folder</h3>
            <p><code>mkdir</code> means <em>make directory</em>. Type <code>mkdir photos</code> and a new empty folder named <strong>photos</strong> appears. Want several at once? <code>mkdir photos music notes</code> makes three.</p>
            <p>Need folders inside folders in one go? Add <code>-p</code>: <code>mkdir -p trip/2026/photos</code> builds the whole chain even if the middle folders don't exist yet.</p>

            <h3><code>touch</code> — make an empty file (or update its time)</h3>
            <p><code>touch notes.txt</code> creates an empty file called <strong>notes.txt</strong>. If the file already exists, <code>touch</code> simply updates its "last changed" time without altering the contents. It's the quickest way to create a placeholder file.</p>

            <h3>Naming tips</h3>
            <ul>
                <li>Avoid spaces in names — use <code>my-notes.txt</code> or <code>my_notes.txt</code> instead of <code>my notes.txt</code>. Spaces make commands trickier.</li>
                <li>Linux is <strong>case-sensitive</strong>: <code>Notes.txt</code> and <code>notes.txt</code> are two different files.</li>
            </ul>

            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Quick recap</strong>
                    <p><code>mkdir</code> builds folders, <code>touch</code> creates empty files. Add <code>-p</code> to <code>mkdir</code> to build a whole nested path at once.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>You're starting a new project and want a tidy structure: a main folder with sub-folders for code, images, and notes. Instead of clicking through a file manager, you create the whole thing in two quick commands and impress yourself with how fast it is.</p>
            <p class="scenario-quote">"Setting up a clean folder layout at the start saves endless mess later. On the command line you can scaffold an entire project structure in seconds."</p>
            <h3>Why this matters</h3>
            <p>Every project begins with folders and files. Doing it from the terminal is faster and repeatable — and it's a skill you'll lean on constantly.</p>
        `,
        practical: [
            { mac: "mkdir practice", win: "mkdir practice", desc: "Create a new folder called 'practice'." },
            { mac: "touch practice/notes.txt", win: "touch practice/notes.txt", desc: "Create an empty file named notes.txt inside the practice folder." },
            { mac: "mkdir -p project/code project/images", win: "mkdir -p project/code project/images", desc: "Create a project folder with two sub-folders in one step." },
            { mac: "ls -R project", win: "ls -R project", desc: "List the project folder and everything inside it to confirm the structure." }
        ],
        exercises: [
            { difficulty: "Easy", task: "Create a folder named sandbox.", solution: "mkdir sandbox", outcome: "An empty folder called sandbox is created." },
            { difficulty: "Easy", task: "Inside sandbox, create an empty file called hello.txt.", solution: "touch sandbox/hello.txt", outcome: "An empty hello.txt file appears inside sandbox." },
            { difficulty: "Practice", task: "Build a nested structure trip/2026/photos in a single command.", hint: "You'll need the -p option.", solution: "mkdir -p trip/2026/photos", outcome: "All three nested folders are created at once." },
            { difficulty: "Practice", task: "Create three folders at once named docs, src, and tests.", solution: "mkdir docs src tests", outcome: "Three separate folders are created in one command." },
            { difficulty: "Medium", task: "Create a folder 'web', add an empty index.html inside it, then list the folder to confirm.", solution: "mkdir web && touch web/index.html && ls web", outcome: "web is created, index.html is inside it, and the listing shows it." }
        ],
        quiz: [
            { question: "Which command creates a new folder?", options: ["touch", "mkdir", "newfolder", "cd"], answer: 1, explanation: "mkdir ('make directory') creates a new folder." },
            { question: "What does touch notes.txt do if notes.txt doesn't exist yet?", options: ["Shows an error", "Creates an empty file called notes.txt", "Deletes notes.txt", "Opens an editor"], answer: 1, explanation: "touch creates an empty file when the name doesn't already exist." },
            { question: "Why use mkdir -p trip/2026/photos?", options: ["To password-protect the folder", "To create the whole nested chain even if the middle folders don't exist", "To preview without creating", "To make the folder hidden"], answer: 1, explanation: "The -p option builds every folder in the path, creating any that are missing." }
        ]
    },
    {
        day: 4,
        phase: "Beginner",
        title: "Reading What's Inside a File",
        theory: `
            <h2>Viewing File Contents</h2>
            <p>Often you just want to <em>read</em> a file without opening a full editor. Linux has several quick ways to peek inside, depending on how big the file is.</p>

            <h3><code>cat</code> — dump the whole file</h3>
            <p><code>cat notes.txt</code> prints the entire file to the screen at once. Perfect for short files. (For very long files it scrolls past too fast — use the next tools instead.)</p>

            <h3><code>less</code> — read big files page by page</h3>
            <p><code>less bigfile.log</code> opens the file in a calm, scrollable view. Use the <strong>arrow keys</strong> or <strong>Space</strong> to move, type <code>/word</code> to search for a word, and press <strong>q</strong> to quit. Nothing is changed — it's read-only.</p>

            <h3><code>head</code> and <code>tail</code> — just the start or end</h3>
            <ul>
                <li><code>head notes.txt</code> shows the <strong>first</strong> 10 lines.</li>
                <li><code>tail notes.txt</code> shows the <strong>last</strong> 10 lines.</li>
                <li><code>tail -n 20 notes.txt</code> shows the last 20 lines (change the number as you like).</li>
            </ul>

            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Which to use?</strong>
                    <p>Short file → <code>cat</code>. Long file → <code>less</code> (press <strong>q</strong> to exit). Just the top or bottom → <code>head</code> or <code>tail</code>.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>A program is misbehaving and the answer is buried in a giant log file with thousands of lines. Opening the whole thing would flood your screen. Instead you peek at just the last few lines — where the newest errors live — and spot the problem immediately.</p>
            <p class="scenario-quote">"You rarely need the whole file. The newest clues are usually at the very end of a log. Learn to grab just the tail and you'll debug far faster."</p>
            <h3>Why this matters</h3>
            <p>Reading files efficiently — especially logs — is a daily survival skill. The right viewer turns an overwhelming wall of text into a quick answer.</p>
        `,
        practical: [
            { mac: "echo \"line one\" > sample.txt", win: "echo \"line one\" > sample.txt", desc: "Create a small file with one line so we have something to read." },
            { mac: "cat sample.txt", win: "cat sample.txt", desc: "Print the whole file to the screen." },
            { mac: "head sample.txt", win: "head sample.txt", desc: "Show the first 10 lines (here, just the one line)." },
            { mac: "tail -n 5 sample.txt", win: "tail -n 5 sample.txt", desc: "Show the last 5 lines of the file." }
        ],
        exercises: [
            { difficulty: "Easy", task: "Create a file greeting.txt containing the word Hello, then print it.", solution: "echo \"Hello\" > greeting.txt && cat greeting.txt", outcome: "The file is created and 'Hello' is printed back." },
            { difficulty: "Practice", task: "Show only the first 10 lines of a file called greeting.txt.", solution: "head greeting.txt", outcome: "Displays up to the first 10 lines." },
            { difficulty: "Practice", task: "Show only the last 3 lines of greeting.txt.", hint: "Use the -n option with a number.", solution: "tail -n 3 greeting.txt", outcome: "Displays only the final 3 lines." },
            { difficulty: "Medium", task: "Open a file in a scrollable, read-only viewer that you exit by pressing q.", solution: "less greeting.txt", outcome: "The file opens in less; press q to return to the prompt." }
        ],
        quiz: [
            { question: "Which command prints a whole short file at once?", options: ["less", "cat", "touch", "cd"], answer: 1, explanation: "cat dumps the entire file to the screen — great for short files." },
            { question: "Inside less, which key quits back to the prompt?", options: ["x", "Esc", "q", "Enter"], answer: 2, explanation: "Press q to quit less. It never changes the file." },
            { question: "How do you see only the last 20 lines of a file?", options: ["head -n 20 file", "tail -n 20 file", "cat -20 file", "less -20 file"], answer: 1, explanation: "tail -n 20 file shows the final 20 lines — perfect for logs." }
        ]
    },
    {
        day: 5,
        phase: "Beginner",
        title: "Copy, Move, and Rename",
        theory: `
            <h2>Organising Your Files</h2>
            <p>Three commands let you duplicate, relocate, and rename files and folders. They're simple but powerful — so we'll also cover how to use them safely.</p>

            <h3><code>cp</code> — copy</h3>
            <p><code>cp notes.txt backup.txt</code> makes a copy. The original stays; you get a second file. To copy a whole folder and everything in it, add <code>-r</code> (recursive): <code>cp -r project project-backup</code>.</p>

            <h3><code>mv</code> — move <em>or</em> rename</h3>
            <p><code>mv</code> does two jobs:</p>
            <ul>
                <li><strong>Move:</strong> <code>mv notes.txt archive/</code> moves the file into the archive folder.</li>
                <li><strong>Rename:</strong> <code>mv oldname.txt newname.txt</code> renames it (there's no separate "rename" command in Linux — moving to a new name <em>is</em> renaming).</li>
            </ul>

            <h3>Be careful: overwriting</h3>
            <p>If the destination already exists, <code>cp</code> and <code>mv</code> will quietly overwrite it. Add <code>-i</code> ("interactive") to make them ask first: <code>cp -i</code> or <code>mv -i</code>. A good safety habit.</p>

            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Key idea</strong>
                    <p><code>cp</code> = duplicate, <code>mv</code> = move or rename. Use <code>-r</code> for folders and <code>-i</code> to be asked before overwriting.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>Before making a risky change to an important file, you make a quick copy called <code>config.backup</code>. Five minutes later your change breaks something — but because you copied first, you restore the original in one command and breathe a sigh of relief.</p>
            <p class="scenario-quote">"Always copy before you change something important. A two-second backup can save you hours of regret."</p>
            <h3>Why this matters</h3>
            <p>Copying, moving, and renaming are constant chores. Doing them confidently — and backing things up first — keeps your work safe and organised.</p>
        `,
        practical: [
            { mac: "touch original.txt", win: "touch original.txt", desc: "Create a file to practise with." },
            { mac: "cp original.txt copy.txt", win: "cp original.txt copy.txt", desc: "Make a duplicate called copy.txt; the original remains." },
            { mac: "mv copy.txt renamed.txt", win: "mv copy.txt renamed.txt", desc: "Rename copy.txt to renamed.txt." },
            { mac: "mkdir archive && mv renamed.txt archive/", win: "mkdir archive && mv renamed.txt archive/", desc: "Create an archive folder and move the file into it." }
        ],
        exercises: [
            { difficulty: "Easy", task: "Create a file report.txt and make a backup copy called report-backup.txt.", solution: "touch report.txt && cp report.txt report-backup.txt", outcome: "Two files now exist: the original and its backup." },
            { difficulty: "Practice", task: "Rename a file draft.txt to final.txt.", solution: "mv draft.txt final.txt", outcome: "The file is now called final.txt." },
            { difficulty: "Practice", task: "Copy an entire folder named site to a new folder named site-backup.", hint: "Folders need a recursive copy.", solution: "cp -r site site-backup", outcome: "site-backup contains a full copy of site and its contents." },
            { difficulty: "Medium", task: "Move final.txt into a folder called done, being asked before overwriting anything.", solution: "mkdir -p done && mv -i final.txt done/", outcome: "final.txt is moved into done; mv would prompt before clobbering an existing file." }
        ],
        quiz: [
            { question: "Which command renames a file in Linux?", options: ["rename", "cp", "mv", "ren"], answer: 2, explanation: "mv moves or renames; moving a file to a new name renames it." },
            { question: "How do you copy a whole folder including its contents?", options: ["cp folder copy", "cp -r folder copy", "mv folder copy", "copy folder"], answer: 1, explanation: "The -r (recursive) option tells cp to include everything inside the folder." },
            { question: "What does adding -i to cp or mv do?", options: ["Makes it faster", "Ignores errors", "Asks before overwriting an existing file", "Copies invisibly"], answer: 2, explanation: "-i ('interactive') prompts you before overwriting, preventing accidental loss." }
        ]
    },
    {
        day: 6,
        phase: "Beginner",
        title: "Deleting Safely",
        theory: `
            <h2>Removing Files and Folders</h2>
            <p>Deleting in Linux is powerful and <strong>permanent</strong> — there's usually no Recycle Bin on the command line. So we'll learn the commands and, just as importantly, how not to hurt yourself.</p>

            <h3><code>rm</code> — remove a file</h3>
            <p><code>rm oldfile.txt</code> deletes the file immediately. Gone. To delete a folder and everything inside it, add <code>-r</code>: <code>rm -r oldfolder</code>.</p>

            <h3><code>rmdir</code> — remove an empty folder</h3>
            <p><code>rmdir emptyfolder</code> deletes a folder <em>only if it's already empty</em>. It's a safer choice when you just want to tidy up empty folders, because it refuses to delete anything that still has files in it.</p>

            <h3>Safety habits (please read!)</h3>
            <ul>
                <li>Use <code>rm -i</code> to be asked "are you sure?" before each delete.</li>
                <li><strong>Never</strong> run <code>rm -rf /</code> or <code>rm -rf *</code> carelessly — these can wipe huge amounts of data with no undo. The <code>-f</code> ("force") option silences all warnings.</li>
                <li>Double-check your current folder with <code>pwd</code> and <code>ls</code> before deleting.</li>
                <li>When unsure, <strong>move</strong> things to a "trash" folder instead of deleting.</li>
            </ul>

            <div class="takeaway-card">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <div class="takeaway-content">
                    <strong>Think twice before rm</strong>
                    <p>There's no undo. Look before you delete, prefer <code>rm -i</code>, and treat <code>-rf</code> with great respect.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>You want to clear out a temporary folder. Out of habit you almost type a sweeping delete — but you pause, run <code>pwd</code> to confirm you're in the right place, and delete only the temp folder by name. Crisis averted.</p>
            <p class="scenario-quote">"The fastest way to ruin a day is a careless delete. The pros aren't fearless — they're careful. Confirm where you are, then remove exactly what you mean to."</p>
            <h3>Why this matters</h3>
            <p>Deleting is unavoidable, but a single careless command can erase important work permanently. Good habits here protect you for your whole career.</p>
        `,
        practical: [
            { mac: "touch trash-me.txt", win: "touch trash-me.txt", desc: "Create a throwaway file to delete." },
            { mac: "rm -i trash-me.txt", win: "rm -i trash-me.txt", desc: "Delete it, but be asked to confirm first (answer y)." },
            { mac: "mkdir emptydir", win: "mkdir emptydir", desc: "Create an empty folder." },
            { mac: "rmdir emptydir", win: "rmdir emptydir", desc: "Remove the empty folder safely (works only because it's empty)." }
        ],
        exercises: [
            { difficulty: "Easy", task: "Create a file junk.txt and then delete it.", solution: "touch junk.txt && rm junk.txt", outcome: "The file is created and then removed." },
            { difficulty: "Practice", task: "Delete a file but make the command ask you to confirm first.", solution: "rm -i somefile.txt", outcome: "You're prompted y/n before the file is removed." },
            { difficulty: "Practice", task: "Create an empty folder temp and remove it with the safe, empty-only command.", solution: "mkdir temp && rmdir temp", outcome: "temp is created then removed; rmdir only works because it's empty." },
            { difficulty: "Medium", task: "Create a folder cleanup with a file inside, then delete the folder and its contents in one command.", hint: "rmdir won't work here — the folder isn't empty.", solution: "mkdir cleanup && touch cleanup/file.txt && rm -r cleanup", outcome: "The whole cleanup folder and the file inside are removed together." }
        ],
        quiz: [
            { question: "What's the biggest risk with rm?", options: ["It's very slow", "There is usually no undo — deletions are permanent", "It only works on Tuesdays", "It needs the internet"], answer: 1, explanation: "rm deletes immediately and permanently; there's no Recycle Bin on the command line." },
            { question: "Which command deletes a folder only if it is empty?", options: ["rm -r", "rmdir", "del", "rm -f"], answer: 1, explanation: "rmdir refuses to delete a folder that still contains files, making it safer." },
            { question: "What does the -f option do in rm -rf?", options: ["Finds files", "Forces deletion and silences warnings", "Fixes the file", "Makes a backup"], answer: 1, explanation: "-f means 'force' — it removes without asking and hides errors, so use it very carefully." }
        ]
    },
    {
        day: 7,
        phase: "Beginner",
        title: "Getting Help When You're Stuck",
        theory: `
            <h2>You Don't Have to Memorise Everything</h2>
            <p>Nobody remembers every option of every command. The trick is knowing how to <strong>look it up instantly</strong> from the terminal itself. Three tools have your back.</p>

            <h3><code>--help</code> — a quick summary</h3>
            <p>Add <code>--help</code> after almost any command to see a short usage guide: <code>ls --help</code>. It lists the options and what they do. Fast and usually enough.</p>

            <h3><code>man</code> — the full manual</h3>
            <p><code>man</code> stands for <em>manual</em>. <code>man ls</code> opens the complete documentation for the <code>ls</code> command. It scrolls like <code>less</code>: arrow keys to move, <code>/word</code> to search, and <strong>q</strong> to quit.</p>

            <h3><code>which</code> and <code>type</code> — "where does this command live?"</h3>
            <p><code>which python</code> tells you the exact program that runs when you type <code>python</code>. Useful when something behaves unexpectedly and you want to know which version is being used.</p>

            <h3>And of course… search engines and AI</h3>
            <p>It's completely normal to look things up online or ask an AI assistant to explain a command. The built-in help is fastest for options; the web and AI are great for "how do I…" questions. Just always understand a command before running it.</p>

            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Your safety net</strong>
                    <p>Stuck on a command? Try <code>command --help</code> first, then <code>man command</code> for the full details. Press <strong>q</strong> to leave the manual.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>You need to make <code>ls</code> sort files by size, but you can't recall the option. Instead of guessing, you type <code>ls --help</code>, scan the list, and find <code>-S</code> in five seconds. No internet needed.</p>
            <p class="scenario-quote">"Great command-line users aren't walking encyclopaedias. They just know exactly where to look. The manual is always one keystroke away."</p>
            <h3>Why this matters</h3>
            <p>Looking things up quickly means you're never truly stuck. It also helps you learn safely — you can check what a command does <em>before</em> you run it.</p>
        `,
        practical: [
            { mac: "ls --help", win: "ls --help", desc: "Show a quick summary of ls and its options." },
            { mac: "man ls", win: "man ls", desc: "Open the full manual for ls; press q to quit." },
            { mac: "which bash", win: "which bash", desc: "Show the exact location of the bash program." },
            { mac: "type cd", win: "type cd", desc: "Explain what kind of command cd is (a built-in)." }
        ],
        exercises: [
            { difficulty: "Easy", task: "Show the quick help summary for the cp command.", solution: "cp --help", outcome: "Displays cp's usage and common options." },
            { difficulty: "Practice", task: "Open the full manual page for the mkdir command, then quit it.", hint: "Use man, and press q to exit.", solution: "man mkdir", outcome: "The manual opens; pressing q returns you to the prompt." },
            { difficulty: "Practice", task: "Find out where the program that runs when you type 'bash' is located.", solution: "which bash", outcome: "Prints a path like /bin/bash." },
            { difficulty: "Medium", task: "Use the manual to discover the ls option that sorts files by size, then try it.", hint: "Search inside man ls by typing /size.", solution: "ls -lS", outcome: "Lists files sorted from largest to smallest." }
        ],
        quiz: [
            { question: "What does man ls show?", options: ["A list of files", "The full manual for the ls command", "Your manager's name", "An error"], answer: 1, explanation: "man opens the complete manual page for a command." },
            { question: "Which key exits a manual page opened with man?", options: ["q", "Esc", "Ctrl+Z", "Enter"], answer: 0, explanation: "Press q to quit the manual, just like in less." },
            { question: "What does which python tell you?", options: ["If python is installed correctly", "The exact location of the python program that will run", "Python's version history", "How to code in Python"], answer: 1, explanation: "which shows the full path of the program that runs for that command name." }
        ]
    },
    {
        day: 8,
        phase: "Beginner",
        title: "Wildcards: Working With Many Files",
        theory: `
            <h2>Patterns That Match Many Files</h2>
            <p>Typing every filename is tedious. <strong>Wildcards</strong> are special characters that stand in for "anything", letting one command act on many files at once. The shell expands the pattern before the command runs.</p>

            <h3><code>*</code> — match any characters</h3>
            <p>The star means "zero or more of anything".</p>
            <ul>
                <li><code>*.txt</code> — every file ending in <code>.txt</code>.</li>
                <li><code>report*</code> — every file starting with <code>report</code>.</li>
                <li><code>*</code> on its own — everything in the folder.</li>
            </ul>

            <h3><code>?</code> — match exactly one character</h3>
            <p><code>file?.txt</code> matches <code>file1.txt</code> and <code>fileA.txt</code> but not <code>file12.txt</code> (that's two characters).</p>

            <h3><code>[ ]</code> — match one from a set</h3>
            <p><code>file[123].txt</code> matches <code>file1.txt</code>, <code>file2.txt</code>, or <code>file3.txt</code> — only those.</p>

            <h3>Use them with everyday commands</h3>
            <p>Wildcards work with <code>ls</code>, <code>cp</code>, <code>mv</code>, <code>rm</code> and more: <code>cp *.jpg images/</code> copies every JPG into the images folder. <strong>Tip:</strong> with <code>rm</code>, run <code>ls</code> with the same pattern first to see exactly what would be deleted.</p>

            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Test before you delete</strong>
                    <p>Before <code>rm *.tmp</code>, run <code>ls *.tmp</code> to preview the matches. What you see is exactly what will be removed.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>A folder has hundreds of photos mixed with documents. You need to move just the images. Instead of dragging files one by one, a single command with <code>*.jpg</code> sweeps them all into place in an instant.</p>
            <p class="scenario-quote">"The command line shines when you work in bulk. One well-chosen wildcard can do what would take a hundred mouse clicks."</p>
            <h3>Why this matters</h3>
            <p>Real folders get messy and large. Wildcards let you handle whole groups of files at once — a massive time-saver, when used carefully.</p>
        `,
        practical: [
            { mac: "touch a.txt b.txt c.log", win: "touch a.txt b.txt c.log", desc: "Create a few files of different types to practise on." },
            { mac: "ls *.txt", win: "ls *.txt", desc: "List only the files ending in .txt." },
            { mac: "mkdir texts && cp *.txt texts/", win: "mkdir texts && cp *.txt texts/", desc: "Copy every .txt file into a new texts folder." },
            { mac: "ls *.log", win: "ls *.log", desc: "Preview which .log files exist before doing anything to them." }
        ],
        exercises: [
            { difficulty: "Easy", task: "List every file in the current folder that ends with .txt.", solution: "ls *.txt", outcome: "Shows only the .txt files." },
            { difficulty: "Practice", task: "Copy all files starting with 'report' into a folder called reports.", hint: "Make the folder first.", solution: "mkdir -p reports && cp report* reports/", outcome: "Every file beginning with 'report' is copied into reports." },
            { difficulty: "Practice", task: "List files named file followed by exactly one character and .txt (like file1.txt).", solution: "ls file?.txt", outcome: "Matches file1.txt, fileA.txt, etc., but not file12.txt." },
            { difficulty: "Medium", task: "Safely preview which .tmp files exist, then delete them.", hint: "List first, then remove with the same pattern.", solution: "ls *.tmp && rm *.tmp", outcome: "You see the matches, then they're deleted — no surprises." }
        ],
        quiz: [
            { question: "What does *.txt match?", options: ["Only a file literally named star.txt", "Every file ending in .txt", "Hidden files", "Folders only"], answer: 1, explanation: "The * stands for any characters, so *.txt is every file ending in .txt." },
            { question: "How many characters does the ? wildcard match?", options: ["Any number", "Exactly one", "Exactly two", "None"], answer: 1, explanation: "? matches exactly one character." },
            { question: "Before running rm *.tmp, what's a smart safety check?", options: ["Restart the computer", "Run ls *.tmp first to preview the matches", "Disconnect the internet", "Nothing — just delete"], answer: 1, explanation: "Listing with the same pattern shows exactly what rm would delete." }
        ]
    },
    {
        day: 9,
        phase: "Beginner",
        title: "Searching for Text Inside Files (grep)",
        theory: `
            <h2>Finding the Needle in the Haystack</h2>
            <p>Sometimes you don't need a file — you need a specific <em>line</em> inside it. The <code>grep</code> command searches text and prints only the lines that match what you're looking for.</p>

            <h3>The basics</h3>
            <p><code>grep "error" logfile.txt</code> prints every line in <code>logfile.txt</code> that contains the word <strong>error</strong>. Everything else is filtered out.</p>

            <h3>Handy options</h3>
            <ul>
                <li><code>-i</code> — ignore upper/lower case, so "Error" and "error" both match.</li>
                <li><code>-r</code> — search through an entire folder and all its files at once.</li>
                <li><code>-n</code> — also show the line number where each match was found.</li>
                <li><code>-c</code> — just count how many matching lines there are.</li>
            </ul>

            <h3>Combine them</h3>
            <p><code>grep -rin "timeout" logs/</code> searches every file in the <code>logs</code> folder, ignoring case, and shows line numbers. One short command, a huge amount of searching done for you.</p>

            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>grep is your search engine for text</strong>
                    <p>Whenever you think "which file mentions this word?" or "show me only the lines about X", reach for <code>grep</code>.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>A website is failing and the logs are enormous. You don't read them line by line — you ask grep to show only the lines containing the word "error". In one command, the few lines that actually matter appear, and the cause becomes obvious.</p>
            <p class="scenario-quote">"Don't read the haystack — search it. grep turns thousands of lines into the handful you actually care about."</p>
            <h3>Why this matters</h3>
            <p>Searching inside files is one of the most common and valuable command-line skills. It's how engineers find errors, settings, and clues fast.</p>
        `,
        practical: [
            { mac: "printf \"apple\\nerror here\\nbanana\\n\" > log.txt", win: "printf \"apple\\nerror here\\nbanana\\n\" > log.txt", desc: "Create a small file with three lines to search." },
            { mac: "grep \"error\" log.txt", win: "grep \"error\" log.txt", desc: "Show only the line that contains the word error." },
            { mac: "grep -i \"ERROR\" log.txt", win: "grep -i \"ERROR\" log.txt", desc: "Search ignoring case, so ERROR still matches error." },
            { mac: "grep -n \"banana\" log.txt", win: "grep -n \"banana\" log.txt", desc: "Show the matching line along with its line number." }
        ],
        exercises: [
            { difficulty: "Easy", task: "In a file named log.txt, print every line that contains the word 'fail'.", solution: "grep \"fail\" log.txt", outcome: "Only lines containing 'fail' are shown." },
            { difficulty: "Practice", task: "Search a file for the word 'warning' regardless of capitalisation.", solution: "grep -i \"warning\" log.txt", outcome: "Matches warning, Warning, WARNING, etc." },
            { difficulty: "Practice", task: "Count how many lines in log.txt contain the word 'error'.", hint: "There's an option that counts instead of printing.", solution: "grep -c \"error\" log.txt", outcome: "Prints a single number — the count of matching lines." },
            { difficulty: "Medium", task: "Search every file inside a folder called logs for the word 'timeout', showing line numbers, ignoring case.", solution: "grep -rin \"timeout\" logs/", outcome: "Shows matching lines from all files in logs, with filenames and line numbers." }
        ],
        quiz: [
            { question: "What does grep do?", options: ["Deletes lines", "Prints only the lines that match your search text", "Creates files", "Renames files"], answer: 1, explanation: "grep filters text and shows just the lines containing your search term." },
            { question: "Which option makes grep ignore capitalisation?", options: ["-r", "-n", "-i", "-c"], answer: 2, explanation: "-i makes the search case-insensitive." },
            { question: "What does grep -r do?", options: ["Reverses the file", "Searches through a whole folder and its files", "Repeats the search", "Removes matches"], answer: 1, explanation: "-r searches recursively through every file in a folder." }
        ]
    },
    {
        day: 10,
        phase: "Beginner",
        title: "Connecting Commands with Pipes",
        theory: `
            <h2>Joining Commands Together</h2>
            <p>Here's where the command line becomes genuinely powerful. The <strong>pipe</strong> symbol <code>|</code> takes the output of one command and feeds it straight into another — like connecting hoses so water flows from one to the next.</p>

            <h3>The idea</h3>
            <p>Instead of saving to a file and re-opening it, you chain commands in one line: <code>command1 | command2</code>. The result of the first becomes the input of the second.</p>

            <h3>Everyday examples</h3>
            <ul>
                <li><code>ls -l | grep ".txt"</code> — list files, then keep only the lines mentioning .txt.</li>
                <li><code>cat log.txt | grep "error"</code> — read a file, then show only its error lines.</li>
                <li><code>ls | wc -l</code> — list items, then count them (<code>wc -l</code> counts lines).</li>
                <li><code>history | grep "git"</code> — show your past commands, then keep only ones containing "git".</li>
            </ul>

            <h3>Chain as many as you like</h3>
            <p>You can keep piping: <code>cat log.txt | grep "error" | head -n 5</code> reads the file, keeps error lines, then shows just the first five. Each pipe passes its result along.</p>

            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Small tools, big power</strong>
                    <p>Linux gives you many small commands that each do one thing well. Pipes let you combine them into exactly the tool you need — no programming required.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>You want to know how many image files are in a huge folder. There's no single command for it — but you pipe a file listing into a line counter, and the exact number appears instantly. You just built a custom tool out of two simple ones.</p>
            <p class="scenario-quote">"The magic of the command line isn't any single command — it's snapping them together. Pipes let you answer questions nobody wrote a specific command for."</p>
            <h3>Why this matters</h3>
            <p>Pipes are the heart of working efficiently in Linux. Once they click, you can solve surprisingly complex tasks in a single tidy line.</p>
        `,
        practical: [
            { mac: "ls -l | grep \".txt\"", win: "ls -l | grep \".txt\"", desc: "List files in detail, then keep only the lines mentioning .txt." },
            { mac: "ls | wc -l", win: "ls | wc -l", desc: "Count how many items are in the current folder." },
            { mac: "printf \"a\\nerror\\nb\\nerror\\n\" | grep error | wc -l", win: "printf \"a\\nerror\\nb\\nerror\\n\" | grep error | wc -l", desc: "Generate lines, keep the error ones, then count them." },
            { mac: "history | tail -n 10", win: "history | tail -n 10", desc: "Show the last 10 commands you've typed." }
        ],
        exercises: [
            { difficulty: "Easy", task: "List the files in the current folder and count how many there are.", hint: "Pipe a listing into a line counter.", solution: "ls | wc -l", outcome: "Prints the number of items in the folder." },
            { difficulty: "Practice", task: "Show only the lines containing '.log' from a detailed file listing.", solution: "ls -l | grep \".log\"", outcome: "Filters the listing down to .log entries." },
            { difficulty: "Practice", task: "From a file log.txt, show only error lines and count them.", solution: "grep \"error\" log.txt | wc -l", outcome: "Prints how many lines contained 'error'." },
            { difficulty: "Medium", task: "Read log.txt, keep only lines with the word 'error', and display just the first 3 of those.", solution: "cat log.txt | grep \"error\" | head -n 3", outcome: "Shows at most the first three error lines from the file." }
        ],
        quiz: [
            { question: "What does the pipe symbol | do?", options: ["Deletes the output", "Sends one command's output into the next command", "Splits the screen", "Prints a vertical line"], answer: 1, explanation: "A pipe feeds the output of the command on its left into the command on its right." },
            { question: "What does ls | wc -l count?", options: ["The number of characters in 'ls'", "The number of items listed by ls", "The number of errors", "Nothing"], answer: 1, explanation: "ls lists items, and wc -l counts the lines it produces — i.e. how many items there are." },
            { question: "Can you chain more than two commands with pipes?", options: ["No, only two", "Yes, as many as you like", "Only with a special license", "Only on Mac"], answer: 1, explanation: "You can keep piping output through as many commands as you need." }
        ]
    },
    {
        day: 11,
        phase: "Intermediate",
        title: "Saving Output to Files (Redirection)",
        theory: `
            <h2>Capturing What Commands Produce</h2>
            <p>Normally a command's output appears on screen and disappears. <strong>Redirection</strong> lets you send that output into a file instead, to save it for later. The symbols are simple arrows.</p>

            <h3><code>&gt;</code> — write to a file (overwrite)</h3>
            <p><code>ls &gt; files.txt</code> saves the listing into <code>files.txt</code>. <strong>Careful:</strong> a single <code>&gt;</code> replaces the file's contents entirely — if it already had something, that's gone.</p>

            <h3><code>&gt;&gt;</code> — add to the end (append)</h3>
            <p><code>echo "new line" &gt;&gt; notes.txt</code> adds a line to the end of <code>notes.txt</code> without erasing what's already there. Use this when you want to keep building a file up.</p>

            <h3><code>&lt;</code> — read input from a file</h3>
            <p>Less common at first, but <code>sort &lt; names.txt</code> feeds the file into the <code>sort</code> command as its input.</p>

            <h3>Catching error messages too</h3>
            <p>Sometimes a command prints errors separately. <code>command &gt; out.txt 2&gt;&amp;1</code> sends both the normal output <em>and</em> the errors into the same file. The <code>2&gt;&amp;1</code> part means "send errors to the same place as the output".</p>

            <div class="takeaway-card">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <div class="takeaway-content">
                    <strong>One arrow vs two</strong>
                    <p><code>&gt;</code> overwrites (replaces everything). <code>&gt;&gt;</code> appends (adds to the end). Mixing these up is a classic beginner mistake — choose carefully.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>You run a command that produces a useful report, but you'll need it again tomorrow. Instead of copying text by hand, you redirect the output straight into a file. Next day it's right there, exactly as it was.</p>
            <p class="scenario-quote">"If output matters, capture it. Redirection turns a fleeting screen of text into a file you can keep, share, or process further."</p>
            <h3>Why this matters</h3>
            <p>Saving output to files is essential for reports, logs, and feeding results into other tools. Knowing overwrite vs append protects you from wiping good data.</p>
        `,
        practical: [
            { mac: "ls > listing.txt", win: "ls > listing.txt", desc: "Save the current folder listing into listing.txt (overwrites it)." },
            { mac: "echo \"first note\" >> diary.txt", win: "echo \"first note\" >> diary.txt", desc: "Add a line to the end of diary.txt without erasing it." },
            { mac: "echo \"second note\" >> diary.txt", win: "echo \"second note\" >> diary.txt", desc: "Append another line; both lines are now kept." },
            { mac: "cat diary.txt", win: "cat diary.txt", desc: "Read the file back to confirm both lines are there." }
        ],
        exercises: [
            { difficulty: "Easy", task: "Save the output of 'ls -l' into a file called dir.txt.", solution: "ls -l > dir.txt", outcome: "dir.txt now contains the detailed listing." },
            { difficulty: "Practice", task: "Append the line 'Bought milk' to a file called shopping.txt without overwriting it.", solution: "echo \"Bought milk\" >> shopping.txt", outcome: "The line is added to the end; existing content is preserved." },
            { difficulty: "Practice", task: "Create greetings.txt containing 'Hi' using overwrite, then add 'Bye' on a new line.", hint: "One arrow then two arrows.", solution: "echo \"Hi\" > greetings.txt && echo \"Bye\" >> greetings.txt", outcome: "greetings.txt contains Hi on the first line and Bye on the second." },
            { difficulty: "Medium", task: "Run a listing and save both its normal output and any errors into out.txt.", solution: "ls -l > out.txt 2>&1", outcome: "out.txt captures the output and any error messages together." }
        ],
        quiz: [
            { question: "What's the difference between > and >>?", options: ["No difference", "> overwrites the file; >> adds to the end of it", "> is faster", ">> deletes the file"], answer: 1, explanation: "A single > replaces the file's contents; >> appends to whatever is already there." },
            { question: "Which symbol saves a command's output into a file, replacing its contents?", options: ["<", ">", "|", "&"], answer: 1, explanation: "> redirects output into a file, overwriting it." },
            { question: "What does 2>&1 do?", options: ["Doubles the output", "Sends error messages to the same place as the normal output", "Runs the command twice", "Deletes errors"], answer: 1, explanation: "2>&1 merges the error stream into the normal output stream." }
        ]
    },
    {
        day: 12,
        phase: "Intermediate",
        title: "Who Can Do What: File Permissions",
        theory: `
            <h2>Understanding Permissions</h2>
            <p>On Linux, every file and folder has rules about <strong>who is allowed to do what</strong> with it. This is how the system stays secure when many people (and programs) share it. The rules cover three actions and three groups of people.</p>

            <h3>The three actions</h3>
            <ul>
                <li><strong>Read (r)</strong> — view the contents.</li>
                <li><strong>Write (w)</strong> — change or delete it.</li>
                <li><strong>Execute (x)</strong> — run it (for programs/scripts) or enter it (for folders).</li>
            </ul>

            <h3>The three groups</h3>
            <ul>
                <li><strong>Owner</strong> — the user who owns the file (usually you, if you made it).</li>
                <li><strong>Group</strong> — a team of users who share access.</li>
                <li><strong>Others</strong> — everyone else on the system.</li>
            </ul>

            <h3>Reading the listing</h3>
            <p>Run <code>ls -l</code> and you'll see something like <code>-rwxr-xr--</code> at the start of each line. After the first character, it's three sets of three: owner, group, others. So <code>rwxr-xr--</code> means the owner can read/write/run, the group can read/run, and others can only read.</p>

            <h3>Changing permissions with <code>chmod</code></h3>
            <p><code>chmod</code> ("change mode") adjusts these rules. The friendly way: <code>chmod +x script.sh</code> adds permission to <em>run</em> a file. <code>chmod -w file.txt</code> removes write permission (makes it read-only). You'll use <code>+x</code> constantly to make scripts runnable.</p>

            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>The everyday one to remember</strong>
                    <p><code>chmod +x myscript.sh</code> — "let me run this file". You'll need it every time you write a script (next phase!).</p>
                </div>
            </div>
        `,
        scenario: `
            <p>You write your first little script, type its name to run it, and get "Permission denied". Nothing's broken — the file just isn't marked as runnable yet. One <code>chmod +x</code> later, it works perfectly.</p>
            <p class="scenario-quote">"'Permission denied' isn't a wall — it's the system asking you to confirm intent. Understand permissions and these messages stop being scary."</p>
            <h3>Why this matters</h3>
            <p>Permissions protect files and explain a huge share of "why won't this work?" moments. They're also fundamental to security — giving people only the access they truly need.</p>
        `,
        practical: [
            { mac: "ls -l", win: "ls -l", desc: "Look at the permission letters (like -rw-r--r--) at the start of each line." },
            { mac: "echo 'echo Hello' > myscript.sh", win: "echo 'echo Hello' > myscript.sh", desc: "Create a tiny script file." },
            { mac: "chmod +x myscript.sh", win: "chmod +x myscript.sh", desc: "Give the script permission to be run." },
            { mac: "./myscript.sh", win: "bash myscript.sh", desc: "Run the script (on Mac/Linux ./ runs it; in WSL this works too)." }
        ],
        exercises: [
            { difficulty: "Easy", task: "Show the permissions of all files in the current folder.", solution: "ls -l", outcome: "Each line begins with permission letters like -rw-r--r--." },
            { difficulty: "Practice", task: "Create a file run.sh containing a command and make it runnable.", solution: "echo 'echo Hi' > run.sh && chmod +x run.sh", outcome: "run.sh is created and gains execute permission." },
            { difficulty: "Practice", task: "Make a file notes.txt read-only by removing write permission.", hint: "Use chmod with a minus.", solution: "chmod -w notes.txt", outcome: "notes.txt can no longer be modified until write is restored." },
            { difficulty: "Medium", task: "Create a script, make it executable, then run it.", solution: "echo 'echo It works' > demo.sh && chmod +x demo.sh && ./demo.sh", outcome: "Prints 'It works' — proving the execute permission took effect." }
        ],
        quiz: [
            { question: "What do r, w, and x stand for?", options: ["Run, Wait, Exit", "Read, Write, Execute", "Red, White, X-ray", "Remove, Write, Extract"], answer: 1, explanation: "They mean Read, Write, and Execute — the three things you can be allowed to do." },
            { question: "In -rwxr-xr--, who can write to the file?", options: ["Everyone", "Only the owner", "Only others", "Nobody"], answer: 1, explanation: "Only the first set (owner) includes 'w'; group and others do not." },
            { question: "What does chmod +x script.sh do?", options: ["Deletes the script", "Gives the file permission to be run", "Hides the script", "Encrypts it"], answer: 1, explanation: "+x adds execute permission, allowing the file to run as a program." }
        ]
    },
    {
        day: 13,
        phase: "Intermediate",
        title: "Becoming the Admin: sudo and root",
        theory: `
            <h2>When You Need Extra Power</h2>
            <p>Some actions — installing software, editing system settings, creating users — affect the whole computer, so ordinary users aren't allowed to do them by default. The <strong>administrator</strong> account that can do anything is called <strong>root</strong>.</p>

            <h3><code>sudo</code> — "do this one command as the admin"</h3>
            <p>Rather than logging in as root (risky), you put <code>sudo</code> in front of a single command to run just that one with admin powers: <code>sudo apt update</code>. It usually asks for your password the first time.</p>
            <p><code>sudo</code> stands for "superuser do". It's the safe, controlled way to borrow admin rights only when needed, then drop straight back to your normal, safer account.</p>

            <h3>Why not just be root all the time?</h3>
            <p>As root, there are no guard rails — a single typo can damage the system with no warning. Working as a normal user and reaching for <code>sudo</code> only when necessary is a key safety habit, even for experts.</p>

            <h3>Respect the power</h3>
            <ul>
                <li>Read a command carefully before running it with <code>sudo</code>.</li>
                <li>Be extra cautious pasting <code>sudo</code> commands from the internet — you're handing them full control.</li>
                <li>If a command doesn't truly need admin rights, don't use <code>sudo</code> for it.</li>
            </ul>

            <div class="takeaway-card">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <div class="takeaway-content">
                    <strong>Power with care</strong>
                    <p><code>sudo</code> means "I really mean it, as admin". Use it deliberately, understand the command first, and only when it's genuinely required.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>You try to install a program and get "Permission denied". It's not a bug — installing software changes the whole system, so it needs admin rights. You add <code>sudo</code> in front, enter your password, and the install proceeds.</p>
            <p class="scenario-quote">"sudo is like a key to the server room. Incredibly useful, but you don't wave it around. Use it when the job needs it, and read twice before you press Enter."</p>
            <h3>Why this matters</h3>
            <p>You'll need <code>sudo</code> constantly to install and configure things. Understanding what it does — and treating it with respect — keeps systems safe.</p>
        `,
        practical: [
            { mac: "whoami", win: "whoami", desc: "Confirm you're your normal user (not root) right now." },
            { mac: "sudo whoami", win: "sudo whoami", desc: "Run a command as admin; it should print 'root'. You may be asked for your password." },
            { mac: "sudo -v", win: "sudo -v", desc: "Refresh your admin session without running anything else." },
            { mac: "echo 'Only use sudo when needed'", win: "echo 'Only use sudo when needed'", desc: "A reminder to yourself — no admin rights required for this one." }
        ],
        exercises: [
            { difficulty: "Easy", task: "Check which user you currently are.", solution: "whoami", outcome: "Prints your normal username." },
            { difficulty: "Practice", task: "Run the whoami command as the administrator to see the root identity.", hint: "Put sudo in front.", solution: "sudo whoami", outcome: "Prints 'root', showing the command ran with admin rights." },
            { difficulty: "Practice", task: "On a Debian/Ubuntu system, refresh the list of available software (admin action).", solution: "sudo apt update", outcome: "The package list is refreshed; this needs admin rights, hence sudo." },
            { difficulty: "Medium", task: "Explain in your own words why running everything as root is risky (then run a harmless echo to continue).", solution: "echo 'Root has no safety nets; a typo can break the whole system, so use sudo only when needed.'", outcome: "Reinforces the safety reasoning behind using sudo sparingly." }
        ],
        quiz: [
            { question: "What does sudo do?", options: ["Shuts down the computer", "Runs a single command with administrator (root) powers", "Deletes a user", "Speeds up commands"], answer: 1, explanation: "sudo runs one command as the superuser/root, then returns you to normal." },
            { question: "Why avoid staying logged in as root all the time?", options: ["It's slower", "There are no safety guards, so mistakes can damage the whole system", "Root can't use the internet", "It's against the law"], answer: 1, explanation: "As root, nothing stops a damaging mistake, so it's safer to use sudo only when needed." },
            { question: "What should you do before running a sudo command copied from the internet?", options: ["Run it immediately", "Understand exactly what it does first", "Email it to a friend", "Double the password"], answer: 1, explanation: "Since sudo grants full control, always understand a command before running it with admin rights." }
        ]
    },
    {
        day: 14,
        phase: "Intermediate",
        title: "Installing Software (Package Managers)",
        theory: `
            <h2>Adding New Programs</h2>
            <p>On a phone you install apps from an app store. Linux has the same idea, called a <strong>package manager</strong> — a tool that downloads and installs programs (and their pieces) for you from trusted online libraries.</p>

            <h3>Different families, same idea</h3>
            <ul>
                <li><strong>Ubuntu / Debian / WSL:</strong> use <code>apt</code>.</li>
                <li><strong>Fedora / Red Hat:</strong> use <code>dnf</code>.</li>
                <li><strong>Mac (not Linux, but similar):</strong> use <code>brew</code> (Homebrew).</li>
            </ul>

            <h3>The common steps (using apt as the example)</h3>
            <ul>
                <li><code>sudo apt update</code> — refresh the list of what's available (do this first).</li>
                <li><code>sudo apt install tree</code> — install a program (here, a handy tool called <code>tree</code>).</li>
                <li><code>sudo apt remove tree</code> — uninstall it.</li>
                <li><code>apt search editor</code> — search for available programs.</li>
            </ul>
            <p>Installing needs <code>sudo</code> because it changes the whole system. After installing <code>tree</code>, try running <code>tree</code> to see folders drawn as a neat branching diagram.</p>

            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>The pattern is always the same</strong>
                    <p>Update the list, then install by name. Whether it's <code>apt</code>, <code>dnf</code>, or <code>brew</code>, the idea — an app store you drive by typing — doesn't change.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>A tutorial tells you to use a tool you don't have. Instead of hunting the web for an installer, you type one install command, and seconds later the tool is ready. No setup wizards, no clicking — just one line.</p>
            <p class="scenario-quote">"Installing software on Linux is usually a single command. Once you know your package manager, setting up a machine becomes fast and repeatable."</p>
            <h3>Why this matters</h3>
            <p>Almost every task eventually needs a tool you must install. Package managers make this quick, safe, and consistent — a core everyday skill.</p>
        `,
        practical: [
            { mac: "brew --version", win: "apt --version", desc: "Check your package manager is available (brew on Mac, apt on WSL/Ubuntu)." },
            { mac: "brew install tree", win: "sudo apt update && sudo apt install -y tree", desc: "Install the 'tree' tool that draws folder structures." },
            { mac: "tree", win: "tree", desc: "Run tree to see the current folder as a branching diagram." },
            { mac: "brew uninstall tree", win: "sudo apt remove -y tree", desc: "Uninstall the tool again to clean up." }
        ],
        exercises: [
            { difficulty: "Easy", task: "Check that your package manager responds (use brew on Mac or apt on Ubuntu/WSL).", solution: "brew --version", solutionWin: "apt --version", outcome: "Prints the package manager's version number." },
            { difficulty: "Practice", task: "Refresh the list of available software on an Ubuntu/WSL system.", hint: "This is an admin action.", solution: "sudo apt update", outcome: "Downloads the latest list of installable packages." },
            { difficulty: "Practice", task: "Install the 'tree' utility (Mac: brew, Ubuntu/WSL: apt).", solution: "brew install tree", solutionWin: "sudo apt install -y tree", outcome: "tree is installed and ready to run." },
            { difficulty: "Medium", task: "After installing tree, use it to display the current folder as a diagram, then remove the tool.", solution: "tree && brew uninstall tree", solutionWin: "tree && sudo apt remove -y tree", outcome: "Shows the folder tree, then uninstalls the tool." }
        ],
        quiz: [
            { question: "What is a package manager?", options: ["A delivery service", "A tool that installs and removes software for you from trusted sources", "A type of file", "A password vault"], answer: 1, explanation: "It's like an app store for Linux — it fetches and installs programs and their dependencies." },
            { question: "Why does installing software usually need sudo?", options: ["To make it faster", "Because it changes the whole system, which requires admin rights", "To connect to Wi-Fi", "It doesn't"], answer: 1, explanation: "System-wide changes like installs require administrator (root) permission via sudo." },
            { question: "Which command installs software on Ubuntu/Debian?", options: ["brew install", "dnf install", "apt install", "pip install"], answer: 2, explanation: "On Ubuntu/Debian/WSL the package manager is apt, so 'apt install' adds programs." }
        ]
    },
    {
        day: 15,
        phase: "Intermediate",
        title: "Seeing What's Running (Processes)",
        theory: `
            <h2>Programs in Motion</h2>
            <p>Every running program is called a <strong>process</strong>. Your terminal, your browser, a background service — each is a process with its own ID number (a <strong>PID</strong>). Linux gives you tools to see what's running and, if needed, stop it.</p>

            <h3>Seeing what's running</h3>
            <ul>
                <li><code>ps</code> — a quick snapshot of your current processes.</li>
                <li><code>top</code> — a live, updating dashboard of everything running, sorted by how busy each is. Press <strong>q</strong> to quit.</li>
                <li><code>htop</code> — a friendlier, colourful version of <code>top</code> (you may need to install it).</li>
            </ul>

            <h3>Stopping a process</h3>
            <p>Sometimes a program freezes and you need to stop it. First find its PID (from <code>top</code> or <code>ps</code>), then:</p>
            <ul>
                <li><code>kill 1234</code> — politely ask process 1234 to stop.</li>
                <li><code>kill -9 1234</code> — force it to stop immediately (use only if the polite way fails).</li>
            </ul>

            <h3>Stopping something in your terminal</h3>
            <p>If a command is running <em>right now</em> in your terminal and you want to stop it, press <strong>Ctrl + C</strong>. This is the everyday "make it stop" shortcut.</p>

            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Two ways to stop things</strong>
                    <p>Running in your terminal? Press <strong>Ctrl + C</strong>. Something elsewhere is stuck? Find its PID and use <code>kill</code> (or <code>kill -9</code> as a last resort).</p>
                </div>
            </div>
        `,
        scenario: `
            <p>A program is stuck and eating all the computer's power, making everything sluggish. You open <code>top</code>, spot the culprit at the top of the list with its PID, and stop it with <code>kill</code>. The machine springs back to life.</p>
            <p class="scenario-quote">"When a server slows to a crawl, the answer is usually one runaway process. Learn to find it and stop it, and you can rescue a struggling machine in under a minute."</p>
            <h3>Why this matters</h3>
            <p>Knowing what's running — and how to safely stop a misbehaving program — is essential for keeping computers and servers healthy.</p>
        `,
        practical: [
            { mac: "ps", win: "ps", desc: "Show a snapshot of your current processes and their PIDs." },
            { mac: "top", win: "top", desc: "Open the live process dashboard; press q to quit." },
            { mac: "sleep 60 &", win: "sleep 60 &", desc: "Start a harmless 60-second background task (the & runs it in the background)." },
            { mac: "jobs", win: "jobs", desc: "List background jobs you started from this terminal." }
        ],
        exercises: [
            { difficulty: "Easy", task: "Show a snapshot of the processes you're currently running.", solution: "ps", outcome: "Lists your processes with their PID numbers." },
            { difficulty: "Practice", task: "Open the live, updating list of running programs, then quit it.", hint: "Press q to exit.", solution: "top", outcome: "The live dashboard opens; q returns you to the prompt." },
            { difficulty: "Practice", task: "Start a harmless task that sleeps for 30 seconds in the background.", solution: "sleep 30 &", outcome: "The task runs in the background and your prompt returns immediately." },
            { difficulty: "Medium", task: "Start a background sleep, find its job number, then stop it.", hint: "Use jobs to see it, then kill %1.", solution: "sleep 120 & jobs && kill %1", outcome: "The background sleep is started, listed, and then stopped." }
        ],
        quiz: [
            { question: "What is a 'process'?", options: ["A type of file", "A running program", "A folder", "A password"], answer: 1, explanation: "A process is simply a program that is currently running, each with its own PID." },
            { question: "Which key stops a command that's running right now in your terminal?", options: ["Ctrl + C", "Ctrl + S", "Esc", "Tab"], answer: 0, explanation: "Ctrl + C interrupts and stops the command currently running in your terminal." },
            { question: "What does kill -9 do compared to kill?", options: ["Nothing different", "Forces the process to stop immediately, used as a last resort", "Restarts the process", "Makes it run faster"], answer: 1, explanation: "kill -9 force-stops a process; prefer plain kill first and use -9 only if needed." }
        ]
    },
    {
        day: 16,
        phase: "Intermediate",
        title: "Editing Files in the Terminal (nano)",
        theory: `
            <h2>Writing and Editing Without a Mouse</h2>
            <p>On servers there's no Notepad or Word — you edit files right in the terminal. The friendliest editor for beginners is <strong>nano</strong>. It shows its shortcuts at the bottom of the screen, so you never have to guess.</p>

            <h3>Opening and saving</h3>
            <ul>
                <li><code>nano notes.txt</code> — open (or create) the file for editing.</li>
                <li>Type normally, using the arrow keys to move around.</li>
                <li><strong>Ctrl + O</strong> then <strong>Enter</strong> — save ("write Out").</li>
                <li><strong>Ctrl + X</strong> — exit (it asks to save if you haven't).</li>
            </ul>
            <p>In nano's hints, the <code>^</code> symbol means the <strong>Ctrl</strong> key. So <code>^X</code> means Ctrl + X.</p>

            <h3>A few more handy shortcuts</h3>
            <ul>
                <li><strong>Ctrl + K</strong> — cut the current line.</li>
                <li><strong>Ctrl + U</strong> — paste it back.</li>
                <li><strong>Ctrl + W</strong> — search for text.</li>
            </ul>

            <h3>What about "vim"?</h3>
            <p>You'll hear about a powerful editor called <strong>vim</strong>. It's fantastic but has a steeper learning curve. For now, <code>nano</code> does everything a beginner needs. The one survival tip for vim: if you ever get stuck inside it, press <strong>Esc</strong>, then type <code>:q!</code> and Enter to quit without saving.</p>

            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>nano in two shortcuts</strong>
                    <p><strong>Ctrl + O</strong> saves, <strong>Ctrl + X</strong> exits. The hints are always on screen, so you're never lost.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>You need to fix one line in a server's configuration file. There's no desktop, just the terminal. You open the file in nano, change the line, press Ctrl + O to save and Ctrl + X to exit — done in under a minute, no graphical tools required.</p>
            <p class="scenario-quote">"Editing files directly on a server is a daily task. A simple editor like nano means you're never blocked just because there's no graphical interface."</p>
            <h3>Why this matters</h3>
            <p>Configuration changes, quick notes, fixing a script — all happen in a terminal editor. Comfort with nano removes a big beginner roadblock.</p>
        `,
        practical: [
            { mac: "nano hello.txt", win: "nano hello.txt", desc: "Open (or create) hello.txt in the nano editor. Type something, then Ctrl+O, Enter, Ctrl+X." },
            { mac: "cat hello.txt", win: "cat hello.txt", desc: "Confirm what you typed and saved is in the file." },
            { mac: "echo \"add me\" >> hello.txt", win: "echo \"add me\" >> hello.txt", desc: "Append a line without opening the editor, for comparison." },
            { mac: "nano hello.txt", win: "nano hello.txt", desc: "Reopen to see both your typed text and the appended line." }
        ],
        exercises: [
            { difficulty: "Easy", task: "Open a brand new file called todo.txt in nano (then save with Ctrl+O and exit with Ctrl+X).", solution: "nano todo.txt", outcome: "nano opens an empty todo.txt ready for typing." },
            { difficulty: "Practice", task: "After editing todo.txt in nano and saving, print it to confirm your text was stored.", solution: "cat todo.txt", outcome: "Shows the text you typed and saved." },
            { difficulty: "Practice", task: "Recall the two nano shortcuts and run a command that prints them as a reminder.", solution: "echo 'Ctrl+O = save, Ctrl+X = exit'", outcome: "Prints the two key shortcuts for nano." },
            { difficulty: "Medium", task: "If you ever open vim by accident, what do you type to quit without saving? Print the answer.", hint: "Esc first.", solution: "echo 'Press Esc, then type :q! and Enter'", outcome: "Reminds you how to escape vim safely." }
        ],
        quiz: [
            { question: "In nano, which shortcut saves the file?", options: ["Ctrl + S", "Ctrl + O", "Ctrl + W", "Ctrl + Q"], answer: 1, explanation: "Ctrl + O ('write Out') saves in nano; press Enter to confirm the filename." },
            { question: "In nano's on-screen hints, what does the ^ symbol mean?", options: ["The Shift key", "The Ctrl key", "The Alt key", "An error"], answer: 1, explanation: "^ stands for the Ctrl key, so ^X means Ctrl + X." },
            { question: "You're accidentally stuck in vim. How do you quit without saving?", options: ["Ctrl + X", "Type quit", "Press Esc, then :q! and Enter", "Close the laptop"], answer: 2, explanation: "Esc leaves edit mode, and :q! quits vim discarding changes." }
        ]
    },
    {
        day: 17,
        phase: "Intermediate",
        title: "Environment Variables and PATH",
        theory: `
            <h2>The Shell's Little Memory Slots</h2>
            <p>Your shell keeps a set of named values called <strong>environment variables</strong>. Think of them as labelled sticky notes the system reads to know things like who you are, where your home folder is, and where to find programs.</p>

            <h3>Seeing variables</h3>
            <ul>
                <li><code>echo $HOME</code> — prints your home folder path. The <code>$</code> means "the value of".</li>
                <li><code>echo $USER</code> — your username.</li>
                <li><code>printenv</code> — list all environment variables at once.</li>
            </ul>

            <h3>Making your own</h3>
            <p><code>NAME="Alex"</code> creates a variable, and <code>echo $NAME</code> reads it back. To make it available to programs you launch, use <code>export NAME="Alex"</code>. (These last only for the current terminal unless you save them in a startup file — more below.)</p>

            <h3>The special one: PATH</h3>
            <p><code>PATH</code> is a list of folders the shell searches to find programs. When you type <code>python</code>, the shell looks through each folder in <code>PATH</code> until it finds it. That's why installed programs "just work" by name — they live in a folder that's on your <code>PATH</code>. View it with <code>echo $PATH</code>.</p>

            <h3>Making variables stick</h3>
            <p>To keep a variable every time you open a terminal, add the <code>export</code> line to your shell's startup file — usually <code>~/.bashrc</code> (Ubuntu/WSL) or <code>~/.zshrc</code> (modern Mac). The shell reads that file each time it starts.</p>

            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Key idea</strong>
                    <p><code>$NAME</code> means "the value of NAME". <code>PATH</code> is the special variable that tells the shell where to find programs.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>You install a tool but typing its name gives "command not found". The program is there — it's just in a folder that isn't on your PATH. Once you understand PATH, you know exactly why, and how to fix it.</p>
            <p class="scenario-quote">"'Command not found' almost always means a PATH issue, not a broken program. Understanding environment variables turns a baffling error into a five-second fix."</p>
            <h3>Why this matters</h3>
            <p>Environment variables and PATH explain how the shell finds programs and remembers settings. They're behind countless setup steps and error messages you'll meet.</p>
        `,
        practical: [
            { mac: "echo $HOME", win: "echo $HOME", desc: "Print the path to your home folder." },
            { mac: "echo $PATH", win: "echo $PATH", desc: "Show the list of folders the shell searches for programs." },
            { mac: "export GREETING=\"hello\"", win: "export GREETING=\"hello\"", desc: "Create and export a variable for this terminal session." },
            { mac: "echo $GREETING", win: "echo $GREETING", desc: "Read the variable back to confirm it was set." }
        ],
        exercises: [
            { difficulty: "Easy", task: "Print the value of your HOME environment variable.", solution: "echo $HOME", outcome: "Shows your home folder path, e.g. /home/yourname." },
            { difficulty: "Practice", task: "Create a variable called CITY set to London, then print it.", solution: "CITY=\"London\" && echo $CITY", outcome: "Prints 'London'." },
            { difficulty: "Practice", task: "Display the full list of folders the shell uses to find commands.", hint: "It's a special variable.", solution: "echo $PATH", outcome: "Prints a colon-separated list of program folders." },
            { difficulty: "Medium", task: "List every environment variable and search that list for the one containing your username.", solution: "printenv | grep USER", outcome: "Shows the USER variable (and any others mentioning USER)." }
        ],
        quiz: [
            { question: "What does the $ mean in echo $HOME?", options: ["Money", "'The value of' the variable", "An error", "Run as admin"], answer: 1, explanation: "$ before a name means 'give me the value stored in that variable'." },
            { question: "What is PATH used for?", options: ["Your home folder", "The list of folders the shell searches to find programs", "Your password", "A type of file"], answer: 1, explanation: "PATH lists the folders the shell looks through to locate a command you type." },
            { question: "Why might a freshly installed program give 'command not found'?", options: ["The computer is broken", "Its folder isn't listed in PATH", "It needs the internet", "It's a virus"], answer: 1, explanation: "If the program's folder isn't on PATH, the shell can't find it by name." }
        ]
    },
    {
        day: 18,
        phase: "Intermediate",
        title: "Smarter Searching with find",
        theory: `
            <h2>Locating Files Anywhere</h2>
            <p>Earlier, <code>grep</code> searched <em>inside</em> files for text. The <code>find</code> command is different: it locates <strong>files and folders themselves</strong> by name, type, size, or age — searching through entire folder trees.</p>

            <h3>The shape of a find command</h3>
            <p><code>find WHERE WHAT</code> — first say where to start looking, then what to look for. For example: <code>find . -name "report.txt"</code> searches the current folder (the <code>.</code>) and everything inside it for a file called report.txt.</p>

            <h3>Common searches</h3>
            <ul>
                <li><code>find . -name "*.txt"</code> — all .txt files below here.</li>
                <li><code>find . -iname "*.JPG"</code> — same but case-insensitive (matches .jpg too).</li>
                <li><code>find . -type d -name "images"</code> — find folders (<code>-type d</code>) named images.</li>
                <li><code>find . -type f -size +10M</code> — files bigger than 10 megabytes.</li>
                <li><code>find . -mtime -1</code> — things changed in the last day.</li>
            </ul>

            <h3>Acting on what you find</h3>
            <p>You can even do something to each result. <code>find . -name "*.tmp" -delete</code> finds and deletes all .tmp files. <strong>Always run it without <code>-delete</code> first</strong> to see what would be affected.</p>

            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>grep vs find</strong>
                    <p><code>grep</code> searches the <em>text inside</em> files. <code>find</code> searches for the <em>files themselves</em> by name, type, size, or date.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>Somewhere in a deep maze of project folders sits a file you need, but you have no idea which folder. Rather than clicking through dozens of directories, you let <code>find</code> sweep the whole tree and it reports the exact location in seconds.</p>
            <p class="scenario-quote">"When you don't know where something is, don't go looking by hand. Describe what you're after and let find do the hunting across the entire system."</p>
            <h3>Why this matters</h3>
            <p>Big systems have thousands of files in nested folders. <code>find</code> locates exactly what you need by any attribute — a real time-saver and a building block for automation.</p>
        `,
        practical: [
            { mac: "mkdir -p deep/a/b && touch deep/a/b/treasure.txt", win: "mkdir -p deep/a/b && touch deep/a/b/treasure.txt", desc: "Create a nested folder with a file buried inside it." },
            { mac: "find deep -name \"treasure.txt\"", win: "find deep -name \"treasure.txt\"", desc: "Search the deep folder tree for the file by name." },
            { mac: "find . -type d", win: "find . -type d", desc: "List every folder below the current location." },
            { mac: "find . -name \"*.txt\"", win: "find . -name \"*.txt\"", desc: "Find all .txt files anywhere below here." }
        ],
        exercises: [
            { difficulty: "Easy", task: "Search the current folder and everything under it for a file named notes.txt.", solution: "find . -name \"notes.txt\"", outcome: "Prints the path(s) to any matching file." },
            { difficulty: "Practice", task: "Find all files ending in .log anywhere below the current folder.", solution: "find . -name \"*.log\"", outcome: "Lists every .log file in the tree." },
            { difficulty: "Practice", task: "Find only folders (not files) named 'images' below the current location.", hint: "Use -type d.", solution: "find . -type d -name \"images\"", outcome: "Returns matching folders only." },
            { difficulty: "Medium", task: "Find all files larger than 5 megabytes below the current folder.", solution: "find . -type f -size +5M", outcome: "Lists files bigger than 5 MB — useful for finding space hogs." }
        ],
        quiz: [
            { question: "How is find different from grep?", options: ["They're identical", "find locates files/folders themselves; grep searches text inside files", "find is for Windows only", "grep finds folders"], answer: 1, explanation: "find locates the files and folders; grep searches the contents inside them." },
            { question: "What does the . mean in 'find . -name'?", options: ["A hidden file", "Start searching from the current folder", "An error", "Delete everything"], answer: 1, explanation: "The dot tells find to begin in the current folder and search everything below it." },
            { question: "What does -type d restrict the search to?", options: ["Documents", "Folders (directories)", "Deleted files", "Downloads"], answer: 1, explanation: "-type d limits results to directories (folders) only." }
        ]
    },
    {
        day: 19,
        phase: "Advanced",
        title: "Your First Shell Script",
        theory: `
            <h2>Saving Commands to Run Later</h2>
            <p>A <strong>shell script</strong> is just a text file containing commands you'd normally type, saved so you can run them all at once — over and over — with a single command. This is the start of <em>automation</em>: letting the computer do repetitive work for you.</p>

            <h3>The three steps to any script</h3>
            <ol>
                <li><strong>Create</strong> a file ending in <code>.sh</code>, e.g. <code>hello.sh</code>.</li>
                <li><strong>Write</strong> commands inside, one per line.</li>
                <li><strong>Make it runnable</strong> with <code>chmod +x hello.sh</code>, then run it with <code>./hello.sh</code>.</li>
            </ol>

            <h3>The "shebang" line</h3>
            <p>The first line of a script is usually <code>#!/bin/bash</code>. This odd-looking line (called a <em>shebang</em>) tells the system which program should run the file — here, the Bash shell. Always put it at the very top.</p>

            <h3>A complete tiny script</h3>
            <p>Put this in <code>hello.sh</code>:</p>
            <pre><code>#!/bin/bash
echo "Hello!"
echo "Today is:"
date</code></pre>
            <p>Then <code>chmod +x hello.sh</code> and <code>./hello.sh</code>. It greets you and prints the date — three commands run from one.</p>

            <h3>Comments</h3>
            <p>Any line starting with <code>#</code> (other than the shebang) is a <strong>comment</strong> — a note for humans that the computer ignores. Use comments to explain what your script does.</p>

            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Automation begins here</strong>
                    <p>A script = commands in a file. Start with <code>#!/bin/bash</code>, make it executable with <code>chmod +x</code>, and run it with <code>./name.sh</code>.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>Every morning you type the same five commands to set up your work. One afternoon you paste them into a script called <code>start.sh</code>. From then on, a single <code>./start.sh</code> does the whole routine — saving you minutes every single day.</p>
            <p class="scenario-quote">"If you've typed the same commands twice, put them in a script. The command line's real superpower is teaching the computer to repeat your work flawlessly."</p>
            <h3>Why this matters</h3>
            <p>Scripts are the foundation of automation — the skill that defines DevOps. Everything from backups to deployments is just well-organised scripts.</p>
        `,
        practical: [
            { mac: "printf '#!/bin/bash\\necho \"Hi from my script\"\\ndate\\n' > hello.sh", win: "printf '#!/bin/bash\\necho \"Hi from my script\"\\ndate\\n' > hello.sh", desc: "Create a script file with a shebang, a greeting, and the date command." },
            { mac: "chmod +x hello.sh", win: "chmod +x hello.sh", desc: "Make the script runnable." },
            { mac: "./hello.sh", win: "bash hello.sh", desc: "Run the script and watch all its commands execute in order." },
            { mac: "cat hello.sh", win: "cat hello.sh", desc: "Look at the script's contents to see what it does." }
        ],
        exercises: [
            { difficulty: "Easy", task: "Create a script greet.sh that prints 'Welcome', then make it executable.", solution: "printf '#!/bin/bash\\necho \"Welcome\"\\n' > greet.sh && chmod +x greet.sh", outcome: "greet.sh is created with a shebang and made runnable." },
            { difficulty: "Practice", task: "Run your greet.sh script.", solution: "./greet.sh", solutionWin: "bash greet.sh", outcome: "Prints 'Welcome'." },
            { difficulty: "Practice", task: "Write a script today.sh that prints a message and then the current date, make it runnable, and run it.", solution: "printf '#!/bin/bash\\necho \"The date is:\"\\ndate\\n' > today.sh && chmod +x today.sh && ./today.sh", outcome: "Prints the message followed by today's date." },
            { difficulty: "Medium", task: "Create a script setup.sh that makes a folder 'work', enters it, and creates a file log.txt; then run it.", solution: "printf '#!/bin/bash\\nmkdir -p work\\ncd work\\ntouch log.txt\\necho \"Done\"\\n' > setup.sh && chmod +x setup.sh && ./setup.sh", outcome: "Creates the work folder and log.txt, then prints 'Done'." }
        ],
        quiz: [
            { question: "What is a shell script?", options: ["A type of seashell", "A file containing commands you can run all at once", "A password file", "A web page"], answer: 1, explanation: "It's a text file of commands, run together with a single command — the basis of automation." },
            { question: "What is the line #!/bin/bash for?", options: ["A comment to ignore", "It tells the system to run the file with the Bash shell", "It deletes the file", "It's optional decoration"], answer: 1, explanation: "The 'shebang' tells the system which interpreter (here, bash) should run the script." },
            { question: "After writing a script, what makes it runnable as ./script.sh?", options: ["chmod +x script.sh", "rm script.sh", "cat script.sh", "Nothing needed"], answer: 0, explanation: "chmod +x adds execute permission so you can run it with ./script.sh." }
        ]
    },
    {
        day: 20,
        phase: "Advanced",
        title: "Variables and Input in Scripts",
        theory: `
            <h2>Making Scripts Flexible</h2>
            <p>A script that always does exactly the same thing is useful, but scripts get powerful when they can use <strong>variables</strong> and accept <strong>input</strong>. Then one script can handle many situations.</p>

            <h3>Variables in scripts</h3>
            <p>Set a value, then use it with a <code>$</code>:</p>
            <pre><code>#!/bin/bash
name="Alex"
echo "Hello, $name!"</code></pre>
            <p><strong>Important:</strong> no spaces around the <code>=</code>. Write <code>name="Sri"</code>, not <code>name = "Sri"</code>.</p>

            <h3>Asking the user a question</h3>
            <p>The <code>read</code> command pauses and stores what the user types:</p>
            <pre><code>#!/bin/bash
echo "What is your name?"
read name
echo "Nice to meet you, $name!"</code></pre>

            <h3>Reading arguments passed on the command line</h3>
            <p>When you run <code>./greet.sh Alice</code>, the script can grab "Alice" automatically:</p>
            <ul>
                <li><code>$1</code> — the first thing typed after the script name.</li>
                <li><code>$2</code> — the second, and so on.</li>
                <li><code>$#</code> — how many were given.</li>
            </ul>
            <pre><code>#!/bin/bash
echo "Hello, $1!"</code></pre>
            <p>Running <code>./greet.sh Alice</code> prints "Hello, Alice!".</p>

            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Two ways to get input</strong>
                    <p><code>read</code> asks the user a question while running. <code>$1</code>, <code>$2</code>… grab values typed after the script's name. Both make one script reusable for many cases.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>You wrote a backup script, but it only ever backs up one fixed folder. By adding <code>$1</code>, you turn it into a tool: <code>./backup.sh photos</code> backs up photos, <code>./backup.sh documents</code> backs up documents. One script, endless uses.</p>
            <p class="scenario-quote">"A good script is like a good tool — it adapts to the job. Variables and input are what turn a one-trick script into something you'll reuse for years."</p>
            <h3>Why this matters</h3>
            <p>Real automation needs flexibility. Variables and input let a single script serve many situations instead of writing a new one each time.</p>
        `,
        practical: [
            { mac: "printf '#!/bin/bash\\nname=\"World\"\\necho \"Hello, $name\"\\n' > var.sh && chmod +x var.sh && ./var.sh", win: "printf '#!/bin/bash\\nname=\"World\"\\necho \"Hello, $name\"\\n' > var.sh && chmod +x var.sh && bash var.sh", desc: "A script that stores a value in a variable and prints it." },
            { mac: "printf '#!/bin/bash\\necho \"Hello, $1\"\\n' > arg.sh && chmod +x arg.sh && ./arg.sh Alice", win: "printf '#!/bin/bash\\necho \"Hello, $1\"\\n' > arg.sh && chmod +x arg.sh && bash arg.sh Alice", desc: "A script that greets whatever name you pass after it." },
            { mac: "./arg.sh Bob", win: "bash arg.sh Bob", desc: "Run the same script with a different argument to see it adapt." },
            { mac: "cat arg.sh", win: "cat arg.sh", desc: "Review how $1 is used inside the script." }
        ],
        exercises: [
            { difficulty: "Easy", task: "Write and run a script that stores your city in a variable and prints 'I live in <city>'.", solution: "printf '#!/bin/bash\\ncity=\"London\"\\necho \"I live in $city\"\\n' > city.sh && chmod +x city.sh && ./city.sh", solutionWin: "printf '#!/bin/bash\\ncity=\"London\"\\necho \"I live in $city\"\\n' > city.sh && chmod +x city.sh && bash city.sh", outcome: "Prints 'I live in London'." },
            { difficulty: "Practice", task: "Write a script hello.sh that greets the first argument, then run it with your name.", solution: "printf '#!/bin/bash\\necho \"Hello, $1\"\\n' > hello.sh && chmod +x hello.sh && ./hello.sh Sri", solutionWin: "printf '#!/bin/bash\\necho \"Hello, $1\"\\n' > hello.sh && chmod +x hello.sh && bash hello.sh Sri", outcome: "Prints 'Hello, Sri'." },
            { difficulty: "Practice", task: "Make a script that reports how many arguments it received using $#.", solution: "printf '#!/bin/bash\\necho \"You gave $# arguments\"\\n' > count.sh && chmod +x count.sh && ./count.sh a b c", solutionWin: "printf '#!/bin/bash\\necho \"You gave $# arguments\"\\n' > count.sh && chmod +x count.sh && bash count.sh a b c", outcome: "Prints 'You gave 3 arguments'." },
            { difficulty: "Medium", task: "Write a script that combines two arguments into a greeting: './pair.sh Alice Bob' prints 'Alice and Bob'.", solution: "printf '#!/bin/bash\\necho \"$1 and $2\"\\n' > pair.sh && chmod +x pair.sh && ./pair.sh Alice Bob", solutionWin: "printf '#!/bin/bash\\necho \"$1 and $2\"\\n' > pair.sh && chmod +x pair.sh && bash pair.sh Alice Bob", outcome: "Prints 'Alice and Bob'." }
        ],
        quiz: [
            { question: "What's wrong with: name = \"Sri\" in a script?", options: ["Nothing", "There must be no spaces around the = sign", "It needs a capital N", "Variables can't hold names"], answer: 1, explanation: "In Bash, variable assignment must have no spaces: name=\"Sri\"." },
            { question: "Inside a script, what does $1 refer to?", options: ["One dollar", "The first argument typed after the script name", "The first line", "An error code"], answer: 1, explanation: "$1 is the first command-line argument passed to the script." },
            { question: "Which command pauses to read what the user types into a variable?", options: ["echo", "read", "cat", "grep"], answer: 1, explanation: "read waits for the user's input and stores it in a variable." }
        ]
    },
    {
        day: 21,
        phase: "Advanced",
        title: "Making Decisions (if Statements)",
        theory: `
            <h2>Scripts That Choose</h2>
            <p>Real scripts need to make decisions: "if the file exists, use it; otherwise, create it." Bash does this with <code>if</code> statements — the script checks a condition and runs different commands depending on the answer.</p>

            <h3>The shape of an if</h3>
            <pre><code>if [ condition ]; then
    # commands when true
else
    # commands when false
fi</code></pre>
            <p>Notice the spaces inside <code>[ ]</code> — they're required. And <code>fi</code> (which is "if" backwards) marks the end.</p>

            <h3>Common conditions</h3>
            <ul>
                <li><code>[ -f file.txt ]</code> — true if that file exists.</li>
                <li><code>[ -d folder ]</code> — true if that folder exists.</li>
                <li><code>[ "$a" = "$b" ]</code> — true if two texts are equal.</li>
                <li><code>[ "$n" -gt 10 ]</code> — true if number n is greater than 10 (<code>-lt</code> = less than, <code>-eq</code> = equal).</li>
            </ul>

            <h3>A practical example</h3>
            <pre><code>#!/bin/bash
if [ -f config.txt ]; then
    echo "Found the config file."
else
    echo "No config — creating one."
    touch config.txt
fi</code></pre>
            <p>This checks for a file and either reports it or creates it. That's a script reacting to the real world.</p>

            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Mind the spaces and the fi</strong>
                    <p>Always put spaces inside <code>[ ]</code>, and close every <code>if</code> with <code>fi</code>. These two trip up beginners more than anything else.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>Your backup script used to crash when the destination folder didn't exist. You add an <code>if</code> that checks for the folder and creates it when missing. Now the script handles both cases gracefully and never fails on that step again.</p>
            <p class="scenario-quote">"Scripts that can't make decisions are fragile. A few well-placed if checks turn a script that breaks on surprises into one you can trust to run unattended."</p>
            <h3>Why this matters</h3>
            <p>Decision-making is what separates a fixed list of commands from a genuinely smart, reliable script that copes with different situations.</p>
        `,
        practical: [
            { mac: "printf '#!/bin/bash\\nif [ -f notes.txt ]; then\\n  echo \"exists\"\\nelse\\n  echo \"missing\"\\nfi\\n' > check.sh && chmod +x check.sh && ./check.sh", win: "printf '#!/bin/bash\\nif [ -f notes.txt ]; then\\n  echo \"exists\"\\nelse\\n  echo \"missing\"\\nfi\\n' > check.sh && chmod +x check.sh && bash check.sh", desc: "A script that reports whether notes.txt exists." },
            { mac: "touch notes.txt && ./check.sh", win: "touch notes.txt && bash check.sh", desc: "Create the file, then run again to see the other branch." },
            { mac: "printf '#!/bin/bash\\nif [ \"$1\" -gt 10 ]; then echo big; else echo small; fi\\n' > size.sh && chmod +x size.sh && ./size.sh 20", win: "printf '#!/bin/bash\\nif [ \"$1\" -gt 10 ]; then echo big; else echo small; fi\\n' > size.sh && chmod +x size.sh && bash size.sh 20", desc: "Compare a number argument against 10." },
            { mac: "./size.sh 3", win: "bash size.sh 3", desc: "Run again with a small number to see 'small'." }
        ],
        exercises: [
            { difficulty: "Easy", task: "Write a script that prints 'yes' if a folder called data exists, otherwise 'no'.", solution: "printf '#!/bin/bash\\nif [ -d data ]; then echo yes; else echo no; fi\\n' > d.sh && chmod +x d.sh && ./d.sh", solutionWin: "printf '#!/bin/bash\\nif [ -d data ]; then echo yes; else echo no; fi\\n' > d.sh && chmod +x d.sh && bash d.sh", outcome: "Prints 'no' (until you create a data folder, then 'yes')." },
            { difficulty: "Practice", task: "Write a script that checks if its first argument equals 'hello' and responds accordingly.", solution: "printf '#!/bin/bash\\nif [ \"$1\" = \"hello\" ]; then echo \"hi back\"; else echo \"who are you\"; fi\\n' > h.sh && chmod +x h.sh && ./h.sh hello", solutionWin: "printf '#!/bin/bash\\nif [ \"$1\" = \"hello\" ]; then echo \"hi back\"; else echo \"who are you\"; fi\\n' > h.sh && chmod +x h.sh && bash h.sh hello", outcome: "Prints 'hi back' when given hello." },
            { difficulty: "Practice", task: "Write a script that creates config.txt only if it doesn't already exist.", solution: "printf '#!/bin/bash\\nif [ -f config.txt ]; then echo \"already there\"; else touch config.txt; echo created; fi\\n' > c.sh && chmod +x c.sh && ./c.sh", solutionWin: "printf '#!/bin/bash\\nif [ -f config.txt ]; then echo \"already there\"; else touch config.txt; echo created; fi\\n' > c.sh && chmod +x c.sh && bash c.sh", outcome: "Creates the file the first time, reports it exists the next." },
            { difficulty: "Medium", task: "Write a script that says 'pass' if its number argument is 50 or more, else 'fail'.", hint: "Use -ge for 'greater or equal'.", solution: "printf '#!/bin/bash\\nif [ \"$1\" -ge 50 ]; then echo pass; else echo fail; fi\\n' > grade.sh && chmod +x grade.sh && ./grade.sh 72", solutionWin: "printf '#!/bin/bash\\nif [ \"$1\" -ge 50 ]; then echo pass; else echo fail; fi\\n' > grade.sh && chmod +x grade.sh && bash grade.sh 72", outcome: "Prints 'pass' for 72, 'fail' for values under 50." }
        ],
        quiz: [
            { question: "What closes an if statement in Bash?", options: ["end", "}", "fi", "stop"], answer: 2, explanation: "An if block ends with fi (which is 'if' spelled backwards)." },
            { question: "What does [ -f file.txt ] check?", options: ["If the file is empty", "Whether file.txt exists", "If you can fly", "The file size"], answer: 1, explanation: "-f tests whether the named file exists (as a regular file)." },
            { question: "Why must you write [ -f file ] with spaces inside the brackets?", options: ["For looks", "Bash requires the spaces or the test fails", "To make it faster", "Spaces are optional"], answer: 1, explanation: "The brackets are actually a command, so spaces around the contents are required." }
        ]
    },
    {
        day: 22,
        phase: "Advanced",
        title: "Repeating Work (Loops)",
        theory: `
            <h2>Doing Something Many Times</h2>
            <p>When you need to repeat an action — for every file, or a set number of times — a <strong>loop</strong> does it automatically. Instead of copying a command twenty times, you write it once and let the loop run it.</p>

            <h3>The for loop — go through a list</h3>
            <pre><code>for name in apple banana cherry; do
    echo "Fruit: $name"
done</code></pre>
            <p>This runs the <code>echo</code> once for each word, with <code>$name</code> taking each value in turn. <code>do</code> starts the loop body; <code>done</code> ends it.</p>

            <h3>Looping over files</h3>
            <p>Combine loops with wildcards to act on every matching file:</p>
            <pre><code>for file in *.txt; do
    echo "Found: $file"
done</code></pre>

            <h3>Counting with a range</h3>
            <pre><code>for i in {1..5}; do
    echo "Number $i"
done</code></pre>
            <p><code>{1..5}</code> expands to 1 2 3 4 5, so this prints five lines.</p>

            <h3>The while loop — repeat until a condition changes</h3>
            <pre><code>count=1
while [ $count -le 3 ]; do
    echo "Count is $count"
    count=$((count + 1))
done</code></pre>
            <p>This keeps going <em>while</em> the condition is true. <code>$((...))</code> does the arithmetic.</p>

            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>for vs while</strong>
                    <p>Use <code>for</code> when you have a list to go through. Use <code>while</code> when you repeat until some condition stops being true.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>You need to rename or process 300 files the same way. Doing it by hand is unthinkable. A single <code>for</code> loop sweeps through every file and applies the change in one go — work that would take an hour finishes in a second.</p>
            <p class="scenario-quote">"Loops are where the computer truly earns its keep. Anything you'd dread doing by hand a hundred times, a loop does instantly and without errors."</p>
            <h3>Why this matters</h3>
            <p>Loops are the heart of automation. Bulk-processing files, repeating checks, generating data — all rely on loops to do tedious work reliably.</p>
        `,
        practical: [
            { mac: "for i in 1 2 3; do echo \"line $i\"; done", win: "for i in 1 2 3; do echo \"line $i\"; done", desc: "A simple loop printing three lines." },
            { mac: "for f in *.txt; do echo \"file: $f\"; done", win: "for f in *.txt; do echo \"file: $f\"; done", desc: "Loop over every .txt file in the current folder." },
            { mac: "for i in {1..5}; do echo \"count $i\"; done", win: "for i in {1..5}; do echo \"count $i\"; done", desc: "Loop over a numeric range from 1 to 5." },
            { mac: "n=1; while [ $n -le 3 ]; do echo \"n=$n\"; n=$((n+1)); done", win: "n=1; while [ $n -le 3 ]; do echo \"n=$n\"; n=$((n+1)); done", desc: "A while loop that counts from 1 to 3." }
        ],
        exercises: [
            { difficulty: "Easy", task: "Write a loop that prints the words red, green, and blue, each on its own line.", solution: "for c in red green blue; do echo \"$c\"; done", outcome: "Prints red, green, blue on three lines." },
            { difficulty: "Practice", task: "Write a loop that prints the numbers 1 through 10.", hint: "Use a {1..10} range.", solution: "for i in {1..10}; do echo \"$i\"; done", outcome: "Prints 1 to 10, one per line." },
            { difficulty: "Practice", task: "Loop over every .txt file in the folder and print a line for each.", solution: "for f in *.txt; do echo \"Processing $f\"; done", outcome: "Prints one 'Processing ...' line per .txt file." },
            { difficulty: "Medium", task: "Use a while loop to print a countdown from 5 down to 1.", hint: "Decrease the counter each time.", solution: "n=5; while [ $n -ge 1 ]; do echo \"$n\"; n=$((n-1)); done", outcome: "Prints 5, 4, 3, 2, 1 on separate lines." }
        ],
        quiz: [
            { question: "What does a loop do?", options: ["Deletes files", "Repeats commands automatically", "Connects to the internet", "Renames the computer"], answer: 1, explanation: "A loop runs the same commands repeatedly, so you don't have to type them many times." },
            { question: "Which loop is best for going through a known list of items?", options: ["while", "for", "if", "case"], answer: 1, explanation: "A for loop iterates over a list of items, one at a time." },
            { question: "What does {1..5} produce in a for loop?", options: ["The text {1..5}", "The numbers 1 2 3 4 5", "Just 1 and 5", "An error"], answer: 1, explanation: "{1..5} expands to the sequence 1 2 3 4 5." }
        ]
    },
    {
        day: 23,
        phase: "Advanced",
        title: "Scheduling Tasks Automatically (cron)",
        theory: `
            <h2>Running Things on a Timer</h2>
            <p>Wouldn't it be great if your backup ran every night by itself? That's what <strong>cron</strong> does — it runs commands or scripts automatically on a schedule you set, even while you're asleep.</p>

            <h3>The crontab</h3>
            <p>Your personal schedule of jobs is called your <strong>crontab</strong> (cron table). Edit it with <code>crontab -e</code>, and list what's there with <code>crontab -l</code>. Each line is one scheduled job.</p>

            <h3>Reading a schedule line</h3>
            <p>A cron line has five time fields, then the command:</p>
            <pre><code>┌ minute (0-59)
│ ┌ hour (0-23)
│ │ ┌ day of month (1-31)
│ │ │ ┌ month (1-12)
│ │ │ │ ┌ day of week (0-6, Sun=0)
│ │ │ │ │
* * * * * command-to-run</code></pre>
            <p>A <code>*</code> means "every". So:</p>
            <ul>
                <li><code>0 2 * * * /home/me/backup.sh</code> — run backup.sh every day at 2:00 AM.</li>
                <li><code>*/15 * * * * /home/me/check.sh</code> — run every 15 minutes.</li>
                <li><code>0 9 * * 1 /home/me/report.sh</code> — run at 9 AM every Monday.</li>
            </ul>

            <h3>A tip for figuring out schedules</h3>
            <p>The five-field format takes practice. Many people use a helper website like <a href="https://crontab.guru" target="_blank" rel="noopener">crontab.guru</a> to translate a schedule into plain English before adding it.</p>

            <div class="takeaway-card">
                <i class="fa-solid fa-lightbulb"></i>
                <div class="takeaway-content">
                    <strong>Set it and forget it</strong>
                    <p>cron runs your scripts on a schedule with no one watching. Five time fields (minute, hour, day, month, weekday) plus the command — and <code>*</code> means "every".</p>
                </div>
            </div>
        `,
        scenario: `
            <p>Your team needs a database backup every night, but nobody wants to stay late to run it. You add one cron line scheduling the backup script for 2 AM. From then on it runs itself, reliably, every night — and everyone forgets it was ever a chore.</p>
            <p class="scenario-quote">"The best automation is invisible. With cron, routine jobs simply happen on time, every time, without anyone remembering to do them."</p>
            <h3>Why this matters</h3>
            <p>Scheduled tasks — backups, clean-ups, reports, health checks — keep systems running smoothly. cron is the classic tool that makes them happen automatically.</p>
        `,
        practical: [
            { mac: "crontab -l", win: "crontab -l", desc: "List your current scheduled jobs (may be empty at first)." },
            { mac: "echo '* * * * * echo hi >> ~/cron-test.log' | crontab -", win: "echo '* * * * * echo hi >> ~/cron-test.log' | crontab -", desc: "Add a job that writes 'hi' to a log every minute (for testing)." },
            { mac: "crontab -l", win: "crontab -l", desc: "Confirm the job is now scheduled." },
            { mac: "crontab -r", win: "crontab -r", desc: "Remove all your cron jobs again to clean up after testing." }
        ],
        exercises: [
            { difficulty: "Easy", task: "List the cron jobs currently scheduled for your user.", solution: "crontab -l", outcome: "Shows your scheduled jobs, or reports there are none." },
            { difficulty: "Practice", task: "Write (don't schedule) the cron time fields to run a job every day at 6:30 AM. Print your answer.", hint: "minute hour then three stars.", solution: "echo '30 6 * * *'", outcome: "Prints '30 6 * * *' — 6:30 every day." },
            { difficulty: "Practice", task: "Print the cron schedule that means 'every 15 minutes'.", solution: "echo '*/15 * * * *'", outcome: "Prints '*/15 * * * *'." },
            { difficulty: "Medium", task: "Print the cron schedule to run a script at 9 AM every Monday.", hint: "Monday is day-of-week 1.", solution: "echo '0 9 * * 1'", outcome: "Prints '0 9 * * 1' — 9 AM on Mondays." }
        ],
        quiz: [
            { question: "What is cron used for?", options: ["Editing files", "Running commands automatically on a schedule", "Searching text", "Installing software"], answer: 1, explanation: "cron runs jobs automatically at the times you specify." },
            { question: "How many time fields does a cron line have before the command?", options: ["3", "5", "7", "1"], answer: 1, explanation: "Five fields: minute, hour, day of month, month, and day of week." },
            { question: "In cron, what does a * in a time field mean?", options: ["Never", "Every (every minute/hour/etc.)", "An error", "Once"], answer: 1, explanation: "A * means 'every' value for that field, e.g. * in the hour field means every hour." }
        ]
    },
    {
        day: 24,
        phase: "Advanced",
        title: "Putting It All Together",
        theory: `
            <h2>From Beginner to Confident</h2>
            <p>Look how far you've come! You can navigate, manage files, search, edit, control processes, install software, and write real scripts with decisions, loops, and schedules. This final lesson ties it together and points the way forward.</p>

            <h3>Your Linux toolkit so far</h3>
            <ul>
                <li><strong>Getting around:</strong> <code>pwd</code>, <code>ls</code>, <code>cd</code></li>
                <li><strong>Managing files:</strong> <code>mkdir</code>, <code>touch</code>, <code>cp</code>, <code>mv</code>, <code>rm</code></li>
                <li><strong>Reading & searching:</strong> <code>cat</code>, <code>less</code>, <code>head</code>, <code>tail</code>, <code>grep</code>, <code>find</code></li>
                <li><strong>Combining tools:</strong> pipes <code>|</code> and redirection <code>&gt;</code> <code>&gt;&gt;</code></li>
                <li><strong>System & power:</strong> permissions, <code>sudo</code>, package managers, processes</li>
                <li><strong>Automation:</strong> scripts, variables, <code>if</code>, loops, and <code>cron</code></li>
            </ul>

            <h3>A mini real-world script using many skills</h3>
            <pre><code>#!/bin/bash
# Tidy up: make a backup folder and move all logs into it
backup="logs-backup"
mkdir -p "$backup"
for file in *.log; do
    if [ -f "$file" ]; then
        mv "$file" "$backup/"
        echo "Moved $file"
    fi
done
echo "All logs tidied into $backup"</code></pre>
            <p>This one script uses a variable, <code>mkdir -p</code>, a <code>for</code> loop, an <code>if</code> check, <code>mv</code>, and wildcards — everything you've learned, working together.</p>

            <h3>Where to go next</h3>
            <ul>
                <li>Practise by automating a small chore on your own computer.</li>
                <li>Learn a more powerful editor like <strong>vim</strong> when you're ready.</li>
                <li>Linux is the foundation for the next topics on the roadmap — containers, cloud, and automation tools.</li>
            </ul>

            <div class="takeaway-card">
                <i class="fa-solid fa-trophy"></i>
                <div class="takeaway-content">
                    <strong>Congratulations!</strong>
                    <p>You've gone from opening a terminal for the first time to writing real automation. Keep practising on small everyday tasks — that's how it becomes second nature.</p>
                </div>
            </div>
        `,
        scenario: `
            <p>A colleague struggles to clean up a messy server: hundreds of stray log files everywhere. You quietly write a short script that loops through them, checks each one, and tidies them into a backup folder. What looked like an afternoon of work finishes in seconds — and your colleague asks you to teach them how.</p>
            <p class="scenario-quote">"The real reward isn't memorising commands — it's the moment you combine them to solve a genuine problem faster than anyone expected. That's when Linux stops being a subject and becomes your superpower."</p>
            <h3>Why this matters</h3>
            <p>Everything connects. The individual commands are just words; combining them into scripts and pipelines is the sentence that gets real work done — and the foundation for everything else in DevOps.</p>
        `,
        practical: [
            { mac: "touch a.log b.log c.log", win: "touch a.log b.log c.log", desc: "Create a few log files to tidy up." },
            { mac: "mkdir -p logs-backup && for f in *.log; do mv \"$f\" logs-backup/; done && ls logs-backup", win: "mkdir -p logs-backup && for f in *.log; do mv \"$f\" logs-backup/; done && ls logs-backup", desc: "Use a loop to move every log file into a backup folder, then list it." },
            { mac: "ls *.log 2>/dev/null | wc -l", win: "ls *.log 2>/dev/null | wc -l", desc: "Confirm no .log files remain in the current folder (count should be 0)." },
            { mac: "echo 'You did it!'", win: "echo 'You did it!'", desc: "Celebrate — you've combined many skills into one workflow." }
        ],
        exercises: [
            { difficulty: "Easy", task: "Create three files report1.txt, report2.txt, report3.txt in one command.", solution: "touch report1.txt report2.txt report3.txt", outcome: "All three files are created at once." },
            { difficulty: "Practice", task: "Move all .txt files into a folder called archive using a loop.", solution: "mkdir -p archive && for f in *.txt; do mv \"$f\" archive/; done", outcome: "Every .txt file is moved into archive." },
            { difficulty: "Practice", task: "Count how many files are now inside the archive folder.", hint: "List the folder and count lines.", solution: "ls archive | wc -l", outcome: "Prints the number of files in archive." },
            { difficulty: "Medium", task: "Write a script that creates a 'backup' folder and copies every .txt file into it, printing each filename as it goes.", solution: "printf '#!/bin/bash\\nmkdir -p backup\\nfor f in *.txt; do cp \"$f\" backup/ && echo \"copied $f\"; done\\n' > tidy.sh && chmod +x tidy.sh && ./tidy.sh", solutionWin: "printf '#!/bin/bash\\nmkdir -p backup\\nfor f in *.txt; do cp \"$f\" backup/ && echo \"copied $f\"; done\\n' > tidy.sh && chmod +x tidy.sh && bash tidy.sh", outcome: "Copies each .txt file into backup and prints a line per file — a real mini automation." }
        ],
        quiz: [
            { question: "Which combination of skills does a real tidy-up script typically use?", options: ["Only echo", "Variables, loops, if-checks, and file commands together", "Just cd", "None — scripts can't combine skills"], answer: 1, explanation: "Real scripts weave together variables, loops, conditionals, and file commands to do useful work." },
            { question: "Why is Linux a great foundation for DevOps topics like containers and cloud?", options: ["It isn't related", "Those tools run on and are controlled through Linux and the command line", "It's only for games", "They replace Linux entirely"], answer: 1, explanation: "Containers, servers, and cloud tooling are operated through the Linux command line you've now learned." },
            { question: "What's the best way to make these skills stick?", options: ["Forget them", "Practise by automating small real tasks of your own", "Only read about them", "Avoid the terminal"], answer: 1, explanation: "Hands-on practice on real little chores is what turns knowledge into lasting skill." }
        ]
    }
];
