import React from "react";
import axios from "axios";
import "./App.css";

function App() {
  return <div>APP</div>;
}
axios.get("http://localhost:8000/characters").then(res => {
  console.log(res.data);
});
axios.post("http://localhost:8000/characters", {
    id: 999,
    name: "Coolboy55",
    occupation: "Lives under the sea",
    weapon: "Code",
    cartoon: true,
  })
  .then(res => {
    console.log(res.data);
  });
export default App;
