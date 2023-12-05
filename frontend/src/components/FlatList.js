import Title from "./Title";
import FlatItem from "./FlatItem";
import React, { useEffect, useState } from 'react';


import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image6 from '../images/6.jpg';

// const Dummyitems = [
//   {
//       "location": "Phibsborough, Dublin 07",
//       "accommodationType": "Permanent Accommodation",
//       "rent": "€500",
//       "deposit": "€500",
//       "billsIncluded": "No",
//       "availableFrom": "1st Dec",
//       "status": "Verified",
//       "image": image1
//   },
//   {
//       "location": "Ballsbridge, Dublin 04",
//       "accommodationType": "Permanent Accommodation",
//       "rent": "€650",
//       "deposit": "€650",
//       "billsIncluded": "Yes",
//       "availableFrom": "27 Dec - 30th Feb",
//       "status": "Not Verified",
//       "image": image2
//   },
//   {
//       "location": "Clontarf, Dublin 03",
//       "accommodationType": "Permanent Accommodation",
//       "rent": "€700",
//       "deposit": "€500",
//       "billsIncluded": "Yes",
//       "availableFrom": "15 Dec",
//       "status": "Not Verified",
//       "image": image3
//   },
//   {
//       "location": "Rathmines, Dublin 06",
//       "accommodationType": "Permanent Accommodation",
//       "rent": "€800",
//       "deposit": "€500",
//       "billsIncluded": "No",
//       "availableFrom": "30 Dec - 1 Jan",
//       "status": "Verified",
//       "image": image4
//   },
//   {
//       "location": "Ballsbridge, Dublin 04",
//       "accommodationType": "Permanent Accommodation",
//       "rent": "€600",
//       "deposit": "€500",
//       "billsIncluded": "Yes",
//       "availableFrom": "30 Dec",
//       "status": "Not Verified",
//       "image": image5
//   },
//   {
//       "location": "Citywest, Dublin 24",
//       "accommodationType": "Permanent Accommodation",
//       "rent": "€600",
//       "deposit": "€500",
//       "billsIncluded": "Yes",
//       "availableFrom": "30 Dec",
//       "status": "Not Verified",
//       "image": image6
//   }
// ]

const FlatList = () => {
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/accommodations');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAccommodations(data);
      } catch (error) {
        console.error('Failed to fetch accommodations:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAccommodations();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  const title = {
    text: "Dublin Housing Rentals",
    description: "Find Your Perfect Space in the Heart of Ireland",
  };
  return (
    <section className="section-all-re">
      <div className="container">
        <Title title={title.text} description={title.description} />
        <div className="row">
          {accommodations.map((item) => (
            <FlatItem key={item._id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlatList;
