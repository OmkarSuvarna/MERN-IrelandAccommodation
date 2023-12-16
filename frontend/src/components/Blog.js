import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from './AuthContext';
import BlogItem from "./BlogItem"
import FlatItem from "./FlatItem"

const Blog = () => {
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
                const shortlist = JSON.parse(localStorage.getItem('shortlist')) || [];
                const filteredItems = data.filter(item => shortlist.includes(item._id));
                setItems(filteredItems);
            } catch (error) {
                console.error('Failed to fetch items:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const hasItems = items.length > 0;

    return (
        <section className="blog">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">Short Listed</h1>
                            {/* <h2 className="page-description">Blog</h2> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        {/* <BlogItem link="blog-1" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                        <BlogItem link="blog-2" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                        <BlogItem link="blog-3" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
                        <BlogItem link="blog-4" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
                        <BlogItem link="blog-5" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
                        <BlogItem link="blog-6" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
                        <BlogItem link="blog-7" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
                        <BlogItem link="blog-8" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
                        <BlogItem link="blog-9" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/> */}
                        {/* {Dummyitems.map((item, index) => (
                            <BlogItem key={index} data={item} />
                        ))} */}
                        {hasItems ? (
                            items.map((item, index) => (
                                <FlatItem key={index} data={item} />
                            ))
                        ) : (
                            <div className="no-data-message">
                                <h1 className='shortlistEmpty'>No items in your shortlist. Start adding some!</h1>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog