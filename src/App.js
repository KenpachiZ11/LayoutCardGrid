import React from "react";
import { Layout } from "./Components/Layout/Layout";
import { Card } from "./Components/Card/Card";

function App() {
  return (
    <div className="App">
      <Layout columns={ 4 }>
        <Card aspectRatio="3x4"/>
        <Card aspectRatio="3x4"/>
        <Card aspectRatio="3x4"/>
        <Card aspectRatio="16x9"/>
        <Card aspectRatio="16x10"/>
      </Layout>
    </div>
  );
}

export default App;
