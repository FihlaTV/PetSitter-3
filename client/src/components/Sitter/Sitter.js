import React from "react";
import { Image, Rating } from "semantic-ui-react";

export const Sitter = (props) => (

    <div className="petSitter">
        <Image src={props.profilePhoto} alt="profile pic" size="medium" className="img-fluid hoverable mx-auto d-block" circular />
        <br />
        <h1>{props.name}</h1>
        <br />
        <Rating maxRating={5} defaultRating={props.rating} icon='star' size='massive' disabled />
    </div>
)