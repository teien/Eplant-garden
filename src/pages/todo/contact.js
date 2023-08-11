import '../../assets/styles/contact.css';
export default function Contact() {
    return ( 
    <div className="container-fluid d-flex">
            <div className="container">
                <div className='row'>
                    <div class="footer-item col-6">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Feed Back</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <div className="footer-item col-6 ">
                        <img src="https://i.pinimg.com/564x/be/50/59/be50595e4a73161ee35c198023fdbd1d.jpg" class="img-fluid" alt="..."/> 
                    </div>
                </div>  
        </div>
    </div>
    )
}