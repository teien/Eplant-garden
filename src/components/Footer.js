import { Link } from "react-router-dom";
export default function footer()
{
    return(
       <div className="container-fluid">
         <div className="text-center text-lg-start bg-white text-muted" >
				<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
					<div className="me-5 d-none d-lg-block ms-5">
						
					</div>
					<div>
						<Link to="" className="me-4 link-secondary">
							<i className="fab fa-facebook-f"></i>
						</Link>
						<Link to="" className="me-4 link-secondary">
							<i className="fab fa-twitter"></i>
						</Link>
						<Link to="" className="me-4 link-secondary">
							<i className="fab fa-google"></i>
						</Link>
						<Link to="" className="me-4 link-secondary">
							<i className="fab fa-instagram"></i>
						</Link>
						<Link to="" className="me-4 link-secondary">
							<i className="fab fa-linkedin"></i>
						</Link>
						<Link to="" className="me-4 link-secondary">
							<i className="fab fa-github"></i>
						</Link>
					</div>

				</section>
				<section className="">
					<div className="text-center text-md-start mt-5">
						<div className="row mt-2">
							<div className="col-md-4 col-lg-3 col-xl-4 mx-auto mb-4 ms-auto" >
								<h6 className="text-uppercase fw-bold mb-4">
									<i className="fas fa-gem me-3 text-secondary"></i><Link className="text-secondary text-decoration-none" to='/'>PLANT PALACE</Link>
								</h6>
								<p>
									At Plant Palace, we believe that the true essence of nature lies in the beauty of plants. We're your premier destination for all things green, a botanical paradise where you can explore a diverse collection of exquisite plants and bring the enchantment of the natural world into your life.
								</p>
							</div>
							<div className="col-md-3 col-lg- col-xl-3 mx-auto mb-md-0 mb-5 ms-auto ">

								<h6 className="text-uppercase fw-bold mb-4"><Link className="text-secondary text-decoration-none" to='/contact-us'>Contact</Link></h6>
								<p><i className="fas fa-home me-3 text-secondary"></i> Thủy Lợi University, Việt Nam</p>
								<p>
									<i className="fa-solid fa-envelope-circle-check me-3 text-secondary"> </i>
									Homies@aptech.vn
								</p>
								<p><i className="fas fa-phone me-3 text-secondary"></i> 0382 020 858</p>
							</div>
						</div>
					</div>
				</section>
				<div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}>
					<Link className="text-reset fw-bold" to="/"> Created By Homies 2023  </Link>
				</div>

			</div >

       </div>
    )
}