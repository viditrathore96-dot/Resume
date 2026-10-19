import { Project, Skill, TimelineMilestone } from '../types';

export const PERSONAL_INFO = {
  name: "Vidit",
  fullName: "Vidit",
  role: "Self-Taught Software Developer",
  taglines: [
    "A self-taught developer passionate about low-level systems.",
    "Building fast applications in C++, C#, Java & Python.",
    "Crafting clean, responsive web experiences.",
    "Turning algorithmic curiosity into performant software."
  ],
  age: "17",
  experienceYears: "3",
  location: "Self-Taught Developer • Ready to Build",
  email: "viditnandsaroj@gmail.com",
  github: "https://github.com/vidit-dev",
  linkedin: "https://linkedin.com/in/vidit-dev",
  discord: "vidit#0001",
  stats: [
    { label: "Years Self-Learning", value: "3+", icon: "Clock" },
    { label: "Projects Completed", value: "15+", icon: "FolderGit2" },
    { label: "Core Languages", value: "5", icon: "Code2" },
    { label: "Algorithmic Problems", value: "120+", icon: "Brain" }
  ],
  bio: [
    "I'm Vidit, a 17-year-old self-taught software developer who started coding in 2023 with simple automation scripts.",
    "Over the past 3 years of daily self-directed practice, my curiosity led me to dive deep into systems programming with C++ and C#, object-oriented design in Java, and rapid backend scripting in Python.",
    "I believe in understanding how machines execute code under the hood—from memory management and cache lines to responsive web rendering.",
    "Currently, I am expanding my skills in modern web development and algorithms, actively building open-source projects, and seeking software engineering internships."
  ],
  philosophy: [
    {
      title: "First Principles & Low-Level",
      desc: "Not just using high-level abstractions, but dissecting memory allocation, time complexity, and how bits move.",
      badge: "C++ & C#"
    },
    {
      title: "Self-Taught Discipline",
      desc: "Learning without formal curriculum requires relentless curiosity, reading official documentation, and debugging errors independently.",
      badge: "3 Years Daily"
    },
    {
      title: "Full Product Craftsmanship",
      desc: "From algorithmic cores and command-line profilers to modern interactive web applications with polished UI.",
      badge: "End-to-End"
    }
  ]
};

