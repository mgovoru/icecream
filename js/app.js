(() => {
  "use strict";
  let e = !1;
  setTimeout(() => {
    if (e) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (r) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    gsap.registerPlugin(ScrollTrigger);
  const r = new Lenis();
  r.on("scroll", (e) => {}),
    requestAnimationFrame(function e(t) {
      r.raf(t), requestAnimationFrame(e);
    }),
    gsap.fromTo(
      ".cover",
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: ".cover",
          start: "center",
          end: "820",
          scrub: !0,
        },
      }
    ),
    gsap.utils.toArray(".gallery__left .gallery__item").forEach((e) => {
      gsap.fromTo(
        e,
        { opacity: 0, x: -150 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: { trigger: e, start: "-850", end: "-100", scrub: !0 },
        }
      );
    }),
    gsap.utils.toArray(".gallery__right .gallery__item").forEach((e) => {
      gsap.fromTo(
        e,
        { opacity: 0, x: 150 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: { trigger: e, start: "-750", end: "top", scrub: !0 },
        }
      );
    }),
    (window.FLS = !0),
    (function (e) {
      let r = new Image();
      (r.onload = r.onerror =
        function () {
          e(2 == r.height);
        }),
        (r.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let r = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(r);
    });
})();
