import "./App.css";

function handleFileChange(event) {
  const files = event.target.files; // Получаем FileList
  if (files.length > 0) {
    const file = files[0];
    alert("Выбран файл:"+ file.name+ file.size+ file.type);
  }
}

function sendFile() {
  const inputImage = document.getElementById('imageLoader');
  if (!imageLoader || !imageLoader.files<1) return;

  const file = inputImage.files;
  const formData = new FormData();
  formData.append('image', file);

  try {
    // логика пост запроса
  } catch (e) {
    console.log(e.Message);
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
        id='imageLoader'
      />
    </>
  );
}

export default App;
