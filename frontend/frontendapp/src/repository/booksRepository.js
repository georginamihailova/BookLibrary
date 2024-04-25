import axios from '../custom-axios/axios';

const BooksService = {
    fetchBooks: () => {
        return axios.get("/books")
    },
    fetchAuthors: () => {
        return axios.get("/author")
    },
    editBook: (id, name, categories, author, availableCopies) => {
        return axios.put(`/books/${id}/edit`, {
            "name": name,
            "categories": categories,
            "author": author,
            "availableCopies": availableCopies
        });

    },
    getBook: (id) => {
        return axios.get(`/books/${id}`);
    },
    deleteBook: (id) => {
        return axios.delete(`/books/${id}/delete`);
    },
    markAsTaken: (id) => {
        return axios.post(`/books/${id}/rent`)
    },
    addBook: (name, categories, author, availableCopies) => {
        return axios.post(`/books/add`, {
            "name": name,
            "categories": categories,
            "author": author,
            "availableCopies": availableCopies
        });
    }
}
export default BooksService;