import{i as l}from"./assets/vendor-32231325.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const u="https://restcountries.com/v3.1",f="name,capital,population,flags,languages";async function d(i=""){try{const e=await fetch(`${u}/name/${i}?fields=${f}`);if(!e.ok)throw new Error(`${e.status} ${e.statusText}`);return e.json()}catch{l.error({position:"topRight",message:"Oops, there is no country with that name"})}}function p(i,e=300){let n;return function(...r){clearTimeout(n),n=setTimeout(()=>{i.apply(this,r)},e)}}const m=document.querySelector("#search-box"),c=document.querySelector(".country-list");m.addEventListener("input",p(g));async function g(i){let e=[],n=i.target.value.trim();c.replaceChildren(),n!==""&&(e=await d(n)),e.length>=10&&l.success({position:"topRight",message:"Too many matches found. Please enter a more specific name."}),e.length>2&&e.length<10&&c.insertAdjacentHTML("beforeend",a(e)),e.length===1&&c.insertAdjacentHTML("beforeend",a(e,!0))}function a(i,e=!1){return i.map(({name:n,flags:r,capital:t,population:o,languages:s})=>`
    <li>
      <div class="country-list__general">
        <img src="${r.svg}" alt="${n.official}" width="30"/>
        ${e?`<h2>${n.official}</h2>`:`<p>${n.official}</p>`}
      </div>
      <div class="country-list__sub-info ${!e&&"hidden"}">
        <div>
          <p>
            <strong>Capital:</strong>
          </p>
          <p>${t}</p>
        </div>
        <div>
          <p>
            <strong>Population:</strong>
          </p>
          <p>${o}</p>
        </div>
        <div>
          <p>
            <strong>Languages:</strong>
          </p>
          <p>${Object.values(s)}</p>
        </div>
      </div>
    </li>
  `).join("")}
//# sourceMappingURL=commonHelpers.js.map
