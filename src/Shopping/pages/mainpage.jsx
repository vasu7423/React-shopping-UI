import React, {useState} from 'react'
import Collections from '../components/collections'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/footer'
import { Gents,Women } from '../../data'
import Womenfashion from '../components/womenfashion'

const Mainpage = () => {
  const[gentsFashion,setgentsFashion]=useState(Gents);
  const[womenFashion,setwomenFashion]=useState(Women);

  return (
    <div>
        <Header/>
        <Banner/>
        <Collections gentsFashion={gentsFashion}/>
        <Womenfashion womenFashion={womenFashion}/>
        <Footer/>
    </div>
  )
}

export default Mainpage