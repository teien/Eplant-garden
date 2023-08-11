
export default function Feedback() {
    return (
        <div className="border border-5 m-auto mt-5" style={{ width: '1200px' }}>
            <section className="mb-4">
                <h2 className="h1-responsive font-weight-bold text-center my-4">FeedBack</h2>
                <p className="text-center w-responsive mx-auto mb-5">We appreciate your support. Please share your feedback on our product/service so we can improve. Your input is precious encouragement and helps us serve you better.</p>
                <div className="row">
                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" >
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="name" name="name" className="form-control" />
                                        <label for="name" className="">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="email" name="email" className="form-control" />
                                        <label for="email" className="">Your Email</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input type="text" id="subject" name="subject" className="form-control" />
                                        <label for="subject" className="">Subject</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">

                                    <div className="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                        <label for="message">Your Message</label>
                                    </div>

                                </div>
                            </div>
                        </form>
                        <div className="text-center text-md-left">
                            <button className="btn btn-primary" style={{backgroundColor:'#475f45'}}>Send</button>

                        </div>
                        <div className="status"></div>
                    </div>



                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                <p>Thủy Lợi University, Việt Nam</p>
                            </li>

                            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                <p> 0382 020 858</p>
                            </li>

                            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                <p>Homies@aptech.vn</p>
                            </li>
                        </ul>
                    </div>


                </div>

            </section>

        </div>
    )
}