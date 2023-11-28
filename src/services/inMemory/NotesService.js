const nanoid = require('nanoid');

class NotesService {
  constructor() {
    this._notes = [];
  }

  addNote({}) {}

  getNotes() {}

  getNoteByID(id) {}

  editNoteById(id, { title, body, tags }) {}

  deleteNoteById(id) {}
}

module.exports = NotesService;
