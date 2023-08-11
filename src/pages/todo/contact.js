import React, { useState } from 'react';
export default function Contact() {
    return ( 
    <div className="container-fluid d-flex">
            <div className="container">
                <div className='row d-flex'>
                    <div class="footer-item col-6">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <div className="footer-item col-6 ms-4">
                            <img src='https://i.pinimg.com/236x/df/f9/e0/dff9e0e92f27f8946fa21274cfdb6691.jpg'/>
                    </div>
                </div>  
        </div>
    </div>
    )
}