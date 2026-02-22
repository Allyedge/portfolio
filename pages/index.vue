<script setup>
import { computed, onMounted, ref } from "vue";

const projects = [
    {
        year: 2025,
        name: "Compi",
        tag: "Systems",
        thesis: "A build system written in Rust.",
        description:
            "Compi is my vision of an ideal build system. I designed it to eliminate the frustrations I encountered with tools like Make.",
        stack: ["Rust", "Build System", "CLI"],
        status: "Stable",
        link: "https://github.com/Allyedge/compi",
    },
    {
        year: 2023,
        name: "AllyDB",
        tag: "Database",
        thesis: "A performant and reliable database, written in Elixir.",
        description:
            "AllyDB is a memory-first database built with Elixir, BEAM, and gRPC. This is the second iteration of AllyDB, following a now-retired version that gained notable community traction and usage.",
        stack: ["Elixir", "gRPC", "Database"],
        status: "Temporarily Paused",
        link: "https://github.com/Allyedge/allydb",
    },
    {
        year: 2025,
        name: "Radar",
        tag: "Embedded",
        thesis: "An ESP32-P4, HC-SR04 and MG996R project.",
        description:
            "Radar sweeps an area, finds alerting objects that are closer than the defined alert distance, and tracks them until all of them are further than the alert distance.",
        stack: ["ESP32", "C", "Embedded"],
        status: "Stable",
        link: "https://github.com/Allyedge/radar",
    },
    {
        year: 2025,
        name: "WebTUI Contributions",
        tag: "CSS Library",
        thesis: "I have contributed extensively to the WebTUI CSS library.",
        description:
            "WebTUI is a CSS library by @IroncladDev that brings TUIs to the web. Knowing him from X and Discord, I have contributed extensively to the project.",
        stack: ["WebTUI", "CSS Library", "Contribution"],
        status: "Contribution",
        link: "https://github.com/webtui/webtui",
        mentionMap: { IroncladDev: "https://github.com/IroncladDev" },
    },
    {
        year: 2025,
        name: "Fead",
        tag: "Feed Reader",
        thesis: "Fead is a feed reader written in Rust.",
        description:
            "Fead is a feed reader TUI written in Rust. It tries to deliver the best XML feed reading and managing experience without ever leaving the terminal.",
        stack: ["Rust", "TUI", "XML Feeds"],
        status: "Stable",
        link: "https://github.com/Allyedge/fead",
    },
];

const [featuredProject, ...archiveProjects] = projects;

const theme = ref("light");

const themeLabel = computed(() =>
    theme.value === "dark" ? "Switch to light" : "Switch to dark",
);

const applyTheme = (value) => {
    theme.value = value;
    document.documentElement.setAttribute("data-theme", value);
};

const toggleTheme = () => {
    const nextTheme = theme.value === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
};

onMounted(() => {
    const storedTheme = localStorage.getItem("portfolio-theme");

    if (storedTheme === "light" || storedTheme === "dark") {
        applyTheme(storedTheme);
        return;
    }

    const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
    ).matches;
    applyTheme(prefersDark ? "dark" : "light");
});
</script>

<template>
    <main class="portfolio-shell">
        <div class="atmosphere" aria-hidden="true" />

        <section class="hero reveal reveal-1">
            <p class="hero-kicker">Alim Arslan Kaya</p>
            <h1 class="hero-title">Allyedge</h1>
            <p class="hero-deck">
                I am a developer and student from Germany, building practical
                tools and systems for various technologies.
            </p>
            <div class="hero-controls">
                <button
                    type="button"
                    class="theme-toggle"
                    :aria-pressed="theme === 'dark'"
                    @click="toggleTheme"
                >
                    {{ themeLabel }}
                </button>
            </div>
        </section>

        <section class="featured reveal reveal-2">
            <div class="featured-head">
                <p class="section-kicker">Featured Project</p>
                <p class="section-note">My favourite project so far.</p>
            </div>
            <Project
                :year="featuredProject.year"
                :name="featuredProject.name"
                :tag="featuredProject.tag"
                :thesis="featuredProject.thesis"
                :description="featuredProject.description"
                :stack="featuredProject.stack"
                :status="featuredProject.status"
                :link="featuredProject.link"
                :featured="true"
                :mentionMap="featuredProject.mentionMap"
            />
        </section>

        <section class="archive reveal reveal-3">
            <div class="archive-head">
                <h2>My Work</h2>
                <p>More things I am working on.</p>
            </div>
            <div class="archive-grid">
                <Project
                    v-for="project in archiveProjects"
                    :key="project.name"
                    :year="project.year"
                    :name="project.name"
                    :tag="project.tag"
                    :thesis="project.thesis"
                    :description="project.description"
                    :stack="project.stack"
                    :status="project.status"
                    :link="project.link"
                    :mentionMap="project.mentionMap"
                />
            </div>
        </section>

        <Footer class="reveal reveal-3" />
    </main>
