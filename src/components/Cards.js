import React,{useState} from 'react'
import EditCard from './EditCard';


 







export default function Cards(props) {



      const {task, index, remove, updateListArray} = props;


      const [modal, setModal] = useState(false);
      



      const toggle = () => {
            setModal(!modal);
      }

      const updateTask = (request) => {
            updateListArray(request, index);
      }









      const handleDelete = () => {
            remove(index);
      }
      
      const handleEdit = () => {
            
            setModal(true);
      }

      const cancel = (request) => {
            setModal(request);
      }



// //================================================
      // let colorBook = ['#caf0f8', '#eae4e9', '#fff1e6', '#fde2e4', '#fad2e1', '#bee1e6', '#ced4da', '#b9fbc0', '#ccfaf0', '#e8def8'];
      // let cardColor =  colorBook[Math.floor(Math.random() * 10)];
      
      // cardColor = "'" + cardColor + "'";
      // document.body.style.backgroundColor = cardColor;
      
// //=======================================================






      let colorBook = ['#caf0f8', '#eae4e9', '#fff1e6', '#fde2e4','white', '#fad2e1', '#bee1e6', '#ced4da', '#b9fbc0', '#ccfaf0', '#e8def8'];
      let cardColor =  colorBook[Math.floor(Math.random() * 11)];
      
      // cardColor = "'" + cardColor + "'";






      return (
            <div className='my-3'>

                 

                  <div className="card my-3  shadow-lg p-3 mb-5" style={{
                        width:'23rem', margin:'19px',
                        border: 'none',
                        // border: `4px solid white`,
                        borderRadius: '1rem',
                        backgroundColor : `${cardColor}`
                        }}>



                        <div className="card-body">

                              <h5 className="card-title">{task.Name}</h5>

                              {/* <h6 className="card-subtitle mb-2 text-muted">Date</h6>*/}
                              <button type="button" className="btn btn-danger btn-sm my-3" onClick={handleDelete} style={{borderRadius : '0.5rem'}}>Remove</button>
                              <button type="button" className="btn btn-secondary btn-sm my-1 mx-2" onClick={handleEdit} style={{borderRadius : '0.5rem'}}>Edit</button>
                              

                              <p className="card-text my-3">{task.Description}</p>
                                
                        </div>
                  </div>


                  <EditCard modal={modal} toggle={toggle} updateTask={updateTask} cancel={cancel} oldTask={task}/>

            </div>
      )
}
