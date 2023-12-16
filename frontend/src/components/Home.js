import FlatList from "./FlatList"
import Banner from "./Banner"
import React, { useState } from 'react';
import TeamList from "./TeamList"
import References from "./References"
import Subscribe from "./Subscribe"
import FeatureButton from "./FeatureButton"
import FeatureModal from "./FeatureModal";
import BestFlatList from "./BestFlatList"

const Home = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <React.Fragment>
            <Banner />
            <FlatList />
            {/* <BestFlatList /> */}
            <Subscribe />
            <TeamList />
            <FeatureButton onOpenModal={handleOpenModal} />
            <FeatureModal isOpen={isModalOpen} onCloseModal={handleCloseModal} />
            {/* <References/> */}
        </React.Fragment>
    )
}

export default Home;