<template>
    <footer class="editorial-close">
        <div>
            <p class="close-kicker">Contact</p>
            <h2>Let's work together.</h2>
            <p class="close-copy">
                I am open to any interesting work or collaboration offers.
            </p>
        </div>

        <nav aria-label="Social links" class="close-links">
            <a
                href="https://github.com/Allyedge"
                target="_blank"
                rel="noreferrer"
                >GitHub</a
            >
            <a
                href="https://twitter.com/Re_allyedge"
                target="_blank"
                rel="noreferrer"
                >Twitter</a
            >
            <a href="mailto:alimarslank@gmail.com">alimarslank@gmail.com</a>
        </nav>
    </footer>
</template>

<style scoped>
.editorial-close {
    margin-top: 4.5rem;
    border-top: 1px solid var(--line);
    padding-top: 1.7rem;
    display: grid;
    gap: 1.2rem;
    grid-template-columns: 1fr;
}

.close-kicker {
    margin: 0;
    font-family: "Manrope", sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-size: 0.7rem;
    color: var(--muted);
}

.editorial-close h2 {
    margin: 0.55rem 0 0;
    font-family: "Cormorant Garamond", serif;
    font-size: clamp(1.6rem, 4.2vw, 2.3rem);
    line-height: 1;
}

.close-copy {
    margin: 0.75rem 0 0;
    max-width: 34ch;
    font-family: "Manrope", sans-serif;
    color: var(--muted);
    line-height: 1.6;
}

.close-links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.35rem;
}

.close-links a {
    color: var(--accent);
    text-decoration: none;
    font-family: "Manrope", sans-serif;
    font-size: 0.93rem;
    letter-spacing: 0.04em;
}

.close-links a:hover,
.close-links a:focus-visible {
    color: var(--ink);
    text-decoration: underline;
    text-underline-offset: 3px;
}

@media (min-width: 880px) {
    .editorial-close {
        grid-template-columns: 1fr auto;
        align-items: end;
    }
}
</style>
