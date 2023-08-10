import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
export default function Header() {
	const navItem = {
		textDecoration: 'none',
		color: '#fff',
		fontSize: '20px',
		display: 'block',
		padding: '6px 12px',
		letterSpacing: '1px',

	};
	const searchbuttom = {
		marginLeft: '350px',
		marginTop: '50px'


	};
	const bar = {
		marginLeft: '100px',
		padding: '6px',
		backgroundColor: '#475f45', borderRadius: '8px'
	}

	return (

		<nav className='navbar navbar-expand-lg navbar-dark   ' style={{
			margin: 'auto', marginTop: '', fontWeight: 'bold',
		}}>
			<div className='container-fluid'>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<div>

						<div>

							<ul className='navbar-nav m-auto'>
								<li style={{ marginRight: '250px' }}>
									<Helmet>
										<title>Plant Palace</title>
									</Helmet>
									<div className='d-flex align-items-center  m-lg-3 gap-3 p-lg-3 '>
										<img src='https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-banyan-tree-logo-design-vector-png-image_6131481.png' alt='logo' style={{ width: '80px' }}></img>
										<div className='text-decoration-none'>
											<NavLink to='/' className="nav-link">
												<h2 style={{ color: 'Green', }} >PLANT PALACE</h2>
											</NavLink>
										</div>

									</div>
								</li>
								<div className='navbar-nav m-auto shadow bar' style={bar}>
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

								<li className='searchbuttom' style={searchbuttom}>
									<form className="d-flex nav-item ">
										<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
										<button className="btn btn-outline-success" type="submit">Search</button>
									</form>
								</li>

							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav >
	);
}
