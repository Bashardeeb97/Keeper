import React, { useState } from "react";

function CreateArea(prop) {
  return (
    <div>
      <form>
        <input
          onChange={(event) => {
            prop.changeNote(event.target.name, event.target.value);
          }}
          name="title"
          placeholder="Title"
          value={prop.title}
        />
        <textarea
          onChange={(event) => {
            prop.changeNote(event.target.name, event.target.value);
          }}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={prop.content}
        />
        <button
          onClick={(event) => {
            prop.addNote();
            prop.makeCreatAreaEmpty();

            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
