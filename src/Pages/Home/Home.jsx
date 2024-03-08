import React from 'react'
import Welcome from '../Welcome/Welcome'
import Count from '../Count/Count'
import Subscribe from '../Subscribe/Subscribe'
import Banner from '../Banner/Banner'
import { Helmet } from 'react-helmet'
// import HeaderSection from '../../Components/Header/HeaderSection'

function Home({darkMode, setDarkMode}) {
  return (
    <div>
       <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Sign In to my website" />
        {/* Add more meta tags as needed */}
      </Helmet>
      <Banner />
      {/* <HeaderSection darkMode={darkMode} setDarkMode={setDarkMode}/> */}
      <Welcome/>
      <Count darkMode={darkMode}/>
      <Subscribe darkMode={darkMode}/>

    </div>
  )
}

export default Home
