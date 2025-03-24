import{a as p,i as a,S as m}from"./assets/vendor-DtRopbQG.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&e(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();const c=document.getElementById("loading-message"),f="49411735-b32ab4d57ab72698c2bda355f",y="https://pixabay.com/api/";async function h(s){try{return(await p.get(y,{params:{key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}})).data.hits}catch(o){console.error("Error fetching images:",o),a.error({message:"An error occurred while fetching images. Please try again!",position:"topRight",messageColor:"#FAFAFB",backgroundColor:"#EF4040"})}finally{c&&(c.style.display="none")}}const g=document.querySelector(".gallery");function b(s){g.innerHTML="";const o=s.map(e=>`
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
        </li>`).join("");g.innerHTML=`${o}`,new m(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const u=document.querySelector("form"),i=document.getElementById("loading-message"),d=document.getElementById("gallery");u.addEventListener("submit",async s=>{s.preventDefault();const n=s.target.querySelector("input").value.trim();if(n===""){a.error({message:"Please fill in the field!",position:"topRight",messageColor:"#FAFAFB",backgroundColor:"#EF4040"});return}d&&(d.innerHTML=""),i&&(i.style.display="block");try{const e=await h(n);if(!e||e.length===0){a.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"#FAFAFB",backgroundColor:"#EF4040"});return}b(e)}catch{a.error({message:"Error",position:"topRight",messageColor:"#FAFAFB",backgroundColor:"#EF4040"})}finally{i&&(i.style.display="none")}u.reset()});
//# sourceMappingURL=index.js.map
