import React from 'react';
import First from './compnent/first'
import Second from './compnent/second'
import Second2 from './compnent/second2'
import Footer from './compnent/footer'
import './css/csst.css';
function Proj(){
      return(
        <div>
          <div className="proj">
            <>
            <First/>
            <div className='second'>
              <Second/>
              <Second2/>
          </div>
          </>
        </div>
          <Footer/>          
        </div>
      )}
  
      export default Proj;
  
  