import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategories } from '../../store/slices/categories.slice'
import InputSearch from './InputSearch'
import ProductCard from './ProductCard'
import './style/homeScreen.css'

const HomeScreen = () => {

  const [ceteoryFilterSelect, setCeteoryFilterSelect] = useState()
  const [getCategory, setgetCategory] = useState()
  const products = useSelector(state => state.products)
  const categories = useSelector(state => state.categories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCategories())
  }, [dispatch]) 

  // console.log(ceteoryFilterSelect)
  // console.log(products)

  useEffect(() => {
    if (ceteoryFilterSelect !== undefined) {
      const filter = products.filter(e => e.category.id === ceteoryFilterSelect.value)
        setgetCategory(filter)
    }
  }, [ceteoryFilterSelect])
  
  console.log(getCategory)

  return (
    <div className='home'>
      <div>
        <div className="home-input">
          <InputSearch setCeteoryFilterSelect={setCeteoryFilterSelect}/>
        </div>
        <div className='products-container'>
          {
            ceteoryFilterSelect ? 
            getCategory?.map(product => (
              <ProductCard 
                key={product.id}
                product={product}
              />
            ))
            :
            products.map(product => (
              <ProductCard 
                key={product.id}
                product={product}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default HomeScreen