import { useEffect, useState } from "react"
import banner from "../banner.jpg"
import { Link } from "react-router-dom";
import image1 from "../images/banner/templebar_large.jpg"
import image2 from "../images/banner/image2.jpg"
import image3 from "../images/banner/image3.jpg"
import image4 from "../images/banner/image5.jpg"

const Banner = () => {

    const images = [image1, image2, image3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(intervalId);
    }, []);


    ///
    const [search, setSearch] = useState();
    const [find, setFind] = useState([]);
    const [word, setWord] = useState("");
    useEffect(() => {
        setSearch(["a", "b", "test", "mb"])
    }, [])
    const findSearch = (e) => {
        setWord(e.target.value)
        const filteredCountries = search.filter(item => item.indexOf(e.target.value) > -1 ? item : null);
        e.target.value.length === 0 ? setFind([]) : setFind(filteredCountries);
    }
    const findResult = () => {
        if (find.length === 0 && word.length > 0) {
            return <div className="find-search">Not Found</div>
        }
        if (find.length > 0) {
            return <div className="find-search">
                {
                    find.map(item => {
                        return <Link key={item} to="#">{item}</Link>
                    })
                }
            </div>
        }
    }
    return (
        <div className="banner d-flex align-items-center"
        // style={{ backgroundImage: `url(${image1})` }}
        >
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`slide-image ${index === currentImageIndex ? 'active-slide' : ''}`}
                    style={{ backgroundImage: `url(${img})` }}
                />
            ))}
            <div className="bg-custom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="banner-area text-center pt-4 pb-4">
                                <h2 className="mt-2 mb-4 banner-title"><strong>Find Your Dublin Dream</strong> </h2>
                                {/* <p>Start Your Search</p> */}
                                <h5 style={{ paddingBottom: '10px' }}>Start Your Search</h5>
                                <div className="search-area">
                                    <input value={word} onChange={(e) => findSearch(e)} type="text" className="inp-search" placeholder="Search" />
                                    <button className="btn-search m-2">Search All</button>
                                </div>
                                {findResult()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;