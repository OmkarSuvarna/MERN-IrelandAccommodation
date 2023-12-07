import { Link } from "react-router-dom";
import '../App.css';


const ProfileCards = ({ data }) => {
    const { location, accommodationType, rent, deposit, billsIncluded, availableFrom, status, image } = data;
    return (
        <div className="text-center col-lg-6 col-12 col-md-6 " style={{ fontSize: '14px' }}>
            <div className="item">
                <div className="item-image">
                    <img className="img-fluid" src={image} alt="flat" />
                </div>
                <div className="item-description">
                    <div className="d-flex justify-content-between mb-3">
                        <span className="item-price" style={{ fontSize: '16px', fontWeight: 600 }}>{location}</span>
                        <i class="fas fa-regular fa-heart"></i>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="item-title">{accommodationType}</span>
                        <span class="card-icon-size">      2    <i class="fas fa-solid fa-bed"></i>     2    <i class="fas fa-solid fa-bath"></i>
                        </span>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <span className="item-title">Rent: {rent}</span>
                        <span className="item-title"> Deposit: {deposit}</span>
                        <span className="item-title">Bills Included: {billsIncluded}</span>
                    </div>
                    <div className="item-icon d-flex alig-items-center justify-content-between">
                        {/* <div>
              <i className="fas fa-check-circle"></i>{" "}
              <span>Lorem ipsum dolor</span>
              </div> */}
                        <span className="item-title" style={{ fontSize: '14px' }}>{availableFrom}</span>
                        <div>
                            <i className="fas fa-check-circle"></i> <span> {status} </span>
                        </div>
                        <Link to={`/flat/${data}`} className="item-title">
                            <button className="btn btn-detail">View</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCards;
