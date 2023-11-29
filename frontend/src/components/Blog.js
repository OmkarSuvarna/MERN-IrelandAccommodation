import BlogItem from "./BlogItem"


import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image6 from '../images/6.jpg';

const Dummyitems = [
  {
      "location": "Phibsborough, Dublin 07",
      "accommodationType": "Permanent Accommodation",
      "rent": "€500",
      "deposit": "€500",
      "billsIncluded": "No",
      "availableFrom": "1st Dec",
      "status": "Verified",
      "image": image1
  },
  {
      "location": "Ballsbridge, Dublin 04",
      "accommodationType": "Permanent Accommodation",
      "rent": "€650",
      "deposit": "€650",
      "billsIncluded": "Yes",
      "availableFrom": "27 Dec - 30th Feb",
      "status": "Not Verified",
      "image": image2
  },
  {
      "location": "Clontarf, Dublin 03",
      "accommodationType": "Permanent Accommodation",
      "rent": "€700",
      "deposit": "€500",
      "billsIncluded": "Yes",
      "availableFrom": "15 Dec",
      "status": "Not Verified",
      "image": image3
  },
  {
      "location": "Citywest, Dublin 24",
      "accommodationType": "Permanent Accommodation",
      "rent": "€600",
      "deposit": "€500",
      "billsIncluded": "Yes",
      "availableFrom": "30 Dec",
      "status": "Not Verified",
      "image": image6
  }
]

const Blog = () => {
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
                        {Dummyitems.map((item, index) => (
            <BlogItem key={index} data={item} />
          ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog