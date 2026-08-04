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



// Load unit page details

let code = new URLSearchParams(window.location.search).get("code");


if(code && units[code]){


let codeElement = document.getElementById("code");
let nameElement = document.getElementById("name");
let viewElement = document.getElementById("view");
let downloadElement = document.getElementById("download");


if(codeElement){
codeElement.innerHTML = code;
}


if(nameElement){
nameElement.innerHTML = units[code].name;
}


let file = "assets/pdfs/" + units[code].pdf;


if(viewElement){
viewElement.href = file;
}


if(downloadElement){
downloadElement.href = file;
}


}




// Search system

function searchUnits(){


const searchBox = document.getElementById("searchBox");

const results = document.getElementById("searchResults");


if(!searchBox || !results){
return;
}


const query = searchBox.value.toLowerCase();


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
