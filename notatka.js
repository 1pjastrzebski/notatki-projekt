const notes = document.querySelectorAll(".note")
const main = document.querySelector(".container")
const addBtn = document.querySelector(".addBtn")
notes.forEach((note)=>{
    note.addEventListener('click',()=>{
        if(note.classList.contains("note")){
            note.classList.replace("note","bigNote") 
            notes.forEach((note)=>{
                if(note.classList.contains("note")){
                    note.style.display = "none";
                }
            })
            addBtn.style.display = "none";
            setTimeout(()=>{
                main.addEventListener("click",mainFunc)
                function mainFunc(){
                    notes.forEach((note)=>{
                        
                        note.style.display = "block"
                        if(note.classList.contains("bigNote")){
                            note.classList.replace("bigNote","note")
                        }
                        addBtn.style.display = "block"
                    })
                    main.removeEventListener("click",mainFunc)
                }
            },1)
        }

    })
})