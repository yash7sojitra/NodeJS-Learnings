const { default: chalk } = require("chalk");
const fs = require("fs");

const addNote = (title, body) => {
  const notes = loadNotes();

  // const duplicateNotes = notes.filter((note) => {
  //   return note.title === title;
  // });

  debugger;

  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.bgGreen("New note added."));
  } else {
    console.log(chalk.bgRed("Note title taken!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter((note) => {
    return note.title !== title;
  });

  if (notes.length > duplicateNotes.length) {
    console.log(chalk.bgGreen("Note removed!"));
    saveNotes(duplicateNotes);
  } else {
    console.log(chalk.bgRed("No note found!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.bgBlueBright("Your notes"));

  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();

  const noteRead = notes.find((note) => note.title === title);

  if (noteRead) {
    console.log(chalk.bgBlueBright(noteRead.title));
    confirm.log(noteRead.body);
  } else {
    console.log(chalk.bgRed("Note not found"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = { addNote, removeNote, listNotes, readNote };
