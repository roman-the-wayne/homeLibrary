import "./App.css";

function handleFileChange(event) {
  const files = event.target.files; // Получаем FileList
  if (files.length > 0) {
    const file = files[0];
    console.log("Выбран файл:", file.name, file.size, file.type);
  }
}

function App() {
  return (
    <>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
      />
    </>
  );
}

export default App;
