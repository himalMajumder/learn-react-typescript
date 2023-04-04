import './App.css'; 
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  const personName = {
    firstName : 'Bruce',
    lastName : 'Wayne'
  }

  const nameList = [
    {
      first : "Bruce",
      last : "Wayne"
    },
    {
      first : "Clark",
      last : "Kent"
    }, 
    {
      first : "Princess",
      last : "Diana"
    }
  ];

  return (
    <div className="App">
      {/* <Greet name="Himal" messageCount={10} isLoggedIn={true} /> */}
      <Greet name="Himal"  isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList}/>
      <Status status='loading' />
      <Heading> Placeholder text </Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
    </div>
  );
}

export default App;
