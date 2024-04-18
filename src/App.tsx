import "./App.scss";
import Employee from "./components/Employee/Employee";
import SearchByName from "./components/Employee/SearchByName/SearchByName";
import team from "./Data/TeamData"

const App =( ) =>{





  

  return (
    
  <div className="ticket-tracker__container">
  <h1 className="ticket-tracker__title">Ticket Tracker</h1>
  <SearchByName />
  {team.map((employee) => (
  <Employee key={employee.name} name={employee.name} role={employee.role} />
  ))};
  </div>
  )
  };

export default App;
  
