import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
    const click = e =>{
        alert(`Hi ${props.name}`)
      }
    return <div>
        <div> {props.children}</div>
        <h1> Hi my Name is <a onClick={click} style={{}}>{props.name}</a></h1>
        <h2> {props.bio}</h2>
        <h3> I work as a {props.profession}</h3>
    </div>
}

Profile.defaultProps={
    name : "John Doe",
    bio : "I am no one",
    profession : "Unemployed"

}

Profile.propTypes = {
    name : PropTypes.string,
    bio :   PropTypes.string,
    profession : PropTypes.string
}
export default Profile