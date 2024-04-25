import React from "react";
import { useNavigate } from 'react-router-dom';

const BooksAdd = (props) => {

    const navigate = useNavigate()

    const [formData, updateFormData] = React.useState({
        name: "",
        category: "",
        author: 1,
        availableCopies: 0
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) =>{
        e.preventDefault();

        const name = formData.name;
        const category = formData.category;
        const author = formData.author;
        const availableCopies = formData.availableCopies;

        props.onAddBook(name,category,author,availableCopies)

        navigate('/books')
    }


    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group my-3">
                        <label htmlFor="name" className={"h5"}>Book Title</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Book Title"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            {props.categoriesAll.map((term) =>
                                <option key={term.id} value={term.name}>{term.name}</option>
                            )}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Author</label>
                        <select name="author" className="form-control" onChange={handleChange}>
                            {props.authors.map((term) =>
                                <option key={term.id} value={term.id}>{term.name}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="availableCopies" className={"h5"}>Available Copies</label>
                        <input type="number"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               placeholder="availableCopies"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <button id="submit" type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>

    )
}
export default BooksAdd;
