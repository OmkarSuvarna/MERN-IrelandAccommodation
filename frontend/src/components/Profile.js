import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const userData = {
    username: "JohnDoe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    profileImage: "https://example.com/profile-image.jpg",
  };

  const randomInfo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
    height: "100%",
  };

  const profileImageStyle = {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    marginBottom: "20px",
  };

  const randomInfoContainerStyle = {
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    fontFamily: "'Verdana', sans-serif",
    height: "100%",
  };

  const cardStyle = {
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    margin: "20px 0",
    height: "100%",
  };

  const cardImageStyle = {
    width: "100%",
    height: "auto",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
  };

  const cardBodyStyle = {
    padding: "15px",
  };

  return (
    <div className="container mt-4 mb-4">
      <div className="row">
        <div className="col-md-6">
          <div className="card" style={containerStyle}>
            <img src={userData.profileImage} alt="Profile" style={profileImageStyle} />
            <div>
              <p className="mb-0">Name: {userData.username}</p>
              <p className="mb-0">Email: {userData.email}</p>
              <p className="mb-0">Phone: {userData.phone}</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mt-3 mt-md-0">
          <div className="card" style={containerStyle}>
            <div className="card-body">
              <h2 className="card-title text-center">Random Info</h2>
              <p className="card-text">{randomInfo}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card" style={cardStyle}>
            <img src="https://placekitten.com/300/200" alt="Card 1" style={cardImageStyle} />
            <div className="card-body" style={cardBodyStyle}>
              <h5 className="card-title">Card 1</h5>
              <p className="card-text">Some text for Card 1.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card" style={cardStyle}>
            <img src="https://placekitten.com/301/200" alt="Card 2" style={cardImageStyle} />
            <div className="card-body" style={cardBodyStyle}>
              <h5 className="card-title">Card 2</h5>
              <p className="card-text">Some text for Card 2.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card" style={cardStyle}>
            <img src="https://placekitten.com/302/200" alt="Card 3" style={cardImageStyle} />
            <div className="card-body" style={cardBodyStyle}>
              <h5 className="card-title">Card 3</h5>
              <p className="card-text">Some text for Card 3.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
