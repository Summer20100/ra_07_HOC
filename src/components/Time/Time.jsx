import { Route, Routes } from 'react-router-dom'
import App from './datatime'

const Time = () => {
  return (
    <Routes>
      <Route path='/time' element={
        <div className="mainContainer">
          <App />
        </div>
      } />
    </Routes>
  )
}

export default Time