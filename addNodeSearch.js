console.log("This is add Node")
let addBtn = document.getElementById("addBtn");
let addlist = document.getElementById('notes');

console.log(addBtn);

addBtn.addEventListener("click", function (e) {
    let addText = document.getElementById("addText");
    let notes = localStorage.getItem("items");
    // console.log(notes.value)
    if (notes == null) {
        localarr = [];
    }
    else {
        localarr = JSON.parse(notes);
    }
    localarr.push(addText.value);
    localStorage.setItem("items", JSON.stringify(localarr));
    console.log(addText.value)
    addNote();
});

function addNote() {
    let notes = localStorage.getItem("items");
    if (notes == null) {
        localarr = [];
    }
    else {
        localarr = JSON.parse(notes);
    }
    let html = "";
    localarr.forEach(function (element, index) {

        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Card ${index + 1}</h5>
            <p class="card-text" id="txt">${element}</p>
            <button id="${index}" onclick="deletenode(this.id)" class="btn btn-primary">Go somewhere</button>
        </div>
    </div>`;

        
    });
    addlist.innerHTML = html;
}

    function deletenode(index) {
        // console.log(index)
        let notes = localStorage.getItem("items");
        if (notes == null) {
            localarr = [];
        }
        else {
            localarr = JSON.parse(notes);
        }
        localarr.splice(index , 1)
        localStorage.setItem("items" , JSON.stringify(localarr))
        addNote();
    }

    let searching = document.getElementById('searching');
    searching.addEventListener("input" , function(){

    let searchingtxt = searching.value.toLowerCase();
    console.log(searchingtxt)
    let card = document.getElementsByClassName("noteCard");
    Array.from(card).forEach(function(element){
        // let cardtext=element.children[0].children[1].innerText;
        // console.log(cardtext)
        let cardtext = element.getElementsByTagName("p")[0].innerText.toLocaleLowerCase();
        if(cardtext.includes(searchingtxt))
        {
            element.style.display = "block";
        }
        else
        {
            element.style.display = "none";
        }
    });
    
    })