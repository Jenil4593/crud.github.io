console.log("This is addname.js")
let addname = document.getElementById('add_btn');
let addlist = document.getElementById('listing');
addname.addEventListener('click' , addnamefunc);

function addnamefunc(e)
{ 
    if(addlist.children[0].className == "empty")
    {
        addlist.children[0].remove();
    }
    let currentBtn = e.currentTarget;
    console.log(currentBtn)
    let currentInput = currentBtn.previousElementSibling;

    let newLi = document.createElement('li');
    newLi.classList.add('list-group-item' , 'd-flex' , 'justify-content-between');
    newLi.innerHTML = `<h3 class="flex-grow-1">${currentInput.value}</h3>
    <button class="btn btn-warning mx-2" onclick="editentry(this)">Edit</button>
    <button class="btn btn-danger " onclick="removeentry(this)">Remove</button>`;
    addlist.appendChild(newLi)
}

function removeentry(present)
{
    present.parentElement.remove();
    if(addlist.children.length <=0)
    {
        let newEmpty = document.createElement("h3");
        newEmpty.textContent = "No content here please add some lists";
        newEmpty.classList.add("empty");
        addlist.appendChild(newEmpty);
    }
}

function editentry(now)
{
    if(now.textContent == "Done")
    {
        now.textContent = "Edit";
        let content = now.previousElementSibling.value;
        let currentTitle = document.createElement('h3');
        currentTitle.className = "flex-grow-1";
        currentTitle.textContent = content;
        now.parentElement.replaceChild(currentTitle , now.previousElementSibling);

    }
    else
    {

        now.textContent = "Done";
        let content = now.previousElementSibling.textContent;
        let currInput = document.createElement('input');
        currInput.type = 'text';
        currInput.value = content;
        currInput.className = 'form-control';
        now.parentElement.replaceChild(currInput , now.previousElementSibling);
    }
}