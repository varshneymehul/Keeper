import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

import AddIcon from "@material-ui/icons/Add";
function AddNote(props) {
  const [noteValue, setNoteValue] = useState({
    title: "",
    content: "",
  });

  const [isFocused, setIsFocused] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNoteValue((noteValue) => {
      return { ...noteValue, [name]: value };
    });
  }
  function handleFocus() {
    setIsFocused(true);
  }

  return (
    <form className="create-note">
      {isFocused === true ? (
        <input
          value={noteValue.title}
          onChange={handleChange}
          name="title"
          placeholder="Title"
        />
      ) : null}
      <textarea
        onClick={handleFocus}
        value={noteValue.content}
        onChange={handleChange}
        name="content"
        placeholder="Take a note..."
        rows={isFocused === true ? 3 : 1}
      />
      <Zoom in={isFocused === true ? true : false}>
        <Fab
          onClick={(event) => {
            props.addNote(noteValue);

            setNoteValue({
              title: "",
              content: "",
            });
            event.preventDefault();
          }}
        >
          <AddIcon />
        </Fab>
      </Zoom>
    </form>
  );
}
export default AddNote;
