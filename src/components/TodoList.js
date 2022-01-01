import React,{useState, useEffect} from 'react'
import CreateList from './CreateList'
import Cards from './Cards';
import Navbar from './Navbar';
import FirstCard from './FirstCard';








export default function TodoList() {

      const [modal, setModal] = useState(false);

      const [taskList, setTaskList] = useState([])

      const toggle = () => {
            setModal(!modal);
      }






      useEffect(() => {
           
            let arr = localStorage.getItem("taskList");
            
            if (arr){
                  let obj = JSON.parse(arr);
                  setTaskList(obj)
            }  
 
      },[])





      const addTask = (taskObj) => {

            let tempList = taskList;
            tempList.push(taskObj);
            setTaskList(tempList);

            localStorage.setItem('taskList', JSON.stringify(tempList)); 

            setModal(false);
      }



      const pull = (pullModalValue) => {
            setModal(pullModalValue);
      }

      const cancel = (request) => {
            setModal(request);
      }



      const deleteTask = (index) => {

            let tempList = taskList;
            tempList.splice(index,1);
            localStorage.setItem("taskList", JSON.stringify(tempList));
            setTaskList(tempList);
            window.location.reload();                 //to reload the window
      }


      const updateListArray = (request, index) => {
            let tempList = taskList;

            tempList[index] = request;

            localStorage.setItem("taskList", JSON.stringify(taskList));

            setTaskList(tempList);
            window.location.reload();
            // window.location.reload(false);
      }














      return (
            <div>
                  <Navbar pull={pull}/>

                  



                  <div  className='overflow-scroll' style={{
                              backgroundColor : "#faedcd", 
                              // borderTop : '4px solid #2b3a39',
                              height:"100vh",
                              width:'100%',
                              borderRadius: "1.2rem 1.2rem 0px 0px"}}>

                        <div className="container d-flex flex-row bd-highlight mb-3">


                                    {taskList.length !== 0 ? taskList.map(  (task, index)=>{
                                          return <Cards task={task} index={index} remove = {deleteTask} updateListArray={updateListArray}/>
                                    }) : <FirstCard/>}

                                    
                        </div>
                  </div>






                  <CreateList toggle={toggle} modal={modal} save={addTask} cancel={cancel}/>


            </div>
      )
}
