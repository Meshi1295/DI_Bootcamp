import './App.css';
import PrintHello from './PrintHello';
import BootstrapCard from './BootstrapCard';
import Jumbotron from './Jumbotron';

const PaulMcCartney = [
  {
    title:"McCartney",

  imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg",

  buttonLabel:"Go to Wikipedia",

  buttonUrl:"https://en.wikipedia.org/wiki/Paul_McCartney",

  description:"Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles."
  }
]




function App() {
  return (
    <div >
      <PrintHello/>
      <BootstrapCard data={PaulMcCartney} />
      <Jumbotron
          title={'Welcome to react'}
          description={"React is the most popular rendering library in the world"}
          buttonLabel={"Go to the official website"}
          buttonURL={"https://reactjs.org/"} />

    </div>
  );
}

export default App;
