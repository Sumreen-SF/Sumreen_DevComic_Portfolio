# My Developer Story

An interactive, comic book style portfolio website built from scratch with HTML5, CSS3, and vanilla JavaScript. No frameworks, no templates. The site tells my story as a developer through six chapters, styled like panels and issues from a graphic novel.

Live site: https://sumreen-sf.github.io/Sumreen_DevComic_Portfolio/

## About this project

Most portfolios look the same: a hero section, a grid of project cards, a contact form. I wanted mine to feel different, so I built it as a comic. Every section is a "chapter," every project is its own "issue," and the whole thing reads like you're flipping through a graphic novel instead of scrolling a resume.

The color palette is intentionally limited to three tones (wine, blush, and beige) so the whole site feels cohesive rather than like a random collection of trendy gradients.

## Chapters

1. About Me, a comic panel introduction
2. Skills, technical skills with filterable categories, plus soft skills, interests, and hobbies
3. Projects, seven "issues" covering my mobile apps, web projects, and internship work
4. Timeline, my education and experience laid out as a connected comic timeline
5. Resume, a condensed stat sheet with a downloadable PDF
6. Contact, a working contact form plus links to my socials

There are also a few small interactive touches scattered through the site, including a hidden bonus page. Press "C" anywhere to find it.

## Tech stack

- HTML5
- CSS3 (custom properties, grid, flexbox, keyframe animations, no CSS framework)
- Vanilla JavaScript (ES6+), no libraries
- Google Fonts: Anton, Permanent Marker, Work Sans

## Project structure

```
portfolio/
  index.html
  css/
    style.css
  js/
    main.js
  images/
    (profile photos go here)
  assets/
    (resume PDF)
  README.md
```

## Running it locally

There is no build step. Open `index.html` directly in a browser, or serve the folder with any static server, for example:

```
npx serve .
```

or, if you have Python installed:

```
python3 -m http.server
```

Then visit the local address it gives you.

## Deployment

The site is a static site, so it deploys anywhere that serves static files. It is currently set up for:

- **Netlify**: drag and drop the folder into the Netlify dashboard, or connect the GitHub repo for automatic deploys on every push. Netlify also powers the contact form if you switch to Netlify Forms instead of Formspree.
- **GitHub Pages**: push the folder to a repository and enable Pages from the repo settings.

## Contact form setup

The contact form currently points to a Formspree endpoint. This is how to set it up:

1. Create a free account and form at formspree.io
2. Copy the form ID it gives you
3. In `index.html`, find the contact form and replace `YOUR_FORM_ID` in the `action` attribute with your real ID

Until that's done, the form will show a friendly message instead of silently failing.

## Credits

Designed and built by Sumreen Fatima.
GitHub: https://github.com/Sumreen-SF
LinkedIn: https://www.linkedin.com/in/sumreen-fatima-sf08
