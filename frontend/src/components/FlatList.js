import Title from "./Title";
import FlatItem from "./FlatItem";
import React, { useEffect, useState } from 'react';

import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image6 from '../images/6.jpg';


const FlatList = () => {
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1); //
  const [itemsPerPage, setItemsPerPage] = useState(6); //

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


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = accommodations.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = pageNumber => setCurrentPage(pageNumber);



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
        {/* <div className="row">
          {accommodations.map((item) => (
            <FlatItem key={item._id} data={item} />
          ))}
        </div> */}

        <div className="row">
          {currentItems.map((item) => (
            <FlatItem key={item._id} data={item} />
          ))}
        </div>
        <div className="pagination">
          {[...Array(Math.ceil(accommodations.length / itemsPerPage)).keys()].map(number => (
            <button key={number} onClick={() => paginate(number + 1)}>
              {number + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlatList;
