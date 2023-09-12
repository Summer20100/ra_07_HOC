import s from './Highlight.module.css'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './datapopular111'

const Highlight = () => {

  return (
    <Routes>
      <Route path='/highlight' element={
        <div className='mainContainer'>
          <App />
        </div>
      } />
    </Routes>
  )
}

export default Highlight 
