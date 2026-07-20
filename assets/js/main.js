
(function () {
  function extractYouTubeId(value) {
    if (!value) return "";
    const v = String(value).trim();

    // direct 11-char video ID
    if (/^[A-Za-z0-9_-]{11}$/.test(v)) return v;

    try {
      const url = new URL(v);
      if (url.hostname.includes("youtu.be")) {
        const id = url.pathname.replace("/", "").split("/")[0];
        return /^[A-Za-z0-9_-]{11}$/.test(id) ? id : "";
      }
      if (url.hostname.includes("youtube.com") || url.hostname.includes("youtube-nocookie.com")) {
        const watchId = url.searchParams.get("v");
        if (watchId && /^[A-Za-z0-9_-]{11}$/.test(watchId)) return watchId;
        const parts = url.pathname.split("/").filter(Boolean);
        const embedIndex = parts.indexOf("embed");
        if (embedIndex >= 0 && parts[embedIndex + 1] && /^[A-Za-z0-9_-]{11}$/.test(parts[embedIndex + 1])) {
          return parts[embedIndex + 1];
        }
        const shortsIndex = parts.indexOf("shorts");
        if (shortsIndex >= 0 && parts[shortsIndex + 1] && /^[A-Za-z0-9_-]{11}$/.test(parts[shortsIndex + 1])) {
          return parts[shortsIndex + 1];
        }
      }
    } catch (e) {}
    return "";
  }

  function youtubeWatchUrl(value) {
    const id = extractYouTubeId(value);
    return id ? `https://www.youtube.com/watch?v=${id}` : "";
  }

  function renderYouTubeMedia(item) {
    const id = extractYouTubeId(item.youtube);
    if (id) {
      const watchUrl = `https://www.youtube.com/watch?v=${id}`;

      // YouTube Error 153 sering muncul ketika halaman dibuka langsung dengan file://
      // karena iframe tidak menerima HTTP referrer. Saat lokal, tampilkan poster + tombol.
      if (window.location.protocol === "file:") {
        return `
          <div class="youtube-wrap">
            <div class="youtube-fallback">
              <img src="${item.poster}" alt="${escapeHtml(item.title)}">
              <div class="youtube-overlay">
                <div class="play">▶</div>
                <div class="youtube-note">Tonton video lengkapnya melalui YouTube.</div>
                <a class="btn btn-link" href="${watchUrl}" target="_blank" rel="noopener noreferrer" style="margin-top:10px">Buka YouTube ↗</a>
              </div>
            </div>
          </div>`;
      }

      return `
        <div class="youtube-wrap">
          <iframe
            src="https://www.youtube.com/embed/${id}?rel=0"
            title="${escapeHtml(item.title)}"
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
        </div>`;
    }

    return `
      <div class="youtube-wrap">
        <div class="youtube-fallback">
          <img src="${item.poster}" alt="${escapeHtml(item.title)}">
          <div class="youtube-overlay">
            <div class="play">▶</div>
            <div class="youtube-note">Video seru lainnya akan segera hadir.</div>
          </div>
        </div>
      </div>`;
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function renderBooks(target, items) {
    target.innerHTML = items.map((item, i) => `
      <article class="card">
        <div class="card-media book">
          <img src="${item.image}" alt="${escapeHtml(item.title)}">
        </div>
        <div class="card-body">
          <h3>${escapeHtml(item.title)}</h3>
          <p>Yuk, buka bukunya dan nikmati cerita seru penuh warna!</p>
          <div class="card-actions">
            <a class="btn btn-link" href="${item.readUrl}" target="_blank" rel="noopener noreferrer">📖 Baca Buku</a>
          </div>
        </div>
      </article>
    `).join("");
  }

  function renderGames(target, items) {
    target.innerHTML = items.map((item, i) => {
      const enabled = !!item.url;
      return `
      <article class="card">
        <div class="card-media game">
          <img src="${item.image}" alt="${escapeHtml(item.title)}">
        </div>
        <div class="card-body">
          <h3>${escapeHtml(item.title)}</h3>
          <p>Siap bermain? Buka game dan selesaikan tantangan belajarnya!</p>
          <div class="card-actions">
            <a class="btn ${enabled ? "btn-link" : "btn-disabled"}" href="${enabled ? item.url : "#"}" ${enabled ? 'target="_blank" rel="noopener noreferrer"' : ""}>
              ${enabled ? "Buka Game ↗" : "Segera Hadir"}
            </a>
          </div>
        </div>
      </article>`;
    }).join("");
  }

  function renderVideos(target, items) {
    target.innerHTML = items.map(item => {
      const watch = youtubeWatchUrl(item.youtube);
      return `
      <article class="card">
        ${renderYouTubeMedia(item)}
        <div class="card-body">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${watch ? "Yuk, tonton videonya dan nikmati ceritanya!" : "Video seru lainnya akan segera hadir."}</p>
          <div class="card-actions">
            ${watch ? `<a class="btn btn-link" href="${watch}" target="_blank" rel="noopener noreferrer">Buka di YouTube ↗</a>` : `<span class="btn btn-disabled">Segera Hadir</span>`}
          </div>
        </div>
      </article>`;
    }).join("");
  }

  function renderPage() {
    const grid = document.querySelector("[data-render]");
    if (!grid || !window.CREAKIDS_DATA) return;

    const type = grid.dataset.render;
    if (type === "books") renderBooks(grid, window.CREAKIDS_DATA.books);
    if (type === "animationVideos") renderVideos(grid, window.CREAKIDS_DATA.animationVideos);
    if (type === "readAloudVideos") renderVideos(grid, window.CREAKIDS_DATA.readAloudVideos);
    if (type === "games") renderGames(grid, window.CREAKIDS_DATA.games);
    if (type === "songs") renderVideos(grid, window.CREAKIDS_DATA.songs);
  }

  function setupMenu() {
    const btn = document.querySelector(".menu-btn");
    const nav = document.querySelector(".nav-links");
    if (!btn || !nav) return;
    btn.addEventListener("click", () => nav.classList.toggle("open"));
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupMenu();
    renderPage();
  });
})();
