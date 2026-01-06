let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNote() {
  const input = document.getElementById("noteInput");
  if (input.value === "") return;

  notes.push(input.value);
  localStorage.setItem("notes", JSON.stringify(notes));
  input.value = "";
  displayNotes();
}

function displayNotes() {
  const notesDiv = document.getElementById("notes");
  notesDiv.innerHTML = "";

  notes.forEach(note => {
    const div = document.createElement("div");
    div.className = "note";
    div.textContent = note;
    notesDiv.appendChild(div);
  });
}

displayNotes();
