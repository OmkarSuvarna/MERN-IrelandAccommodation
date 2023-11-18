import React from 'react';
import PostList from '../components/PostList';

const Landing = () => {
    const POSTS = [
        {
          id: 'p1',
          image:
          'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          area: 'Phibsborough',
          location:'07',
          accomodationType: 'Permanent Accommodation',
          rent: 500,
          deposit: 500,
          fromDate: '1st Nov',
          toDate: '30th Nov',
          bedroom : 2,
          kitchen: 1,
          bath: 2,
          sharing: true,
          billsIncluded : false,
          accomodationFor: 'Student',
          lookingFor: 'Male',
        },
        {
          id: 'p1',
          image:
          'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          area: 'Phibsborough',
          location:'07',
          accomodationType: 'Permanent Accommodation',
          rent: 500,
          deposit: 500,
          fromDate: '1st Nov',
          toDate: '30th Nov',
          bedroom : 2,
          kitchen: 1,
          bath: 2,
          sharing: true,
          billsIncluded : false,
          accomodationFor: 'Student',
          lookingFor: 'Male',
        },
        {
          id: 'p1',
          image:
          'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          area: 'Phibsborough',
          location:'07',
          accomodationType: 'Permanent Accommodation',
          rent: 500,
          deposit: 500,
          fromDate: '1st Nov',
          toDate: '30th Nov',
          bedroom : 2,
          kitchen: 1,
          bath: 2,
          sharing: true,
          billsIncluded : false,
          accomodationFor: 'Student',
          lookingFor: 'Male',
        },
        {
          id: 'p1',
          image:
          'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          area: 'Phibsborough',
          location:'07',
          accomodationType: 'Permanent Accommodation',
          rent: 500,
          deposit: 500,
          fromDate: '1st Nov',
          toDate: '30th Nov',
          bedroom : 2,
          kitchen: 1,
          bath: 2,
          sharing: true,
          billsIncluded : false,
          accomodationFor: 'Student',
          lookingFor: 'Male',
        },
        {
          id: 'p1',
          image:
          'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          area: 'Phibsborough',
          location:'07',
          accomodationType: 'Permanent Accommodation',
          rent: 500,
          deposit: 500,
          fromDate: '1st Nov',
          toDate: '30th Nov',
          bedroom : 2,
          kitchen: 1,
          bath: 2,
          sharing: true,
          billsIncluded : false,
          accomodationFor: 'Student',
          lookingFor: 'Male',
        },
        {
          id: 'p1',
          image:
          'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          area: 'Phibsborough',
          location:'07',
          accomodationType: 'Permanent Accommodation',
          rent: 500,
          deposit: 500,
          fromDate: '1st Nov',
          toDate: '30th Nov',
          bedroom : 2,
          kitchen: 1,
          bath: 2,
          sharing: true,
          billsIncluded : false,
          accomodationFor: 'Student',
          lookingFor: 'Male',
        },
        {
          id: 'p1',
          image:
          'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          area: 'Phibsborough',
          location:'07',
          accomodationType: 'Permanent Accommodation',
          rent: 500,
          deposit: 500,
          fromDate: '1st Nov',
          toDate: '30th Nov',
          bedroom : 2,
          kitchen: 1,
          bath: 2,
          sharing: true,
          billsIncluded : false,
          accomodationFor: 'Student',
          lookingFor: 'Male',
        }
      ];

      const POSTSs =[];
    
      return <PostList items={POSTS} />;

};

export default Landing;
