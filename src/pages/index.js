import footer from "../components/Footer";
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
			<div className=" mb-3 m-auto" style={{
				maxwidth: '400px', marginTop: '80px'
			}}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src="https://static1.squarespace.com/static/54e7ca90e4b0360a497a9f43/t/55313b36e4b06c86f2504bc6/1684331671557/" className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body mt-5 ms-3" style={{ width: '500px' }}>
							<h1 className="card-title fs-1 fw-bold">Our service</h1>
							<p className="card-text fs-2">- Flower Plants</p>
							<p className="card-text fs-2">- Indoor Plant</p>
							<p className="card-text fs-2">- Outdoor Plants</p>
							<Link className="btn btn-primary" style={{backgroundColor:'#475f45'}} to="/Shop" role="button">Shop Now</Link>
						</div>
					</div>
				</div>
			</div >

			

		</div >
	);
}
export default IndexPage;


