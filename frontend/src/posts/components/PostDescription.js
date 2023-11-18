import React, { useState } from "react";

import Button from "../../shared/components/Buttons/Buttons";
import Modal from "../../shared/components/UIElements/Modal";
import "./PostDescription.css";

const PostDescription = (props) => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  console.log(props);
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <h2>Error Post Not Found</h2>
      </div>
    );
  }

  const item = props.items[0];

  return (
    // <li className="place-item">
    //     <div className="place-item__image">
    //       <img src={props.image} alt={props.title} />
    //     </div>
    //     <div className="place-item__info">
    //       <h2>{props.title}</h2>
    //       <h3>{props.address}</h3>
    //       <p>{props.description}</p>
    //     </div>
    //     <div className="place-item__actions">
    //       <button>VIEW ON MAP</button>
    //       <button>EDIT</button>
    //       <button>DELETE</button>
    //     </div>
    // </li>
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <h2>THE MAP!</h2>
        </div>
      </Modal>
      <div className="post-body">
        <div className="post-image">Hi</div>
        <div className="post-title post-flex-container">
          <span>
            {item.area}, Dublin {item.location}
          </span>
          <span>EIRCode: {item.eircode}</span>
        </div>
        <div className="post-flex-container">
          <span>{item.accomodationType}</span>
          <span>
            {item.bedroom} Bedroom {item.kitchen} Kitchen {item.bath} Bath
          </span>
        </div>
        <div className="post-flex-container">
          <span>
            Rent: {item.rent} Deposit: {item.deposit}
          </span>
          <span>
            From {item.fromDate} to {item.toDate}
          </span>
        </div>
        <div className="post-flex-container">
          <span>Accommodation For: {item.accomodationFor}</span>
          <span>Looking For: {item.lookingFor}</span>
        </div>
        <div className="post-flex-container">
          <span>Room Sharing: {item.sharing ? "Yes" : "No"}</span>
          <span>Room Shared Between: {item.shared} People</span>
        </div>
        <div className="post-flex-container">
          <span>Bills Included: {item.billsIncluded ? "Yes" : "No"}</span>
          <span>Extra Charges: {item.extraCharges}</span>
        </div>

        <div className="post-subtitle">Near By..</div>
        <div className="post-description-list">
          <span>Stores:</span>
          <span>
            <ul>
              <li>{item.stores}</li>
              <li>LIDL</li>
              <li>Aldi</li>
            </ul>
          </span>
        </div>
        <div className="post-description-list">
          <span>Colleges:</span>
          <span>
            <ul>
              <li>{item.colleges}</li>
              <li>NCI</li>
              <li>UCD</li>
            </ul>
          </span>
        </div>
        <div className="post-subtitle">Description</div>
        <div>{item.description}</div>
        <div>
          <Button inverse onClick={openMapHandler}>
            View on Map
          </Button>
          <Button inverse>Street View</Button>
          <Button primary>Share</Button>
          <Button danger>Edit</Button>
          <Button danger>Delete</Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PostDescription;
