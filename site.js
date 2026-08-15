/* Progressive enhancement only. Content is complete and visible without this file.
   One motion idea: each record's ledger rule resolves into place as it is reached.
   The rules render resolved by default; this script "arms" the draw only when it
   can actually run it, so any script failure leaves the ledger fully drawn. */
(function () {
  "use strict";

  var records = document.querySelectorAll(".record");
  if (!records.length) return;

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduce.matches || !("IntersectionObserver" in window)) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-resolved");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.documentElement.classList.add("armed");
  records.forEach(function (record) {
    observer.observe(record);
  });
})();
