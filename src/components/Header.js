import { NavLink } from 'react-router-dom';

import { Link } from "react-router-dom"
export default function Header() {
	const navItem = {
		textDecoration: 'none',
		color: '#fff',
		fontSize: '20px',
		display: 'block',
		padding: '6px 12px',
		letterSpacing: '1px',
		whiteSpace: "nowrap"
	};
	const searchbuttom = {
		marginLeft: '200px',
		stylebackgroundColor:'#475f45',


	};
	const bar = {
		padding: '6px',
		backgroundColor: '#475f45', borderRadius: '8px'
	}

	return (

		<nav className='navbar navbar-expand-lg navbar-dark   ' style={{
			margin: 'auto', marginTop: '', fontWeight: 'bold',
		}}>
			<div className='container-fluid'>
				<div className='collapse navbar-collapse w-100 px-3' id='navbarNav'>
					<ul className='navbar-nav position-relative align-items-center w-100'>
						<div className='col-3'>
							<li style={{}}>

								<div className='d-flex align-items-center  m-lg-3 gap-3 p-lg-3 '>
									<img src='https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-banyan-tree-logo-design-vector-png-image_6131481.png' alt='logo' style={{ width: '80px' }}></img>
									<div className='text-decoration-none'>
										<NavLink to='/' className="nav-link white-space-nowrap">
											<h2 style={{ color: 'Green', }} >PLANT PALACE</h2>
										</NavLink>
									</div>

								</div>
							</li>
						</div>
						<li>
							<div className='navbar-nav position-relative shadow bar ms-5' style={bar}>
								<li className='nav-item' >
									<NavLink
										to='/'
										style={navItem}
										className={({ isActive, isPending }) =>
											isPending ? 'pending' : isActive ? 'text-info rounded ' : ''
										}
									>
										Home
									</NavLink>
								</li>


								<li className='nav-item'>
									<NavLink
										to='/shop'
										style={navItem}
										className={({ isActive, isPending }) =>
											isPending ? 'pending' : isActive ? 'text-info rounded ' : ''
										}
									>
										Shop
									</NavLink>

								</li>
								<li className='nav-item'>
									<NavLink
										to='/about-us'
										style={navItem}
										className={({ isActive, isPending }) =>
											isPending ? 'pending' : isActive ? 'text-info rounded ' : ''
										}
									>
										About Us
									</NavLink>

								</li>
									<li className='nav-item'>
									<NavLink
										to='/contact-us'
										style={navItem}
										className={({ isActive, isPending }) =>
											isPending ? 'pending' : isActive ? 'text-info rounded' : ''
										}
									>
										Contact Us
									</NavLink>

								</li> 
								<li className='nav-item'>
									<NavLink
										to='/feed-back'
										style={navItem}
										className={({ isActive, isPending }) =>
											isPending ? 'pending' : isActive ? 'text-info rounded' : ''
										}
									>
										Feed Back
									</NavLink>

								</li>
							</div>
						</li>
						<div className='ms-5' style={{ width: '10px', height: '' }}>
							<Link to="/buytree">
								<i className="fa-solid fa-cart-shopping fa-beat fa-xl" style={{ color: '#475f45' }}></i>
							</Link>
						</div>
						<div className='col-4'>
							<li className='searchbuttom' style={searchbuttom}>
								<form className="d-flex nav-item ">
									<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
									<button className="btn btn-outline-success" type="submit">Search</button>
								</form>
							</li>
						</div>

					</ul>
				</div>
			</div>
		</nav >
	);
}
