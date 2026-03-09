import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function MeuCalendario() {
  const [data, setData] = useState(new Date());
  return <Calendar onChange={setData} value={data} />;
}