export const SKILLS_DATA: Skill[] = [
  // Languages
  {
    name: "C++",
    category: "Languages",
    level: 85,
    levelLabel: "Advanced",
    experienceYears: "2+ yrs",
    description: "Modern C++ (C++17/20), pointers, RAII, STL containers, memory management, and competitive algorithmic problem solving.",
    iconName: "FileCode",
    codeSnippet: `template <typename T>\nvoid quickSort(std::vector<T>& arr, int low, int high) {\n    if (low < high) {\n        int pi = partition(arr, low, high);\n        quickSort(arr, low, pi - 1);\n        quickSort(arr, pi + 1, high);\n    }\n}`
  },
  {
    name: "C#",
    category: "Languages",
    level: 82,
    levelLabel: "Advanced",
    experienceYears: "2 yrs",
    description: ".NET runtime, LINQ, strongly-typed object-oriented architecture, custom 2D game loops, and asynchronous tasks.",
    iconName: "Terminal",
    codeSnippet: `public async Task<Result<T>> ProcessBatchAsync(IEnumerable<T> items) {\n    var tasks = items.Select(item => ProcessItemAsync(item));\n    var results = await Task.WhenAll(tasks);\n    return Result.Success(results);\n}`
  },
  {
    name: "Java",
    category: "Languages",
    level: 80,
    levelLabel: "Proficient",
    experienceYears: "2 yrs",
    description: "Core Java, OOP principles, Collections framework, multithreading, JavaFX GUI applications, and clean modular design.",
    iconName: "Coffee",
    codeSnippet: `public class SecurityVault<T> {\n    private final Map<String, EncryptedPayload<T>> vault = new ConcurrentHashMap<>();\n    public synchronized void store(String key, T item) { ... }\n}`
  },
  {
    name: "Python",
    category: "Languages",
    level: 90,
    levelLabel: "Advanced",
    experienceYears: "3 yrs",
    description: "Scripting, web scraping, automation tools, REST APIs with Flask/FastAPI, data manipulation, and telemetry daemons.",
    iconName: "Code",
    codeSnippet: `def collect_system_metrics(interval=1.0):\n    while True:\n        yield {\n            "cpu_percent": psutil.cpu_percent(),\n            "mem_used": psutil.virtual_memory().percent\n        }\n        time.sleep(interval)`
  },

  // Web Technologies
  {
    name: "HTML5 & CSS3",
    category: "Web Technologies",
    level: 92,
    levelLabel: "Advanced",
    experienceYears: "2.5 yrs",
    description: "Semantic markup, CSS Grid, Flexbox, responsive layouts, CSS variables, accessibility (ARIA), and micro-animations.",
    iconName: "Layout",
    codeSnippet: `:root {\n  --accent: #38bdf8;\n  --bg-primary: #0f172a;\n}\n.card {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n}`
  },
  {
    name: "JavaScript & TypeScript",
    category: "Web Technologies",
    level: 88,
    levelLabel: "Advanced",
    experienceYears: "2 yrs",
    description: "ES6+, TypeScript interfaces & generics, asynchronous programming (Promises/async-await), DOM APIs, and Node.js.",
    iconName: "FileJson",
    codeSnippet: `type StrictValidator<T> = (input: unknown) => input is T;\nconst parsePayload = <T>(raw: string, validator: StrictValidator<T>): T => {\n    const parsed = JSON.parse(raw);\n    if (!validator(parsed)) throw new Error("Invalid payload");\n    return parsed;\n};`
  },
  {
    name: "React",
    category: "Web Technologies",
    level: 85,
    levelLabel: "Advanced",
    experienceYears: "1.5 yrs",
    description: "Functional components, custom hooks, state optimization, component lifecycles, and high-performance interactive UIs.",
    iconName: "Atom",
    codeSnippet: `function useTypewriter(words: string[], speed = 60) {\n  const [text, setText] = useState('');\n  // handles letter-by-letter typing and deletions\n  return text;\n}`
  },
  {
    name: "Tailwind CSS",
    category: "Web Technologies",
    level: 90,
    levelLabel: "Advanced",
    experienceYears: "1.5 yrs",
    description: "Modern utility-first styling, custom theme tokens, dark mode design systems, responsive breakpoints, and animations.",
    iconName: "Palette",
    codeSnippet: `<div className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/80 border border-slate-700/60 hover:-translate-y-1 transition duration-300" />`
  },

  // Tools & Core
  {
    name: "Git & GitHub",
    category: "Tools & Core",
    level: 88,
    levelLabel: "Advanced",
    experienceYears: "3 yrs",
    description: "Version control workflows, interactive rebasing, atomic commits, branch protection, pull requests, and GitHub Actions.",
    iconName: "GitBranch"
  },
  {
    name: "Linux & Bash",
    category: "Tools & Core",
    level: 82,
    levelLabel: "Proficient",
    experienceYears: "2 yrs",
    description: "Ubuntu/Debian CLI, shell scripting, process management, SSH, build systems (make, gcc, g++), and cron automation.",
    iconName: "Cpu"
  },
  {
    name: "Data Structures & Algorithms",
    category: "Tools & Core",
    level: 84,
    levelLabel: "Proficient",
    experienceYears: "2.5 yrs",
    description: "Graph traversal (BFS/DFS), shortest path (Dijkstra, A*), dynamic programming, binary search trees, and space-time Big-O analysis.",
    iconName: "Network"
  },
  {
    name: "REST APIs & Networking",
    category: "Tools & Core",
    level: 85,
    levelLabel: "Proficient",
    experienceYears: "2 yrs",
    description: "HTTP verbs, status codes, JSON serialization, client-server architecture, CORS, and endpoint security best practices.",
    iconName: "Globe"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "algorhythm",
    title: "Algorhythm - Interactive Algorithm Visualizer",
    category: "Systems",
    summary: "Visual simulation of graph pathfinding (A*, Dijkstra) and sorting algorithms with step-by-step memory inspect.",
    description: "A dual-layer software project built to demystify complex algorithms. The core search and sorting algorithms were implemented in C++ and compiled to WebAssembly for raw execution speed, accompanied by an interactive web frontend allowing users to draw custom obstacle walls, tweak heuristics, and compare cycle counts in real time.",
    techStack: ["C++", "WebAssembly", "TypeScript", "React", "Tailwind CSS"],
    features: [
      "Real-time visual A* and Dijkstra pathfinding on custom drawn grid mazes",
      "Interactive sorting visualizer (QuickSort, MergeSort, RadixSort) with sound pitch feedback",
      "Memory comparison metrics displaying node visits, path distance, and execution milliseconds",
      "Optimized C++ computational core compiled for browser execution"
    ],
    architecture: "Separated into a computational engine (C++ STL graph representation) and a declarative UI layer (React canvas renderer with sub-16ms render loop).",
    githubUrl: "https://github.com/vidit-dev/algorhythm-visualizer",
    liveUrl: "https://algorhythm-preview.vidit.dev",
    stars: 28,
    highlightCode: {
      language: "cpp",
      filename: "pathfinding_core.cpp",
      code: `struct Node {\n    int x, y;\n    double gCost, hCost;\n    double fCost() const { return gCost + hCost; }\n    bool operator>(const Node& other) const { return fCost() > other.fCost(); }\n};\n\nstd::vector<Point> aStar(const Grid& grid, Point start, Point target) {\n    std::priority_queue<Node, std::vector<Node>, std::greater<Node>> openSet;\n    // Computes shortest path with Manhattan heuristic\n    return reconstructPath(...);\n}`
    }
  },
  {
    id: "pypulse",
    title: "PyPulse - System Resource & Network Daemon",
    category: "Python & Backend",
    summary: "Lightweight background telemetry daemon capturing CPU, RAM, disk I/O, and packet metrics with a live web dashboard.",
    description: "A Python-based system monitoring suite designed to run silently as a system service. It samples low-level kernel metrics, tracks process hierarchies, detects memory spikes, and streams live telemetry via a WebSocket connection to a dark-mode browser dashboard. Includes custom threshold triggers and email/webhook alerts.",
    techStack: ["Python", "Flask", "psutil", "WebSockets", "Chart.js", "Bash"],
    features: [
      "Sub-100ms non-blocking metric sampling using multi-threaded collector queues",
      "Live WebSocket streaming with real-time CPU core breakdown graphs",
      "Configurable alert thresholds for high memory usage and abnormal socket spikes",
      "Self-contained executable packaged with Python's pyinstaller"
    ],
    architecture: "Daemon worker thread collects stats into a ring buffer; Flask HTTP + WebSocket server exposes REST endpoints and real-time socket events.",
    githubUrl: "https://github.com/vidit-dev/pypulse-daemon",
    liveUrl: "https://pypulse-demo.vidit.dev",
    stars: 19,
    highlightCode: {
      language: "python",
      filename: "telemetry_worker.py",
      code: `class TelemetryCollector(threading.Thread):\n    def __init__(self, ring_buffer_size=120):\n        super().__init__(daemon=True)\n        self.buffer = collections.deque(maxlen=ring_buffer_size)\n\n    def run(self):\n        while self.running:\n            snapshot = {\n                "timestamp": time.time(),\n                "cpu_cores": psutil.cpu_percent(percpu=True),\n                "ram": psutil.virtual_memory()._asdict(),\n                "net_io": psutil.net_io_counters()._asdict()\n            }\n            self.buffer.append(snapshot)\n            time.sleep(1.0)`
    }
  },
  {
    id: "aeroquest",
    title: "AeroQuest 2D - Physics & Platformer Game Engine",
    category: "Game Dev & C#",
    summary: "Custom 2D platformer engine built from scratch with AABB collision detection, tilemap parser, and state machine.",
    description: "Instead of relying on heavy third-party engines, this project was built in C# (.NET) to understand game loop architecture, delta time physics integration, and sprite rendering. Features a custom state machine for player physics (coyote time, jump buffering, wall sliding) and a lightweight JSON tilemap loader.",
    techStack: ["C#", ".NET", "Raylib-cs", "Object-Oriented Design", "JSON"],
    features: [
      "Custom AABB (Axis-Aligned Bounding Box) continuous collision resolution",
      "Player controller state machine (Idle, Running, Airborn, WallCling, Dashing)",
      "Dynamic camera smoothing with customizable lookahead deadzone",
      "Decoupled event dispatcher for audio triggers, score keeping, and particle bursts"
    ],
    architecture: "Entity-Component-System (ECS) inspired architecture with separated Render, Physics, and Input ticks running at 60 FPS.",
    githubUrl: "https://github.com/vidit-dev/aeroquest-engine",
    liveUrl: "https://aeroquest.vidit.dev",
    stars: 34,
    highlightCode: {
      language: "csharp",
      filename: "PlayerController.cs",
      code: `public void Update(float deltaTime) {\n    HandleInput();\n    ApplyGravity(deltaTime);\n    \n    // Coyote time & jump buffer checks\n    if (isGrounded) coyoteTimer = MaxCoyoteTime;\n    else coyoteTimer -= deltaTime;\n\n    if (jumpBufferTimer > 0 && coyoteTimer > 0) {\n        ExecuteJump();\n    }\n    ResolveCollisions(worldTiles);\n}`
    }
  },
  {
    id: "omnivault",
    title: "OmniVault - Encrypted Local Secrets Manager",
    category: "Java",
    summary: "Zero-knowledge desktop credentials and code snippet manager with AES-GCM 256 encryption.",
    description: "A secure offline desktop vault developed in Java to solve the problem of organizing local API keys, SSH configs, and sensitive code fragments safely. All records are encrypted with AES-256-GCM using keys derived via PBKDF2 with HMAC-SHA512. Includes auto-clipboard clearing and memory zeroization upon window minimization.",
    techStack: ["Java 17", "JavaFX", "AES-256", "PBKDF2", "SQLite", "Maven"],
    features: [
      "Zero-knowledge architecture: Master password never stored on disk or in persistent state",
      "Encrypted SQLite storage with authenticated ciphertext verification (GCM tag)",
      "Automatic clipboard wipe timer (clears sensitive tokens after 20 seconds)",
      "Search-as-you-type fuzzy filtering across tags and code snippet syntax"
    ],
    architecture: "Layered architecture: JavaFX UI View -> Controller -> CryptoService (javax.crypto) -> SQLite Repository layer.",
    githubUrl: "https://github.com/vidit-dev/omnivault-java",
    liveUrl: "https://omnivault.vidit.dev",
    stars: 22,
    highlightCode: {
      language: "java",
      filename: "CryptoEngine.java",
      code: `public static byte[] encrypt(byte[] plaintext, SecretKey key, byte[] iv) throws Exception {\n    Cipher cipher = Cipher.getInstance("AES/GCM/NoPadding");\n    GCMParameterSpec spec = new GCMParameterSpec(128, iv);\n    cipher.init(Cipher.ENCRYPT_MODE, key, spec);\n    return cipher.doFinal(plaintext);\n}`
    }
  },
  {
    id: "devcraft",
    title: "DevCraft CLI - Memory & Process Profiler",
    category: "Systems",
    summary: "Terminal CLI tool written in C++ that wraps child processes to inspect peak RAM allocation and syscall patterns.",
    description: "A high-utility systems engineering CLI tool written in modern C++ that intercepts process executions to measure wall time, user/kernel CPU cycles, peak resident memory, and system call frequencies. Produces clean ASCII summary tables and optional JSON export files for CI/CD benchmarking.",
    techStack: ["C++17", "Linux Syscalls", "CMake", "POSIX", "Terminal UI"],
    features: [
      "Process fork-and-exec wrapper measuring `rusage` and `/proc/[pid]/statm`",
      "Memory leak warning detector comparing initial vs terminal heap boundaries",
      "Formatted colorful terminal UI tables using ANSI escape sequences",
      "Zero external dependencies, compiling to a single self-contained binary"
    ],
    architecture: "Direct interaction with Linux kernel procfs interfaces and POSIX wait4 signals with sub-millisecond precision.",
    githubUrl: "https://github.com/vidit-dev/devcraft-profiler",
    liveUrl: "https://github.com/vidit-dev/devcraft-profiler",
    stars: 17,
    highlightCode: {
      language: "cpp",
      filename: "process_monitor.cpp",
      code: `int spawnAndInspect(const std::vector<std::string>& cmdArgs) {\n    pid_t pid = fork();\n    if (pid == 0) {\n        execvp(cmdArgs[0].c_str(), convertArgs(cmdArgs));\n        exit(1);\n    }\n    struct rusage usage;\n    int status;\n    wait4(pid, &status, 0, &usage);\n    printProfilerReport(usage);\n    return WEXITSTATUS(status);\n}`
    }
  }
];

