import React from 'react';
import { Link } from 'react-router-dom';


import './PostItem.css';

const PostItem = props => {
    return (
        <li className="post-item">
            <div class="card">
                <div class="image"></div>
                <div class="content">
                    <div class="location">{props.area}, Dublin {props.location}</div>
                    <div class="info">{props.accomodationType}</div>
                    <div class="info">Dates: {props.fromDate} to {props.toDate}</div>
                    <div class="info">Rent: {props.rent}&nbsp;&nbsp;&nbsp;&nbsp;Deposit: {props.deposit}</div>
                    <div class="desc">
                        Bills Included: {props.billsIncluded ? 'Yes' : 'No'}&nbsp;&nbsp;&nbsp;&nbsp;
                        {props.sharing ? 'Room Sharing' : 'Single Room'}
                    </div>
                    <p class="desc">Accomodation For: {props.accomodationFor}</p>
                    <p class="desc">Looking For: {props.lookingFor}</p>
                    <a class="action" href="#">
                        Find out more
                        <span aria-hidden="true">
                            →
                        </span>
                    </a>
                </div>
            </div>
        </li>
    );
}

export default PostItem;