import React from 'react';

import PostItem from './PostItem';
import './PostList.css'

const PostList = props => {
    if (props.items.length === 0) {
        return (
            <div className="center">
                <h2>No Accommodations Found.</h2>
            </div>
        )
    }

    return (
        <ul className="post-list">
          {props.items.map(post => (
            <PostItem
              key={post.id}
              id={post.id}
              area={post.area}
              location={post.location}
              accomodationType={post.accomodationType}
              rent={post.rent}
              deposit={post.deposit}
              fromDate={post.fromDate}
              toDate={post.toDate}
              bedroom={post.bedroom}
              kitchen={post.kitchen}
              bath={post.bath}
              sharing={post.sharing}
              billsIncluded={post.billsIncluded}
              accomodationFor={post.accomodationFor}
              lookingFor={post.lookingFor}
            />
          ))}
        </ul>
      );
}

export default PostList;