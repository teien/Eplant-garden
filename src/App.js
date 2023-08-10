import './App.css';
<<<<<<< HEAD

import AppRoutes from './routes/index';
import Header from './components/Header';

=======
import SideBarFilter from './components/layouts/sidebar';
import AppRoutes from './routes/index';
>>>>>>> main

function App() {
	return (

		<div className='App'>
<<<<<<< HEAD

			<Header />
			<AppRoutes />

=======
			<div className='d-flex align-start'>
				<SideBarFilter/>
				<div className='w-100'>
					{/* render page */}
					<AppRoutes />
				</div>
			</div>
>>>>>>> main
		</div>


	);
}

export default App;
