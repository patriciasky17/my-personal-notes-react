import { showFormattedDate } from "../utils";
import Button from "./button";

const Note = ({ id, title, createdAt, body, archived, action }) => {

  const deleteNote = (item) =>
    action((notes) => notes.filter((note) => note.id !== item));

  const clickedArchive = (item) => {
    action((notes) =>
      notes.map((note) => {
        if (note.id === item) {
          return { ...note, archived: !note.archived };
        }
        return note;
      })
    );
  };

  return (
    <article id={id} className="single_note">
      <div className="detail_notes">
        <h4 className="title_notes">{title}</h4>
        <p className="timestamp_notes">{showFormattedDate(createdAt)}</p>
        <p className="description_notes">{body}</p>
      </div>
      <div className="notes_button">
        <Button className="delete_button" event={() => deleteNote(id)} label="Delete"/>
        <Button className="archived_button"
          event={() => clickedArchive(id)}
          label={archived ? "Unarchived" : "Archive"}
        />
      </div>
    </article>
  );
};

export default Note;