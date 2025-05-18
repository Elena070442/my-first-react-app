import logo from './logo.svg';
import './App.css';
import { SketchPicker } from 'react-color';


import React from "react";
import { Chart } from "react-google-charts";

function App() {
  const data = [
    ["Задача", "Часы в день"],
    ["Работа", 8],
    ["Еда", 2],
    ["Путь на работу", 2],
    ["Просмотр ТВ", 2],
    ["Сон", 8],
  ];

  const options = {
    title: "Мои ежедневные занятия",
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
}

export default App;