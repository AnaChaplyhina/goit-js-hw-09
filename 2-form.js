import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import"./assets/styles-l0sNRNKZ.js";const e={email:"",message:""};function o(){localStorage.setItem("feedback-form-state",JSON.stringify(e))}function r(){const a=localStorage.getItem("feedback-form-state");if(a){const t=JSON.parse(a);e.email=t.email||"",e.message=t.message||"",document.querySelector('input[name="email"]').value=e.email,document.querySelector('textarea[name="message"]').value=e.message}}function l(a){const{name:t,value:n}=a.target;t in e&&(e[t]=n.trim(),o())}function s(a){if(a.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",document.querySelector('input[name="email"]').value="",document.querySelector('textarea[name="message"]').value=""}window.addEventListener("DOMContentLoaded",r);const m=document.querySelector(".feedback-form");m.addEventListener("input",l);m.addEventListener("submit",s);
//# sourceMappingURL=2-form.js.map
