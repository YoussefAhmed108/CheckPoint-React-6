import React from "react";
import PropTypes from "prop-types";

const Profile = ({name , img , bio , profession,Click}) => {
    const handleClick = e =>{
        e.preventDefault();
        Click(name)
      }
    return <div>
        <img src={img}></img>
        <h1> Hi my Name is <a onClick={handleClick} style={{}}>{name}</a></h1>
        <h2> {bio}</h2>
        <h3> I work as a {profession}</h3>
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