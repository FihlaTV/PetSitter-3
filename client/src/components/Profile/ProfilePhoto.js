import React from "react";
import fakeprofile from "./fakeuser.jpeg";

export const ProfilePhoto = props => (
/*  <div className="profilephoto" onClick={ () => props.id }>
        <img alt={props.name} src={props.image} />
    </div> */

    <div className="fakeprofile">
        <img src={fakeprofile} width="200" height="205" />
    </div>
)