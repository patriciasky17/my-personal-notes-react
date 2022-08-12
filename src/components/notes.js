import Note from "./note";

const Notes = ({ label, notes, setNotes }) => {
  return (
    <section className="container">
      <h2 className="">{label}</h2>
      {notes.length === 0 ? (
        <p className="">There's no notes in here..</p>
      ) : (
        <div className="notes_container">
          {notes?.map((note) => (
            <Note key={note.id} action={setNotes} {...note} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Notes;