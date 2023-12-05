// import Slider from "react-slick";
// import Title from "./Title"
// import ReferenceItem from "./ReferenceItem"
// import React, { useEffect, useState } from 'react';

// const References = () => {
//     const [accommodations, setAccommodations] = useState([]);


//     useEffect(() => {
//         // Step 3: Use the useEffect hook

//         const fetchAccommodations = async () => {
//             try {
//                 // Step 4: Fetch data from the API
//                 const response = await fetch('http://localhost:5000/api/accommodations');

//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }

//                 // Step 5: Process the response
//                 const data = await response.json();

//                 // Step 6: Update the state
//                 setAccommodations(data);
//             } catch (error) {
//                 // Step 7: Handle errors
//                 console.error('Failed to fetch accommodations:', error);
//             }
//         };

//         fetchAccommodations();
//     }, []);

//     return (
//         <div>
//             {accommodations.map((accommodation) => (
//                 <div key={accommodation._id}>
//                     <h2>Accommodation Details</h2>
//                     <p>Eircode: {accommodation.eircode}</p>
//                     <p>Street Name: {accommodation.streetName}</p>
//                     <p>County: {accommodation.county}</p>
//                     <p>Type: {accommodation.accommodationType}</p>
//                     <p>Duration: {accommodation.durationType}</p>
//                     <p>From: {new Date(accommodation.fromDate).toLocaleDateString()}</p>
//                     <p>To: {new Date(accommodation.toDate).toLocaleDateString()}</p>
//                     <p>Furnished: {accommodation.furnished ? 'Yes' : 'No'}</p>
//                     <p>Looking For: {accommodation.lookingFor}</p>
//                     <p>Bedrooms: {accommodation.bedroom}</p>
//                     <p>Baths: {accommodation.bath}</p>
//                     <p>Kitchen: {accommodation.kitchen ? 'Yes' : 'No'}</p>
//                     <p>Living Room: {accommodation.livingRoom ? 'Yes' : 'No'}</p>
//                     <p>Nearby: {accommodation.nearby.join(', ')}</p>
//                     <p>Rent: {accommodation.rent}</p>
//                     <p>Deposit: {accommodation.deposit}</p>
//                     <p>Bills Included: {accommodation.billsIncluded ? 'Yes' : 'No'}</p>
//                     <p>Room Sharing: {accommodation.roomSharing ? 'Yes' : 'No'}</p>
//                     <p>Bills: {accommodation.bills.join(', ')}</p>
//                     <p>Room Sharing Number: {accommodation.roomSharingNumber}</p>
//                     <p>Contact Number: {accommodation.contactNumber}</p>
//                     <p>Email: {accommodation.email}</p>
//                 </div>
//             ))}
//         </div>

//     );
// }

// export default References;


import React, { useEffect, useState } from 'react';

const References = () => {
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

    return (
        <div>
            {accommodations.map((accommodation) => (
                <div key={accommodation._id}>
                    <h2>Accommodation Details</h2>
                    <p>Eircode: {accommodation.eircode}</p>
                    <p>Street Name: {accommodation.streetName}</p>
                    <p>County: {accommodation.county}</p>
                    <p>Type: {accommodation.accommodationType}</p>
                    <p>Duration: {accommodation.durationType}</p>
                    <p>From: {new Date(accommodation.fromDate).toLocaleDateString()}</p>
                    <p>To: {new Date(accommodation.toDate).toLocaleDateString()}</p>
                    <p>Furnished: {accommodation.furnished ? 'Yes' : 'No'}</p>
                    <p>Looking For: {accommodation.lookingFor}</p>
                    <p>Bedrooms: {accommodation.bedroom}</p>
                    <p>Baths: {accommodation.bath}</p>
                    <p>Kitchen: {accommodation.kitchen ? 'Yes' : 'No'}</p>
                    <p>Living Room: {accommodation.livingRoom ? 'Yes' : 'No'}</p>
                    <p>Nearby: {accommodation.nearby.join(', ')}</p>
                    <p>Rent: {accommodation.rent}</p>
                    <p>Deposit: {accommodation.deposit}</p>
                    <p>Bills Included: {accommodation.billsIncluded ? 'Yes' : 'No'}</p>
                    <p>Room Sharing: {accommodation.roomSharing ? 'Yes' : 'No'}</p>
                    <p>Bills: {accommodation.bills.join(', ')}</p>
                    <p>Room Sharing Number: {accommodation.roomSharingNumber}</p>
                    <p>Contact Number: {accommodation.contactNumber}</p>
                    <p>Email: {accommodation.email}</p>
                </div>
            ))}
        </div>
    );
}

export default References;
