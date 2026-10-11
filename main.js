// Builds the page from content.js. You don't need to edit this file.
(function () {
  var S = SITE;
  var app = document.getElementById('app');
  document.title = S.title || document.title;

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function safe(u) { return /^\s*(javascript|data|vbscript):/i.test(u || '') ? '#' : (u || '#'); }
  function link(cls, label, url) {
    var a = el('a', cls, label);
    a.href = safe(url);
    if (/^https?:/i.test(url || '')) { a.target = '_blank'; a.rel = 'noopener'; }
    return a;
  }

  // Top bar
  var top = el('header', 'top'), topIn = el('div');
  topIn.appendChild(link('logo', S.siteName, './'));
  (S.topLinks || []).forEach(function (l) { topIn.appendChild(link('', l.label, l.url)); });
  top.appendChild(topIn);

  // Hero
  var hero = el('section', 'hero');
  if ((S.sprites || []).length) {
    var sp = el('div', 'sprites');
    S.sprites.forEach(function (src) {
      var i = el('img');
      i.src = src; i.loading = 'lazy';
      i.alt = src.split('/').pop().replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ');
      sp.appendChild(i);
    });
    hero.appendChild(sp);
  } else {
    hero.appendChild(el('div', 'slot', S.heroPlaceholder));
  }

  // Banner
  var bw = el('div', 'bwrap'), b = el('div', 'banner');
  b.appendChild(el('div', 'b1', S.banner.brand));
  b.appendChild(el('div', 'b2', S.banner.headline));
  b.appendChild(link('cta', S.banner.buttonLabel, S.banner.buttonUrl));
  bw.appendChild(b);

  // Panel: menu, tabs, posts, sidebar
  var panel = el('div', 'panel'), nav = el('nav', 'nav');
  (S.nav || []).forEach(function (l) { nav.appendChild(link('', l.label, l.url)); });

  var tabs = el('div', 'tabs'), main = el('section', 'main'), current = S.tabs[0].id;
  tabs.setAttribute('role', 'group');
  tabs.setAttribute('aria-label', 'Post categories');
  function showPosts() {
    Array.prototype.forEach.call(tabs.children, function (btn) {
      var on = btn.dataset.id === current;
      btn.className = on ? 'on' : '';
      btn.setAttribute('aria-pressed', on);
    });
    main.textContent = '';
    var list = (S.posts && S.posts[current]) || [];
    if (!list.length) { main.appendChild(el('div', 'empty', 'No posts yet.')); return; }
    list.forEach(function (p) {
      var a = el('article', 'post');
      a.appendChild(el('h2', null, p.title));
      a.appendChild(el('div', 'meta', p.date));
      a.appendChild(el('p', null, p.text));
      main.appendChild(a);
    });
  }
  S.tabs.forEach(function (t) {
    var btn = el('button', null, t.label);
    btn.type = 'button';
    btn.dataset.id = t.id;
    if (t.isNew) btn.appendChild(el('span', 'new', 'NEW'));
    btn.addEventListener('click', function () { current = t.id; showPosts(); });
    tabs.appendChild(btn);
  });

  var side = el('aside', 'side'), inset = el('div', 'inset'), tiles = el('div', 'tiles');
  side.appendChild(link('promo', S.promo.label, S.promo.url));
  (S.tiles || []).forEach(function (t, i) { tiles.appendChild(link('tile t' + (i % 4), t.label, t.url)); });
  inset.appendChild(tiles);
  side.appendChild(inset);

  var cols = el('div', 'cols');
  cols.appendChild(main);
  cols.appendChild(side);
  panel.appendChild(nav);
  panel.appendChild(tabs);
  panel.appendChild(cols);

  var foot = el('footer', 'foot');
  foot.appendChild(el('span', null, S.footerLeft));
  foot.appendChild(el('span', null, S.footerRight));

  [top, hero, bw, panel, foot].forEach(function (n) { app.appendChild(n); });
  showPosts();
})();
