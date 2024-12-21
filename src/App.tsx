import { Suspense } from 'react';
import InputDatePicker from './components/common/react-date';

function App() {
	return (
		<div className="w-full flex justify-center items-center flex-col gap-2 h-screen">
			<h1>React Date Picker with Shadcn</h1>
			<Suspense fallback={<div>Loading...</div>}>
				<InputDatePicker />
			</Suspense>
		</div>
	);
}

export default App;
