// Full-screen menu used on every page (the header "Menu" button).
(function () {
  const links = [
    ["Home", "index.html"], ["HistoryPlunge", "historyplunge.html"], ["Women's HistoryPlunge", "womens-historyplunge.html"],
    ["GeoPlunge", "geoplunge.html"], ["For Teachers", "teachers.html"], ["Tournaments", "tournaments.html"], ["About Us", "about.html"], ["Shop", "shop.html"],
  ];
  const small = [
    ["Donate", "https://learningplunge.org/donate/"],
    ["Kids' Zone", "https://learningplunge.org/kids-zone/"], ["News", "https://learningplunge.org/plunge-in/"],
  ];
  const d = document.createElement("div");
  d.className = "drawer"; d.setAttribute("role", "dialog"); d.setAttribute("aria-label", "Menu");
  d.innerHTML = `<div class="drawer__top"><img src="logo.png" alt="LearningPlunge"><button aria-label="Close menu">✕</button></div>
    <nav class="drawer__links">${links.map(([t, h]) => `<a href="${h}">${t}</a>`).join("")}</nav>
    <div class="drawer__small">${small.map(([t, h]) => `<a href="${h}" target="_blank" rel="noopener">${t}</a>`).join("")}</div>`;
  document.body.append(d);
  const close = () => d.classList.remove("open");
  d.querySelector("button").onclick = close;
  d.addEventListener("click", e => { if (e.target.tagName === "A") close(); });
  addEventListener("keydown", e => { if (e.key === "Escape" && d.classList.contains("open")) { e.stopImmediatePropagation(); close(); } }, true);
  document.querySelectorAll(".menu").forEach(m => m.addEventListener("click", e => { e.preventDefault(); d.classList.add("open"); }));
})();
