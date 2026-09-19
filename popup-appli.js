/*
  Pop-up « Télécharger l'app ».
  - Affiché uniquement sur le site, sur iPhone / iPad, et jamais dans l'app elle-même.
  - Ne s'affiche que si un lien est renseigné dans donnees.js (appli.lien).
  - Une seule fois par visite ; « Plus tard » le masque pendant quelques jours.
  - Pour le prévisualiser sur n'importe quel appareil : ajouter ?popup-appli=1 à l'adresse d'une page.
*/
(function () {
  var cfg = (window.CHACOUNETTE && window.CHACOUNETTE.appli) || {};
  var ua = navigator.userAgent || '';
  var apercu = /[?&]popup-appli(=|&|$)/.test(location.search);

  // Jamais dans l'app
  var natif = window.webkit && window.webkit.messageHandlers;
  if (/ChacounetteApp/.test(ua) || (natif && (natif.haptic || natif.notifications))) return;

  var ios = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  var lien = /^(https?:|itms-apps:)/.test(cfg.lien || '') ? cfg.lien : '';
  if (!apercu && (!ios || !lien)) return;

  var CLE = 'chacounette.popupAppli';
  function jusquA() { try { return parseInt(localStorage.getItem(CLE) || '0', 10) || 0; } catch (e) { return 0; } }
  function masquerPendant(jours) { try { localStorage.setItem(CLE, String(Date.now() + jours * 86400000)); } catch (e) {} }
  function dejaVuCetteVisite() { try { return sessionStorage.getItem(CLE) === '1'; } catch (e) { return false; } }
  function marquerVu() { try { sessionStorage.setItem(CLE, '1'); } catch (e) {} }
  if (!apercu && (Date.now() < jusquA() || dejaVuCetteVisite())) return;

  var style = document.createElement('style');
  style.textContent =
    '.pa{position:fixed;z-index:20;left:16px;right:16px;bottom:calc(16px + env(safe-area-inset-bottom));max-width:420px;margin:0 auto;' +
    'box-sizing:border-box;padding:18px 18px 16px;display:grid;grid-template-columns:56px 1fr;gap:0 14px;align-items:center;' +
    'background:var(--bg,#fff);color:var(--text,#1d1d1f);border:1px solid var(--line,#d2d2d7);border-radius:24px;' +
    'box-shadow:0 12px 40px rgba(0,0,0,.2);font-family:inherit;animation:pa-in .35s ease-out both}' +
    '@media(min-width:700px){.pa{left:auto;right:24px;bottom:24px;margin:0;width:380px}}' +
    '.pa-icone{width:56px;height:56px;border-radius:13px;display:block}' +
    '.pa-titre{margin:0;font-size:17px;font-weight:600;letter-spacing:-.02em;line-height:1.25;padding-right:26px}' +
    '.pa-texte{margin:3px 0 0;font-size:14px;line-height:1.35;color:var(--muted,#6e6e73)}' +
    '.pa-actions{grid-column:1/-1;display:flex;align-items:center;gap:12px;margin-top:14px}' +
    '.pa-btn{display:inline-block;padding:10px 22px;border-radius:980px;background:var(--accent-fill,#0071e3);color:#fff;' +
    'font-size:16px;font-weight:500;text-decoration:none}' +
    '.pa-btn:hover{background:var(--accent-fill-hover,#0077ed);text-decoration:none}' +
    '.pa-later{font:inherit;font-size:16px;background:none;border:0;padding:10px 8px;color:var(--accent,#0066cc);cursor:pointer}' +
    '.pa-x{position:absolute;top:10px;right:10px;width:28px;height:28px;border:0;border-radius:50%;cursor:pointer;' +
    'background:var(--bg-alt,#f5f5f7);color:var(--muted,#6e6e73);font-size:18px;line-height:1;padding:0}' +
    '@keyframes pa-in{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}' +
    '@media(prefers-reduced-motion:reduce){.pa{animation:none}}';
  document.head.appendChild(style);

  var boite = document.createElement('div');
  boite.className = 'pa';
  boite.setAttribute('role', 'dialog');
  boite.setAttribute('aria-labelledby', 'pa-titre');
  boite.setAttribute('aria-describedby', 'pa-texte');
  boite.innerHTML =
    '<img class="pa-icone" src="icone-appli.png" alt="" width="56" height="56">' +
    '<div><p class="pa-titre" id="pa-titre">L’app Chacounette</p>' +
    '<p class="pa-texte" id="pa-texte">Le site en plein écran, avec un rappel quotidien et le widget photo du jour.</p></div>' +
    '<button class="pa-x" type="button" aria-label="Fermer">×</button>' +
    '<div class="pa-actions"><a class="pa-btn" rel="noopener">Télécharger</a>' +
    '<button class="pa-later" type="button">Plus tard</button></div>';
  boite.querySelector('.pa-btn').href = lien || '#';
  if (/^https?:/.test(lien)) boite.querySelector('.pa-btn').target = '_blank';

  function fermer(jours) { masquerPendant(jours); if (boite.parentNode) boite.parentNode.removeChild(boite); }
  boite.querySelector('.pa-x').addEventListener('click', function () { fermer(cfg.rappelJours || 7); });
  boite.querySelector('.pa-later').addEventListener('click', function () { fermer(cfg.rappelJours || 7); });
  boite.querySelector('.pa-btn').addEventListener('click', function () { masquerPendant(30); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && boite.parentNode) fermer(cfg.rappelJours || 7); });

  var delai = apercu ? 0.5 : (typeof cfg.delaiSecondes === 'number' ? cfg.delaiSecondes : 4);
  setTimeout(function () {
    document.body.appendChild(boite);
    marquerVu();
  }, delai * 1000);
})();
