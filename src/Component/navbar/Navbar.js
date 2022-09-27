import React from 'react';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg main_nav">                
                <div className="container">
                            <a className="navbar-brand" href="#">
                              LOGO
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav w-100 justify-content-end">
                                    <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"> <i className="fa fa-search me-2"></i>
                                        Search</a>
                                    </li>
                                    <li className="nav-item">                            
                                        <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                                        <i className="fa fa-user me-2" aria-hidden="true"></i>

                                        Sign</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                        <i className="fa fa-cart-plus me-2" aria-hidden="true"></i>

                                        Cart</a>
                                    </li>
                                
                                </ul>
                            </div>
                    
                </div>
            </nav>           
           
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-md">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title org-c" id="exampleModalLabel">User Registration</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                            <label >Phone Number</label>
                        <input type="text"  className='form-control' />                   
                        </div>
                        <div className="mb-3">
                            <label >Name</label>
                        <input type="text"  className='form-control' />                   
                        </div>
                        <div className="mb-3">
                            <label >Email address</label>
                        <input type="text"  className='form-control' />                   
                        </div>
                        <div className="mb-3">
                            <label >Password</label>
                            <input type="text" className='form-control'  />
                        </div>                               
                    </form>
                </div>
                <div className="modal-footer">
                    {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                    <button type="button" className="btn btn-primary">Registred</button>
                </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default Navbar;
