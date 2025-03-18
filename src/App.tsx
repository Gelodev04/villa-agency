
import './App.css'
import Navbar from './components/navbar/Navbar'
import Featured from './components/sections/Featured'
import Home from './components/sections/Home'
import VideoView from './components/sections/VideoView'



function App() {
 

  return (
    <div className='font-poppins'>
      <Navbar/>
      <Home/>
      <Featured/>
      <VideoView/>
      <div className='h-screen'></div>
    </div>
  )
}

export default App
