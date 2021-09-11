import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({ title: "", content: "" });

  function deleteNote(id) {
    setNotes(
      notes.filter((toDeleteNote, index) => {
        return index !== id;
      })
    );
  }

  function makeCreatAreaEmpty() {
    setNote({ title: "", content: "" });
  }

  function addNote() {
    console.log("log");
    setNotes(() => {
      return [...notes, note];
    });
  }
  function changeNote(name, newNotePart) {
    setNote(() => {
      return { ...note, [name]: newNotePart };
    });
  }
  return (
    <div>
      <Header />
      <CreateArea
        changeNote={changeNote}
        makeCreatAreaEmpty={makeCreatAreaEmpty}
        addNote={addNote}
        title={note.title}
        content={note.content}
      />
      {notes.map((item, index) => {
        console.log("log");
        return (
          <Note
            key={index}
            id={index}
            deleteMe={deleteNote}
            title={item.title}
            content={item.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
