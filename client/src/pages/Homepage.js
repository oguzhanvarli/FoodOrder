import React from 'react'
import Food from '../components/Food';
import foods from '../fooddata';



function Homepage() {
    
  return (
    <div>
        <div className='row'>
          {foods.map((food) => (
            <div className='col-md-4'>
            <Food food={food}/>
            </div>
          ))}
            
        </div>
        
    </div>
  )
}

export default Homepage;