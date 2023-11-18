import React from "react";
import { useParams } from "react-router-dom";

import PostDescription from "../components/PostDescription";

const DUMMY_PLACES = [
  // {
  //   id: "p1",
  //   title: "Empire State Building",
  //   description: "One of the most famous sky scrapers in the world!",
  //   imageUrl:
  //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
  //   address: "20 W 34th St, New York, NY 10001",
  //   location: {
  //     lat: 40.7484405,
  //     lng: -73.9878584,
  //   },
  //   creator: "u1",
  // },
  {
    id: "p1",
    image:
      "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    area: "Phibsborough",
    location: "07",
    eircode: "D07 FT26",
    accomodationType: "Permanent Accommodation",
    rent: 500,
    deposit: 500,
    fromDate: "1st Nov",
    toDate: "30th Nov",
    bedroom: 2,
    kitchen: 1,
    bath: 2,
    sharing: true,
    billsIncluded: false,
    accomodationFor: "Student",
    lookingFor: "Male",
    shared: 2,
    extraCharges: "Wifi, Heating",
    stores: "Tesco LIDL AlDI",
    colleges: "DBS NCI UCD",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    creator: "u1",
  },
];

const Post = () => {
  // const userId = useParams().userId;
  // const loadedPost = DUMMY_PLACES.filter((place) => place.creator === userId);
  // return <PostDescription items={loadedPost} />;
  return <PostDescription items={DUMMY_PLACES} />;
};

export default Post;
