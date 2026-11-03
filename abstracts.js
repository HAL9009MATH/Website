(() => {
  const previewLines = 10;

  document.querySelectorAll('.talk .abstract').forEach((abstract) => {
    const paragraphs = [...abstract.children].filter((node) => node.tagName === 'P');
    if (!paragraphs.length) return;

    const talk = abstract.closest('.talk');
    const speaker = [...talk.querySelector('.talk-speaker').childNodes]
      .filter((node) => node.nodeType === Node.TEXT_NODE || node.nodeName === 'A')
      .map((node) => node.textContent).join('').trim();
    const body = document.createElement('div');
    body.className = 'abstract-body';
    body.id = `${talk.id}-abstract`;
    const copy = document.createElement('div');
    copy.className = 'abstract-copy';
    paragraphs[0].before(body);
    body.append(copy);
    copy.append(...paragraphs);

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'abstract-toggle';
    button.setAttribute('aria-controls', body.id);
    button.hidden = true;
    body.after(button);
    let expanded = false;

    const update = () => {
      const limit = parseFloat(getComputedStyle(copy).lineHeight) * previewLines;
      const isLong = copy.getBoundingClientRect().height > limit + 1;
      body.style.setProperty('--abstract-preview-height', `${limit}px`);
      body.classList.toggle('is-collapsed', isLong && !expanded);
      button.hidden = !isLong;
      button.textContent = expanded ? 'Show less' : 'Read more';
      button.setAttribute('aria-expanded', String(expanded));
      button.setAttribute('aria-label', `${button.textContent} of ${speaker}’s abstract`);
    };

    button.addEventListener('click', () => {
      expanded = !expanded;
      update();
      // Keep the shortened abstract in view when collapsing a long passage.
      if (!expanded && body.getBoundingClientRect().bottom < 0) {
        body.scrollIntoView({ block: 'start' });
      }
    });

    update();
    // The inner copy keeps its natural height, including after MathJax typesets.
    if ('ResizeObserver' in window) {
      new ResizeObserver(update).observe(copy);
    } else {
      window.addEventListener('resize', update);
      window.addEventListener('load', update);
    }
  });
})();
