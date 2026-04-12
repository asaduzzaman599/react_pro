import './App.css'
import Nav from './components/Nav'
import AppRouter from './router/Router'
import { AppProviders } from './components/AppProviders'

function App() {

  return (
    <>
    <div className='bg-gray-100 min-h-screen'>
      <AppProviders>
          <Nav />
          <AppRouter />
      </AppProviders>
    </div>
    </>
  )
}

export default App
