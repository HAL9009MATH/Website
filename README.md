# UCSC Geometry & Analysis Seminar

A simple static website for seminar announcements at UC Santa Cruz. It uses plain HTML and CSS, so there is no build step and no software dependency to maintain.

## Preview locally

Open `index.html` in a browser, or serve the folder from a terminal:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Add a seminar talk

Open `index.html`. Inside the `talk-list` section, there is a commented template beginning with `ADDING A TALK`.

1. Copy the full `<article class="talk-card"> ... </article>` block out of the comment.
2. Paste it above the comment.
3. Replace the date, speaker, institution, title, time, location, and abstract.
4. Remove the placeholder card once the first real talk has been added.

Each visible talk has this structure:

```html
<article class="talk-card">
  <div class="talk-date">
    <span class="talk-date-month">Oct</span>
    <span class="talk-date-day">07</span>
    <span class="talk-date-year">2026</span>
  </div>

  <div class="talk-content">
    <header class="talk-header">
      <p class="talk-speaker">Speaker Name</p>
      <p class="talk-affiliation">Speaker Institution</p>
      <h3>Talk title</h3>
    </header>

    <dl class="talk-meta">
      <div><dt>Date</dt><dd>Wednesday, October 7, 2026</dd></div>
      <div><dt>Time</dt><dd>4:00–5:00 PM</dd></div>
      <div><dt>Location</dt><dd>Room name</dd></div>
    </dl>

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

The page uses UC Santa Cruz's primary blue (`#003c6c`) and gold (`#fdc700`) with a restrained academic layout. It is responsive, keyboard accessible, and does not load external fonts, scripts, analytics, or trackers.
