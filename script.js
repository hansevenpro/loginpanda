let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let eyeL = document.querySelector(".eyeball-l");
let eyeR = document.querySelector(".eyeball-r");
let handL = document.querySelector(".hand-l");
let handR = document.querySelector(".hand-r");

let normalEyeStyle = () => {
  eyeL.style.cssText = `
  top: 0.6em;
  left: 0.6em;
  `;
  eyeR.style.cssText = `
  top: 0.6em;
  right: 0.6em;
  `;
};
let normalHandStyle = () => {
  handL.style.cssText = `
  top: 8.4em;
  left: 7.5em;
  height: 2.81em;
  transform: rotate(0deg);
  `;
  handR.style.cssText = `
  top: 8.4em;
  right: 7.5em;
  height: 2.81em;
  transform: rotate(0deg);
  `;
};

usernameRef.addEventListener("focus",()=>{
  eyeL.style.cssText = `
  top: 1.12em;
  left: 0.75em;
  `;
  eyeR.style.cssText = `
  top: 1.12em;
  right: 0.75em;
  `;
normalHandStyle();
});
passwordRef.addEventListener("focus",()=>{
  handL.style.cssText = `
  top: 3.87em;
  left: 11.75em;
  height: 6.56em;
  transform: rotate(-155deg);
  `;
  handR.style.cssText = `
  top: 3.87em;
  right: 11.75em;
  height: 6.56em;
  transform: rotate(155deg);
  `;
  normalEyeStyle();
});