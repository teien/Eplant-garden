import './App.css';
<<<<<<< HEAD
import SideBarFilter from './components/layouts/Sidebar.js';
=======
import SideBarFilter from './components/layouts/Sidebar';
>>>>>>> 515479aa184d75743d16dbbf8918572603585c7e
import AppRoutes from './routes/index';
import Header from './components/Header';

function App() {
	return (
		<div className='App'>
			<Header />
			<div className='d-flex align-start'>
				{/* <SideBarFilter/> */}
				<div className='w-100'>
					{/* render page */}
					<AppRoutes />
				</div>
			</div>
		</div>
	);
}

export default App;
