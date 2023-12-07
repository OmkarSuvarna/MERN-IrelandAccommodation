import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import ImageGallery from 'react-image-gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStore, faBurger, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

import image1 from '../images/1.jpg';
import image2 from '../images/3.jpg';
import image3 from '../images/6.jpg';
import image4 from '../images/2.jpg';
import image5 from '../images/4.jpg';
import image6 from '../images/5.jpg';

const FlatDetail = () => {
    const [flatData, setFlatData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAccommodations = async () => {
            try {
                const id = localStorage.getItem('flatId');
                const response = await fetch(`http://localhost:5000/api/accommodations/${id}`);
                console.log(response); // Changed to backticks
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setFlatData(data);
            } catch (error) {
                console.error('Failed to fetch accommodations:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchAccommodations();
    }, []);
    if (!flatData) return <p>Loading...</p>;

    const images = [
        {
            original: image1,
            thumbnail: image1,
        },
        {
            original: image2,
            thumbnail: image2,
        },
        {
            original: image3,
            thumbnail: image3,
        },
    ];

    const {
        streetName,
        county,
        eircode,
        rent,
        deposit,
        fromDate,
        toDate,
        accommodationType,
        lookingFor,
        livingRoomShared,
        kitchenShared,
        bedroom,
        bath,
        sutiableFor,
        durationType,
        furnished,
        billsIncluded,
        bills,
        roomSharing,
        contactNumber,
        email,
        description,
        colleges,
        store,
        fastFood,
        roomSharingNumber

        // durationType,
        // furnished,
        // kitchen,
        // livingRoom,
        // nearby,
        // billsIncluded,
        // roomSharing,
        // bills,
    } = flatData;

    function formatDate(isDateString) {
        const dateObj = new Date(isDateString);
        const day = String(dateObj.getDate()).padStart(2, '0');
        const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
        const year = dateObj.getFullYear();
        return `${day}-${month}-${year}`;
    }

    return (
        <div className="flat-detail">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">Accommodation Detail</h1>
                            {/* <h2 className="page-description">Lorem ipsum dolor sit amet</h2> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="fd-top flat-detail-content">
                            <div>
                                {/* <h3 className="flat-detail-title">Phibsborough, Dublin 07</h3> */}
                                <h3 className="fd-price">{streetName}, {eircode}</h3>
                                {/* <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                                Lorem ipsum dolor sit amet</p> */}
                            </div>
                            <div>
                                <span className="fd-price">€{rent} / per month</span>
                            </div>
                        </div>
                        <ImageGallery flickThreshold={0.50} slideDuration={0} items={images} showNav={false} showFullscreenButton={false} showPlayButton={false} />
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="fd-item">
                                    <h4>Description</h4>
                                    <p className="p-desc-detail">{description}</p>
                                </div>
                                <div className="fd-item fd-property-detail">
                                    <h4>Property Details</h4>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <span>Eircode: </span>
                                            <span>{eircode}</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <span>Temporary Accommodation</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <span>{bedroom} Bedroom </span>
                                            <span>{bath} Bath </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <span>County: {county}</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <span>Looking For: {lookingFor}</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <span>Kitchen Shared: </span>
                                            <span>{kitchenShared ? "Yes" : "No"}</span>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <span>Sutiable For: {sutiableFor}</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <span>Room Shared Between: {roomSharingNumber}</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <span>Living Room Shared: </span>
                                            <span>{livingRoomShared ? "Yes" : "No"}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="fd-item fd-features">
                                    <h4>Near By</h4>
                                    <div className="row">
                                        {colleges.length > 0 && colleges.map((college, index) => (
                                            <div key={index} className="col-lg-4">
                                                <FontAwesomeIcon icon={faGraduationCap} />
                                                <span>{college}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="row">
                                        {store.length > 0 && store.map((store, index) => (
                                            <div key={index} className="col-lg-4">
                                                <FontAwesomeIcon icon={faShoppingCart} />
                                                <span>{store}</span>
                                            </div>
                                        ))}
                                        {fastFood.length > 0 && fastFood.map((fastFood, index) => (
                                            <div key={index} className="col-lg-4">
                                                <FontAwesomeIcon icon={faBurger} />
                                                <span>{fastFood}</span>
                                            </div>
                                        ))}
                                    </div>
                                    {/* <div className="row">
                                        <div className="col-lg-4">
                                            <i className="fa fa-check" ></i>
                                            <span>Lorem Ipsum</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <i className="fa fa-check" ></i>
                                            <span>Lorem Ipsum</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <i className="fa fa-check" ></i>
                                            <span>Lorem Ipsum</span>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="fd-item">
                                    <h4>Maps</h4>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15105200.564429!2d37.91245092855647!3d38.99130948591772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2zVMO8cmtpeWU!5e0!3m2!1str!2str!4v1630158674074!5m2!1str!2str" width="100%" height="450" loading="lazy"></iframe>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="fd-sidebar-item">
                                    <div>
                                        <h4>Dates Available: <br /><span className="additionalInfo-descp">From {formatDate(fromDate)} To<br /> {formatDate(toDate)}</span></h4>
                                    </div>
                                    <div>
                                        <h4>Rent: <span className="additionalInfo-descp">€{rent}</span></h4>
                                    </div>
                                    <div>
                                        <h4>Deposit: <span className="additionalInfo-descp">€{deposit}</span></h4>
                                    </div>
                                </div>
                                {!billsIncluded && (
                                    <div className="fd-sidebar-item">
                                        <h4>Additional Bills</h4>
                                        <ul className="category-ul">
                                            {bills.map((bill, index) => (
                                                <li key={index}>{bill}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                <div className="fd-sidebar-item">
                                    <h4>Recently Added</h4>
                                    <div className="recently-item">
                                        <img src={image4} alt="detail" width="50px" />
                                        <span>Ballsbridge, Dublin 04</span>
                                    </div>
                                    <div className="recently-item">
                                        <img src={image5} alt="detail" width="50px" />
                                        <span>Rathmines, Dublin 06</span>
                                    </div>
                                    <div className="recently-item">
                                        <img src={image6} alt="detail" width="50px" />
                                        <span>Ballsbridge, Dublin 04</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlatDetail