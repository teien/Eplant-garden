import { Link } from "react-router-dom";
import "../assets/styles/plantCard.css"

export default function Card({ data }) {
	return (
		<Link to={`/${data.name}`} className="card-display">
			<div className="card border-0">
				<p className="status">{data.status}</p>
				<img src={data.img} className="card-img-top img-fix" alt="..." />
				<h4 className="text-style mt-12">{data.name}</h4>
				<p className="more-info">{data.size}</p>
				<div className="d-flex justify-content-between">
					<h5 className="card-title text-style">{data.price} </h5>
					<p className="more-info">+ more info</p>
				</div>
			</div>
		</Link>
	);
}
