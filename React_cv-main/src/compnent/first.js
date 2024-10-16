import React,{ Component } from "react";
import img from '../image/me.jpg';
import img1 from '../image/j.png';
import img2 from '../image/h.png';
import img3 from '../image/e.png';
import img4 from '../image/p.png';
import img5 from '../image/s.png';
import img6 from '../image/l.png';
export default class First extends Component{
    render(){
      return(
      <div  className='first2'>
          <div className='first1'>
            <img src={img} className='img' alt={'ahmed'} />
            <div  className='w3-display-bottommiddle w3-hide-small'><h2 className='h'>Ahmed M. Allam</h2></div>
          </div>
          <table>
            <tr>
              <th><img src={img1} alt={'j'}/></th>
              <th>Back end</th>
            </tr>
            <tr>
              <td><img src={img2} alt={'h'}/></td>
              <td>Egypt,menofia</td>
            </tr>
            <tr>
              <td><img src={img3} alt={'e'} /></td>
              <td>ahmedmohamedallam230@gmail.com</td>
            </tr>
            <tr>
              <td><img src={img4}  alt={'p'}/></td>
              <td>+201014782114</td>
           </tr>
          </table>
          <hr/><br/>
          <table>
            <tr>
              <th><img src={img5} alt={'s'}/></th>
              <th>Skills</th>
            </tr>
          </table>
          <p>HTML</p>
            <div  className='main'> 
              <div id="sub1">97%
            </div></div><br/>        
          <p>CSS</p>
            <div  className='main'> 
              <div id="sub2">90%
            </div></div><br/>
          <p>JAVASCRIPT</p>
            <div  className='main'> 
              <div id="sub3">70%</div>
            </div>
          <br/>
          <table>
            <tr>
              <th><img src={img6} alt={'l'}/></th>
              <th>Languages</th>
            </tr>
          </table>
          <p>Arabic</p>
          <div  className='main'> 
            <div id="sub4"></div><br/>
          </div><br/>
          <p>English</p>
          <div  className='main'> 
            <div id="sub5"></div>
          </div><br/>
          <p>French</p>
          <div  className='main'> 
            <div id="sub6"></div>
          </div>
          <br/>
      </div>
      )}
  }