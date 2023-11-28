class NotesHandler {
  constructor(service) {
    this._service = service;
  }

  postNoteHandler(request, h) {
    try {
      const { title = 'untitled', body, tags } = request.payload;

      const noteId = this._service.addNote({ title, body, tags });

      const response = h.response({
        status: 'success',
        message: 'Catatan berhasil ditambahkan',
        data: {
          noteId,
        },
      });
      response.code(201);
      return response;
    } catch (error) {
      const response = h.response({
        status: 'fail',
        message: error.message,
      });
      response.code(400);
      return response;
    }
  }

  getNotesHandler() {
    const notes = this._service.getNotes();
    return {
      status: 'success',
      data: {
        notes,
      },
    };
  }

  getNoteByIdHandler(request, h) {
    try {
      const { id } = request.params;
      const note = this._service.getNoteById(id);
      return {
        status: 'success',
        data: {
          note,
        },
      };
    } catch (error) {
      const response = h.response({
        status: 'fail',
        message: error.message,
      });
      response.code(404);
      return response;
    }
  }

  putNoteByIdHandler(request, h) {
    try {
      const { id } = request.params;

      this._service.editNoteById(id, request.payload);

      return {
        status: 'success',
        message: 'Catatan berhasil diperbarui',
      };
    } catch (error) {
      const response = h.response({
        status: 'fail',
        message: error.message,
      });
      response.code(404);
      return response;
    }
  }
  deleteNoteByIdHandler(request, h) {
    try {
      const { id } = request.params;
      this._service.deleteNoteById(id);
      return {
        status: 'success',
        message: 'Catatan berhasil dihapus',
      };
    } catch (error) {
      const response = h.response({
        status: 'fail',
        message: error.message,
      });
      response.code(404);
      return response;
    }
  }
}

// const notes = require('../../notes');
// const { nanoid } = require('nanoid');

// const addNotesHandler = (req, h) => {
//   const { title, tags, body } = req.payload;

//   const id = nanoid(16);

//   const createdAt = new Date().toISOString();
//   const updateAt = createdAt;

//   const newNote = {
//     title,
//     tags,
//     body,
//     id,
//     createdAt,
//     updateAt,
//   };

//   notes.push(newNote);

//   const isSuccess = notes.filter((note) => note.id === id).length > 0;

//   if (isSuccess) {
//     const response = h
//       .response({
//         status: 'success',
//         message: 'catatan berhasil ditambahkan',
//         data: { noteId: id },
//       })
//       .code(200);
//     return response;
//   }

//   const response = h
//     .response({
//       status: 'fail',
//       message: 'catatan gagal ditambahakan',
//     })
//     .code(500);

//   return response;
// };

// const getAllNotesHandler = (reg, h) => ({
//   status: 'sucess',
//   data: notes,
// });

// const getNoteByIdHandler = (req, h) => {
//   const { id } = req.params;
//   console.log(notes.id);
//   console.log(id);

//   const note = notes.filter((note) => note.id == id)[0];
//   console.log(note);

//   if (note !== undefined) {
//     return {
//       status: 'success',
//       data: {
//         note,
//       },
//     };
//   }

//   const response = h.response({
//     status: 'fail',
//     message: 'Catatan tidak ditemukan',
//   });
//   response.code(404);
//   return response;
// };

// const editNoteById = (req, h) => {
//   const { id } = req.params;
//   const { title, tags, body } = req.payload;
//   console.log(req.payload);
//   console.log(id);

//   const updatedAt = new Date().toISOString();
//   const index = notes.findIndex((note) => note.id === id);
//   console.log(index);

//   if (index !== -1) {
//     notes[index] = {
//       ...notes[index],
//       title,
//       tags,
//       body,
//       updatedAt,
//     };

//     const response = h
//       .response({
//         status: 'success',
//         message: 'catatan berhasil diperbarui',
//       })
//       .code(200);
//     return response;
//   }

//   const response = h
//     .response({
//       status: 'Failed',
//       message: 'Gagal memperbarui catatan. Id tidak ditemukan',
//     })
//     .code(200);
//   return response;
// };

// const deleteNnoteById = (req, h) => {
//   const { id } = req.params;

//   const index = notes.findIndex((note) => note.id === id);

//   if (index !== -1) {
//     notes.splice(index, 1);
//     const response = h
//       .response({
//         status: 'success',
//         message: 'Catatan berhasil dihapus',
//       })
//       .code(200);
//     return response;
//   }

//   const response = h
//     .response({
//       status: 'failed',
//       message: 'Catatan Gagal ditambahkan',
//     })
//     .code(404);
//   return response;
// };

// module.exports = {
//   addNotesHandler,
//   getAllNotesHandler,
//   getNoteByIdHandler,
//   editNoteById,
//   deleteNnoteById,
// };
