import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../Css/DespuesCss/RightSidebar.css'

const RightSidebar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <aside className="right-sidebar">
      <h2 className="sidebar-heading">Calendario</h2>
      <Calendar
        className="sidebar-calendar"
        value={selectedDate}
        onChange={handleDateChange}
      />
      <div id="nota">
        <h3 className="sidebar-heading">Fecha Seleccionada:</h3>
        <p id="fecha-seleccionada">{selectedDate.toLocaleDateString()}</p>
        <h3 className="sidebar-heading">Nota:</h3>
        <p id="nota-contenido"></p>
      </div>
    </aside>
  );
};

export default RightSidebar;
