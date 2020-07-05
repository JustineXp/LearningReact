import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((eachNote) => (
        <Note
          key={eachNote.key}
          title={eachNote.title}
          content={eachNote.content.substring(0, 45) + "..."}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
