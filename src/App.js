import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          {/* <Route path="/anotherpage/:id" element={<AnotherPage />} /> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
