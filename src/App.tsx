import { Card } from './components/Card'
import './styles/main.css'
function App() {

  return (
    <div className='max-w-[1344p] mx-auto flex flex-col items-center my-20'>
      <h1 className='text-3xl  font-black m-20'>
        <span className='bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent'>Search for a pokemon</span>
      </h1>    
      <Card/>  
    </div>
  )
}

export default App
