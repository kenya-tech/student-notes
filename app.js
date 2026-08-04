const units = {


DBS3101:{
name:"Introduction to Business",
pdf:"DBS3101.pdf"
},


DFA3111:{
name:"Fundamentals of Financial Accounting I",
pdf:"DFA3111.pdf"
},


DFE3103:{
name:"Principles of Micro-Economics",
pdf:"DFE3103.pdf"
},


DMQ3111:{
name:"Quantitative Methods for Business",
pdf:"DMQ3111.pdf"
},


DBH3203:{
name:"Organization Theory",
pdf:"DBH3203.pdf"
},


DBR3211:{
name:"Risk Management and Insurance",
pdf:"DBR3211.pdf"
},


DFA3211:{
name:"Principles of Management Accounting",
pdf:"DFA3211.pdf"
},


DFE3203:{
name:"Principles of Macro-Economics",
pdf:"DFE3203.pdf"
},


DMQ3201:{
name:"Business Statistics I",
pdf:"DMQ3201.pdf"
}


};



let code = new URLSearchParams(window.location.search).get("code");


if(units[code]){


document.getElementById("code").innerHTML = code;


document.getElementById("name").innerHTML =
units[code].name;


let file="assets/pdfs/"+units[code].pdf;


document.getElementById("view").href=file;


document.getElementById("download").href=file;


}
function searchUnits(){

const query =
document.getElementById("searchBox")
.value
.toLowerCase();

const results =
document.getElementById("searchResults");

if(!results) return;

if(query.length < 2){
results.innerHTML = "";
return;
}

let html = "";

for(let code in units){

let unit = units[code];

if(
code.toLowerCase().includes(query) ||
unit.name.toLowerCase().includes(query)
){

html += `
<a href="unit.html?code=${code}" class="card">
<h3>${code}</h3>
<p>${unit.name}</p>
</a>
`;

}

}

results.innerHTML = html;

}
