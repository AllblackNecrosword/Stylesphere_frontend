import React from 'react'
import Banner from './Banner'
import Catrgory from '../Components/Catrgory'
import Heroproducts from './Heroproducts'
import Incentives from '../Components/Incentives'
const Header = () => {
  return (
    <div>
        <Banner/>
        <Catrgory/>
        <Incentives/>
        <Heroproducts/>
    </div>
  )
}

export default Header
