(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const s=document.querySelector(".burger-btn"),i=document.querySelector(".mobile-menu"),d=document.querySelector(".mobile-menu-close");function f(){i.classList.add("is-open")}function u(){i.classList.remove("is-open")}s.addEventListener("click",f);d.addEventListener("click",u);document.addEventListener("click",o=>{!i.contains(o.target)&&!s.contains(o.target)&&u()});
//# sourceMappingURL=index.js.map
