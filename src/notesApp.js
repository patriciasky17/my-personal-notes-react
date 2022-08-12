import { useState, useEffect } from "react";
import InputForm from "./components/inputForm";
import Navbar from "./components/navbar";
import Notes from "./components/notes";
import { getInitialData } from "./utils";
import Footer from "./components/footer";

function NotesApp() {
  const [query, setQuery] = useState("");
  const [searchNotes, setSearchNotes] = useState([]);
  const [notes, setNotes] = useState(getInitialData());

  const activeNotes = (searchNotes || notes).filter((note) => !note.archived);
  const archivedNotes = (searchNotes || notes).filter((note) => note.archived);

  useEffect(() => {
    setSearchNotes(
      notes.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, notes]);

  return (
    <>
      <Navbar search={query} updateQuery={setQuery} updateNotes={setNotes} />
      <main className="all_notes">
        <InputForm updateNotes={setNotes} />
        <Notes
          label="Active Notes"
          notes={activeNotes}
          setNotes={setNotes}
        />
        <Notes
          label="Archived Notes"
          notes={archivedNotes}
          setNotes={setNotes}
        />
      </main>
      <Footer />
    </>
  );
}

export default NotesApp;