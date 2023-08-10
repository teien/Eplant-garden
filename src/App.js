import './App.css';
import AppRoutes from './routes/index';
import Header from './components/Header';

function App() {
	return (
		<div className='App'>
			<Header />
			<div className='d-flex align-start'>
							<div className='w-100'>
								<AppRoutes />
				</div>
			</div>
		</div>
	);
}

export default App;
