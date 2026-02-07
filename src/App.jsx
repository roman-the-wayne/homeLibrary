import React from 'react';
import ImageUploader from './components/imageUpload';
import InputField from './components/inputField';
import Sidebar from './components/sidebar';
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <ImageUploader />
      <InputField />
    </div>
  );
}

export default App;