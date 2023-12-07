import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
// import { faCircleXmark, faCircleCheck, faHeart as farFaHeart } from '@fortawesome/free-solid-svg-icons';
// import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons';
// import React, { useState } from 'react';


const FlatItem = ({ data }) => {
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

  // const [isLiked, setIsLiked] = useState(false);
  // const toggleHeart = () => {
  //   setIsLiked(!isLiked);
  // };

  return (
    <div className="text-center col-lg-4 col-12 col-md-6 ">
      <div className="item">
        <div className="item-image">
          {/* <img className="img-fluid" src={} alt="flat" /> */}
        </div>
        <div className="item-description">
          <div className="d-flex justify-content-between mb-3">
            <span className="item-price">{streetName}, {eircode}</span>
            <i class="fas fa-solid fa-heart"></i>
            {/* <button onClick={toggleHeart} style={{ border: 'none', background: 'none' }}>
              <FontAwesomeIcon icon={faCircleCheck}
                icon={isLiked ? fasFaHeart : farFaHeart}
                color={isLiked ? 'red' : 'black'} />
            </button> */}

          </div>
          <div className="d-flex justify-content-between">
            <span className="item-title">{durationType} Accommodation</span>
            <span class="card-icon-size">{bedroom}   <i class="fas fa-solid fa-bed"></i>     {bath}   <i class="fas fa-solid fa-bath"></i>
            </span>
          </div>
          <div className="d-flex justify-content-between mb-3">
          </div>
          <div className="d-flex justify-content-between mb-3">
            <span className="item-title">Rent: {rent}</span>
            <span className="item-title"> Deposit: {deposit}</span>
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
