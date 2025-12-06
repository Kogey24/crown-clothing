import React from "react";
import './collection-item.styles.scss';


const CollectionItems = ({ id, name, imageUrl, price }) => {
    console.log(imageUrl);
    console.log(id);
    console.log(name);
    console.log(price);

    return (
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
    );
}


export default CollectionItems;