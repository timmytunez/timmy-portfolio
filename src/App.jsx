import { BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import WelcomePage from './Pages/WelcomePage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<WelcomePage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App