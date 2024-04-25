import React from "react";

const Categories = (props) => {
    return (
    <ul className="list-group">
        {props.categories.map((category) => (
            <li
                key={category.id}
                className="list-group-item d-flex justify-content-between align-items-center"
            >
                {category.name}
                <span className="badge bg-primary rounded-pill"></span> {/* Optional badge */}
            </li>
        ))}
    </ul>
    )
}
export default Categories;
