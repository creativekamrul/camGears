import React from 'react'
import Categories from './Categories'
import HeroArea from './HeroArea'
import TopCatProducts from './TopCatProducts'
import TopDeals from './TopDeals'
import TopProducts from './TopProducts'
const Home = () => {
    return (
        <div>
            <HeroArea />
            <TopProducts />
            <Categories />
            <TopCatProducts />
            <TopDeals />
        </div>
    )
}

export default Home
