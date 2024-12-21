import { Suspense, useState } from 'react';
import InputDatePicker from './components/common/react-date';

function App() {
	const [date1, setDate1] = useState<Date>();
	return (
		<div className="w-full flex justify-center items-center flex-col gap-2 h-screen">
			<h1>React Date Picker with Shadcn</h1>
			<Suspense fallback={<div>Loading...</div>}>
				<InputDatePicker />
			</Suspense>
			Date max is current date minmum is 1900-01-01
			<input
				className="border h-9 rounded pl-2 w-full max-w-md"
				type="date"
				min="1900-01-01"
				value={date1?.toISOString().split('T')[0]}
				onChange={(e) => {
					e.preventDefault();
					setDate1(new Date(e.target.value));
				}}
				max={new Date().toISOString().split('T')[0]}
			/>
			Display : {date1?.toString()}
		</div>
	);
}

export default App;
