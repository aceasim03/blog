(function () {
  const bar = document.createElement("div");
  bar.className = "reading-bar";
  document.body.prepend(bar);

  window.addEventListener("scroll", () => {
    const doc = document.documentElement;
    const scrolled = doc.scrollTop / (doc.scrollHeight - doc.clientHeight);
    bar.style.width = (scrolled * 100) + "%";
  }, { passive: true });
})();
