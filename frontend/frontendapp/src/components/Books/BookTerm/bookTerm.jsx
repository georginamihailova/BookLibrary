import React from 'react';
import {Link} from 'react-router-dom';

const bookTerm = (props) => {
    return (
        <tr>
            <td>{props.book.name}</td>
            <td>{props.book.categories}</td>
            <td>{props.book.author.name}</td>
            <td>{props.book.availableCopies}</td>
            <td className={"text-right"}>
                <button type="button" title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.book.id)}>
                    Delete
                </button>
                <Link className={"btn btn-info ml-2"}
                      onClick={() => props.onEdit(props.book.id)}
                      to={`/books/edit/${props.book.id}`}>
                    Edit
                </Link>
                <button type="button" title={"Mark as taken"} className={"btn btn-danger"}
                        onClick={() => props.onMark(props.book.id)}>
                    Mark as Taken
                </button>
            </td>
        </tr>
    )
}
export default bookTerm;