const { nanoid } = require('nanoid');
const books = [];

const addBookHandler = (request, h) => {
  // Implementasi untuk menambahkan buku
  // ...

  return response;
};

const getAllBooksHandler = (request, h) => {
  // Implementasi untuk mendapatkan semua buku
  // ...

  return response;
};

const getBookByIdHandler = (request, h) => {
  // Implementasi untuk mendapatkan buku berdasarkan ID
  // ...

  return response;
};

const editBookByIdHandler = (request, h) => {
  // Implementasi untuk mengubah data buku
  // ...

  return response;
};

const deleteBookByIdHandler = (request, h) => {
  // Implementasi untuk menghapus buku berdasarkan ID
  // ...

  return response;
};

module.exports = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
];
