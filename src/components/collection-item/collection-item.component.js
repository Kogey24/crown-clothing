import React from "react";
import './collection-item.styles.scss';


const CollectionItems = (id, name, imageUrl, price) => (
    <div className="collection-item" key={id}>
        <div
            className="image"
            style={{ backgroundImage: `url(${imageUrl})` }}
        />

        <span className="name">
            {name}
        </span>
        <span className="price">
            {price}
        </span>

    </div>
)


export default CollectionItems;