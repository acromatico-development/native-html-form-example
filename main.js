
const formulario = document.getElementById('file-form');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(formulario);

  console.log(formData.get('file'));
  console.log(formData.get('file2'));

  fetch('/upload', {
    method: 'POST',
    body: formData,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then(res => res.json())
    .then(data => {
      console.log(data);
    }
  );
})