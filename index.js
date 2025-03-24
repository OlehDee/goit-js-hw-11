import{a as d,S as p,i as l}from"./assets/vendor-DtRopbQG.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const m=document.getElementById("loading-message"),f="49411735-b32ab4d57ab72698c2bda355f",y="https://pixabay.com/api/";async function h(s){try{return(await d.get(y,{params:{key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}})).data.hits}catch{(r=>{console.error("Error fetching images:",r),iziToast.error({message:"An error occurred while fetching images. Please try again!",position:"topRight",messageColor:"#FAFAFB",backgroundColor:"#EF4040"})}).finally(()=>{m.style.display="none"})}}const c=document.querySelector(".gallery");function b(s){c.innerHTML="";const r=s.map(e=>`
        <li class="img-card">
            <a href="${e.largeImageURL}">
                <img 
                    src="${e.webformatURL}" 
                    alt="${e.tags}" 
                    data-source="${e.largeImageURL}" 
                />
            </a>
            <div class="image-info">
                <p><strong>Likes:</strong> ${e.likes}</p>
                <p><strong>Views:</strong> ${e.views}</p>
                <p><strong>Comments:</strong> ${e.comments}</p>
                <p><strong>Downloads:</strong> ${e.downloads}</p>
            </div>
        </li>`).join("");c.innerHTML=`${r}`,new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const g=document.querySelector("form"),i=document.getElementById("loading-message"),u=document.getElementById("gallery");g.addEventListener("submit",async s=>{s.preventDefault();const n=s.target.querySelector("input").value.trim();if(n===""){l.error({message:"Please fill in the field!",position:"topRight",messageColor:"#FAFAFB",backgroundColor:"#EF4040"});return}u&&(u.innerHTML=""),i&&(i.style.display="block");try{const e=await h(n);if(!e||e.length===0){l.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"#FAFAFB",backgroundColor:"#EF4040"});return}b(e)}catch{l.error({message:"Error",position:"topRight",messageColor:"#FAFAFB",backgroundColor:"#EF4040"})}finally{i&&(i.style.display="none")}g.reset()});
//# sourceMappingURL=index.js.map
