'use strict';


const noteTitle = document.getElementById('note-title');
const noteText = document.getElementById('note-text');
const btnSave = document.getElementById('note-btn');
const userAlert = document.getElementById('note-status');

const saveNotesLocally = () => {
    const userNote = noteText.value;

 
        localStorage.setItem( 'note', userNote )
    
    const note = {
        title: noteTitle.value,
        content: noteText.value
    };

    fetch('/routeNote', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(note)
    })
    .then(response => response.text())
    .then(msg => userAlert.textContent = msg)
    .catch(err => alert(err.stack))

}

const getNote = () => {
    const note = localStorage.getItem('note');
    noteText.value = note;
}

btnSave.onclick = saveNotesLocally;
window.onload = getNote;


const formUser = document.getElementById('form-container');
const userFile = document.getElementById('user-file');
const serverMsg = document.getElementById('msg');

formUser.onsubmit =  (e) => {
    e.preventDefault();
    const file = new FormData();
    file.append('file', userFile.files[0])
    
   fetch('/sendfile', {
       method: 'POST',
       body: file
   })
   .then(response => response.text())
   .then(msg => serverMsg.textContent = msg)
   .catch(err => alert(err.stack))

   
}