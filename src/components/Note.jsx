import React from "react";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";

function Note(props) {
  return (
    <div>
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button
          onClick={() => {
            props.deleteNote(props.id);
          }}
        >
          
          <DeleteSweepIcon />
        </button>
      </div>
    </div>
  );
}
export default Note;
