import Title from "./Title";
import FlatItem from "./FlatItem";
import React, { useEffect, useState } from 'react';
import Slider from 'react-slider';
// import $ from 'jquery';
// import 'jquery-ui/ui/widgets/slider';

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

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  const [durationFilter, setDurationFilter] = useState("");
  const [accommodationForFilter, setAccommodationForFilter] = useState("");
  const [suitableForFilter, setSuitableForFilter] = useState("");

  // const initializeSlider = () => {
  //   $("#slider-range").slider({
  //     range: true,
  //     min: 54,
  //     max: 242,
  //     step: 1,
  //     values: [54, 242],
  //     slide: function (e, ui) {
  //       const min = Math.floor(ui.values[0]);
  //       $('.slider-time').html(min + 'm');

  //       const max = Math.floor(ui.values[1]);
  //       $('.slider-time2').html(max + 'm');

  //       $('.box').each(function () {
  //         const value = $(this).data('start-time');
  //         if (parseInt(max) >= parseInt(value) && parseInt(min) <= parseInt(value)) {
  //           $(this).show();
  //         } else {
  //           $(this).hide();
  //         }
  //       });
  //     }
  //   });
  // };



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
    // initializeSlider();
  }, []);

  const handleDurationChange = (event) => {
    setDurationFilter(event.target.value);
  };

  const handleAccommodationForChange = (event) => {
    setAccommodationForFilter(event.target.value);
  };

  const handleSuitableForChange = (event) => {
    setSuitableForFilter(event.target.value);
  };

  // const filteredAccommodations = accommodations.filter((item) => {
  //   if (durationFilter === "") return true;
  //   return item.durationType === durationFilter;
  // });


  const filteredAccommodations = accommodations.filter((item) => {
    return (durationFilter === "" || item.durationType === durationFilter) &&
      (accommodationForFilter === "" || item.lookingFor === accommodationForFilter) &&
      (suitableForFilter === "" || item.sutiableFor === suitableForFilter); // Updated filter logic
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = accommodations.slice(indexOfFirstItem, indexOfLastItem);
  const currentItems = filteredAccommodations.slice(indexOfFirstItem, indexOfLastItem);
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
        <div className="col-lg-12">
          <div className="row filter-row">
            <div className="col-lg-3">
              <select className="filter-home-page"
                onChange={handleDurationChange}
                value={durationFilter}>
                <option value="" disabled selected>Duration</option>
                <option value="">All</option>
                <option value="Permanent">Permanent</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
            <div className="col-lg-3">
              <select className="filter-home-page"
                onChange={handleAccommodationForChange}
                value={accommodationForFilter}>
                <option value="" disabled selected>Accommodation For</option>
                <option value="">All</option>
                <option value="Females Only">Female Only</option>
                <option value="Males Only">Male Only</option>
                <option value="No Preference">Female/Male</option>
              </select>
            </div>
            <div className="col-lg-3">
              <select className="filter-home-page"
                onChange={handleSuitableForChange}
                value={suitableForFilter}>
                <option value="" disabled selected
                >Sutiable For</option>
                <option value="">All</option>
                <option value="Students">Students</option>
                <option value="Working Professionals">Working Professionals</option>
                <option value="Students & Working Professionals">Students & Working Professionals</option>
              </select>
            </div>
            <div className="col-lg-3">
              {/* <div className="slider-container">
                <Slider
                  min={54}
                  max={242}
                  defaultValue={[54, 242]}
                  renderTrack={(props, state) => <div {...props} className="track" />}
                  renderThumb={(props) => <div {...props} className="thumb" />}
                />
                <span className="slider-time">€100</span> - <span className="slider-time2">€3000</span>
              </div> */}
            </div>
          </div>


        </div>
        <div className="row">
          {currentItems.map((item) => (
            <FlatItem key={item._id} data={item} />
          ))}
        </div>
        <div className="pagination">
          {/* {[...Array(Math.ceil(accommodations.length / itemsPerPage)).keys()].map(number => ( */}
          {[...Array(Math.ceil(filteredAccommodations.length / itemsPerPage)).keys()].map(number => (
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
