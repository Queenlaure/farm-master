import { createContext, useState } from "react";

export const CalenderContext = createContext();

const CalenderProvider = ({ children }) => {
    const [calendar, setCalendar] = useState([]);

    const handleCalendar = (_cal) => {
        setCalendar(_cal);
    }

    return (
        <CalenderContext.Provider value={{ calendar, handleCalendar }}  >
            {children}
        </CalenderContext.Provider>
    )
}

export default CalenderProvider;