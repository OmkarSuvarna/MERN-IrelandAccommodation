import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from './AuthContext';


const Admin = () => {
    const { user } = useAuth();
    const history = useHistory();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/accommodations');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data);
                console.log('Fetched Data:', JSON.stringify(data, null, 2));
                setItems(data); // Set all fetched items
            } catch (error) {
                console.error('Failed to fetch items:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    const totalAccommodations = items.length;
    const averageRent = items.reduce((acc, item) => acc + item.rent, 0) / totalAccommodations || 0;
    const averageDeposit = items.reduce((acc, item) => acc + item.deposit, 0) / totalAccommodations || 0;
    const permanentAccommodations = items.filter(item => item.durationType === "Permanent").length;
    const temporaryAccommodations = items.filter(item => item.durationType === "Temporary").length;
    const femalesOnly = items.filter(item => item.lookingFor === "Females Only").length;
    const malesOnly = items.filter(item => item.lookingFor === "Males Only").length;
    const noPreference = items.filter(item => item.lookingFor === "No Preference").length;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <section className="blog">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">Admin Dashboard</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='dashboardStatsContainer'>
                <table className='dashboardStats'>
                    <thead>
                        <tr>
                            <th>Accommodation Statistic</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Total Accommodations</td>
                            <td>{totalAccommodations}</td>
                        </tr>
                        <tr>
                            <td>Average Rent (€)</td>
                            <td>{averageRent.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Average Deposit (€)</td>
                            <td>{averageDeposit.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Total Permanent Accommodations</td>
                            <td>{permanentAccommodations}</td>
                        </tr>
                        <tr>
                            <td>Total Temporary Accommodations</td>
                            <td>{temporaryAccommodations}</td>
                        </tr>
                        <tr>
                            <td>Accommodations for Females Only</td>
                            <td>{femalesOnly}</td>
                        </tr>
                        <tr>
                            <td>Accommodations for Males Only</td>
                            <td>{malesOnly}</td>
                        </tr>
                        <tr>
                            <td>Accommodations for Males/Females</td>
                            <td>{noPreference}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </section>
    )
}

export default Admin