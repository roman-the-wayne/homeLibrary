const API_URL = 'http://localhost:3000';

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append('image', file);

  const response = await fetch(`${API_URL}/upload`, {
    method: 'POST',
    body: formData
  });

  if (!response.ok) throw new Error('Ошибка загрузки');
  return await response.json();
};