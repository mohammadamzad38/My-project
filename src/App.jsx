import './App.css'
// import DaisyNav from './components/DaisyNav'
import NavBar from './components/DaisyNav/NavBar'
import LineChart from './components/LiveChart/LineChart'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {


  return (
    <>
    {/* <DaisyNav></DaisyNav> */}
    <NavBar></NavBar>
    <PriceOptions></PriceOptions>
    <LineChart></LineChart>
    <Phones></Phones>
    </>
  )
}

export default App
