import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import EmployeeDirectory from "./components/employeeDirectory/EmployeeDirectory";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Organization from "./components/organization/Organization";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/employees" element={<EmployeeDirectory />} />
        <Route path="/organization" element={<Organization />} />
        <Route path="/" element={<EmployeeDirectory />} />
    </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;