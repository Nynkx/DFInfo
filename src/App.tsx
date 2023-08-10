import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "@/App.css";
import { Header } from "./components/Header";

// import { MantineProvider, Text } from "@mantine/core";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="h-[200vh]">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>0</p>
      </div>
    </div>
  );
}

export default App;
