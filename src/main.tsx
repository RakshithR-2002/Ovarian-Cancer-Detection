import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Biomarkers from './Pages/Biomarkers'
import Histopatho from './Pages/Histopatho';
import Mitosis from './Pages/Mitosis.tsx';
import Pleo from './Pages/Pleo.tsx';
import Infil from './Pages/Infil.tsx';
import Pleores from './Pages/Pleores.tsx';
import Mitores from './Pages/Mitores.tsx';
import Biores from './Pages/Biores.tsx';
import Infilres from './Pages/Infilres.tsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "biomarkers",
    element: <Biomarkers/>
  },
  {
    path: "histopatho",
    element: <Histopatho/>
  },
  {
    path: "mitosis",
    element: <Mitosis/>
  },
  {
    path: "pleo",
    element: <Pleo/>
  },
  {
    path: "infil",
    element: <Infil/>
  },
  {
    path: "infilres",
    element: <Infilres/>
  },
  {
    path: "pleores",
    element: <Pleores/>
  },
  {
    path: "mitores",
    element: <Mitores/>
  },
  {
    path: "biores",
    element: <Biores/>
  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
