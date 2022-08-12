import { useState } from "react";
import Input from "./input";

const InputForm = ({ updateNotes }) => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const createNote = (event) => {
    event.preventDefault();
    const timestamp = new Date().toISOString();

    updateNotes((notes) => [
      ...notes,
      {
        id: timestamp,
        title,
        body: detail,
        archived: false,
        createdAt: timestamp,
      },
    ]);
  };

  return (
    <form id="formInput" onSubmit={createNote}>
      <h2 className="create_note_title">Create your note here!</h2>
      <p className="characters_left">
        Characters left:  <span className=""><b>{50 - title.length}</b></span>
      </p>
      <Input
        value={title}
        onChange={setTitle}
        type="text"
        placeholder="Title of the note"
        id="titleNote"
        name="title"
        required
      />
      <Input
        value={detail}
        onChange={setDetail}
        type="textarea"
        placeholder="Type your note here..."
        id="detailNote"
        name="note"
        required
      />
      <Input type="submit" id="submitForm" name="submit_form" value="Create" />
    </form>
  );
};

export default InputForm;