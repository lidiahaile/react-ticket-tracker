import "./App.scss";
import Employee from "./components/Employee/Employee";
import team from "./Data/TeamData"

const App =( ) =>{





  return (
    
    <div className="ticket-tracker__container">
      <h1 className="ticket-tracker__title">Ticket Tracker</h1>
      {team.map(({ name, role }) => (
        <Employee key={name} name={name} role={role} />
      ))}
    </div>
  )
      };

export default App;
  
