import React from 'react'
import Banner from '../../components/banner/Banner'
import LastestProduts from '../../components/Latest/LastestProduts'
import TrueWireless from '../../components/TrueWireless/TrueWireless'
import Neckbands from '../../components/Neckbands/Neckbands'
import Wired from '../../components/Wired/Wired'
import AddBanner from '../../components/AddBanner/AddBanner'
import Feature from '../../components/feature/Feature'

const Home = () => {
  return (
    <>
    
    <Banner />
   
   
    <LastestProduts />
    <TrueWireless />
    
    <AddBanner />
    <Neckbands />
    <Wired />
    <Feature />
    </>
  )
}

export default Home