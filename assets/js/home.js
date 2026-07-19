
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll("[data-slider]").forEach((slider) => {
    const track = slider.querySelector(".slider-track");
    const prev = slider.querySelector(".prev");
    const next = slider.querySelector(".next");
    const dotsContainer = slider.querySelector(".slider-dots");

    if (!track || !prev || !next) return;

    const getScrollAmount = () => {
      const firstCard = track.querySelector(":scope > *");
      if (!firstCard) return 300;
      const styles = getComputedStyle(track);
      const gap = parseFloat(styles.columnGap || styles.gap || "0");
      return firstCard.getBoundingClientRect().width + gap;
    };

    prev.addEventListener("click", () => {
      track.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
    });

    next.addEventListener("click", () => {
      track.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
    });

    if (dotsContainer) {
      const cards = [...track.children];
      const visibleCount =
        window.innerWidth <= 600 ? 1 :
        window.innerWidth <= 860 ? 2 : 4;
      const pageCount = Math.max(1, Math.ceil(cards.length / visibleCount));

      dotsContainer.innerHTML = "";
      for (let i = 0; i < pageCount; i += 1) {
        const dot = document.createElement("span");
        if (i === 0) dot.classList.add("active");
        dotsContainer.appendChild(dot);
      }

      const updateDots = () => {
        const maxScroll = Math.max(1, track.scrollWidth - track.clientWidth);
        const progress = track.scrollLeft / maxScroll;
        const index = Math.min(
          pageCount - 1,
          Math.round(progress * (pageCount - 1))
        );

        [...dotsContainer.children].forEach((dot, i) => {
          dot.classList.toggle("active", i === index);
        });
      };

      track.addEventListener("scroll", updateDots, { passive: true });
    }
  });
});
