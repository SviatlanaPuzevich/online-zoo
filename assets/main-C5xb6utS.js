import{v as a,b as r,a as l,c as d,d as v,e as C,S as b,B as f,P as _,D as c}from"./sideMenu-D3A2jiSj.js";import{L as h,A as m,a as p}from"./alert-rXC1ack9.js";class g{constructor(t){this.review=t}render(){const t=document.createElement("div");return t.className="reviews-item",t.innerHTML=`
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
    `,t}}class w{constructor(t,e){this.container=t,this.animal=e}render(){const t=document.createDocumentFragment();this.animal.forEach(e=>{const n=new g(e);t.appendChild(n.render())}),this.container.appendChild(t)}}class x{constructor(t){this.animal=t,this.BASE="/online-zoo/"}render(){const t=document.createElement("div");return t.className="animal-card",t.innerHTML=`
                        <div class="animal-card__image-wrapper">
                            <img src="${this.BASE}images/gallery/${this.animal.id}.png" alt="${this.animal.commonName}"
                                 class="animal-card__image">
                            <span class="animal-card__badge subheader">${this.animal.name}</span>
                        </div>
                        <div class="animal-card__content">
                            <p class="animal-card__title subheader">${this.animal.commonName}</p>
                            <p class="animal-card__text">
                                ${this.animal.description}
                            </p>

                            <a class="button--orange button" href="./src/pages/zoos/index.html?id=${this.animal.id}">VIEW LIVE CAM
                                <svg class="button__icon" width="25" height="22" viewBox="0 0 25 22" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M13.2098 0.119971C13.0277 0.199174 12.8622 0.315255 12.7229 0.461565C12.5833 0.607505 12.4725 0.780876 12.397 0.971748C12.3214 1.16262 12.2825 1.36724 12.2825 1.57389C12.2825 1.78055 12.3214 1.98517 12.397 2.17604C12.4725 2.36691 12.5833 2.54028 12.7229 2.68622L18.7506 9H1.6C1.17565 9 0.768688 9.21071 0.468629 9.58579C0.168571 9.96086 0 10.4696 0 11C0 11.5304 0.168571 12.0391 0.468629 12.4142C0.768688 12.7893 1.17565 13 1.6 13H18.7514L12.7229 19.3146C12.4414 19.6096 12.2833 20.0097 12.2833 20.4269C12.2833 20.8441 12.4414 21.2443 12.7229 21.5393C13.0045 21.8343 13.3863 22 13.7845 22C14.1826 22 14.5645 21.8343 14.846 21.5393L23.842 12.1127C23.9816 11.9668 24.0924 11.7934 24.168 11.6026C24.2436 11.4117 24.2825 11.2071 24.2825 11.0004C24.2825 10.7938 24.2436 10.5891 24.168 10.3983C24.0924 10.2074 23.9816 10.034 23.842 9.88808L14.846 0.461565C14.7067 0.315255 14.5413 0.199174 14.3591 0.119971C14.177 0.0407677 13.9817 0 13.7845 0C13.5873 0 13.392 0.0407677 13.2098 0.119971Z"
                                          fill="currentColor"/>
                                </svg>
                            </a>

                        </div>

    `,t}}class y{constructor(t,e){this.container=t,this.animal=e}render(){const t=document.createDocumentFragment();this.animal.forEach(e=>{const n=new x(e);t.appendChild(n.render())}),this.container.appendChild(t)}}class S{constructor(t){this.currentColumn=0,this.cardsPerRow=0,this.columnWidth=0,this.visibleColumns=0,this.maxScroll=0,this.maxIndex=0,this.track=t.querySelector(".animal-slider__track"),this.prev=t.querySelector(".slider-btn-prev"),this.next=t.querySelector(".slider-btn-next"),this.setUp(),this.init()}setUp(){const t=Array.from(this.track.getElementsByClassName("animal-card"));if(this.cardsPerRow=Math.ceil(t.length/this.getRowsCount()),!t||t.length===0){this.track.querySelector(".animal-slider__buttons").classList.add("animal-slider__buttons--hidden");return}const e=t[0].getBoundingClientRect().width,n=window.getComputedStyle(this.track),s=parseFloat(n.gap)||0;this.columnWidth=e+s,this.visibleColumns=Math.floor(this.track.clientWidth/this.columnWidth),this.maxIndex=this.cardsPerRow-this.visibleColumns,this.maxScroll=this.track.scrollWidth-this.track.clientWidth}init(){this.prev.addEventListener("click",()=>{this.moveBack()}),this.next.addEventListener("click",()=>{this.moveForward()}),window.addEventListener("resize",()=>{this.setUp(),this.track.scrollTo({left:this.currentColumn*this.columnWidth})})}moveForward(){this.currentColumn<this.maxIndex?this.currentColumn++:this.currentColumn=0,this.track.scrollTo({left:this.currentColumn*this.columnWidth,behavior:"smooth"})}moveBack(){this.currentColumn>0?(this.currentColumn--,this.track.scrollTo({left:this.currentColumn*this.columnWidth,behavior:"smooth"})):(this.currentColumn=this.maxIndex,this.track.scrollTo({left:this.maxScroll,behavior:"smooth"}))}getRowsCount(){const t=new Set;return Array.from(this.track.children).forEach(n=>{t.add(n.offsetTop)}),t.size}}class L{constructor(t){this.currentColumn=0,this.cardsPerRow=0,this.columnWidth=0,this.maxScroll=0,this.maxIndex=0,this.track=t.querySelector(".slider__container"),this.wrapper=t.querySelector(".slider__wrapper"),this.prev=t.querySelector(".slider-btn-prev"),this.next=t.querySelector(".slider-btn-next"),this.setUp(),this.init()}setUp(){const t=Array.from(this.wrapper.getElementsByClassName("reviews-item"));if(this.cardsPerRow=Math.ceil(t.length/this.getRowsCount()),!t||t.length===0)return;const e=t[0].getBoundingClientRect().width,n=window.getComputedStyle(this.track),s=parseFloat(n.gap)||0;this.columnWidth=e+s,this.maxIndex=this.cardsPerRow-1,this.maxScroll=this.track.scrollWidth-this.track.clientWidth}init(){this.prev.addEventListener("click",()=>{this.moveBack()}),this.next.addEventListener("click",()=>{this.moveForward()}),window.addEventListener("resize",()=>{this.setUp(),this.track.scrollTo({left:this.currentColumn*this.columnWidth})})}moveForward(){console.log("move forward"),this.currentColumn<this.maxIndex?this.currentColumn++:this.currentColumn=0,this.track.scrollTo({left:this.currentColumn*this.columnWidth,behavior:"smooth"})}moveBack(){this.currentColumn>0?(this.currentColumn--,this.track.scrollTo({left:this.currentColumn*this.columnWidth,behavior:"smooth"})):(this.currentColumn=this.maxIndex,this.track.scrollTo({left:this.maxScroll,behavior:"smooth"}))}getRowsCount(){const t=new Set;return Array.from(this.track.children).forEach(n=>{t.add(n.offsetTop)}),t.size}}class k{constructor(){this.state=this.initialize()}reset(){this.state=this.initialize()}update(t){Object.assign(this.state,t)}getState(){return this.state}initialize(){const t=JSON.parse(localStorage.getItem("user")||"null"),e=JSON.parse(localStorage.getItem("card")||"null");return{name:t?.name??"",email:t?.email??"",amount:10,petId:void 0,petName:"",cardNumber:e?.cardNumber??"",expDate:e?.cardNumber??""}}}const E=new Set([10,20,30,40,50,80,100]);class I{constructor(t){this.paymentController=t,this.screen=this.render(),this.setUp(),this.init()}render(){const t=document.createElement("div");return t.classList.add("popup__screen"),t.classList.add("popup__screen--active"),t.classList.add("donation__screen"),t.innerHTML=`
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
                        <div class="dropdown" id="animal-dropdown">
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
    `,t}setValuesFromState(){const{amount:t}=this.paymentController.getState();this.fixedAmountButtons.forEach(e=>{const n=Number(e.dataset.amount);e.classList.toggle("inactive",n!==t)}),E.has(t)?(this.amountButton.classList.add("inactive"),this.amountInput.value="",this.amountInput.disabled=!0):(this.amountButton.classList.remove("inactive"),this.amountInput.value=String(t),this.amountInput.disabled=!1)}setUp(){this.fixedAmountButtons=Array.from(this.screen.querySelectorAll("[data-amount]")),this.amountInput=this.screen.querySelector("#billing-amount-input"),this.amountError=this.screen.querySelector("#billing-amount-error"),this.amountButton=this.screen.querySelector("#billing-amount-button"),this.nextButton=this.screen.querySelector("#billing-next")}init(){this.amountInput.addEventListener("blur",()=>{const t=a(this.amountInput.value);t?(this.amountError.classList.remove("hidden"),this.amountError.textContent=t):(this.amountError.classList.add("hidden"),this.amountError.textContent="")}),this.amountInput.addEventListener("focus",()=>{const t=this.amountInput.value;a(t)&&(this.amountInput.value="",this.amountError.classList.add("hidden"))}),this.fixedAmountButtons.forEach(t=>{t.addEventListener("click",()=>this.handleFixedClick(t))}),this.amountButton.addEventListener("click",()=>this.handleCustomClick()),this.amountInput.addEventListener("input",()=>this.handleInput()),this.nextButton.addEventListener("click",()=>this.updateState())}handleFixedClick(t){const e=Number(t.dataset.amount);this.fixedAmountButtons.forEach(n=>{n.classList.add("inactive")}),t.classList.remove("inactive"),this.amountButton.classList.add("inactive"),this.amountInput.disabled=!0,this.amountInput.value="",this.paymentController.update({amount:e}),this.updateNextState()}handleCustomClick(){this.fixedAmountButtons.forEach(t=>{t.classList.add("inactive")}),this.amountButton.classList.remove("inactive"),this.amountInput.disabled=!1,this.amountInput.focus(),this.updateNextState()}handleInput(){const t=this.amountInput.value,e=a(t);e?(this.amountError.textContent=e,this.amountError.classList.remove("hidden")):(this.amountError.textContent="",this.amountError.classList.add("hidden")),this.updateNextState()}updateNextState(){const t=this.fixedAmountButtons.find(n=>!n.classList.contains("inactive")),e=!this.amountButton.classList.contains("inactive");if(t){this.nextButton.disabled=!1;return}if(e&&!a(this.amountInput.value)){this.nextButton.disabled=!1;return}this.nextButton.disabled=!0}updateState(){const t=this.fixedAmountButtons.find(n=>!n.classList.contains("inactive"));let e=null;t?e=Number(t.dataset.amount):a(this.amountInput.value)||(e=Number(this.amountInput.value)),e&&this.paymentController.update({amount:e})}resetForm(){this.amountInput.value="",this.amountError.textContent="",this.amountInput.disabled=!0,this.fixedAmountButtons.forEach(t=>{t.classList.add("inactive")}),this.amountButton.classList.add("inactive"),this.nextButton.disabled=!0}getScreen(){return this.screen}onOpen(){this.resetForm(),this.setValuesFromState()}}class B{constructor(t){this.paymentController=t,this.screen=this.render(),this.setUp(),this.init()}render(){const t=document.createElement("div");return t.classList.add("popup__screen"),t.classList.add("donation__screen"),t.innerHTML=`
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
    `,t}setUp(){this.nameInput=this.screen.querySelector("#info-name-input"),this.nameError=this.screen.querySelector("#info-name-error"),this.emailInput=this.screen.querySelector("#info-email-input"),this.emailError=this.screen.querySelector("#info-email-error"),this.backButton=this.screen.querySelector("#info-back"),this.nextButton=this.screen.querySelector("#info-next")}setValuesFromState(){const{name:t,email:e}=this.paymentController.getState();this.nameInput.value=t,this.emailInput.value=e,t&&e&&(this.nextButton.disabled=!1)}init(){r(this.nameInput,this.nameError,l),r(this.emailInput,this.emailError,d),this.nameInput.addEventListener("input",()=>{this.inputHandle()}),this.emailInput.addEventListener("input",()=>{this.inputHandle()}),this.backButton.addEventListener("click",()=>this.updateState()),this.nextButton.addEventListener("click",()=>this.updateState())}updateState(){this.paymentController.update({name:this.nameInput.value,email:this.emailInput.value})}inputHandle(){const t=this.nameInput.value,e=this.emailInput.value;this.nextButton.disabled=!l(t)&&!d(e)}resetForm(){this.emailInput.textContent="",this.nameInput.textContent="",this.emailError.classList.add("hidden"),this.nameError.classList.add("hidden"),this.nextButton.disabled=!0}getScreen(){return this.screen}onOpen(){this.resetForm(),this.setValuesFromState()}}class q{constructor(t){this.paymentController=t,this.screen=this.render(),this.setUp(),this.init()}render(){const t=document.createElement("div");return t.classList.add("popup__screen"),t.classList.add("donation__screen"),t.innerHTML=`
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
                                <div class="dropdown" id="month-dropdown">
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

                                    <div class="dropdown__menu" >
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
                                <div class="dropdown" id="year-dropdown">
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
    `,t}setValuesFromState(){}setUp(){this.creditCardInput=this.screen.querySelector("#payment-credit-card"),this.creditCardError=this.screen.querySelector("#payment-credit-card-error"),this.cvvInput=this.screen.querySelector("#payment-cvv"),this.cvvError=this.screen.querySelector("#payment-cvv-error"),this.backButton=this.screen.querySelector("#payment-back"),this.completeButton=this.screen.querySelector("#payment-complete-button"),this.saveCardCheckbox=this.screen.querySelector("#save-card-checkbox")}init(){r(this.creditCardInput,this.creditCardError,v),r(this.cvvInput,this.cvvError,C),this.completeButton.addEventListener("click",()=>{}),this.backButton.addEventListener("click",()=>this.saveState()),this.syncCheckboxFromStorage(),this.saveCardCheckbox.addEventListener("change",()=>{this.saveCardCheckbox.checked||localStorage.removeItem("savedCard")})}saveState(){const t=Number(this.creditCardInput.value);t&&this.paymentController.update({cardNumber:t}),this.saveCardCheckbox.checked&&localStorage.setItem("savedCard",JSON.stringify({cardNumber:this.paymentController.getState().cardNumber,expiry:this.paymentController.getState().expDate}))}syncCheckboxFromStorage(){const t=localStorage.getItem("savedCard");this.saveCardCheckbox.checked=!!t}resetForm(){this.creditCardInput.value="",this.creditCardError.textContent="",this.cvvInput.value="",this.cvvError.textContent="",this.completeButton.disabled=!0}getScreen(){return this.screen}onOpen(){this.resetForm(),this.setValuesFromState()}}const A=[{label:"About",href:"index.html"},{label:"Map",href:"./src/pages/map/index.html"},{label:"Zoos",href:"./src/pages/zoos/index.html?id=1"},{label:"Contact Us",href:"./src/pages/contacts/index.html"},{label:"Design",href:"figma.com/file/lnK11foY8Aoa6oOlDXovVN/Online-ZOO-Project?node-id=0%3A1"}],N=document.getElementById("side-menu"),F=new b(N,A,0);F.render();const u=document.querySelector("#animal-slider");async function M(){const i=document.querySelector("#animal-cards"),t=new h().render();i.appendChild(t);try{const e=await m.getAnimals();t.remove(),new y(i,e).render(),new S(u)}catch{t.remove();const n=new p("Something went wrong. Please, refresh the page").render();u.prepend(n)}}async function W(){const i=document.querySelector("#reviews-slider"),t=document.querySelector("#reviews-wrapper"),e=new h().render();t.appendChild(e);try{const n=await m.getReviews();e.remove(),new w(t,n).render(),new L(i)}catch{e.remove();const s=new p("Something went wrong. Please, refresh the page").render();i.prepend(s)}}const o=new k,H=new I(o),$=new B(o),P=new q(o),R=new f("Make your donation","donation-popup",o);R.setContent([H,$,P]);new _(".donation__screen");new c("#animal-dropdown");new c("#month-dropdown");new c("#year-dropdown");const T=document.querySelectorAll(".donate-card__button");T.forEach(i=>{i.setAttribute("popovertarget","donation-popup")});M();W();
