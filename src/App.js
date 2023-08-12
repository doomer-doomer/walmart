import logo from './logo.svg';
import './App.css';
import {NextUIProvider} from "@nextui-org/react";
import Cart from './Cart';
import Nav from './Navbar';


function App() {
  return (
    <NextUIProvider>
      <Nav/>
      <Cart/>
    </NextUIProvider>
  );
}

export default App;
