/* Enables starting line numbers at .startFrom instead of 1.
 *
 * I originally implemented this in pure CSS with just attr(),
 * but that doesn't have wide support and can only be used on certain pseudo
 * selectors.
 */
(function() {
  "use strict";
  document.querySelectorAll("div.sourceCode").forEach(sourceCode => {
    const startFrom = sourceCode.dataset.startfrom;
    if (startFrom) {
      sourceCode.style.counterReset = `line calc(${startFrom} - 1)`;
    }
  });
}());
