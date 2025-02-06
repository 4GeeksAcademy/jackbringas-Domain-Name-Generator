import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
let pronoun = ['the', 'our', 'my'];
let adj = ['great', 'big','pretty'];
let noun = ['jogger', 'racoon', 'star'];

let domainNames = [];

for (let p of pronoun) {
for (let a of adj) {
for (let n of noun) {

  let domain = p + a + n + '.com';
      domainNames.push(domain); 
    }
  }
}
  console.log(domainNames);
};
