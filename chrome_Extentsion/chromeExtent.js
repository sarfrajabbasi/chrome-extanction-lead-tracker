// create the myleads array and InputEl.

// Create two variables

// myLeads --> should be assigned to an empty array
// inputEl --> should be assigned to the text input field.

let myLeads = [];

const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

const inputEl = document.getElementById("input-el");
const ulList = document.querySelector("#ul-list");

// get leads from the localStorage
// store it in a variable leadsFromLocalStorage
// log out variable

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myleads"));

// check if leadsfrom localStore is truthy and if so,set myleads to its value and call renderLeads()
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}


// log out 'button clicked' when the user clicks the "SAVE INPUT" button

inputBtn.addEventListener("click", () => {
  // push the value www.asda.com to myArr when the inputbtn clicked.
  // push the value from input filed into myLeads arr.

  myLeads.push(inputEl.value);

  // clear the input field
  inputEl.value = "";

  // save the myLeads array to localStorage
  localStorage.setItem("myleads", JSON.stringify(myLeads));
  render(myLeads);
});

// Listen for double clicks on the delete-btn  and clear localstorage,myleads and DOM

deleteBtn.addEventListener("dblclick", () => {
  localStorage.clear();
  // ulList.innerHTML = ""
  myLeads = [];
  render(myLeads);
});

// listen for click on tabBtn and log url
tabBtn.addEventListener("click", () => {
  // grab the url of the current tab!
  chrome.tabs.query({
    active: true,
    currentWindow: true},
    function(tabs) {
      myLeads.push(tabs[0].url);
      localStorage.setItem("myleads", JSON.stringify(myLeads));
      render(myLeads);
    });
  
  
});
// wrap the code in functions:-------

function render(leads) {
  // clear the existing list
  // ulList.innerHTML = ""

  // Render items/logout the items in the myLeads arr using a for loop and also render the leads in the unorder list using ul.textContent

  // phloshopy: make it work and then correct it.

  // Improving the performance of our app/and render current items*

  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    // wrap the lead in an anchor tag <a> inside the <li>

    listItems += `
    <li>
    <a target="_blank" href="${leads[i]}">
    ${leads[i]}
    </a>
    </li>`;
  }
  // DOM manupulation come with cost

  ulList.innerHTML = listItems;
}

// Practice:--

// storing array in localStorage

// localStorage.setItem("myLeads",JSON.stringify([1,2,3,4,5,"sa",{a:"a"}]));

// console.log(JSON.parse(localStorage.getItem("myLeads")));
// // localStorage.clear()

// js singalize emtpyness (undefined)
// devlop singalize emtpyness (null)
// let currViewer = null;
// currViewer = ["Jane","nick"];
// currViewer = null;
// if(currViewer){
//   console.log("yes the watch you");
// }else{
//   console.log("no viewer watch");

// }
// currViewer = ["as"];

// console.log(currViewer[6]);

// // truthy and falsey value find?

// let trueOfFalse = Boolean(-0);//f
// console.log(trueOfFalse);

const welcomeEl = document.getElementById("welcome-el");

function greetUser(name = "User", greet = "Hello,") {
  welcomeEl.textContent = `${greet}, ${name} :)`;
}
greetUser("sarfraj ", "kya haal-Chaal ha bhai");

function firstItemInArr(arr) {
  return arr[0];
}
const first = firstItemInArr(["sarfraj", 2, 3, 4]);

console.log(first);
