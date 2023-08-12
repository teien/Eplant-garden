
import "../assets/styles/plantCard.css"
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Card({ data }) {
	const DetailData = (props) => {
		return ((props.trigger) ?
			(<div className="detail-product">
				<div className="child-detail">
					<div className="d-flex">
						<div style={{ width: "100%" }}></div>
						<button type="button" className="btn btn-danger btn-position" onClick={() => props.setTrigger(false)}>x</button>
					</div>
					{props.children}
				</div>
			</div>) : ""
		)
	}
	const [btnPopup, setBtnPopup] = useState(false);

	const saveDataOnLocal = ()=>{
		const prevCartIds = localStorage.getItem('userCart') ? JSON.parse(localStorage.getItem('userCart')) : [];
		prevCartIds.push(data.id)
		localStorage.setItem('userCart',JSON.stringify([...new Set(prevCartIds)] ));
		
	}
	return (
		<div className="card-display rounded" >
			<div className="card border-0" onClick={() => setBtnPopup(true)}>
				<p className="status">{data.status}</p>
				<img src={data.img} className="card-img-top img-fix" alt="..." />
				<div className="px-3 py-1">
					<h4 className="text-style mt-12">{data.name}</h4>
					<p className="more-info">{data.size}</p>
					<div className="d-flex justify-content-between">
						<h5 className="card-title text-style">{data.price} </h5>
						<p className="more-info" >+ more info</p>
					</div>
				</div>
			</div>
			<DetailData trigger={btnPopup} setTrigger={setBtnPopup}>
				<div className="container">
					<div className="row">
						<div className="col-6">
							<img src={data.img} className="img-setup d-block"></img>
						</div>
						<div className="col-6">
							<h2 className="text-styles">Description</h2>
							<span className="span-line"></span>
							<h3 className="mt-3">{data.name}</h3>
							<p className="desc">{data.desc}</p>
							<li className="sub-desc">
								{data.describe1}
							</li>
							<li className="sub-desc">
								{data.describe2}
							</li>
							<li className="sub-desc" >
								{data.describe3 || null}
							</li>
							<div className="mt-12 span-size">
								<p style={{padding: 8, fontSize: 20}}>size:</p>
								<p style={{padding: "8px 36px", fontStyle:"italic", border: "1px solid #000"}}>{data.size}</p>
							</div>
							<Link to={"/buytree"}  type="button" className="btn btn-success d-block my-2 w-100" style={{backgroundColor:"#475f45"}} 
							onClick={saveDataOnLocal}
							>Add to Cart</Link>
						</div>
					</div>
				</div>
			</DetailData>
		</div>
	);
}
