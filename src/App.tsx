import './App.css'; 
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
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
      firstName : "Bruce",
      lastName : "Wayne"
    },
    {
      firstName : "Clark",
      lastName : "Kent"
    }, 
    {
      firstName : "Princess",
      lastName : "Diana"
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
      <Button handleClick={(event) => console.log(`Button Click`, event)}></Button>
      <Input value='' handleChange={(event) => console.log(event)} />
      <Container styles={{ border : `1px solid`, padding: `1rem`}} />
    </div>
  );
}

export default App;
