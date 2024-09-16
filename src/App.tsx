import MainPage from '@/pages/MainPage';
import Members from '@/pages/Members';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='miembros' element={<Members/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
