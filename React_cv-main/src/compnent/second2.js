import img from '../image/ed.png';
import img1 from '../image/d.png';
import React,{ Component } from "react";
export default class Second2 extends Component{
    render(){
      return(<div>
    <div  className='second2'>
      <table >
          <tr >
            <td><img src={img}  alt={'e'}/></td>
            <td>Education</td>
          </tr>
        </table>
      <div  className='block'>
        <h5><b>Fci Mu </b></h5>
        <table >
          <tr >
            <td><img src={img1}  alt={'d'}/></td>
            <td><h6 className='date'>2019 - <span  className='s'>still</span></h6></td>
          </tr>
        </table>
        <p>CS Department 3th Year </p>
      </div><br/>
      <hr/><br/>
      <div className='block'>
        <h5 ><b>Udacity</b></h5>
        <table>
            <tr>
                <td><img src={img1 } alt={'d'} /></td>
                <td><h6 className='date'>2020 - <span className='s'>still</span></h6></td>
            </tr>
        </table>
        <p>Web Development - Full Stack </p>
      </div><br/>
      <hr/><br/>     
      <div className='block'>
        <h5 ><b>W3Schools.com</b></h5>
        <table>
          <tr>
              <td><img src={img1} alt={'d'} /></td>
              <td><h6 className='date'>2019 - <span className='s'>still</span></h6></td>
          </tr>
      </table>
        <p>Programming Languages</p><br/>
      </div>
    </div>
    </div>
      );
    }
  }