
import './App.css'
import Approuter from './router/Approuter'
import { Toaster } from 'react-hot-toast'


function App() {
 

  return (
    <>

        <Approuter />
        <Toaster
  position="top-right"
  reverseOrder={false}
/>
   
    </>
  )
}

export default App
