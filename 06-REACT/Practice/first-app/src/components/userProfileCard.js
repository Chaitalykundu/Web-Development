import "./userProfile.css";

const image = "../assets/profilePhoto.png";
const name = "Chaitaly Kundu";

function UserProfile(){
    return (
        <>
        <div className="container">

            <img src={image} alt="userProfile"/>
            Author: {name}
        </div>
        </>
    );
}

export default UserProfile;