import { DateTimePicker } from '@/components/custom-ui/date-picker/react-date-picker';
import { useState } from 'react';

const InputDatePicker = () => {
	const [date, setDate] = useState<Date>();
	return (
		<div className="w-full md:max-w-md">
			<DateTimePicker
				value={date}
				onChange={setDate}
				granularity="second"
				hourCycle={24}
			/>
			<p>Selected Date:{date?.toString()}</p>
		</div>
	);
};

export default InputDatePicker;
