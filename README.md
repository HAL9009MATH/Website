# UCSC Geometry Seminar

A simple static website for seminar announcements at UC Santa Cruz. It uses plain HTML and CSS, so there is no build step and no software dependency to maintain.

## Preview locally

Open `index.html` in a browser, or serve the folder from a terminal:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Add a seminar talk

Open `index.html`. Inside the `talk-list` section, there is a commented template beginning with `ADDING A TALK`.

1. Copy the full `<article class="talk"> ... </article>` block out of the comment.
2. Paste it above the comment.
3. Replace the date, speaker, institution, title, time, location, and abstract.
4. Remove the placeholder entry once the first real talk has been added.

Each visible talk has this structure:

```html
<article class="talk">
  <time class="talk-date" datetime="2026-10-07">
    <span class="talk-date-month">Oct</span>
    <span class="talk-date-day">7</span>
    <span class="talk-date-year">2026</span>
  </time>

  <div class="talk-content">
    <header>
      <p class="talk-speaker">
        Speaker Name
        <span>Speaker Institution</span>
      </p>
      <h3>Talk title</h3>
      <p class="talk-details">Wednesday, October 7 · 4:00–5:00 PM · Room name</p>
    </header>

    <div class="abstract">
      <h4>Abstract</h4>
      <p>Paste the abstract here.</p>
    </div>
  </div>
</article>
```

## Publish with GitHub Pages

After the site files are on `main`, open **Settings → Pages** in this repository. Under **Build and deployment**, choose **Deploy from a branch**, then select `main` and `/ (root)`.

The default project-site address will be:

`https://hal9009math.github.io/Website/`

## Design

The page uses a quiet two-column layout inspired by a traditional academic personal site: a compact seminar introduction on the left and the schedule on the right. It has a white background, restrained typography, thin dividers, one muted link color, and no decorative hero, cards, shadows, external fonts, scripts, analytics, or trackers.
