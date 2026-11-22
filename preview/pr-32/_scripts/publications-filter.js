/*
  publications page: keep the numbered, year-grouped list and the summary line
  ("N peer-reviewed papers since YYYY") in sync with the search/tag filter.
  listens to the "searchdone" event from search.js; does nothing on other pages.
*/
{  // keep the numbered, year-grouped list and the summary line in sync with the search/tag filter
  window.addEventListener("searchdone", ({ detail: { query, x, n, tags } }) => {
    const list = document.querySelector(".publications-list");
    if (!list) return;
    // hide the numbered wrapper of every filtered-out citation
    for (const item of list.querySelectorAll(".pub-item")) {
      const citation = item.querySelector(".citation");
      item.style.display = citation && citation.style.display === "none" ? "none" : "flex";
    }
    // hide year headings with no visible papers
    for (const heading of list.querySelectorAll("h3")) {
      let el = heading.nextElementSibling, any = false;
      while (el && el.tagName !== "H3") {
        if (el.classList.contains("pub-item") && el.style.display !== "none") any = true;
        el = el.nextElementSibling;
      }
      heading.style.display = any ? "" : "none";
    }
    // summary line
    const count = document.getElementById("pub-count");
    const scope = document.getElementById("pub-scope");
    if (!count || !scope) return;
    count.textContent = x;
    const word = x === 1 ? "paper" : "papers";
    if (!query.trim()) scope.textContent = scope.dataset.default;
    else if (tags.length) scope.textContent = `${word} on ${tags.map((t) => t.replaceAll("-", " ")).join(" / ")}`;
    else scope.textContent = `${word} matching your search`;
  });
}
