// Wrap content images in GLightbox links at runtime, as the mkdocs-glightbox
// plugin did at build time. Images already inside a link, emoji and .off-glb are left alone.
(function () {
  var skip = ["twemoji", "emojione", "gemoji", "off-glb"];

  function wrapImages() {
    document.querySelectorAll(".md-content__inner img").forEach(function (img) {
      if (img.closest("a") || skip.some(function (c) { return img.classList.contains(c); })) return;
      var link = document.createElement("a");
      link.className = "glightbox";
      link.href = img.dataset.src || img.getAttribute("src");
      link.dataset.type = "image";
      link.dataset.width = "100%";
      link.dataset.height = "auto";
      img.parentNode.insertBefore(link, img);
      link.appendChild(img);
    });
  }

  if (typeof GLightbox !== "function") return;
  wrapImages();
  var lightbox = GLightbox({
    selector: ".glightbox",
    touchNavigation: true,
    loop: false,
    zoomable: true,
    draggable: true,
    openEffect: "zoom",
    closeEffect: "zoom",
    slideEffect: "slide"
  });

  // Material's instant navigation swaps page content without a reload.
  if (typeof document$ !== "undefined") {
    document$.subscribe(function () {
      wrapImages();
      lightbox.reload();
    });
  }
})();
