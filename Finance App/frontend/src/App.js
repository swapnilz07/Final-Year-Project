import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Apply from "./components/Apply";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banks from "./components/Banks";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Secured from "./components/Secured";
import Unsecure from "./components/Unsecure";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />            
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/banks/:loanName" element={<Banks />} />
            <Route path="/secured" element={<Secured />} />
            <Route path="/unsecured" element={<Unsecure />} />
            <Route path="/services" element={<Services/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
      <ToastContainer autoClose={1000} closeOnClick hideProgressBar={true} />
    </>
  );
}

export default App;
