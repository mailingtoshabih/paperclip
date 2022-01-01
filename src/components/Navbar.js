import React from 'react'
import notes from './notes.png'





export default function Navbar(props) {


      const {pull} = props;

      const add = () => {
            pull(true);
      }






      return (
            <div>
                  


            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                  <div className="container-fluid">



                        <img src={notes} alt="" width="30" height="24" class="d-inline-block align-text-top" style={{width : '2rem', height : '2.2rem'}}/>
                        <h2 className='my-1 mx-3' style={{color : 'red', fontFamily:'Lobster Two'}}>PaperClip</h2>


                        <button className="btn btn-dark mx-3" type="submit" onClick={add} style={{borderRadius : '0.7rem'}}>AddTask</button>


                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                        </button>


                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                   
                              </ul>

                              
                              
                              <form className="d-flex" style={{width : 'auto'}}>
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width : '100%', borderRadius : '0.5rem', border: '4px solid #343a40', height : '2.5rem'}}/>
                                    <button className="btn btn-dark" type="submit"  style={{borderRadius : '0.7rem'}}>Search</button>
                                    <button className="btn btn-dark mx-2" type="submit"  style={{borderRadius : '0.7rem'}}>Hello</button>
                              </form>

                        </div>


                  </div>
            </nav>





            </div>
      )
}
