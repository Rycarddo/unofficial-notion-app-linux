window.addEventListener(
  "wheel",
  (e) => {
    if (e.ctrlKey) {
      e.preventDefault();

      const zoomChange = e.deltaY > 0 ? -0.1 : 0.1;
      const currentZoom = require("electron").webFrame.getZoomFactor();
      require("electron").webFrame.setZoomFactor(currentZoom + zoomChange);
    }
  },
  { passive: false }
);
