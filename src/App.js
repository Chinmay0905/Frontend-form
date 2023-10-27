import './App.css';
import Form from './Component/Form';
import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';

// This is the App.js file in which all the other components like the Navbar, Sidebar and the form is imported.
// It is the main file which is shown on the frontpage.

function App() {
  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center'>
        <div> <Sidebar /> </div>
        <div><Form /></div>
      </div>
    </>
  );
}

export default App;
