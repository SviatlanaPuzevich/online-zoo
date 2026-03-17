import{B as d,S as m}from"./sideMenu-D3A2jiSj.js";import{L as o,A as c,a as p}from"./alert-rXC1ack9.js";class h{constructor(e,t){this.root=e,this.fact=t,this.BASE="/online-zoo/"}render(){const e="map-popup";this.root.innerHTML=`
                       <div class="fact__card">
                    <h3 class="fact__title">DID YOU KNOW?</h3>
                    <p class="fact__text">
                        ${this.fact.description}
                    </p>
                </div>
                <div class="animal-info__card">
                    <div class="animal-info__image">
                        <img src="${this.BASE}/images/zoos/${this.fact.id}/fact.png" alt="eagles">
                    </div>
                    <div class="animal-info__content">
                        <ul class="animal-info__list">
                            <li class="animal-info__item">
                                <span class="animal-info__label">Common name:</span>
                                <span>${this.fact.commonName}</span>
                            </li>
                            <li class="animal-info__item">
                                <span class="animal-info__label">Scientific name:</span>
                                ${this.fact.scientificName}
                            </li>
                            <li class="animal-info__item">
                                <span class="animal-info__label">Type:</span>
                                ${this.fact.type}
                            </li>
                            <li class="animal-info__item">
                                <span class="animal-info__label">Size:</span>
                                ${this.fact.size}
                            </li>
                            <li class="animal-info__item">
                                <span class="animal-info__label">Diet:</span>
                                ${this.fact.diet}
                            </li>
                            <li class="animal-info__item">
                                <span class="animal-info__label">Habitat:</span>
                                ${this.fact.habitat}
                            </li>
                            <li class="animal-info__item animal-info__item--last">
                                <span class="animal-info__label">Range:</span>
                                <span>${this.fact.range}</span>
                                <button class="button--orange button mobile-block map-link" popovertarget="${e}">
                                    VIEW MAP
                                    <svg class="button__icon" width="25" height="22" viewBox="0 0 25 22" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M13.2098 0.119971C13.0277 0.199174 12.8622 0.315255 12.7229 0.461565C12.5833 0.607505 12.4725 0.780876 12.397 0.971748C12.3214 1.16262 12.2825 1.36724 12.2825 1.57389C12.2825 1.78055 12.3214 1.98517 12.397 2.17604C12.4725 2.36691 12.5833 2.54028 12.7229 2.68622L18.7506 9H1.6C1.17565 9 0.768688 9.21071 0.468629 9.58579C0.168571 9.96086 0 10.4696 0 11C0 11.5304 0.168571 12.0391 0.468629 12.4142C0.768688 12.7893 1.17565 13 1.6 13H18.7514L12.7229 19.3146C12.4414 19.6096 12.2833 20.0097 12.2833 20.4269C12.2833 20.8441 12.4414 21.2443 12.7229 21.5393C13.0045 21.8343 13.3863 22 13.7845 22C14.1826 22 14.5645 21.8343 14.846 21.5393L23.842 12.1127C23.9816 11.9668 24.0924 11.7934 24.168 11.6026C24.2436 11.4117 24.2825 11.2071 24.2825 11.0004C24.2825 10.7938 24.2436 10.5891 24.168 10.3983C24.0924 10.2074 23.9816 10.034 23.842 9.88808L14.846 0.461565C14.7067 0.315255 14.5413 0.199174 14.3591 0.119971C14.177 0.0407677 13.9817 0 13.7845 0C13.5873 0 13.392 0.0407677 13.2098 0.119971Z"
                                              fill="currentColor"/>
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <p class="animal-info__description">
                   ${this.fact.detailedDescription}
                </p>

    `,new d("Animal Location",e).setContent(this.createPopupContent())}parseCoordinate(e){const t=e.match(/([\d.]+)°\s*([NSEW])/);if(!t)return 0;const i=parseFloat(t[1]),a=t[2];return a==="S"||a==="W"?-i:i}createPopupContent(){const e=this.parseCoordinate(this.fact.latitude),t=this.parseCoordinate(this.fact.longitude),i=`https://www.google.com/maps?q=${e},${t}&z=12&output=embed`,a=document.createElement("iframe");return a.src=i,a.className="map-frame",a.setAttribute("loading","lazy"),a}}class _{constructor(e,t,i){this.root=e,this.data=t,this.activeId=i,this.currentGroup=1,this.visibleCount=3;const a=e.querySelector("#collapseBtn"),l=e.querySelector("#drawer-list");if(this.downButton=e.querySelector("#drawer-down-button"),!a||!this.downButton)throw new Error("Drawer: elements not found");this.collapseButton=a,this.animalList=l,this.drawerBadge=e.querySelector("#drawer-badge"),this.drawerToggleIcon=e.querySelector("#drawerToggleIcon"),this.iconWrappers=e.querySelectorAll("#drawer .drawer__icon-wrap"),this.circleWrappers=e.querySelectorAll("#drawer .drawer__circle"),this.init()}renderList(){this.animalList.appendChild(this.renderActiveItem());for(let e=0;e<this.data.length;e++){const t=e<this.visibleCount;this.animalList.appendChild(this.renderItem(this.data[e],t))}}renderItem(e,t){const i=document.createElement("li");return i.classList.add("drawer__item"),t||i.classList.add("hidden"),i.innerHTML=`
     <a class="drawer__link" href="index.html?id=${e.petId}">
                                <div class="drawer__circle drawer__circle--collapsed">
                                    <div class="drawer__icon-wrap drawer__icon-wrap--collapsed">
                                        <svg class="drawer__icon">
                                            <use href="/online-zoo/icons/zoos/sprite.svg#${e.id}-d-icon"></use>
                                        </svg>
                                    </div>
                                </div>
                                <p class="drawer__text">${e.text}</p>
                            </a>
    `,i}renderActiveItem(){const e=this.data.find(i=>i.petId===this.activeId),t=document.createElement("li");if(t.classList.add("drawer__item"),t.classList.add("drawer__item--active"),e){const i=this.data.findIndex(a=>a.id===this.activeId);this.data.splice(i,1),t.innerHTML=`
    <a class="drawer__link" href="index.html?id=${e.petId}">
                                <div class="drawer__circle drawer__circle--collapsed">
                                    <div class="drawer__icon-wrap drawer__icon-wrap--active drawer__icon-wrap--active--collapsed">
                                        <svg class="drawer__icon">
                                            <use href="/online-zoo/icons/zoos/sprite.svg#${e.id}-d-icon"></use>
                                        </svg>
                                    </div>
                                </div>
                                <p class="drawer__text">${e.text}</p>
                            </a>
    `}return t}init(){this.collapseButton.addEventListener("click",e=>{e.preventDefault(),this.toggleLeftRight()}),this.downButton.addEventListener("click",e=>{this.showNext(),e.preventDefault()})}toggleLeftRight(){console.log("expand"),this.collapseButton.classList.toggle("drawer__collapse--expanded"),this.root.classList.toggle("drawer--expanded"),this.drawerBadge?.classList.toggle("drawer__badge--visible"),this.drawerToggleIcon?.classList.toggle("drawer__left-icon--expanded"),this.circleWrappers.forEach(e=>{e.classList.toggle("drawer__circle--collapsed")}),this.iconWrappers.forEach(e=>{e.classList.contains("drawer__icon-wrap--active")?e.classList.toggle("drawer__icon-wrap--active--collapsed"):e.classList.toggle("drawer__icon-wrap--collapsed")})}showNext(){const e=Array.from(this.animalList.children),t=this.currentGroup*this.visibleCount+1,i=t+this.visibleCount;e.forEach((a,l)=>{l!==0&&a.classList.add("hidden")});for(let a=t;a<i;a++)e[a]&&e[a]?.classList.remove("hidden");if(this.currentGroup++,t>=this.data.length){this.currentGroup=1;for(let a=1;a<=this.visibleCount;a++)e[a]?.classList.remove("hidden")}}}class w{constructor(e){this.message=e}render(){const e=document.createElement("li");return e.classList.add("drawer__item"),e.classList.add("drawer__item--active"),e.innerHTML=`
      <a class="drawer__link" href="#">
                                
                                <p class="drawer__text">${this.message}</p>
                            </a>
    `,e}}const f=[{label:"About",href:"/../../index.html"},{label:"Map",href:"../map/index.html"},{label:"Zoos",href:"#"},{label:"Contact Us",href:"../contacts/index.html"},{label:"Design",href:"figma.com/file/lnK11foY8Aoa6oOlDXovVN/Online-ZOO-Project?node-id=0%3A1"}],u=document.getElementById("side-menu"),g=new m(u,f,2);g.render();const v=new URLSearchParams(window.location.search),r=Number(v.get("id"));if(!r)throw new Error("id parameter is missing");const n="/online-zoo/";(function(e){const t=[`${n}/images/zoos/${e}/mainCam.png`,`${n}/images/zoos/${e}/cam1.png`,`${n}/images/zoos/${e}/cam2.png`,`${n}/images/zoos/${e}/cam3.png`],i=Array.from(document.querySelectorAll(".video__link > img"));for(let a=0;a<i.length;a++)i[a].setAttribute("src",t[a])})(r);async function C(){const s=document.getElementById("drawer"),e=document.getElementById("drawer-list"),t=new o().render();e.appendChild(t);try{const i=await c.getCameras();t.remove(),new _(s,i,r).renderList()}catch{t.remove();const a=new w("Something went wrong. Please, refresh the page").render();e.appendChild(a)}}async function L(){const s=document.getElementById("fact-container"),e=new o().render();s.appendChild(e);try{const t=await c.getAnimalFact(r);e.remove(),new h(s,t).render()}catch{e.remove();const i=new p("Something went wrong. Please, refresh the page").render();s.prepend(i)}}C();L();
