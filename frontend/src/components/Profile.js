import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
import BlogItem from "./BlogItem"
import ProfileCards from "./ProfileCards"


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
  return (
    <section className="contact profile-background">
      <div className="row py-5 px-4">
        <div className="col-md-8 mx-auto ">
          <div className="bg-white shadow rounded overflow-hidden">
            <div className="px-4 pt-0 pb-4 cover profile-cover">
              <div className="media align-items-end profile-head col-lg-12">

                <div className="profile mr-3 profile-btn col-lg-2">
                  <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="..." width="160" className="rounded mb-2 img-thumbnail" />
                  <a href="#" className="btn btn-outline-dark btn-sm btn-block">Edit profile</a>
                </div>
                <div className="px-4 py-3 col-lg-10">
                  <div className="p-4 rounded shadow-sm bg-light profile-info">
                    <div className="col-lg-5">
                      <h4 className="mb-0">Personal Info</h4>
                      <p className="font-italic mb-0">John Doe</p>
                      <p className="font-italic mb-0">Contact: 0899877123</p>
                      <p className="font-italic mb-0">Email: john.doe@gmail.com</p>
                    </div>
                    <div className="col-lg-5">
                      <h4 className="mb-0">About</h4>
                      <p className="font-italic mb-0">Student</p>
                      <p className="font-italic mb-0">Dublin Business School</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row">
                <div className="page-content2">
                  <div className="container">
                    <legend>
                      <h2>Post History</h2>
                    </legend>

                    <div className="row">
                      {Dummyitems.map((item, index) => (
                        // <BlogItem key={index} data={item} />
                        <ProfileCards key={index} data={item} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Profile;
