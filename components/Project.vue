<template>
    <article :class="['project-card', { 'project-card-featured': featured }]">
        <a :href="link" target="_blank" rel="noreferrer" class="project-link">
            <div class="project-head">
                <p class="project-meta">{{ year }} / {{ tag }}</p>
                <p class="project-status">{{ status }}</p>
            </div>
            <div class="project-copy">
                <h3 v-html="parseMentions(name)"></h3>
                <p class="project-thesis" v-html="parseMentions(thesis)"></p>
                <p v-html="parseMentions(description)"></p>
                <ul class="project-stack" aria-label="Project stack">
                    <li v-for="item in stack" :key="item">{{ item }}</li>
                </ul>
                <span class="project-cta">Learn more</span>
            </div>
        </a>
    </article>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    thesis: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    stack: {
        type: Array,
        required: true,
    },
    status: {
        type: String,
        default: "In progress",
    },
    tag: {
        type: String,
        default: "Project",
    },
    featured: {
        type: Boolean,
        default: false,
    },
    mentionMap: {
        type: Object,
        default: () => ({}),
    },
});

const mentionLookup = computed(() => {
    return Object.entries(props.mentionMap).reduce((map, [key, url]) => {
        map[key.toLowerCase()] = url;
        return map;
    }, {});
});

function parseMentions(text) {
    if (!text) return "";
    return text.replace(/@(\w+)/g, (match, tag) => {
        const url = mentionLookup.value[tag.toLowerCase()];
        if (url) {
            return `<a href="${url}" target="_blank" rel="noreferrer" class="mention">@${tag}</a>`;
        }
        return match;
    });
}
</script>

<style scoped>
.project-card {
    border: 1px solid var(--line);
    background: var(--paper-elevated);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    transition: transform 240ms ease, box-shadow 240ms ease,
        border-color 240ms ease;
}

.project-card:hover,
.project-card:focus-within {
    border-color: var(--ink);
    box-shadow: var(--shadow);
    transform: translateY(-4px);
}

.project-link {
    display: block;
    color: inherit;
    text-decoration: none;
}

.project-head {
    margin: 0;
    padding: 0.95rem 1rem 0;
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;
    align-items: baseline;
}

.project-meta {
    margin: 0;
    font-family: "Manrope", sans-serif;
    font-size: 0.74rem;
    text-transform: uppercase;
    letter-spacing: 0.13em;
    color: var(--muted);
}

.project-status {
    margin: 0;
    font-family: "Manrope", sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.7rem;
    color: var(--accent);
    border: 1px solid color-mix(in srgb, var(--accent) 50%, var(--line));
    padding: 0.22rem 0.45rem;
}

.project-copy {
    padding: 0.65rem 1rem 1rem;
}

.project-copy h3 {
    margin: 0;
    font-family: "Cormorant Garamond", serif;
    font-size: clamp(1.5rem, 2.2vw, 2rem);
    line-height: 1;
}

.project-copy :deep(.mention) {
    color: var(--accent);
    text-decoration: none;
}

.project-copy :deep(.mention:hover) {
    text-decoration: underline;
}

.project-copy p {
    margin: 0.75rem 0 0;
    line-height: 1.5;
    color: var(--muted);
    font-family: "Manrope", sans-serif;
}

.project-copy .project-thesis {
    margin-top: 0.6rem;
    color: var(--ink);
    font-weight: 600;
}

.project-stack {
    list-style: none;
    margin: 0.95rem 0 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
}

.project-stack li {
    border: 1px solid var(--line);
    background: color-mix(in srgb, var(--paper) 70%, transparent);
    color: var(--muted);
    font-family: "Manrope", sans-serif;
    font-size: 0.74rem;
    letter-spacing: 0.03em;
    padding: 0.2rem 0.5rem;
}

.project-cta {
    margin-top: 0.9rem;
    display: inline-block;
    font-family: "Manrope", sans-serif;
    font-size: 0.86rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--accent);
}

.project-link:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
}

.project-card-featured .project-meta {
    padding-top: 0;
}

@media (min-width: 880px) {
    .project-card-featured .project-link {
        display: block;
    }

    .project-card-featured .project-copy {
        padding: 0.85rem 1.2rem 1.3rem;
    }

    .project-card-featured .project-copy h3 {
        font-size: clamp(1.9rem, 2.7vw, 2.6rem);
    }

    .project-card-featured .project-thesis {
        font-size: 1.05rem;
    }
}
</style>
