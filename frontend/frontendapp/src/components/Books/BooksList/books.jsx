import React from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import BookTerm from "../BookTerm/bookTerm.jsx";

class Books extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 5,
        };
    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.books.length / this.state.size);

        const paginatedBooks = this.getBooksPage(offset, nextPageOffset);

        return (
            <div className={"container mm-4 mt-5"}>
                <div className={"row"}>
                    <div className={"table-responsive"}>
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Name</th>
                                <th scope={"col"}>Category</th>
                                <th scope={"col"}>Author</th>
                                <th scope={"col"}>Available Copies</th>
                            </tr>
                            </thead>
                            <tbody>
                            {paginatedBooks}
                            </tbody>
                        </table>
                    </div>

                    <div className="col mb-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <Link className={"btn btn-block btn-dark"} to={"/books/add"}>Add new book</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination justify-content-center my-3"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    nextClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextLinkClassName={"page-link"}
                    activeClassName={"active"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                />

            </div>
        );
    }

    handlePageClick = (data) => {
        const selected = data.selected;
        this.setState({
            page: selected,
        });
    };

    getBooksPage = (offset, nextPageOffset) => {
        return this.props.books
            .slice(offset, nextPageOffset)
            .map((book, index) => (
                <BookTerm
                    key={index}
                    book={book}
                    onMark={this.props.onMark}
                    onDelete={this.props.onDelete}
                    onEdit={this.props.onEdit}
                />
            ));
    };
}

export default Books;
