
import { Link } from "react-router-dom"
function IndexPage() {

	return (
		<div className='container'>
			<div className=" mb-3 m-auto" style={{
				maxwidth: '400px', marginTop: '80px'
			}}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src="https://khothietke.net/wp-content/uploads/2021/04/PNGKhovector.net-02186.png" className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body mt-5 ms-3" style={{ width: '500px' }}>
							<h1 className="card-title fs-1">We Love Helping To Your Decorate Home Plants</h1>
							<p className="card-text">Garden care is the process of maintaining and nurturning a garden to ensure its health, beauty, and productivity.</p>
							<Link className="btn btn-primary" style={{backgroundColor:'#475f45'}} to="/Shop" role="button">Shop Now</Link>
						</div>
					</div>
				</div>
			</div >

			<footer className="text-center text-lg-start bg-white text-muted">

				<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

					<div className="me-5 d-none d-lg-block">
						<span>Get connected with us on social networks:</span>
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
					<div className="container text-center text-md-start mt-5">

						<div className="row mt-3">

							<div className="col-md-5 col-lg-5 col-xl-5 mx-auto mb-4">

								<h6 className="text-uppercase fw-bold mb-4">
									<i className="fas fa-gem me-3 text-secondary"></i><Link className="text-secondary text-decoration-none" to='/'>PLANT PALACE</Link>
								</h6>
								<p>
									At Plant Palace, we believe that the true essence of nature lies in the beauty of plants. We're your premier destination for all things green, a botanical paradise where you can explore a diverse collection of exquisite plants and bring the enchantment of the natural world into your life.
								</p>
							</div>
							<div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-md-0 mb-4">

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

			</footer >


		</div >
	);
}
export default IndexPage;


