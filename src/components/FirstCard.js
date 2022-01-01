import React from 'react'

export default function FirstCard() {
      return (
            

            <div className='my-1'>

                              

                  <div className="card shadow-lg p-3 mb-5 bg-white" style={{
                        width:'23rem', margin:'10px',
                        fontFamily: 'Roboto Slab',
                        borderRadius: '1rem',
                        backgroundColor : 'white'
                        }}>



                        <div className="card-body">

                              <h1 className="display-2">Howdy!</h1>
                              <h4>Thank you so much for getting here! I’m Shabih, creator and maintainer of PaperClip. I’d really love to get in touch with you to hear your feedback or just say hello! 😃</h4>
                        </div>


                  </div>








                  <div className="card shadow-lg p-3 mb-5" style={{
                        width:'23rem', margin:'10px',
                        // border: 'none',
                        border: `5px solid white`,
                        borderRadius: '1rem',
                        backgroundColor : '#fad2e1'
                        }}>



                        <div className="card-body">

                              <h3 className="card-title">Add your first task...</h3>

                              <h6 className="card-text my-3">Click the Add Task button on the top to clip a new task.</h6>
                              
                        </div>


                  </div>
                  
            </div>
      )
}


