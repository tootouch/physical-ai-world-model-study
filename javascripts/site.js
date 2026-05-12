document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".md-typeset img").forEach((image) => {
    image.setAttribute("loading", "lazy");
    image.setAttribute("decoding", "async");

    image.addEventListener("error", () => {
      const fallback = document.createElement("div");
      fallback.className = "figure-fallback";
      fallback.textContent = `Figure could not be loaded: ${image.getAttribute("src")}`;
      image.replaceWith(fallback);
    }, { once: true });
  });
});
