import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
const selectData = [
  {id: 1, name: 'This is test',ischecked: false},
  {id: 2, name: 'Sonu Mahan',ischecked: false},
  {id: 3, name: 'Dhanu Kumar',ischecked: false},
  {id: 4, name: 'Divya Singh',ischecked: false},
  {id: 5, name: 'Rahul Kumar',ischecked: false},
  {id: 6, name: 'Muskan Kuamri',ischecked: false},
  {id: 7, name: 'Anmol Kumar',ischecked: true},
];


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App data={selectData} />
  </React.StrictMode>,
)
