import "./App.css";
import React from "react";
import {  Route, Routes } from "react-router-dom";
import Main from './pages/Main';
import TaskList from './pages/TaskList';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/task-list" element={<TaskList />} />
      </Routes>
    </div>

  );
}

export default App;
