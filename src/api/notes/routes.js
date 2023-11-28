const routes = (handler) => [
  {
    method: 'POST',
    path: '/notes',
    handler: handler.postNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: handler.getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: handler.getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: handler.putNoteById,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: handler.deleteNoteById,
  },
];

module.exports = routes;

// const {
//   addNotesHandler,
//   getAllNotesHandler,
//   getNoteByIdHandler,
//   editNoteById,
//   deleteNnoteById,
// } = require('./handler');

// const routes = [
//   {
//     method: 'POST',
//     path: '/notes',
//     handler: addNotesHandler,
//   },
//   {
//     method: 'GET',
//     path: '/notes',
//     handler: getAllNotesHandler,
//   },
//   {
//     method: 'GET',
//     path: '/notes/{id}',
//     handler: getNoteByIdHandler,
//   },
//   {
//     method: 'PUT',
//     path: '/notes/{id}',
//     handler: editNoteById,
//   },
//   {
//     method: 'DELETE',
//     path: '/notes/{id}',
//     handler: deleteNnoteById,
//   },
// ];

// module.exports = routes;
