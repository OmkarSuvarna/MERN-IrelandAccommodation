// import React from "react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../App.css';
import BlogItem from "./BlogItem"
import ProfileCards from "./ProfileCards"
import FlatItem from "./FlatItem2"
import { useAuth } from './AuthContext';

import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image6 from '../images/6.jpg';


const Dummyitems = [
  {
    "location": "Phibsborough, Dublin 07",
    "accommodationType": "Permanent Accommodation",
    "rent": "€500",
    "deposit": "€500",
    "billsIncluded": "No",
    "availableFrom": "1st Dec",
    "status": "Verified",
    "image": image1
  },
  {
    "location": "Ballsbridge, Dublin 04",
    "accommodationType": "Permanent Accommodation",
    "rent": "€650",
    "deposit": "€650",
    "billsIncluded": "Yes",
    "availableFrom": "27 Dec - 30th Feb",
    "status": "Not Verified",
    "image": image2
  },
  {
    "location": "Clontarf, Dublin 03",
    "accommodationType": "Permanent Accommodation",
    "rent": "€700",
    "deposit": "€500",
    "billsIncluded": "Yes",
    "availableFrom": "15 Dec",
    "status": "Not Verified",
    "image": image3
  },
  {
    "location": "Citywest, Dublin 24",
    "accommodationType": "Permanent Accommodation",
    "rent": "€600",
    "deposit": "€500",
    "billsIncluded": "Yes",
    "availableFrom": "30 Dec",
    "status": "Not Verified",
    "image": image6
  }
]


const Profile = () => {

  const { user } = useAuth();
  const { fname, lname, contact, email, _id } = user.user;

  // const [userData, setUserData] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await fetch(`http://localhost:5000/api/users/65722ef668cf455dc626deed`);
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const data = await response.json();
  //       setUserData(data);
  //     } catch (error) {
  //       console.error('Failed to fetch user data:', error);
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   if (user) {
  //     fetchUserData();
  //   }
  // }, [user]);

  const handleDelete = (postId) => {
    setUserPosts(prevPosts => prevPosts.filter(post => post._id !== postId));
  };

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        // Fetch posts data from API
        const response = await fetch('http://localhost:5000/api/accommodations');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(_id);
        const filteredPosts = data.filter(post => post.userID === _id);
        setUserPosts(filteredPosts);
      } catch (error) {
        console.error('Failed to fetch user posts:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserPosts();
  }, [_id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  return (
    <section className="contact profile-background">
      <div className="col-log-12 mainFlex2">
        <div className="main-profileFlex">
          <div className="upper-profileFlex main-profile-background">
            <div className="profileFlex-photo-left">
              <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="..." width="160" />
              <a href="#" className="btn btn-outline-dark btn-sm btn-block editProfileBtn">Edit profile</a>
            </div>
            <div className="other-profile-section">
              <div className="personal-info-profile">
                <h4 className="profile-font">Personal Info</h4>
                <p className="subprofile-font">{fname} {lname}</p>
                <p className="subprofile-font">Contact: {contact}</p>
                <p className="subprofile-font">Email: {email}</p>
              </div>
              <div>
                <h4 className="profile-font">About</h4>
                <p className="subprofile-font">Student</p>
                <p className="subprofile-font">Dublin Business School</p>
              </div>
            </div>
          </div>

          <div className="profile-body-cards">
            <h2>Post History</h2>
            {/* <div className="profile-down-cards" >
              {Dummyitems.map((item, index) => (
                <ProfileCards key={index} data={item} />
              ))}
            </div> */}
            <div className="profile-down-cards" >
              {userPosts.map((item, index) => (
                <FlatItem
                  key={index}
                  data={item}
                  onDelete={handleDelete} />
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Profile;
