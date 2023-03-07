import person from './media/person.png';
import add from './media/add.png';
import arrow from './media/arrow.png'
import desktop from './media/desktop.png'


import Nav from './components/Nav';
import Header from './components/Header'
import Card from './components/Card'
import './App.scss'

function App() {
  return (
    <div className="content">
      <Nav></Nav>
      <div className='attendees'>
        <Header></Header>
        <div className='heading'>
          <img src={person}></img>
          <h1>Attendee</h1>
        </div>

        <p><b>Step 1: </b>Base settings.</p>
        <div className='step1 steps'>
          <Card name="General" description="Define Attendee types & attributes" class="base"></Card>
          <Card name="Title" description="Description that explains the value goes here. Description that explains the value goes here." class="base"></Card>
          <Card name="Title" description="Description that explains the value goes here. Description that explains the value goes here." class="base"></Card>

        </div>
        <p><b>Step 2: </b>Build Registration Workflows.</p>
        <div className='steps'>
          <Card name="Attendee Registration" icon={arrow} description="Start by creating a general registration workflow"></Card>
          <Card name="Attendee Registration" icon={arrow} description="Start by creating a general registration workflow"></Card>
          <Card name="Attendee Registration" icon={arrow} description="Start by creating a general registration workflow"></Card>
          <Card icon={add} description="Add Registration Workflow" class="centered"></Card>
        </div>

        <p><b>Step 3: </b>Design Post Registration Experiences.</p>
        <div className='steps'>
          <Card name="Attendee Portal" icon={desktop} description="Manage the portal that attendees will see after they’ve register for your event."></Card></div>
      </div>
    </div>
  );
}

export default App;
