import './App.css';
import SideBarFilter from './components/layouts/Sidebar.js';
import AppRoutes from './routes/index';

function App() {
	return (
		<div className='App'>
			<div className='d-flex align-start'>
				<SideBarFilter/>
				<div className='w-100'>
					{/* render page */}
					<AppRoutes />
				</div>
			</div>
		</div>
	);
}

export default App;
