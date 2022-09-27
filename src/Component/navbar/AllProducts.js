import axios from 'axios';
import React from 'react';
import { useState,useEffect } from 'react';
import { getProducts } from '../../config/MyService';
import { PRODUCT_URL } from '../../config/Url';
const AllProducts = () => {

    const [product,setProduct]=useState([])
    const [filterProduct,setFilterProduct]=useState([])        
    const [searchInput, setSearchInput] = useState('')
    const [duplicateLoc,setDuplicateLoc]=useState([])

    useEffect(()=>{   
        getAllProducts()     
        handleDuplicateLoc()     
        
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
          });
    },[])
    
    const getAllProducts=()=>{
            getProducts()
                    .then(res=>{
                        // console.log(res);   
                    setProduct(res.data)     
                    setFilterProduct(res.data)          
                })     
                .catch(err=>{
                    console.log(err);                    
                })
                console.log("getProducts");
    }

    // Remove Duplicate Location
    const handleDuplicateLoc=()=>{
        var flags = {};
        var duplicateLocData = product.filter(function(entry) {
            if (flags[entry.resto_loc]) {
                return false;
            }
            flags[entry.resto_loc] = true;
            return true;
        });                
        setDuplicateLoc(duplicateLocData)         
        // console.log('duplicateLocData', duplicateLocData)
        // console.log('duplicateLoc', duplicateLoc)        
        console.log("handleDuplicateLoc");
    }

    // Filter location
    const resto_loc = (e) =>{
        // alert(e.target.value);
        let loc = e.target.value;
        if(loc != "all"){
            const URL = PRODUCT_URL+"?resto_loc="+loc;
            axios
                .get(URL)
                    .then(res=>{
                        setFilterProduct(res.data)  
                    })
                    .catch(err=>{
                        console.log(err);
                    })       
                }
                else{
                    getAllProducts()          
                }        
    }

    // Search food
    function searchFood(foodName){
        // console.log(foodName);
        setSearchInput(foodName)
        const filteredData = product.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())            
        })
        setFilterProduct(filteredData);  
    }

    // Filter Veg or Nov veg food
    return (
        <>                          
            <div className='mt-4'>            
                <div className="row py-3 justify-content-between">
                        <div className="col-md-6">
                            <input type="text" placeholder='Search Food Name,Location' onChange={(foodName)=>searchFood(foodName.target.value)} className='form-control'  />
                        </div>
                        <div className="col-md-3">
                            <select className="form-select" onChange={resto_loc} aria-label="Default select example">
                            <option value="all">All Location</option>                                                                          
                            {
                                duplicateLoc.map((loc_name)=>                                 
                                    <option value={loc_name.resto_loc} key={loc_name.id}>{loc_name.resto_loc}</option>                        
                                )
                            }
                        </select>
                        </div>
                </div>            
            </div>
        
            <div className="row all_products_wrapper pt-3 border-top">   
                <div className="col-lg-2 border-right">
                        <div className='mt-1 py-3 border-bottom '>
                            <ul className='list-none'>
                                <li>
                                    <input type="checkbox" value="veg" name="veg" id="" />
                                    <label className='m-0 ms-2 my_label' htmlFor="">Veg Only</label>
                                </li>
                                <li>
                                    <input type="checkbox" value="non veg" name="non veg" id="" />
                                    <label className='m-0 ms-2 my_label' htmlFor="">Non-Veg Only</label>
                                </li>
                            </ul>
                                                        

                        </div>
                        <div className='py-3 border-bottom'>
                            <ul className='list-none'>
                                <li className='my_label'>
                                    <p to="" onClick={()=>searchFood('biryani')}>
                                       Biryani
                                    </p>
                                </li>
                                <li className='my_label'>
                                    <p to="" onClick={()=>searchFood('biryani')}>
                                        North Indian
                                    </p>
                                </li>
                                <li className='my_label'>
                                    <p to="" onClick={()=>searchFood('biryani')}>
                                        South Indian
                                    </p>
                                </li>
                                <li className='my_label'>
                                    <p to="" onClick={()=>searchFood('biryani')}>
                                        Rolles and Sandwiches
                                    </p>
                                </li>
                                <li className='my_label'>
                                    <p to="" onClick={()=>searchFood('ice-cream-shakes')}>
                                        Ice Cream & Shakes
                                    </p>
                                </li>
                                <li className='my_label'>
                                    <p to="" onClick={()=>searchFood('pizza')}>
                                        Pizza
                                    </p>
                                </li>
                            </ul>                                                        
                            
                        </div>
                </div>
                <div className="col-lg-10">
                   <div className="row ps-2">
                   {filterProduct.map((item)=>
                        <div className="col-lg-3 item_wrapper" key={item.id}>
                            <div className="product">
                            <div className="food_categories">
                                <span className={item.product_cat}>{item.product_cat}</span>
                            </div>                       
                                <div>
                                    <img src={item.image_url} alt="" className='img-fluid product__img' />
                                </div>
                                <div className='mt-3'>
                                    <p className='product__title'>{item.pname}</p>
                                    <span className='product__desc'>
                                        {item.product_desc}
                                    </span>
                                </div>
                                <div className='bottom_area mt-3'>
                                    <ul className='d-flex justify-content-between align-items-center'>
                                        <li className='product_rating'>
                                            <i className="fa fa-star me-2 text-white" aria-hidden="true"></i>
                                            <span>{item.product_rating}</span>
                                        </li>
                                        <li className='product_price'>                                
                                            <span> &#x20B9; {item.price}</span>
                                        </li>                                                                    
                                    </ul>
                                </div>
                                <div className='mt-2'>
                                <p className='product_price'>
                                            Loc : 
                                            <span className='ms-1'>{item.resto_loc}</span>
                                </p>  
                                </div>
                            </div>
                        </div>         
                    )} 
                   </div>
                </div>
            </div>           
        </>
    );
}

export default AllProducts;

