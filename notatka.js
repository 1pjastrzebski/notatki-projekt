const notes = document.querySelectorAll(".note")
console.log(notes)
notes.forEach((note)=>{
    note.addEventListener('click',()=>{
        note.classList.replace("note","bigNote") 
        

    })
})