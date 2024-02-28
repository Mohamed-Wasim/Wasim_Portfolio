import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import NavLinkLayout from './LayoutComponents/NavLinkLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <NavLinkLayout/> }>
      <Route index element={ <Home/> }/>
      <Route path='About' element={ <About/> }/>
      <Route path='Project' element={ <Project/> }/>
      <Route path='Contact' element={ <Contact/> }/>
    </Route>
  )
)
function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
