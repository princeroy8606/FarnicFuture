import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./modules/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}/>
      </Routes>
    </Router>
  );
};

export default App;
