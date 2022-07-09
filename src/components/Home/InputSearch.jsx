import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Select from 'react-select'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategories } from '../../store/slices/categories.slice'

const InputSearch = ({setCeteoryFilterSelect}) => {

  const {handleSubmit, register, reset} = useForm()

  const submit = data => {
    console.log(data)
  }

  const options = [
    { value: 1, label: 'Smart TV' },
    { value: 2, label: 'Computers' },
    { value: 3, label: 'SmartPhones' },
    { value: 4, label: 'Kitchen' }
  ]

  return (
    <div className="input-container">
      <div className="input-category">
        <h2 className="input-category">Categories:</h2>
      </div>
      <div className="category-select">
        <Select onChange={setCeteoryFilterSelect} options={options}>
        </Select>
    
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <input type="text" {...register('searchText')} />
        <button className="btn-search"><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>
      
    </div>

  )
}

export default InputSearch