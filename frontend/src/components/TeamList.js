import Title from "./Title"
import TeamItem from "./TeamItem"

import image1 from '../images/luxuryImages/luxury1.jpg';
import image2 from '../images/luxuryImages/luxury2.jpg';
import image3 from '../images/luxuryImages/luxury3.jpg';

const TeamList = () => {
    const title = {
        text: "Luxury Living Redefined",
        description: "Exclusive Homes in Prime Locations"
    }
    return (
        <section className="section-teams">
            <div className="container">
                <Title title={title.text} description={title.description} />
                <div className="row">
                    {/* <TeamItem /> */}
                    {/* <TeamItem /> */}
                    {/* <TeamItem /> */}
                    <div className="col-lg-4">
                        <div className="team">
                            <div className="team-img" style={{ position: 'relative' }}>
                                <img src={image2} alt="team" />
                            </div>
                            <div className="team-info">
                                <h5 className="team-name">Malahide</h5>
                                <div className="social-links">
                                    <div className="social-item"><i className="fab fa-facebook"></i></div>
                                    <div className="social-item"><i className="fab fa-twitter"></i></div>
                                    <div className="social-item"><i className="fab fa-instagram"></i></div>
                                    <div className="social-item"><i className="fab fa-linkedin"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team">
                            <div className="team-img">
                                <img src={image1} alt="team" />
                            </div>
                            <div className="team-info">
                                <h5 className="team-name">Blackrock</h5>
                                <div className="social-links">
                                    <div className="social-item"><i className="fab fa-facebook"></i></div>
                                    <div className="social-item"><i className="fab fa-twitter"></i></div>
                                    <div className="social-item"><i className="fab fa-instagram"></i></div>
                                    <div className="social-item"><i className="fab fa-linkedin"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team">
                            <div className="team-img">
                                <img src={image3} alt="team" />
                            </div>
                            <div className="team-info">
                                <h5 className="team-name">Howth</h5>
                                <div className="social-links">
                                    <div className="social-item"><i className="fab fa-facebook"></i></div>
                                    <div className="social-item"><i className="fab fa-twitter"></i></div>
                                    <div className="social-item"><i className="fab fa-instagram"></i></div>
                                    <div className="social-item"><i className="fab fa-linkedin"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamList;