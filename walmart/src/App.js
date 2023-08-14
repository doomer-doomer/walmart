import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {NextUIProvider} from "@nextui-org/react";
import Cart from './Cart';
import Nav from './Navbar';
import Final from './finalpage/Final';
import SelectWalmart from './SelectWalmart/SelectWalmart';
import BookSlots from './BookSlots/BookSlots';
import Payment from './Payment/Payment';


function App() {
  return (
    // <NextUIProvider>
    //   <Nav/>
    //   <Cart/>
    // </NextUIProvider>

       <NextUIProvider>
        <Nav/>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Cart />} />
          <Route path="/final" element={<Final />} />
          <Route path="/SelectWalmart" element={<SelectWalmart />} />
          <Route path="/BookSlots" element={<BookSlots />} />
          <Route path="/Payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;
