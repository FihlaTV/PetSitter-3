import React from "react";
// import fakeprofile from "./fakeuser.jpeg";
import { Image } from "semantic-ui-react";
import "./ProfilePhoto.css";

export const ProfilePhoto = (props) => (

    <div className="profilepic">
        <Image src={props.profilePhoto} alt="profile pic" size="medium" className="img-fluid hoverable mx-auto d-block" circular />
    </div>
)