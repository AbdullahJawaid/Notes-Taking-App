//Get Items from UI
const addBox=document.querySelector('.add-box'),
      popupBox=document.querySelector('.popup-box'),
      popupTitle=popupBox.querySelector('header p'),
      closeIcon=popupBox.querySelector('header i'),
      titleTag=popupBox.querySelector('input'),
      descTag=popupBox.querySelector('textarea'),
      addBtn=popupBox.querySelector('.addBtn');


// months decealr
const months=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];


// getting form local stroge and parse into object 
const notes=JSON.parse(localStorage.getItem('notes') || '[]');
let isUpdate = false, updateId;


// Event Listner
addBox.addEventListener('click',() =>{
    titleTag.focus();
    popupBox.classList.add("show")
});

closeIcon.addEventListener('click',() =>{
    // isUpdate = false;
    titleTag.value='';
    descTag.value='';
    addBtn.innerText="Add Note";
    popupTitle.innerText="Add a  Note";
    popupBox.classList.remove("show")
});


// function to show notes

function showNotes(){
    document.querySelectorAll('.note').forEach(note => note.remove());
    notes.forEach((note,index) => {
        let liTag=`<li class="note">
                <div class="details">
                    <p>${note.title}</p>
                    <span>${note.description} </span>
                </div>
                <div class="bottom-content">
                    <span>${note.date}</span>
                    <div class="setting">
                        <i onclick="showMenu(this)" class="uil fa fa-ellipsis-h"></i>
                        <ul class="menu">
                            <li  onclick="UpdateNote(${index} ,'${note.title}','${note.description}')"> <i class="uil fa fa-pen"></i>Edit</li>
                            <li  onclick="deleteNote(${index})"> <i class="uil fa fa-trash"></i>Delete</li>
                        </ul>
                    </div>
                </div>
            </li>`

        addBox.insertAdjacentHTML('afterend',liTag)    
        
    });
}

// fuction declear
showNotes();