</template>

<style>
:root {
    --paper: #dbd3c6;
    --paper-elevated: #e7dfd2;
    --ink: #181b26;
    --muted: #4a5164;
    --accent: #0d4dde;
    --line: #aea595;
    --shadow: 0 14px 36px rgba(15, 20, 32, 0.14);
    --atmo-a: rgba(12, 76, 222, 0.22);
    --atmo-b: rgba(220, 166, 82, 0.25);
    --atmo-filter: blur(24px);
}

:root[data-theme="dark"] {
    --paper: #10131a;
    --paper-elevated: #171c27;
    --ink: #eef2fb;
    --muted: #9da7be;
    --accent: #78a0ff;
    --line: #2d3546;
    --shadow: 0 18px 48px rgba(0, 0, 0, 0.35);
    --atmo-a: rgba(31, 95, 255, 0.24);
    --atmo-b: rgba(17, 212, 189, 0.2);
    --atmo-filter: blur(34px);
}

body {
    margin: 0;
    color: var(--ink);
    background: var(--paper);
    transition:
        background-color 280ms ease,
        color 280ms ease;
    overflow-x: clip;
}

.portfolio-shell {
    position: relative;
    overflow: visible;
    max-width: 76rem;
    margin: 0 auto;
    padding: 3rem 1.2rem 4rem;
}

.atmosphere {
    position: absolute;
    left: 50%;
    top: -14rem;
    width: 100dvw;
    transform: translateX(-50%);
    height: 32rem;
    background:
        radial-gradient(circle at 20% 20%, var(--atmo-a), transparent 56%),
        radial-gradient(circle at 80% 25%, var(--atmo-b), transparent 50%);
    filter: var(--atmo-filter);
    pointer-events: none;
    z-index: 0;
}

.theme-toggle {
    border: 1px solid var(--line);
    background: color-mix(in srgb, var(--paper-elevated) 85%, transparent);
    color: var(--ink);
    font-family: "Manrope", sans-serif;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 0.55rem 0.8rem;
    cursor: pointer;
    transition:
        border-color 180ms ease,
        transform 180ms ease;
}

.hero-controls {
    margin-top: 1.1rem;
    display: flex;
    justify-content: flex-start;
}

.theme-toggle:hover,
.theme-toggle:focus-visible {
    border-color: var(--accent);
    transform: translateY(-1px);
}

.theme-toggle:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
}

.hero,
.featured,
.archive {
    position: relative;
    z-index: 1;
}

.hero {
    max-width: 54rem;
    margin-top: 1.5rem;
}

.hero-kicker,
.section-kicker {
    margin: 0;
    font-family: "Manrope", sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 0.72rem;
    color: var(--muted);
}

.hero-title {
    margin: 0.9rem 0 0;
    font-family: "Cormorant Garamond", serif;
    font-weight: 700;
    font-size: clamp(2.4rem, 6.8vw, 5.4rem);
    line-height: 0.95;
    max-width: 12ch;
    text-wrap: balance;
}

.hero-deck {
    margin: 1.4rem 0 0;
    font-family: "Manrope", sans-serif;
    color: var(--muted);
    max-width: 38ch;
    line-height: 1.6;
    font-size: 1rem;
}

.featured {
    margin-top: 4.2rem;
}

.featured-head,
.archive-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    margin-bottom: 1rem;
}

.section-note,
.archive-head p {
    margin: 0;
    font-family: "Manrope", sans-serif;
    color: var(--muted);
}

.archive-head p {
    max-width: 24ch;
    text-align: right;
}

.archive {
    margin-top: 4rem;
}

.archive-head h2 {
    margin: 0;
    font-family: "Cormorant Garamond", serif;
    font-weight: 700;
    letter-spacing: 0.01em;
    font-size: clamp(1.8rem, 4.4vw, 2.8rem);
}

.archive-grid {
    margin-top: 1.6rem;
    display: grid;
    gap: 1.4rem;
    grid-template-columns: 1fr;
}

.reveal {
    opacity: 0;
    transform: translateY(18px);
    animation: rise 700ms cubic-bezier(0.2, 0.65, 0.2, 1) forwards;
}

.reveal-1 {
    animation-delay: 140ms;
}

.reveal-2 {
    animation-delay: 280ms;
}

.reveal-3 {
    animation-delay: 420ms;
}

@keyframes rise {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (min-width: 880px) {
    .portfolio-shell {
        padding: 4.5rem 2.4rem 5.2rem;
    }

    .archive-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (prefers-reduced-motion: reduce) {
    .reveal {
        opacity: 1;
        transform: none;
        animation: none;
    }

    body,
    .theme-toggle {
        transition: none;
    }
}
</style>
