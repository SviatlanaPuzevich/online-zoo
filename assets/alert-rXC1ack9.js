class n{static async getReviews(){const e=await fetch("https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/feedback");if(!e.ok)throw new Error("Something went wrong. Please, refresh the page");return(await e.json()).data}static async getAnimals(){const e=await fetch("https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/pets");if(!e.ok)throw new Error("Something went wrong. Please, refresh the page");return(await e.json()).data}static async getAnimalFact(e){const t=await fetch(`https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/pets/${e}`);if(!t.ok)throw new Error(`Failed to fetch animal with id ${e}. Please try again.`);return(await t.json()).data}static async getCameras(){const e=await fetch("https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/cameras");if(!e.ok)throw new Error("Failed to fetch animal info. Please try again.");return(await e.json()).data}}class r{render(){const e=document.createElement("div");return e.className="loader__container",e.innerHTML=`
<div class="loader__text">Loading...</div>
    <div class="loader"></div>
`,e}}class o{constructor(e){this.message=e}render(){const e=document.createElement("div");return e.className="alert alert--error",e.innerHTML=`
      <div class="alert__content">
        ${this.message}
      </div>
      <button class="alert__close">×</button>
    `,e.querySelector(".alert__close").addEventListener("click",()=>{e.remove()}),e}}export{n as A,r as L,o as a};
