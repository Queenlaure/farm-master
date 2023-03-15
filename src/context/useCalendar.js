import { useContext } from "react";
import { CalenderContext } from "./CalendarContext";

const useCalendar = () => {
    const data = useContext(CalenderContext);
    return data;
}

export default useCalendar;