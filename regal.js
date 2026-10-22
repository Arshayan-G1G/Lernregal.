/* Lernregal – gemeinsames Script für das Regal und alle Module.
   Module binden es vor </body> ein: <script src="../regal.js" defer></script>
   - zeigt in Modulen den Button «← Lernregal»
   - Lernregal.fortschritt(pct, text) speichert den Stand, den das Regal auf der Karte anzeigt
   - zählt Besuche mit GoatCounter, sobald GOATCOUNTER gesetzt ist */
(function () {
  var GOATCOUNTER = "arshayang1g"; // Code von goatcounter.com (z.B. "lernregal-g1g"); leer = kein Zähler

  var inModule = /\/module\/[^/]+$/.test(location.pathname);
  var key = "lernregal:" + location.pathname.split("/").slice(-2).join("/");

  window.Lernregal = {
    fortschritt: function (pct, text) {
      try {
        localStorage.setItem(key, JSON.stringify({ pct: typeof pct === "number" ? Math.round(pct) : null, text: String(text || ""), at: Date.now() }));
      } catch (e) {}
    }
  };

  if (GOATCOUNTER && /^[a-z0-9-]+$/.test(GOATCOUNTER) && location.protocol === "https:") {
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://gc.zgo.at/count.js";
    s.setAttribute("data-goatcounter", "https://" + GOATCOUNTER + ".goatcounter.com/count");
    document.head.appendChild(s);
  }

  function backButton() {
    if (document.getElementById("lernregal-back")) return;
    var a = document.createElement("a");
    a.id = "lernregal-back";
    a.href = "../";
    a.textContent = "← Lernregal";
    a.setAttribute("aria-label", "Zurück zum Lernregal");
    a.style.cssText = "position:fixed;left:12px;bottom:calc(12px + env(safe-area-inset-bottom,0px));z-index:2147483000;" +
      "font:650 14px/1 Archivo,system-ui,-apple-system,'Segoe UI',sans-serif;color:#F1F2EE;background:rgba(23,32,54,.92);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);" +
      "padding:10px 14px;border-radius:999px;text-decoration:none;box-shadow:0 4px 14px rgba(0,0,0,.25)";
    document.body.appendChild(a);
  }
  if (inModule) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", backButton);
    else backButton();
  }
})();
