import { DateTimePicker } from "@/components/custom-ui/date-picker/react-date-picker";
import { useState } from "react";

const InputDatePicker = () => {
  const [date, setDate] = useState<Date>();
  const [date1, setDate1] = useState<Date>();
  return (
    <div className="w-full md:max-w-md">
      <DateTimePicker
        value={date}
        onChange={setDate}
        granularity="second"
        hourCycle={24}
      />
      <p>Selected Date:{date?.toString()}</p>
      Date max is current date minmum is 1900-01-01
      <input
        className="border h-9 rounded pl-2 w-full max-w-md"
        type="date"
        min="1900-01-01"
        value={date1?.toISOString().split("T")[0]}
        onChange={(e) => {
          e.preventDefault();
          setDate1(new Date(e.target.value));
        }}
        max={new Date().toISOString().split("T")[0]}
      />
      Display : {date1?.toString()}
    </div>
  );
};

export default InputDatePicker;
