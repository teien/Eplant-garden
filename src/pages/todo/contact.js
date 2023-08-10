import React, { useState } from 'react';
export default function Contact() {
    return ( 
    <div className="container-fluid d-flex">
            <div className="container d-flex">
                <div className='row'>
                    <div class="footer-item col-12 d-flex ms-1">
                        <div class="get-help ms-1">
                            <span class="ms-1">
                            GET HELP
                            </span>
                        </div>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="feedback"/>
                        <label for="floatingInput">What can we help you with ?</label>
                    </div>
                    <div class="footer-item col-12 d-flex ms-1">
                    <div class="lien-he ms-1">
                        <span class="ms-1">
                            CONTACT US
                        </span>
                    </div>
                    <div class="footer-item col-12 d-block ms-3 mb-3">
                    <hr  width="30%" />
                    </div> 
                    <div class="dien-thoai">
                    <div class="footer-item col-4">
                        <a class="ms-4">
                            PRODUCTS & ORDERS
                        </a>
                        <span class="">
                            Hotline
                        </span>
                        <span class="">
                            24  hours
                        </span>
                        <span class="">
                            7 days
                        </span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}