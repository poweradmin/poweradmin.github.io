// Material renders Mermaid into a closed shadow root, but clicks are
// retargeted to the host element, so delegation on the document works.
document.addEventListener("click", (event) => {
  const chart = event.target.closest(".md-typeset .mermaid");
  if (!chart || !document.fullscreenEnabled) return;
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    chart.requestFullscreen();
  }
});
