import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons';


const FlatItem = ({ data, onDelete }) => {

    const deletePost = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/accommodations/${data._id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Call the onDelete prop function to update the state in the parent component
            onDelete(data._id);
        } catch (error) {
            console.error('Failed to delete post:', error);
        }
    };


    const handleClick = () => {
        localStorage.setItem('flatId', data._id);
    };

    const {
        eircode,
        streetName,
        county,
        accommodationType,
        durationType,
        fromDate,
        toDate,
        furnished,
        lookingFor,
        bedroom,
        bath,
        kitchen,
        livingRoom,
        nearby,
        rent,
        deposit,
        billsIncluded,
        roomSharing,
        bills,
    } = data;
    function formatDate(isDateString) {
        const dateObj = new Date(isDateString);
        const day = String(dateObj.getDate()).padStart(2, '0');
        const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
        const year = dateObj.getFullYear();
        return `${day}-${month}-${year}`;
    }

    const [isHeartFilled, setIsHeartFilled] = useState(false);

    const toggleHeart = () => {
        setIsHeartFilled(!isHeartFilled);
    };

    const iconStyle = {
        color: isHeartFilled ? 'red' : 'initial',
        cursor: 'pointer'
    };

    return (
        <div className="text-center col-lg-4 col-12 col-md-6 ">
            <div className="item">
                <div className="item-image">
                    {/* <img className="img-fluid" src={} alt="flat" /> */}
                </div>
                <div className="item-description">
                    <div className="d-flex justify-content-between mb-3">
                        <span className="item-price">{streetName}, {eircode}</span>
                        <FontAwesomeIcon
                            icon={faTrash}
                            style={{ color: '#364465', cursor: 'pointer' }}
                            onClick={deletePost} />
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="item-title">{durationType} Accommodation</span>
                        <span class="card-icon-size">{bedroom}   <i class="fas fa-solid fa-bed"></i>     {bath}   <i class="fas fa-solid fa-bath"></i>
                        </span>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <span className="item-title">Rent: €{rent}</span>
                        <span className="item-title"> Deposit: €{deposit}</span>
                        {/* <i className="fas fa-check-circle"></i> <span></span> */}
                        {/* <span className="item-title">Bills Included: {billsIncluded}</span> */}
                        <span>
                            {
                                furnished ?
                                    <><FontAwesomeIcon icon={faCircleCheck} style={{ color: '#364465' }} />  <span>Verified</span></> :
                                    <><FontAwesomeIcon icon={faCircleXmark} style={{ color: '#364465' }} />  <span>Not Verified</span></>
                            }
                        </span>
                    </div>
                    <div className="item-icon d-flex alig-items-center justify-content-between">
                        <span className="item-title">Dates: {formatDate(fromDate)} - {formatDate(toDate)}</span>
                        {/* <Link to={`/accommododetails/${data._id}`} className="item-title"> */}
                        <Link to={{
                            pathname: `/accommododetails/${data._id}`,
                            state: { data }
                        }}
                            className="item-title"
                            onClick={handleClick}>
                            <button className="btn btn-detail">View</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlatItem;
