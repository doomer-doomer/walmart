import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'font-awesome/css/font-awesome.min.css';
import { Outlet, Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

function BookSlots() {
  const [value, onChange] = useState(new Date());
  const [showTable, setShowTable] = useState(true);

  return (
    <div>
        <button onClick={()=>{setShowTable(true)}} style={{color: 'gold', padding: '10px', fontSize: '30px'}} className=''><i className="fa fa-calendar" aria-hidden="true"></i></button>
        {showTable ? (<Calendar onChange={onChange}  value={value} onClickDay={()=>{setShowTable(false)}}/>) : ( <div style={{padding: '100px'}}> <div style={{display: 'flex', justifyContent: 'space-evenly', width: '80vw', margin: '30px'}}><Link to="/Payment"><button style={{padding: '10px', borderRadius: '10px', width: '200px', backgroundColor: '#28a745'}}  type="button" class="btn btn-success"><b>10pm-12pm</b><p>21 carts left</p></button></Link><button style={{padding: '10px', borderRadius: '10px', width: '200px', backgroundColor: '#28a745'}}  type="button" class="btn btn-success"><b>12pm-2pm</b><p>3 carts left</p></button><button style={{padding: '10px', borderRadius: '10px', width: '200px', backgroundColor: '#dc3545'}}  type="button" class="btn btn-success"><b>2pm-4pm</b><p>no carts left</p></button><button style={{padding: '10px', borderRadius: '10px', width: '200px', backgroundColor: '#dc3545'}}  type="button" class="btn btn-success"><b>4pm-6pm</b><p>no carts left</p></button></div><div style={{display: 'flex', justifyContent: 'space-evenly', width: '80vw', margin: '30px'}}><button style={{padding: '10px', borderRadius: '10px', width: '200px', backgroundColor: '#dc3545'}}  type="button" class="btn btn-success"><b>6pm-8pm</b><p>No carts left</p></button><button style={{padding: '10px', borderRadius: '10px', width: '200px', backgroundColor: '#28a745'}}  type="button" class="btn btn-success"><b>8pm-10pm</b><p>8 carts left</p></button><button style={{padding: '10px', borderRadius: '10px', width: '200px', backgroundColor: '#28a745'}}  type="button" class="btn btn-success"><b>10pm-12am</b><p>30 carts left</p></button><button style={{padding: '10px', borderRadius: '10px', width: '200px', backgroundColor: 'white'}}></button></div></div>)}
    
    </div>
  );
}

export default BookSlots;