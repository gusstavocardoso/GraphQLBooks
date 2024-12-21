const books = [];

module.exports = {
  getBooks: () => books,
  getBook: ({ id }) => books.find((book) => book.id === id),
  addBook: ({ input }) => {
    const newBook = { id: `${books.length + 1}`, ...input };
    books.push(newBook);
    return newBook;
  },
  updateBook: ({ id, input }) => {
    const index = books.findIndex((book) => book.id === id);
    if (index === -1) throw new Error('Book not found');
    books[index] = { id, ...input };
    return books[index];
  },
  deleteBook: ({ id }) => {
    const index = books.findIndex((book) => book.id === id);
    if (index === -1) throw new Error('Book not found');
    books.splice(index, 1);
    return `Book with ID ${id} deleted`;
  },
};
