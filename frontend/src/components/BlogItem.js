// import {Link} from "react-router-dom"

// const BlogItem = ({title,link}) => {
//     return (
//         <div className="col-lg-4">
//             <div className="blog-item">
//                 <div className="blog-img">
//                     <img src="/img/product1.jpeg" alt="product" className="w-100" />
//                 </div>
//                 <div className="blog-content">
//                     <h2 className="blog-title"><Link to={`/blog/${link}`}>{title}</Link></h2>
//                     <div className="blog-info">
//                         <div className="blog-info-item"><i className="far fa-calendar-alt "></i><span>20.10.2020</span></div>
//                         <div className="blog-info-item"><i className="far fa-comments"></i><span>0 Comments</span></div>
//                     </div>
//                     <div className="blog-text">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
//                                 </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default BlogItem


import { Link } from "react-router-dom";
import '../App.css';


const BlogItem = ({ data }) => {
  const { location, accommodationType, rent, deposit, billsIncluded, availableFrom, status, image } = data;
  return (
    <div className="text-center col-lg-4 col-12 col-md-6 ">
      <div className="item">
        <div className="item-image">
          <img className="img-fluid" src={image} alt="flat" />
        </div>
        <div className="item-description">
          <div className="d-flex justify-content-between mb-3">
            <span className="item-price">{location}</span>
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
            <span className="item-title">{availableFrom}</span>
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

export default BlogItem;
