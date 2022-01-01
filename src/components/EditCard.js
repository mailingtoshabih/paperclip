import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import React,{useState,useEffect} from 'react'




export default function EditTask(props) {

      const {modal, toggle, updateTask, cancel, oldTask} = props;

      const [taskName, setTaskName] = useState('');
      const [description, setDescription] = useState('');



      const onChange = (event) => {

            const {name, value} = event.target;

            if (name === "taskname") setTaskName(value);
            else setDescription(value);
      }


      const handleUpdate =(e) => {

            e.preventDefault();

            if (taskName){
                  let tempTask = {};
                  tempTask["Name"] = taskName;
                  tempTask["Description"] = description;
                  updateTask(tempTask);
            }
            else{
                  alert("Enter the title...");
            }

      }






      const onClickCancel = () => {
            cancel(false);
      }
      


      useEffect(() => {
            setTaskName(oldTask.Name);
            setDescription(oldTask.Description);
      }, [oldTask])



     







      return (
            <>

            <Modal isOpen={modal} toggle={toggle}>
                  {/* <ModalHeader >
                  Modal title
                  </ModalHeader> */}

                  <ModalBody>
            

                        <div className="mb-3">
                              <label htmlFor="exampleFormControlInput1" className="form-label">Task Name</label>
                              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Write something..."
                              value={taskName} onChange={onChange} name='taskname'/>
                        </div>

                        <div className="mb-3">
                              <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                              <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" 
                              value={description} onChange={onChange} name='description'></textarea>
                        </div>


                  </ModalBody>

                  <ModalFooter>
                        
                        <Button color="primary" onClick={handleUpdate}>Update Task</Button>
                        {' '}
                        <Button onClick={onClickCancel}>Cancel</Button>

                  </ModalFooter>


            </Modal>
                  
            </>
      )
}
