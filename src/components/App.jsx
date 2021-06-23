import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import AddNote from "./AddNote.jsx";
import "../styles.css"
function App() {
  const [notes, setNotes] = useState([]);

  function addNote(noteValue) {
    setNotes((prevValue) => {
      return [...prevValue, noteValue];
    });
  }

  function deleteNote(id) {
    setNotes((prevValue) => {
      return notes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />

      <AddNote addNote={addNote} />

      {notes.map((noteItem, index) => (
        <Note
          title={noteItem.title}
          key={index}
          id={index}
          content={noteItem.content}
          deleteNote={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
}
export default App;
