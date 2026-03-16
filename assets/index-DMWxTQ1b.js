(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=e(n);fetch(n.href,i)}})();class v{constructor(t){this.currentStep=0,this.screens=document.querySelectorAll(t),this.init()}init(){document.addEventListener("click",this.handleClick.bind(this))}handleClick(t){const e=t.target;e&&(e.classList.contains("next_popup_screen")&&this.next(),e.classList.contains("prev_popup_screen")&&this.prev())}next(){this.currentStep<this.screens.length-1&&(this.toggleScreen(this.currentStep,this.currentStep+1),this.currentStep++)}prev(){this.currentStep>0&&(this.toggleScreen(this.currentStep,this.currentStep-1),this.currentStep--)}toggleScreen(t,e){this.screens.item(t).classList.remove("popup__screen--active"),this.screens.item(e).classList.add("popup__screen--active")}}class C{constructor(t){this.root=t,this.trigger=t.querySelector(".dropdown__trigger"),this.value=t.querySelector(".dropdown__value"),this.options=t.querySelectorAll(".dropdown__menu a"),this.init()}init(){this.trigger.addEventListener("click",t=>{t.stopPropagation(),this.toggle()}),this.options.forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),this.select(t)})})}toggle(){document.querySelectorAll(".dropdown").forEach(t=>{t!==this.root&&t.classList.remove("open")}),this.root.classList.toggle("open")}select(t){this.value.textContent=t.textContent??"",this.options.forEach(e=>e.classList.remove("selected")),t.classList.add("selected"),this.root.classList.remove("open")}}class f{constructor(t,e,r){this.title=t,this.popupId=e,this.stateController=r,this.render(),this.init()}render(){const t=document.createElement("div");t.className="popup donation__popup",t.id=this.popupId,t.setAttribute("popover",""),t.innerHTML=`
    <div class="popup__content">
        <div class="popup__body popup__layout text-center">
            <div class="popup-header--accent">
                <h2 class="popup__title">${this.title}</h2>
                 <button class="popup__close" popovertarget="${this.popupId}" popovertargetaction="hide" >
                <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M13.2261 14.4991L0 27.4026L1.63183 28.9946L14.8579 16.0911L28.0879 28.9984L29.7197 27.4064L16.4897 14.4991L29.7195 1.59203L28.0876 0L14.8579 12.907L1.63211 0.00380707L0.000274658 1.59584L13.2261 14.4991Z"
                          fill="white"/>
                </svg>
            </button>
            </div>

                <div class="popup__inner">
                                         
                </div>
        </div>
    </div>
    `,this.popup=t,document.body.appendChild(t)}init(){this.popup.addEventListener("toggle",t=>{const e=Array.isArray(this.content)?this.content:[this.content];t.newState==="open"&&(e.forEach(r=>{"onOpen"in r&&r?.onOpen?.()}),this.stateController?.reset()),t.newState==="closed"&&e.forEach(r=>{"onClose"in r&&r.onClose?.()})})}normalizeContent(t){return this.content=t,t instanceof HTMLElement?[t]:Array.isArray(t)?t.map(e=>e.getScreen()):[t.getScreen()]}setContent(t){const e=this.popup.querySelector(".popup__inner");e&&this.normalizeContent(t).forEach(r=>e.appendChild(r))}open(){this.popup.showPopover?.(),"onOpen"in this.content&&this.content?.onOpen?.()}close(){this.popup.hidePopover?.(),"onClose"in this.content&&this.content?.onClose?.()}}function l(s){const t=/^(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;return s?s.length<6?"Password must be at least 6 characters":t.test(s)?null:"Password must contain at least 1 special character":"Password is required"}function d(s){const t=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return s?t.test(s)?null:"Invalid email format":"Email is required"}function u(s){const t=/^[A-Za-z0-9]+$/,e=/^[a-zA-Z]/;return s?t.test(s)?e.test(s)?s.length<3?"Login must be at least 3 characters":null:"Login must starts with latin letter":"Login must contain only latin letters and numbers":"Login is required"}function h(s){const t=/^[A-Za-z0-9 ]+$/,e=/^[a-zA-Z]/;return s?t.test(s)?e.test(s)?s.length<3?"Name must be at least 3 characters":null:"Name must starts with latin letter":"Name must contain only latin letters and numbers":"Name is required"}function c(s){return s?/^\d+(\.\d+)?$/.test(s)?Number(s)<=0?"Amount must be greater than 0":null:"Amount must be a valid number":"Amount is required"}function _(s){const t=/^\d{16}$/;return s?t.test(s)?null:"Card number must contain exactly 16 digits":"Card number is required"}function y(s){const t=/^\d{3}$/;return s?t.test(s)?null:"CVV must be exactly 3 digits":"CVV is required"}function o(s,t,e){s.addEventListener("blur",()=>x(s,t,e)),s.addEventListener("focus",()=>L(s,t,e))}function x(s,t,e){const r=e(s.value);r?(s.classList.add("error-input"),t.classList.remove("hidden"),t.textContent=r):(t.classList.add("hidden"),t.textContent="")}function L(s,t,e){const r=s.value;e(r)&&(s.classList.remove("error-input"),s.value="",t.classList.add("hidden"))}class S{constructor(){this.screen=this.render(),this.setUp(),this.init()}render(){const t=document.createElement("div");return t.classList.add("popup__screen"),t.classList.add("popup__screen--active"),t.classList.add("login-group__screen"),t.innerHTML=`

                <div class="login__nav">
                        <button class="button button--secondary">Login         
                        </button>
                        <button class="button button--secondary next_popup_screen tab--inactive">Registration</button>
                    </div>
                <div class="login__content">
                    <form class="popup-payment__form" >
                    <span class="form-error hidden" id="form-span">Incorrect login or password</span>
                        <div class="form-group form-group--error">
                            <label for="name">
                                <span class="required">*</span>Login
                            </label>

                            <input class="form-group__input" type="text" id="login" name="login" placeholder="Enter your login"
                                   required>

                            <span class="form-error hidden" id="login-error"></span>
                        </div>

                        <div class="form-group form-group--error">
                            <label for="email">
                                <span class="required">*</span> Password
                            </label>
                            <input class="form-group__input" type="password" id="password" name="password" placeholder="Enter Password"
                                   required>

                            <span class="form-error hidden" id="password-error"></span>
                        </div>
                        
                        <button type="submit" class="button--secondary button form__button" id="login-submit">
                            Sign In
                        </button>
                    </form>
                   
                </div>
    `,t}setUp(){this.loginInput=this.screen.querySelector("#login"),this.loginError=this.screen.querySelector("#login-error"),this.passwordInput=this.screen.querySelector("#password"),this.passwordError=this.screen.querySelector("#password-error"),this.submitButton=this.screen.querySelector("#login-submit"),this.form=this.screen.querySelector("form"),this.formSpan=this.screen.querySelector("#form-span")}init(){o(this.loginInput,this.loginError,u),o(this.passwordInput,this.passwordError,l),this.form.addEventListener("input",()=>{this.onFormInput()}),this.form.addEventListener("submit",async t=>{t.preventDefault(),await this.submitForm()})}onFormInput(){const t=this.loginInput.value,e=this.passwordInput.value;this.formSpan.classList.add("hidden"),this.submitButton.disabled=!(u(t)&&l(e))}async submitForm(){const t=new FormData(this.form),e=Object.fromEntries(t.entries());try{const r=await fetch("https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(r.ok){const n=await r.json(),{access_token:i,user:a}=n.data;localStorage.setItem("token",i),localStorage.setItem("user",JSON.stringify(a)),window.location.assign("index.html")}else this.formSpan.classList.remove("hidden"),console.error("Server error:",r.status)}catch(r){this.formSpan.classList.remove("hidden"),console.error("x3:",r)}}resetForm(){this.form.reset(),this.loginError.textContent="",this.passwordError.textContent="",this.loginError.classList.add("hidden"),this.passwordError.classList.add("hidden"),this.formSpan.classList.add("hidden"),this.submitButton.setAttribute("disabled","")}getScreen(){return this.screen}onOpen(){this.resetForm()}}class E{constructor(){this.screen=this.render(),this.setUp(),this.init()}setUp(){this.loginInput=this.screen.querySelector("#reg-login"),this.loginError=this.screen.querySelector("#reg-login-error"),this.nameInput=this.screen.querySelector("#reg-name"),this.nameError=this.screen.querySelector("#reg-name-error"),this.emailInput=this.screen.querySelector("#reg-email"),this.emailError=this.screen.querySelector("#reg-email-error"),this.passwordInput=this.screen.querySelector("#reg-password"),this.passwordError=this.screen.querySelector("#reg-password-error"),this.confirmInput=this.screen.querySelector("#confirm-password"),this.confirmError=this.screen.querySelector("#confirm-password-error"),this.submitButton=this.screen.querySelector("#reg-submit"),this.form=this.screen.querySelector("form"),this.formSpan=this.screen.querySelector("#registration-error")}render(){const t=document.createElement("div");return t.classList.add("popup__screen"),t.classList.add("login-group__screen"),t.innerHTML=`

                <div class="login__nav">
                        <button class="button  prev_popup_screen tab--inactive">Login
                        </button>

                        <button class="button button--secondary prev_popup_screen">Registration</button>

                    </div>
                <div class="login__content">
                    <form class="popup-payment__form" id="reg-form">
                    <span class="form-error" id="registration-error"></span>
                    
                        <div class="form-group form-group--error">
                            <label for="name">
                                <span class="required">*</span> Login
                            </label>

                            <input class="form-group__input" type="text" id="reg-login" name="login" placeholder="Enter your login"
                                   required>

                            <span class="form-error" id="reg-login-error"></span>
                        </div>
                        
                        <div class="form-group form-group--error">
                            <label for="name">
                                <span class="required">*</span> Name
                            </label>

                            <input class="form-group__input" type="text" id="reg-name" name="name" placeholder="Enter your name"
                                   required>

                            <span class="form-error" id="reg-name-error"></span>
                        </div>
                        
                        <div class="form-group form-group--error">
                            <label for="email">
                                <span class="required">*</span> Email
                            </label>

                            <input class="form-group__input" type="email" id="reg-email" name="email" placeholder="Enter email"
                                   required>

                            <span class="form-error" id="reg-email-error"></span>
                        </div>

                        <div class="form-group form-group--error">
                            <label for="email">
                                <span class="required">*</span> Password
                            </label>
                            <input class="form-group__input" type="password" id="reg-password" name="password" placeholder="Enter Password"
                                   required>

                            <span class="form-error" id="reg-password-error"></span>
                        </div>
                        
                         <div class="form-group form-group--error">
                            <label for="email">
                                <span class="required">*</span>Confirm Password
                            </label>
                            <input class="form-group__input" type="password" id="confirm-password" placeholder="Confirm Password"
                                   required>

                            <span class="form-error" id="confirm-password-error"></span>

                        </div>
                        
                        <button type="submit" class="button--secondary button form__button" id="reg-submit" disabled>
                            SEND
                            <svg class="button__icon" width="25" height="22" viewBox="0 0 25 22" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M13.2098 0.119971C13.0277 0.199174 12.8622 0.315255 12.7229 0.461565C12.5833 0.607505 12.4725 0.780876 12.397 0.971748C12.3214 1.16262 12.2825 1.36724 12.2825 1.57389C12.2825 1.78055 12.3214 1.98517 12.397 2.17604C12.4725 2.36691 12.5833 2.54028 12.7229 2.68622L18.7506 9H1.6C1.17565 9 0.768688 9.21071 0.468629 9.58579C0.168571 9.96086 0 10.4696 0 11C0 11.5304 0.168571 12.0391 0.468629 12.4142C0.768688 12.7893 1.17565 13 1.6 13H18.7514L12.7229 19.3146C12.4414 19.6096 12.2833 20.0097 12.2833 20.4269C12.2833 20.8441 12.4414 21.2443 12.7229 21.5393C13.0045 21.8343 13.3863 22 13.7845 22C14.1826 22 14.5645 21.8343 14.846 21.5393L23.842 12.1127C23.9816 11.9668 24.0924 11.7934 24.168 11.6026C24.2436 11.4117 24.2825 11.2071 24.2825 11.0004C24.2825 10.7938 24.2436 10.5891 24.168 10.3983C24.0924 10.2074 23.9816 10.034 23.842 9.88808L14.846 0.461565C14.7067 0.315255 14.5413 0.199174 14.3591 0.119971C14.177 0.0407677 13.9817 0 13.7845 0C13.5873 0 13.392 0.0407677 13.2098 0.119971Z"
                                      fill="currentColor"/>
                            </svg>
                        </button>
                    </form>
                    
                </div>

    `,t}init(){o(this.loginInput,this.loginError,u),o(this.nameInput,this.nameError,h),o(this.emailInput,this.emailError,d),o(this.passwordInput,this.passwordError,l),o(this.confirmInput,this.confirmError,this.validateConfirmPassword),this.form.addEventListener("input",()=>{this.onFormInput()}),this.form.addEventListener("submit",async t=>{t.preventDefault(),await this.submitForm()})}validateConfirmPassword(t){return t?this.passwordInput.value!==t?"Password doesn't match":null:"Please confirm password"}onFormInput(){const t=this.loginInput.value,e=this.nameInput.value,r=this.emailInput.value,n=this.passwordInput.value,i=this.confirmInput.value;this.formSpan.classList.add("hidden"),this.formSpan.textContent="",!u(t)&&!h(e)&&!l(n)&&!d(r)&&!this.validateConfirmPassword(i)?this.submitButton.removeAttribute("disabled"):this.submitButton.setAttribute("disabled","")}async submitForm(){const t=new FormData(this.form),e=Object.fromEntries(t.entries());this.submitButton.setAttribute("disabled","");try{const r=await fetch("https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(r.ok){const n=await r.json(),{access_token:i,user:a}=n.data;localStorage.setItem("token",i),localStorage.setItem("user",JSON.stringify(a)),window.location.assign("index.html")}else{const n=await r.json();this.formSpan.textContent=n.error,this.formSpan.classList.remove("hidden"),this.submitButton.removeAttribute("disabled"),console.error("Server error:",r.status)}}catch(r){this.formSpan.textContent="Something went wrong. Try again",this.formSpan.classList.remove("hidden"),console.error("x3:",r)}}resetForm(){this.form.reset(),this.screen.querySelectorAll(".form-error").forEach(e=>{e.textContent="",e.classList.add("hidden")}),this.submitButton.setAttribute("disabled","")}getScreen(){return this.screen}onOpen(){this.resetForm()}}class k{constructor(t){this.root=t}render(){if(localStorage.getItem("token")&&localStorage.getItem("user")){const{name:t}=JSON.parse(localStorage.getItem("user"));this.root.textContent=t}else{const t=document.createElement("button");t.classList.add("login-button"),t.setAttribute("popovertarget","login-popup"),t.innerText=`
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path id="Vector" stroke="#00A092" stroke-linecap="round" stroke-linejoin="round"
                                  d="M13.5 5.5c0 3.59 -2.95 8 -6.5 8S0.5 9.09 0.5 5.5 3.41 0.5 7 0.5s6.5 1.41 6.5 5Z"
                                  stroke-width="1"/>
                            <path id="Vector_2" stroke="#00A092" stroke-linecap="round" stroke-linejoin="round"
                                  d="M2.74994 4.75007c-0.09011 0.41856 -0.09311 0.85119 -0.00881 1.27097 0.08429 0.41977 0.25409 0.8177 0.49881 1.16903 0.35133 0.24472 0.74926 0.41451 1.16903 0.49881 0.41978 0.0843 0.85241 0.0813 1.27097 -0.00881 0.09012 -0.41857 0.09312 -0.8512 0.00882 -1.27098 -0.0843 -0.41977 -0.25409 -0.8177 -0.49882 -1.16902 -0.35132 -0.24473 -0.74925 -0.41452 -1.16902 -0.49882 -0.41978 -0.0843 -0.85241 -0.0813 -1.27098 0.00882Z"
                                  stroke-width="1"/>
                            <path id="Vector_3" stroke="#00A092" stroke-linecap="round" stroke-linejoin="round"
                                  d="M11.25 4.75007c0.0901 0.41856 0.0931 0.85119 0.0088 1.27097 -0.0843 0.41977 -0.2541 0.8177 -0.4988 1.16903 -0.3513 0.24472 -0.7492 0.41451 -1.16902 0.49881 -0.41977 0.0843 -0.8524 0.0813 -1.27097 -0.00881 -0.09011 -0.41857 -0.09312 -0.8512 -0.00882 -1.27098 0.0843 -0.41977 0.2541 -0.8177 0.49882 -1.16902 0.35132 -0.24473 0.74926 -0.41452 1.16903 -0.49882 0.41976 -0.0843 0.85236 -0.0813 1.27096 0.00882Z"
                                  stroke-width="1"/>

                        </svg>
      `,this.root.appendChild(t)}}}document.querySelectorAll(".dropdown").forEach(s=>new C(s));document.addEventListener("click",()=>{document.querySelectorAll(".dropdown").forEach(s=>s.classList.remove("open"))});const I=document.querySelector(".user__container"),q=new k(I);q.render();const B=new f("Login/Registration","login-popup"),A=new S,N=new E;B.setContent([A,N]);new v(".login-group__screen");class g{static async getReviews(){const t=await fetch("https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/feedback");if(!t.ok)throw new Error("Something went wrong. Please, refresh the page");return(await t.json()).data}static async getAnimals(){const t=await fetch("https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/pets");if(!t.ok)throw new Error("Something went wrong. Please, refresh the page");return(await t.json()).data}static async getAnimalFact(t){const e=await fetch(`https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/pets/${t}`);if(!e.ok)throw new Error(`Failed to fetch animal with id ${t}. Please try again.`);return(await e.json()).data}static async getCameras(){const t=await fetch("https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/cameras");if(!t.ok)throw new Error("Failed to fetch animal info. Please try again.");return(await t.json()).data}}class F{constructor(t){this.review=t}render(){const t=document.createElement("div");return t.className="reviews-item",t.innerHTML=`
                            <div class="reviews-item__image">
                                <svg width="59" height="45" viewBox="0 0 59 45" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.2798 19.5591C22.5198 20.5991 24.2398 22.1591 25.4398 24.2391C26.7198 26.2391 27.3598 28.5991 27.3598 31.3191C27.3598 35.3191 26.0798 38.5591 23.5198 41.0391C20.9598 43.5191 17.6798 44.7591 13.6798 44.7591C9.67977 44.7591 6.39977 43.5191 3.83977 41.0391C1.27977 38.5591 -0.000234291 35.3191 -0.000234291 31.3191C-0.000234291 29.4791 0.239766 27.6391 0.719766 25.7991C1.19977 23.9591 2.27977 21.2391 3.95977 17.6391L11.6398 -0.000942707H25.9198L20.2798 19.5591ZM51.7198 19.5591C53.9598 20.5991 55.6798 22.1591 56.8798 24.2391C58.1598 26.2391 58.7998 28.5991 58.7998 31.3191C58.7998 35.3191 57.5198 38.5591 54.9598 41.0391C52.3998 43.5191 49.1198 44.7591 45.1198 44.7591C41.1198 44.7591 37.8398 43.5191 35.2798 41.0391C32.7198 38.5591 31.4398 35.3191 31.4398 31.3191C31.4398 29.4791 31.6798 27.6391 32.1598 25.7991C32.6398 23.9591 33.7198 21.2391 35.3998 17.6391L43.0798 -0.000942707H57.3598L51.7198 19.5591Z"
                                          fill="#00A092"/>
                                </svg>
                            </div>
                            <div class="reviews-item__title subheader">${this.review.city}, ${this.review.month} ${this.review.year}</div>
                            <div class="reviews-item__text">${this.review.text}</div>
                            </div>
                            <div class="reviews-item__author">${this.review.name}</div>
    `,t}}class P{constructor(t,e){this.container=t,this.animal=e}render(){const t=document.createDocumentFragment();this.animal.forEach(e=>{const r=new F(e);t.appendChild(r.render())}),this.container.appendChild(t)}}class M{constructor(t){this.animal=t}render(){const t=document.createElement("div");return t.className="animal-card",t.innerHTML=`
                        <div class="animal-card__image-wrapper">
                            <img src="assets/images/gallery/${this.animal.id}.png" alt="${this.animal.commonName}"
                                 class="animal-card__image">
                            <span class="animal-card__badge subheader">${this.animal.name}</span>
                        </div>
                        <div class="animal-card__content">
                            <p class="animal-card__title subheader">${this.animal.commonName}</p>
                            <p class="animal-card__text">
                                ${this.animal.description}
                            </p>

                            <a class="button--orange button" href="src/pages/zoos/index.html?id=${this.animal.id}">VIEW LIVE CAM
                                <svg class="button__icon" width="25" height="22" viewBox="0 0 25 22" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M13.2098 0.119971C13.0277 0.199174 12.8622 0.315255 12.7229 0.461565C12.5833 0.607505 12.4725 0.780876 12.397 0.971748C12.3214 1.16262 12.2825 1.36724 12.2825 1.57389C12.2825 1.78055 12.3214 1.98517 12.397 2.17604C12.4725 2.36691 12.5833 2.54028 12.7229 2.68622L18.7506 9H1.6C1.17565 9 0.768688 9.21071 0.468629 9.58579C0.168571 9.96086 0 10.4696 0 11C0 11.5304 0.168571 12.0391 0.468629 12.4142C0.768688 12.7893 1.17565 13 1.6 13H18.7514L12.7229 19.3146C12.4414 19.6096 12.2833 20.0097 12.2833 20.4269C12.2833 20.8441 12.4414 21.2443 12.7229 21.5393C13.0045 21.8343 13.3863 22 13.7845 22C14.1826 22 14.5645 21.8343 14.846 21.5393L23.842 12.1127C23.9816 11.9668 24.0924 11.7934 24.168 11.6026C24.2436 11.4117 24.2825 11.2071 24.2825 11.0004C24.2825 10.7938 24.2436 10.5891 24.168 10.3983C24.0924 10.2074 23.9816 10.034 23.842 9.88808L14.846 0.461565C14.7067 0.315255 14.5413 0.199174 14.3591 0.119971C14.177 0.0407677 13.9817 0 13.7845 0C13.5873 0 13.392 0.0407677 13.2098 0.119971Z"
                                          fill="currentColor"/>
                                </svg>
                            </a>

                        </div>

    `,t}}class O{constructor(t,e){this.container=t,this.animal=e}render(){const t=document.createDocumentFragment();this.animal.forEach(e=>{const r=new M(e);t.appendChild(r.render())}),this.container.appendChild(t)}}class b{render(){const t=document.createElement("div");return t.className="loader__container",t.innerHTML=`
<div class="loader__text">Loading...</div>
    <div class="loader"></div>
`,t}}class ${constructor(t,e,r){this.container=t,this.items=e,this.activeIndex=r}render(){const t=this.items.map((e,r)=>`
        <li>
          <a class="${r===this.activeIndex?"active":""}" href="${e.href}">
            ${e.label}
          </a>
        </li>
      `).join("");this.container.innerHTML=`
    <div class="side-menu__container">
      <button class="close-btn" popovertarget="side-menu" popovertargetaction="hide">
            <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M13.2261 14.4991L0 27.4026L1.63183 28.9946L14.8579 16.0911L28.0879 28.9984L29.7197 27.4064L16.4897 14.4991L29.7195 1.59203L28.0876 0L14.8579 12.907L1.63211 0.00380707L0.000274658 1.59584L13.2261 14.4991Z"
                      fill="white"/>
            </svg>
        </button>

      <nav class="side-nav">
        <ul>
          ${t}
        </ul>
      </nav>
    </div>
    `}}class V{constructor(t){this.currentColumn=0,this.cardsPerRow=0,this.columnWidth=0,this.visibleColumns=0,this.maxScroll=0,this.maxIndex=0,this.track=t.querySelector(".animal-slider__track"),this.prev=t.querySelector(".slider-btn-prev"),this.next=t.querySelector(".slider-btn-next"),this.setUp(),this.init()}setUp(){const t=Array.from(this.track.getElementsByClassName("animal-card"));if(this.cardsPerRow=Math.ceil(t.length/this.getRowsCount()),!t||t.length===0){this.track.querySelector(".animal-slider__buttons").classList.add("animal-slider__buttons--hidden");return}const e=t[0].getBoundingClientRect().width,r=window.getComputedStyle(this.track),n=parseFloat(r.gap)||0;this.columnWidth=e+n,this.visibleColumns=Math.floor(this.track.clientWidth/this.columnWidth),this.maxIndex=this.cardsPerRow-this.visibleColumns,this.maxScroll=this.track.scrollWidth-this.track.clientWidth}init(){this.prev.addEventListener("click",()=>{this.moveBack()}),this.next.addEventListener("click",()=>{this.moveForward()}),window.addEventListener("resize",()=>{this.setUp(),this.track.scrollTo({left:this.currentColumn*this.columnWidth})})}moveForward(){this.currentColumn<this.maxIndex?this.currentColumn++:this.currentColumn=0,this.track.scrollTo({left:this.currentColumn*this.columnWidth,behavior:"smooth"})}moveBack(){this.currentColumn>0?(this.currentColumn--,this.track.scrollTo({left:this.currentColumn*this.columnWidth,behavior:"smooth"})):(this.currentColumn=this.maxIndex,this.track.scrollTo({left:this.maxScroll,behavior:"smooth"}))}getRowsCount(){const t=new Set;return Array.from(this.track.children).forEach(r=>{t.add(r.offsetTop)}),t.size}}class T{constructor(t){this.currentColumn=0,this.cardsPerRow=0,this.columnWidth=0,this.maxScroll=0,this.maxIndex=0,this.track=t.querySelector(".slider__container"),this.wrapper=t.querySelector(".slider__wrapper"),this.prev=t.querySelector(".slider-btn-prev"),this.next=t.querySelector(".slider-btn-next"),this.setUp(),this.init()}setUp(){const t=Array.from(this.wrapper.getElementsByClassName("reviews-item"));if(this.cardsPerRow=Math.ceil(t.length/this.getRowsCount()),!t||t.length===0)return;const e=t[0].getBoundingClientRect().width,r=window.getComputedStyle(this.track),n=parseFloat(r.gap)||0;this.columnWidth=e+n,this.maxIndex=this.cardsPerRow-1,this.maxScroll=this.track.scrollWidth-this.track.clientWidth}init(){this.prev.addEventListener("click",()=>{this.moveBack()}),this.next.addEventListener("click",()=>{this.moveForward()}),window.addEventListener("resize",()=>{this.setUp(),this.track.scrollTo({left:this.currentColumn*this.columnWidth})})}moveForward(){console.log("move forward"),this.currentColumn<this.maxIndex?this.currentColumn++:this.currentColumn=0,this.track.scrollTo({left:this.currentColumn*this.columnWidth,behavior:"smooth"})}moveBack(){this.currentColumn>0?(this.currentColumn--,this.track.scrollTo({left:this.currentColumn*this.columnWidth,behavior:"smooth"})):(this.currentColumn=this.maxIndex,this.track.scrollTo({left:this.maxScroll,behavior:"smooth"}))}getRowsCount(){const t=new Set;return Array.from(this.track.children).forEach(r=>{t.add(r.offsetTop)}),t.size}}class w{constructor(t){this.message=t}render(){const t=document.createElement("div");return t.className="alert alert--error",t.innerHTML=`
      <div class="alert__content">
        ${this.message}
      </div>
      <button class="alert__close">×</button>
    `,t.querySelector(".alert__close").addEventListener("click",()=>{t.remove()}),t}}class H{constructor(){this.state=this.initialize()}reset(){this.state=this.initialize()}update(t){Object.assign(this.state,t)}getState(){return this.state}initialize(){const t=JSON.parse(localStorage.getItem("user")||"null"),e=JSON.parse(localStorage.getItem("card")||"null");return{name:t?.name??"",email:t?.email??"",amount:10,petId:void 0,petName:"",cardNumber:e?.cardNumber??"",expDate:e?.cardNumber??""}}}const j=new Set([10,20,30,40,50,80,100]);class z{constructor(t){this.paymentController=t,this.screen=this.render(),this.setUp(),this.init()}render(){const t=document.createElement("div");return t.classList.add("popup__screen"),t.classList.add("popup__screen--active"),t.classList.add("donation__screen"),t.innerHTML=`
                <div class="donation__divider popup__text">
                    Donation information:
                </div>
                <div class="donation__content" id="billing-screen">
                    <p><span class="required">*</span> Choose your donation amount:
                    </p>
                    <div class="donation__buttons">
                        <button class="button button--secondary donation-item inactive" data-amount="10">$10</button>
                        <button class="button button--secondary donation-item inactive" data-amount="20">$20</button>
                        <button class="button button--secondary donation-item inactive" data-amount="30">$30</button>
                        <button class="button button--secondary donation-item inactive" data-amount="50">$50</button>
                        <button class="button button--secondary donation-item inactive" data-amount="80">$80</button>
                        <button class="button button--secondary donation-item inactive" data-amount="100">$100</button>
                    </div>
                    <div class="donation__other">
                        <button class="button button--secondary donation__buttons--big inactive" id="billing-amount-button"><span>other</span><span
                                class="mobile-invisible"> amount</span></button>
                        <div class="form-group form-group--error">
                        <label for="billing-amount-input"></label>
                            <input class="donation__input" type="text" id="billing-amount-input" disabled>
                      
                        <span class="form-error" id="billing-amount-error"></span>
                        </div>
                    </div>
                    <div class="donation__fav">
                        <button class="button button--secondary donation__buttons--big donation__amount-btn">
                            for
                            special pet
                        </button>
                        <div class="dropdown">
                            <button class="dropdown__trigger">
                                <span class="dropdown__value">Choose your favourite</span>
                                <span class="dropdown__arrow">
                            <svg width="17" height="10" viewBox="0 0 17 10">
                                <path d="M0.359375 0.359375L8.11695 8.35938L16.3594 0.359375"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      fill="none"/>
                            </svg>
                                </span>
                            </button>

                            <div class="dropdown__menu">
                                <a href="#">Lukas the Panda</a>
                                <a href="#">Andy the Lemur</a>
                                <a href="#">Glen the Gorilla</a>
                                <a href="#">Mike the Alligator</a>
                                <a href="#">Sam &amp; Lora the Eagles</a>
                                <a href="#">Liz the Koala</a>
                                <a href="#">Shake the Lion</a>
                                <a href="#">Senja the Tiger</a>
                            </div>
                        </div>
                    </div>

                    <div class="donation__monthly"><label class="custom-checkbox">
                        <span class="checkbox-text">Make this a monthly recurring gift</span>
                        <input type="checkbox">
                        <span class="checkbox-box"></span>
                    </label>
                    </div>
                    <div class="donation__nav">

                        <button class="button button--secondary next_popup_screen" id="billing-next">Next
                            <svg class="button__icon" width="25" height="22" viewBox="0 0 25 22" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M13.2098 0.119971C13.0277 0.199174 12.8622 0.315255 12.7229 0.461565C12.5833 0.607505 12.4725 0.780876 12.397 0.971748C12.3214 1.16262 12.2825 1.36724 12.2825 1.57389C12.2825 1.78055 12.3214 1.98517 12.397 2.17604C12.4725 2.36691 12.5833 2.54028 12.7229 2.68622L18.7506 9H1.6C1.17565 9 0.768688 9.21071 0.468629 9.58579C0.168571 9.96086 0 10.4696 0 11C0 11.5304 0.168571 12.0391 0.468629 12.4142C0.768688 12.7893 1.17565 13 1.6 13H18.7514L12.7229 19.3146C12.4414 19.6096 12.2833 20.0097 12.2833 20.4269C12.2833 20.8441 12.4414 21.2443 12.7229 21.5393C13.0045 21.8343 13.3863 22 13.7845 22C14.1826 22 14.5645 21.8343 14.846 21.5393L23.842 12.1127C23.9816 11.9668 24.0924 11.7934 24.168 11.6026C24.2436 11.4117 24.2825 11.2071 24.2825 11.0004C24.2825 10.7938 24.2436 10.5891 24.168 10.3983C24.0924 10.2074 23.9816 10.034 23.842 9.88808L14.846 0.461565C14.7067 0.315255 14.5413 0.199174 14.3591 0.119971C14.177 0.0407677 13.9817 0 13.7845 0C13.5873 0 13.392 0.0407677 13.2098 0.119971Z"
                                      fill="currentColor"/>
                            </svg>
                        </button>

                        <div class="circle__container">
                            <div class="circle circle--active"></div>
                            <div class="circle"></div>
                            <div class="circle"></div>
                        </div>
                    </div>
                </div>
    `,t}setValuesFromState(){const{amount:t}=this.paymentController.getState();this.fixedAmountButtons.forEach(e=>{const r=Number(e.dataset.amount);e.classList.toggle("inactive",r!==t)}),j.has(t)?(this.amountButton.classList.add("inactive"),this.amountInput.value="",this.amountInput.disabled=!0):(this.amountButton.classList.remove("inactive"),this.amountInput.value=String(t),this.amountInput.disabled=!1)}setUp(){this.fixedAmountButtons=Array.from(this.screen.querySelectorAll("[data-amount]")),this.amountInput=this.screen.querySelector("#billing-amount-input"),this.amountError=this.screen.querySelector("#billing-amount-error"),this.amountButton=this.screen.querySelector("#billing-amount-button"),this.nextButton=this.screen.querySelector("#billing-next")}init(){this.amountInput.addEventListener("blur",()=>{const t=c(this.amountInput.value);t?(this.amountError.classList.remove("hidden"),this.amountError.textContent=t):(this.amountError.classList.add("hidden"),this.amountError.textContent="")}),this.amountInput.addEventListener("focus",()=>{const t=this.amountInput.value;c(t)&&(this.amountInput.value="",this.amountError.classList.add("hidden"))}),this.fixedAmountButtons.forEach(t=>{t.addEventListener("click",()=>this.handleFixedClick(t))}),this.amountButton.addEventListener("click",()=>this.handleCustomClick()),this.amountInput.addEventListener("input",()=>this.handleInput()),this.nextButton.addEventListener("click",()=>this.updateState())}handleFixedClick(t){const e=Number(t.dataset.amount);this.fixedAmountButtons.forEach(r=>{r.classList.add("inactive")}),t.classList.remove("inactive"),this.amountButton.classList.add("inactive"),this.amountInput.disabled=!0,this.amountInput.value="",this.paymentController.update({amount:e}),this.updateNextState()}handleCustomClick(){this.fixedAmountButtons.forEach(t=>{t.classList.add("inactive")}),this.amountButton.classList.remove("inactive"),this.amountInput.disabled=!1,this.amountInput.focus(),this.updateNextState()}handleInput(){const t=this.amountInput.value,e=c(t);e?(this.amountError.textContent=e,this.amountError.classList.remove("hidden")):(this.amountError.textContent="",this.amountError.classList.add("hidden")),this.updateNextState()}updateNextState(){const t=this.fixedAmountButtons.find(r=>!r.classList.contains("inactive")),e=!this.amountButton.classList.contains("inactive");if(t){this.nextButton.disabled=!1;return}if(e&&!c(this.amountInput.value)){this.nextButton.disabled=!1;return}this.nextButton.disabled=!0}updateState(){const t=this.fixedAmountButtons.find(r=>!r.classList.contains("inactive"));let e=null;t?e=Number(t.dataset.amount):c(this.amountInput.value)||(e=Number(this.amountInput.value)),e&&this.paymentController.update({amount:e})}resetForm(){this.amountInput.value="",this.amountError.textContent="",this.amountInput.disabled=!0,this.fixedAmountButtons.forEach(t=>{t.classList.add("inactive")}),this.amountButton.classList.add("inactive"),this.nextButton.disabled=!0}getScreen(){return this.screen}onOpen(){this.resetForm(),this.setValuesFromState()}}class R{constructor(t){this.paymentController=t,this.screen=this.render(),this.setUp(),this.init()}render(){const t=document.createElement("div");return t.classList.add("popup__screen"),t.classList.add("donation__screen"),t.innerHTML=`
                <div class="donation__divider popup__text">
                    Billing Information:
                </div>
                <div class="donation__content" id="info-screen">
                    <div class="billing-info">
                        <div class="popup-payment__data">
                            <div class="form-group form-group--error">
                                <label for="info-name-input">
                                    <span class="required">*</span> Your Name
                                </label>

                                <input class="form-group__input" type="text" name="name"
                                       placeholder="Enter your name"
                                       required id="info-name-input">

                                <span class="form-error" id="info-name-error"></span>
                            </div>

                            <div class="form-group form-group--error">
                                <label for="info-email-input">
                                    <span class="required">*</span> Your Email Address
                                </label>
                                <input class="form-group__input" type="text" name="email" id="info-email-input"
                                       placeholder="Enter Email Address"
                                       required>

                                <span class="form-error" id="info-email-error"></span>
                            </div>
                        </div>


                        <p>You will receive emails from the Online Zoo, including updates and news on the latest
                            discoveries
                            and
                            translations. You can unsubscribe at any time.</p>

                        <div class="donation__nav">
                            <button class="button button--secondary next_popup_screen" id="info-next">Next
                                <svg class="button__icon" width="25" height="22" viewBox="0 0 25 22" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M13.2098 0.119971C13.0277 0.199174 12.8622 0.315255 12.7229 0.461565C12.5833 0.607505 12.4725 0.780876 12.397 0.971748C12.3214 1.16262 12.2825 1.36724 12.2825 1.57389C12.2825 1.78055 12.3214 1.98517 12.397 2.17604C12.4725 2.36691 12.5833 2.54028 12.7229 2.68622L18.7506 9H1.6C1.17565 9 0.768688 9.21071 0.468629 9.58579C0.168571 9.96086 0 10.4696 0 11C0 11.5304 0.168571 12.0391 0.468629 12.4142C0.768688 12.7893 1.17565 13 1.6 13H18.7514L12.7229 19.3146C12.4414 19.6096 12.2833 20.0097 12.2833 20.4269C12.2833 20.8441 12.4414 21.2443 12.7229 21.5393C13.0045 21.8343 13.3863 22 13.7845 22C14.1826 22 14.5645 21.8343 14.846 21.5393L23.842 12.1127C23.9816 11.9668 24.0924 11.7934 24.168 11.6026C24.2436 11.4117 24.2825 11.2071 24.2825 11.0004C24.2825 10.7938 24.2436 10.5891 24.168 10.3983C24.0924 10.2074 23.9816 10.034 23.842 9.88808L14.846 0.461565C14.7067 0.315255 14.5413 0.199174 14.3591 0.119971C14.177 0.0407677 13.9817 0 13.7845 0C13.5873 0 13.392 0.0407677 13.2098 0.119971Z"
                                          fill="currentColor"/>
                                </svg>
                            </button>

                            <a class="popup-payment__back prev_popup_screen" id="info-back">Back</a>

                            <div class="circle__container">
                                <div class="circle circle--active"></div>
                                <div class="circle circle--active"></div>
                                <div class="circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
    `,t}setUp(){this.nameInput=this.screen.querySelector("#info-name-input"),this.nameError=this.screen.querySelector("#info-name-error"),this.emailInput=this.screen.querySelector("#info-email-input"),this.emailError=this.screen.querySelector("#info-email-error"),this.backButton=this.screen.querySelector("#info-back"),this.nextButton=this.screen.querySelector("#info-next")}setValuesFromState(){const{name:t,email:e}=this.paymentController.getState();this.nameInput.value=t,this.emailInput.value=e,t&&e&&(this.nextButton.disabled=!1)}init(){o(this.nameInput,this.nameError,h),o(this.emailInput,this.emailError,d),this.nameInput.addEventListener("input",()=>{this.inputHandle()}),this.emailInput.addEventListener("input",()=>{this.inputHandle()}),this.backButton.addEventListener("click",()=>this.updateState()),this.nextButton.addEventListener("click",()=>this.updateState())}updateState(){this.paymentController.update({name:this.nameInput.value,email:this.emailInput.value})}inputHandle(){const t=this.nameInput.value,e=this.emailInput.value;this.nextButton.disabled=!h(t)&&!d(e)}resetForm(){this.emailInput.textContent="",this.nameInput.textContent="",this.emailError.classList.add("hidden"),this.nameError.classList.add("hidden"),this.nextButton.disabled=!0}getScreen(){return this.screen}onOpen(){this.resetForm(),this.setValuesFromState()}}class D{constructor(t){this.paymentController=t,this.screen=this.render(),this.setUp(),this.init()}render(){const t=document.createElement("div");return t.classList.add("popup__screen"),t.classList.add("donation__screen"),t.innerHTML=`
                <div class="donation__divider popup__text">
                    Payment Information:
                </div>
                <div class="donation__content">
                    <div class="popup-payment__data">

                        <div class="form-group__credit">
                            <div class="form-group form-group--error">
                                <label for="payment-credit-card">
                                    <span class="required">*</span> Credit Card Number
                                </label>

                                <input class="form-group__input" type="number" id="payment-credit-card"
                                       required>

                                <span class="form-error" id="payment-credit-card-error"></span>
                            </div>

                            <div class="form-group form-group--error">
                                <label for="payment-cvv">
                                    <span class="required">*</span> CVV Number
                                </label>

                                <input class="form-group__input" type="number" id="payment-cvv"
                                       required>
                                <span class="form-error" id="payment-cvv-error"></span>
                            </div>
                        </div>


                        <div class="form-group">
                            <div>
                                <span class="required">*</span> Expiration Date
                            </div>
                            <div class="donation__date">
                                <div class="dropdown">
                                    <input type="hidden" name="">
                                    <button class="dropdown__trigger">
                                        <span class="dropdown__value">Month</span>
                                        <span class="dropdown__arrow">
                            <svg width="17" height="10" viewBox="0 0 17 10">
                                <path d="M0.359375 0.359375L8.11695 8.35938L16.3594 0.359375"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      fill="none"/>
                            </svg>
                                </span>
                                    </button>

                                    <div class="dropdown__menu">
                                        <a href="#">January</a>
                                        <a href="#">February</a>
                                        <a href="#">March</a>
                                        <a href="#">April</a>
                                        <a href="#">May</a>
                                        <a href="#">June</a>
                                        <a href="#">July</a>
                                        <a href="#">August</a>
                                        <a href="#">September</a>
                                        <a href="#">October</a>
                                        <a href="#">November</a>
                                        <a href="#">December</a>
                                    </div>
                                </div>
                                <div class="dropdown">
                                    <button class="dropdown__trigger">
                                        <span class="dropdown__value">Year</span>
                                        <span class="dropdown__arrow">
                            <svg width="17" height="10" viewBox="0 0 17 10">
                                <path d="M0.359375 0.359375L8.11695 8.35938L16.3594 0.359375"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      fill="none"/>
                            </svg>
                                </span>
                                    </button>

                                    <div class="dropdown__menu">
                                        <a href="#">2026</a>
                                        <a href="#">2027</a>
                                        <a href="#">2028</a>
                                        <a href="#">2029</a>
                                        <a href="#">2030</a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="donation__monthly"><label class="custom-checkbox">
                            <span class="checkbox-text">Save card info for future donations</span>
                            <input type="checkbox" id="save-card-checkbox">
                            <span class="checkbox-box"></span>
                        </label>
                        </div>

                    </div>

                    <div class="donation__nav">

                        <a class="popup-payment__back prev_popup_screen" id="payment-back">Back</a>

                        <div class="circle__container">
                            <div class="circle circle--active"></div>
                            <div class="circle circle--active"></div>
                            <div class="circle circle--active"></div>
                        </div>

                    </div>
                    <button class="button button--primary" id="payment-complete-button" disabled>complete donation
                        <svg class="button__icon" width="25" height="22" viewBox="0 0 25 22" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.2098 0.119971C13.0277 0.199174 12.8622 0.315255 12.7229 0.461565C12.5833 0.607505 12.4725 0.780876 12.397 0.971748C12.3214 1.16262 12.2825 1.36724 12.2825 1.57389C12.2825 1.78055 12.3214 1.98517 12.397 2.17604C12.4725 2.36691 12.5833 2.54028 12.7229 2.68622L18.7506 9H1.6C1.17565 9 0.768688 9.21071 0.468629 9.58579C0.168571 9.96086 0 10.4696 0 11C0 11.5304 0.168571 12.0391 0.468629 12.4142C0.768688 12.7893 1.17565 13 1.6 13H18.7514L12.7229 19.3146C12.4414 19.6096 12.2833 20.0097 12.2833 20.4269C12.2833 20.8441 12.4414 21.2443 12.7229 21.5393C13.0045 21.8343 13.3863 22 13.7845 22C14.1826 22 14.5645 21.8343 14.846 21.5393L23.842 12.1127C23.9816 11.9668 24.0924 11.7934 24.168 11.6026C24.2436 11.4117 24.2825 11.2071 24.2825 11.0004C24.2825 10.7938 24.2436 10.5891 24.168 10.3983C24.0924 10.2074 23.9816 10.034 23.842 9.88808L14.846 0.461565C14.7067 0.315255 14.5413 0.199174 14.3591 0.119971C14.177 0.0407677 13.9817 0 13.7845 0C13.5873 0 13.392 0.0407677 13.2098 0.119971Z"
                                  fill="currentColor"/>
                        </svg>
                    </button>
                </div>
    `,t}setValuesFromState(){}setUp(){this.creditCardInput=this.screen.querySelector("#payment-credit-card"),this.creditCardError=this.screen.querySelector("#payment-credit-card-error"),this.cvvInput=this.screen.querySelector("#payment-cvv"),this.cvvError=this.screen.querySelector("#payment-cvv-error"),this.backButton=this.screen.querySelector("#payment-back"),this.completeButton=this.screen.querySelector("#payment-complete-button"),this.saveCardCheckbox=this.screen.querySelector("#save-card-checkbox")}init(){o(this.creditCardInput,this.creditCardError,_),o(this.cvvInput,this.cvvError,y),this.completeButton.addEventListener("click",()=>{}),this.backButton.addEventListener("click",()=>this.saveState()),this.syncCheckboxFromStorage(),this.saveCardCheckbox.addEventListener("change",()=>{this.saveCardCheckbox.checked||localStorage.removeItem("savedCard")})}saveState(){const t=Number(this.creditCardInput.value);t&&this.paymentController.update({cardNumber:t}),this.saveCardCheckbox.checked&&localStorage.setItem("savedCard",JSON.stringify({cardNumber:this.paymentController.getState().cardNumber,expiry:this.paymentController.getState().expDate}))}syncCheckboxFromStorage(){const t=localStorage.getItem("savedCard");this.saveCardCheckbox.checked=!!t}resetForm(){this.creditCardInput.value="",this.creditCardError.textContent="",this.cvvInput.value="",this.cvvError.textContent="",this.completeButton.disabled=!0}getScreen(){return this.screen}onOpen(){this.resetForm(),this.setValuesFromState()}}const W=[{label:"About",href:"index.html"},{label:"Map",href:"src/pages/map/index.html"},{label:"Zoos",href:"src/pages/zoos/index.html?id=1"},{label:"Contact Us",href:"src/pages/contacts/index.html"},{label:"Design",href:"figma.com/file/lnK11foY8Aoa6oOlDXovVN/Online-ZOO-Project?node-id=0%3A1"}],Z=document.getElementById("side-menu"),U=new $(Z,W,0);U.render();const m=document.querySelector("#animal-slider");async function J(){const s=document.querySelector("#animal-cards"),t=new b().render();s.appendChild(t);try{const e=await g.getAnimals();t.remove(),new O(s,e).render(),new V(m)}catch{t.remove();const r=new w("Something went wrong. Please, refresh the page").render();m.prepend(r)}}async function Y(){const s=document.querySelector("#reviews-slider"),t=document.querySelector("#reviews-wrapper"),e=new b().render();t.appendChild(e);try{const r=await g.getReviews();e.remove(),new P(t,r).render(),new T(s)}catch{e.remove();const n=new w("Something went wrong. Please, refresh the page").render();s.prepend(n)}}const p=new H,K=new z(p),G=new R(p),X=new D(p),Q=new f("Make your donation","donation-popup",p);Q.setContent([K,G,X]);new v(".donation__screen");const tt=document.querySelectorAll(".donate-card__button");tt.forEach(s=>{s.setAttribute("popovertarget","donation-popup")});J();Y();
