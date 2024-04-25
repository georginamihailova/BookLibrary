import React from "react";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const BookEdit = (props) => {

    const navigate = useNavigate()


    const [formData, updateFormData] = React.useState({
        name: "",
        author: 1,
        availableCopies: 0,
        categories: "NOVEL",
    });

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.book.name;
        const authorId = formData.author !== null ? formData.author : props.book.author.id;
        const availableCopies = formData.availableCopies !== 0 ? formData.availableCopies : props.book.availableCopies;
        const categories = formData.categories !== 0 ? formData.categories : props.book.categories;

        console.log(props.book.id, name, authorId, availableCopies, categories)
        props.onEditBook(props.book.id, name, categories, authorId, availableCopies);

        navigate("/books")
    };



    return (
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Title</label>
                        <input
                            defaultValue={props.book.name}
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder={props.book.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <select
                            name="author"
                            className="form-control"
                            onChange={handleChange}
                        >
                            {props.authors.map((term) => (
                                <option key={term.id} value={term.id}>
                                    {term.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="availableCopies">Available Copies</label>
                        <input
                            defaultValue={props.book.availableCopies}
                            type="number"
                            className="form-control"
                            id="availableCopies"
                            name="availableCopies"
                            placeholder={props.book.availableCopies}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select
                            name="categories"
                            className="form-control"
                            onChange={handleChange}
                        >
                            {props.categoriesAll.map((term) => {
                                return (
                                    <option key={term.id} value={term.name}>
                                        {term.name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>

                    <button id="submit" type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookEdit;