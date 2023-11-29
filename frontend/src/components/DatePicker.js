
"use client";
import { useState } from "react";
import { DatePicker } from "keep-react";

// export const DatePickerComponent = () => {
//   const [date, setDate] = useState(null);
//   return (
//     <DatePicker singleDatePicker={setDate}>
//       <DatePicker.SingleDate />
//     </DatePicker>
//   );
// }


export const DatePickerComponent = () => {
  const [rangeDate, setRangeDate] = useState(null);

  return (
      <DatePicker showTwoMonth={true} selected={rangeDate} onChange={date => setRangeDate(date)} placeholderText="Start - Finish">
          <DatePicker.Range />
      </DatePicker>
  );
};
 export default DatePickerComponent;