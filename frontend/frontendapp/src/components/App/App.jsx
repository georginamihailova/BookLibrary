import './App.css'
import React, {Component} from "react";
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import BooksService from "../../repository/booksRepository.js";
import Books from "../Books/BooksList/books.jsx";
import BooksEdit from "../Books/BooksEdit/booksEdit.jsx";
import BooksAdd from "../Books/BooksAdd/booksAdd.jsx";
import Categories from "../Categories/categories.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../Header/header.jsx";
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            selectedBook: {},
            categoriesAll: [
                { id: 1, name: "NOVEL" },
                { id: 2, name: "THRILLER" },
                { id: 3, name: "HISTORY" },
                { id: 4, name: "FANTASY" },
                { id: 5, name: "BIOGRAPHY" },
                { id: 6, name: "CLASSICS" },
                { id: 7, name: "DRAMA" }
            ],
             authors: []
        }
    }
    render() {
        return(
            <Router>
                <Header/>
                <main>
                    <div className="container">
                        <Routes>
                            <Route path={"/categories"} element={
                                <Categories categories = {this.state.categoriesAll}
                                      />}/>

                            <Route path={"/books/add"} element={
                                <BooksAdd book = {this.state.selectedBook}
                                           categoriesAll={this.state.categoriesAll}
                                           onAddBook={this.addBook}
                                           authors={this.state.authors}/>} />
                            <Route path={"/books/edit/:id"} element={
                                <BooksEdit book = {this.state.selectedBook}
                                          categoriesAll={this.state.categoriesAll}
                                          onEditBook={this.editBook}
                                          authors={this.state.authors}/>} />
                            <Route path={"/books"} element={
                                <Books books = {this.state.books}
                                       onMark = {this.markAsTaken}
                                       onDelete = {this.deleteBook}
                                       onEdit = {this.getBook}
                                       onAdd = {this.addBook}/>}/>
                            <Route path={"/"} element={
                                <Books books = {this.state.books}
                                       onMark = {this.markAsTaken}
                                       onDelete = {this.deleteBook}
                                       onEdit = {this.getBook}
                                       onAdd = {this.addBook}
                                />}/>
                        </Routes>
                    </div>
                </main>
            </Router>
        )
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData = () => {
        this.loadBooks();
        this.loadAuthors();
    }
    loadBooks = () => {
        BooksService.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            });
    }
    loadAuthors = () => {
        BooksService.fetchAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                })
            });
    }
    getBook = (id) => {
        BooksService.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                })
            })
    }

    editBook = (id, name, categories, author, availableCopies) => {
        BooksService.editBook(id, name, categories, author, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }
    deleteBook = (id) => {
        BooksService.deleteBook(id)
            .then(() => {
                this.loadBooks();
            });
    }
    markAsTaken = (id) => {
        BooksService.markAsTaken(id)
            .then(() => {
                this.loadBooks();
            });
    }
    addBook  = (name, categories, author, availableCopies) => {
        BooksService.addBook(name, categories, author, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }


}
export default App;





