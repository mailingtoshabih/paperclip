import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import React,{useState} from 'react'




export default function CreateList(props) {

      const {modal, toggle, save, cancel} = props;

      const [taskName, setTaskName] = useState("");
      const [description, setDescription] = useState("");



      const onChange = (event) => {

            const {name, value} = event.target;

            if (name === "taskname") setTaskName(value);
            else setDescription(value);
      }


      const saveTask =() => {

            let taskObj = {};

            if (taskName){

                  taskObj["Name"] = taskName;
                  taskObj["Description"] = description;
      
                  save(taskObj);
            }
            else{
                  alert("Enter the title...");
            }

      }

      const onClickCancel = () => {
            cancel(false);
      }
      










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
                        
                        <Button color="primary" onClick={saveTask}>Add Task</Button>
                        {' '}
                        <Button onClick={onClickCancel}>Cancel</Button>

                  </ModalFooter>


            </Modal>
                  
            </>
      )
}
