
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import Controls from './components/Controls'
import CounterHeading from './components/CounterHeading'
import InputField from './components/InputField'
import Toggle from './components/Toggle'
import { useSelector } from 'react-redux'

function App() {

  const privacy = useSelector(store=>store.privacy)

  return (<>
    <Header>
      {privacy? <Toggle />:<CounterHeading />}
      <InputField />
      <Controls />
    </Header>

  </>
  )
}

export default App
