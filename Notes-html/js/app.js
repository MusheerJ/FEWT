console.log('This is app.js');
showNotes();
let addBtn = document.getElementById('addBtn');
let searchTxt = document.getElementById('searchTxt');

// If user adds a note,add it to the local storage


// adding the notes
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');
    let addTitle = document.getElementById('addTitle');

    let notes = localStorage.getItem('notes');
    let notesObj;
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let myObj = {
        title: addTitle.value,
        text: addTxt.value
    };
    notesObj.push(myObj);
    // notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = '';
    addTitle.value = '';
    // console.log(notesObj);
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem('notes');
    let notesObj;
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    // notesObj.reverse();
    let html = '';
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.text}</p>
          <button id="${index}" onclick="deleteNote(this.id)" 
          class="btn btn-primary">Delete Note</button>
        </div>
      </div>
        `
    });

    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `
        No notes available
        `;
    }
}

// deleting the notes from the local storage
function deleteNote(index) {
    // console.log("Deleting",index);
    let notes = localStorage.getItem('notes');
    let notesObj;
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}

searchTxt.addEventListener('input', function () {
    let inputVal = searchTxt.value.toLowerCase();
    console.log('Searching', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName('p')[0].innerText.toLowerCase();
        // console.log(cardTxt);

        if (cardTxt.includes(inputVal)) {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }


    })
})
/*
furthere features
1)Title
2)mark important
3)seperate notes for user
4)sync and host to web server
 */