export const TIMELINE_DATA: TimelineMilestone[] = [
  {
    year: "2023",
    title: "The First Line & Python Automation",
    tagline: "Discovered the magic of turning logic into working software.",
    description: "Started my self-taught coding journey with Python. Built command-line text adventures, automated web scrapers, and discovered the thrill of automating tedious tasks through code.",
    tech: ["Python", "Scripting", "Git Basics", "CLI"],
    icon: "Sparkles"
  },
  {
    year: "2024",
    title: "Deep Dive into Systems, C++ & Java",
    tagline: "Moving beyond high-level scripts into memory & data structures.",
    description: "Dedicated hundreds of hours to learning C++ and Java. Learned how memory works, explored pointers, stack vs heap allocation, mastered data structures (trees, graphs), and solved algorithmic problems.",
    tech: ["C++", "Java", "Data Structures", "Algorithms", "OOP"],
    icon: "Cpu"
  },
  {
    year: "2025",
    title: "Game Mechanics & C# Architecture",
    tagline: "Exploring physics loops, design patterns, and desktop tools.",
    description: "Deepened my software design knowledge with C# and .NET. Built a custom 2D platformer engine from scratch with custom AABB collision resolution, understanding state machines and game loops.",
    tech: ["C#", ".NET", "Game Loops", "Software Patterns"],
    icon: "Gamepad2"
  },
  {
    year: "Early 2026",
    title: "Modern Web & Full-Stack Development",
    tagline: "Bringing fast software and visual UI to the web.",
    description: "Mastered HTML5, CSS3, JavaScript, TypeScript, and React. Bridged the gap between low-level performance code and clean, intuitive user interfaces that anyone can interact with in a browser.",
    tech: ["TypeScript", "React", "Tailwind CSS", "WebAssembly"],
    icon: "Globe"
  },
  {
    year: "Present",
    title: "Open Source & Future Ambitions",
    tagline: "Continuous growth, systems exploration, and internships.",
    description: "Actively contributing to open-source software, building complex developer tooling, and preparing for computer science studies and software engineering internships.",
    tech: ["Open Source", "C++20", "Full-Stack", "Lifelong Learning"],
    icon: "Rocket"
  }
];
