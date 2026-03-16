(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();class p{constructor(e){this.currentStep=0,this.screens=document.querySelectorAll(e),this.init()}init(){document.addEventListener("click",this.handleClick.bind(this))}handleClick(e){const r=e.target;r&&(r.classList.contains("next_popup_screen")&&this.next(),r.classList.contains("prev_popup_screen")&&this.prev())}next(){this.currentStep<this.screens.length-1&&(this.toggleScreen(this.currentStep,this.currentStep+1),this.currentStep++)}prev(){this.currentStep>0&&(this.toggleScreen(this.currentStep,this.currentStep-1),this.currentStep--)}toggleScreen(e,r){this.screens.item(e).classList.remove("popup__screen--active"),this.screens.item(r).classList.add("popup__screen--active")}}class h{constructor(e){this.root=e,this.trigger=e.querySelector(".dropdown__trigger"),this.value=e.querySelector(".dropdown__value"),this.options=e.querySelectorAll(".dropdown__menu a"),this.init()}init(){this.trigger.addEventListener("click",e=>{e.stopPropagation(),this.toggle()}),this.options.forEach(e=>{e.addEventListener("click",r=>{r.preventDefault(),this.select(e)})})}toggle(){document.querySelectorAll(".dropdown").forEach(e=>{e!==this.root&&e.classList.remove("open")}),this.root.classList.toggle("open")}select(e){this.value.textContent=e.textContent??"",this.options.forEach(r=>r.classList.remove("selected")),e.classList.add("selected"),this.root.classList.remove("open")}}class m{constructor(e,r,s){this.title=e,this.popupId=r,this.stateController=s,this.render(),this.init()}render(){const e=document.createElement("div");e.className="popup donation__popup",e.id=this.popupId,e.setAttribute("popover",""),e.innerHTML=`
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
    `,this.popup=e,document.body.appendChild(e)}init(){this.popup.addEventListener("toggle",e=>{const r=Array.isArray(this.content)?this.content:[this.content];e.newState==="open"&&(r.forEach(s=>{"onOpen"in s&&s?.onOpen?.()}),this.stateController?.reset()),e.newState==="closed"&&r.forEach(s=>{"onClose"in s&&s.onClose?.()})})}normalizeContent(e){return this.content=e,e instanceof HTMLElement?[e]:Array.isArray(e)?e.map(r=>r.getScreen()):[e.getScreen()]}setContent(e){const r=this.popup.querySelector(".popup__inner");r&&this.normalizeContent(e).forEach(s=>r.appendChild(s))}open(){this.popup.showPopover?.(),"onOpen"in this.content&&this.content?.onOpen?.()}close(){this.popup.hidePopover?.(),"onClose"in this.content&&this.content?.onClose?.()}}function l(t){const e=/^(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;return t?t.length<6?"Password must be at least 6 characters":e.test(t)?null:"Password must contain at least 1 special character":"Password is required"}function u(t){const e=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return t?e.test(t)?null:"Invalid email format":"Email is required"}function c(t){const e=/^[A-Za-z0-9]+$/,r=/^[a-zA-Z]/;return t?e.test(t)?r.test(t)?t.length<3?"Login must be at least 3 characters":null:"Login must starts with latin letter":"Login must contain only latin letters and numbers":"Login is required"}function d(t){const e=/^[A-Za-z0-9 ]+$/,r=/^[a-zA-Z]/;return t?e.test(t)?r.test(t)?t.length<3?"Name must be at least 3 characters":null:"Name must starts with latin letter":"Name must contain only latin letters and numbers":"Name is required"}function E(t){return t?/^\d+(\.\d+)?$/.test(t)?Number(t)<=0?"Amount must be greater than 0":null:"Amount must be a valid number":"Amount is required"}function q(t){const e=/^\d{16}$/;return t?e.test(t)?null:"Card number must contain exactly 16 digits":"Card number is required"}function x(t){const e=/^\d{3}$/;return t?e.test(t)?null:"CVV must be exactly 3 digits":"CVV is required"}function a(t,e,r){t.addEventListener("blur",()=>f(t,e,r)),t.addEventListener("focus",()=>g(t,e,r))}function f(t,e,r){const s=r(t.value);s?(t.classList.add("error-input"),e.classList.remove("hidden"),e.textContent=s):(e.classList.add("hidden"),e.textContent="")}function g(t,e,r){const s=t.value;r(s)&&(t.classList.remove("error-input"),t.value="",e.classList.add("hidden"))}class v{constructor(){this.screen=this.render(),this.setUp(),this.init()}render(){const e=document.createElement("div");return e.classList.add("popup__screen"),e.classList.add("popup__screen--active"),e.classList.add("login-group__screen"),e.innerHTML=`

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
    `,e}setUp(){this.loginInput=this.screen.querySelector("#login"),this.loginError=this.screen.querySelector("#login-error"),this.passwordInput=this.screen.querySelector("#password"),this.passwordError=this.screen.querySelector("#password-error"),this.submitButton=this.screen.querySelector("#login-submit"),this.form=this.screen.querySelector("form"),this.formSpan=this.screen.querySelector("#form-span")}init(){a(this.loginInput,this.loginError,c),a(this.passwordInput,this.passwordError,l),this.form.addEventListener("input",()=>{this.onFormInput()}),this.form.addEventListener("submit",async e=>{e.preventDefault(),await this.submitForm()})}onFormInput(){const e=this.loginInput.value,r=this.passwordInput.value;this.formSpan.classList.add("hidden"),this.submitButton.disabled=!(c(e)&&l(r))}async submitForm(){const e=new FormData(this.form),r=Object.fromEntries(e.entries());try{const s=await fetch("https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(s.ok){const n=await s.json(),{access_token:o,user:i}=n.data;localStorage.setItem("token",o),localStorage.setItem("user",JSON.stringify(i)),window.location.assign("index.html")}else this.formSpan.classList.remove("hidden"),console.error("Server error:",s.status)}catch(s){this.formSpan.classList.remove("hidden"),console.error("x3:",s)}}resetForm(){this.form.reset(),this.loginError.textContent="",this.passwordError.textContent="",this.loginError.classList.add("hidden"),this.passwordError.classList.add("hidden"),this.formSpan.classList.add("hidden"),this.submitButton.setAttribute("disabled","")}getScreen(){return this.screen}onOpen(){this.resetForm()}}class b{constructor(){this.screen=this.render(),this.setUp(),this.init()}setUp(){this.loginInput=this.screen.querySelector("#reg-login"),this.loginError=this.screen.querySelector("#reg-login-error"),this.nameInput=this.screen.querySelector("#reg-name"),this.nameError=this.screen.querySelector("#reg-name-error"),this.emailInput=this.screen.querySelector("#reg-email"),this.emailError=this.screen.querySelector("#reg-email-error"),this.passwordInput=this.screen.querySelector("#reg-password"),this.passwordError=this.screen.querySelector("#reg-password-error"),this.confirmInput=this.screen.querySelector("#confirm-password"),this.confirmError=this.screen.querySelector("#confirm-password-error"),this.submitButton=this.screen.querySelector("#reg-submit"),this.form=this.screen.querySelector("form"),this.formSpan=this.screen.querySelector("#registration-error")}render(){const e=document.createElement("div");return e.classList.add("popup__screen"),e.classList.add("login-group__screen"),e.innerHTML=`

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

    `,e}init(){a(this.loginInput,this.loginError,c),a(this.nameInput,this.nameError,d),a(this.emailInput,this.emailError,u),a(this.passwordInput,this.passwordError,l),a(this.confirmInput,this.confirmError,this.validateConfirmPassword),this.form.addEventListener("input",()=>{this.onFormInput()}),this.form.addEventListener("submit",async e=>{e.preventDefault(),await this.submitForm()})}validateConfirmPassword(e){return e?this.passwordInput.value!==e?"Password doesn't match":null:"Please confirm password"}onFormInput(){const e=this.loginInput.value,r=this.nameInput.value,s=this.emailInput.value,n=this.passwordInput.value,o=this.confirmInput.value;this.formSpan.classList.add("hidden"),this.formSpan.textContent="",!c(e)&&!d(r)&&!l(n)&&!u(s)&&!this.validateConfirmPassword(o)?this.submitButton.removeAttribute("disabled"):this.submitButton.setAttribute("disabled","")}async submitForm(){const e=new FormData(this.form),r=Object.fromEntries(e.entries());this.submitButton.setAttribute("disabled","");try{const s=await fetch("https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(s.ok){const n=await s.json(),{access_token:o,user:i}=n.data;localStorage.setItem("token",o),localStorage.setItem("user",JSON.stringify(i)),window.location.assign("index.html")}else{const n=await s.json();this.formSpan.textContent=n.error,this.formSpan.classList.remove("hidden"),this.submitButton.removeAttribute("disabled"),console.error("Server error:",s.status)}}catch(s){this.formSpan.textContent="Something went wrong. Try again",this.formSpan.classList.remove("hidden"),console.error("x3:",s)}}resetForm(){this.form.reset(),this.screen.querySelectorAll(".form-error").forEach(r=>{r.textContent="",r.classList.add("hidden")}),this.submitButton.setAttribute("disabled","")}getScreen(){return this.screen}onOpen(){this.resetForm()}}class w{constructor(e){this.root=e}render(){if(localStorage.getItem("token")&&localStorage.getItem("user")){const{name:e}=JSON.parse(localStorage.getItem("user"));this.root.textContent=e}else{const e=document.createElement("button");e.classList.add("login-button"),e.setAttribute("popovertarget","login-popup"),e.innerText=`
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
      `,this.root.appendChild(e)}}}document.querySelectorAll(".dropdown").forEach(t=>new h(t));document.addEventListener("click",()=>{document.querySelectorAll(".dropdown").forEach(t=>t.classList.remove("open"))});const L=document.querySelector(".user__container"),_=new w(L);_.render();const y=new m("Login/Registration","login-popup"),S=new v,C=new b;y.setContent([S,C]);new p(".login-group__screen");class I{constructor(e,r,s){this.container=e,this.items=r,this.activeIndex=s}render(){const e=this.items.map((r,s)=>`
        <li>
          <a class="${s===this.activeIndex?"active":""}" href="${r.href}">
            ${r.label}
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
          ${e}
        </ul>
      </nav>
    </div>
    `}}export{m as B,p as P,I as S,d as a,a as b,u as c,q as d,x as e,E as v};
