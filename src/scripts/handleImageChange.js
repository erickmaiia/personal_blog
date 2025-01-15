// src/scripts/handleImageChange.js
export const handleImageChange = (event) => {
  const file = event.target.files ? event.target.files[0] : null;
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imagePreview = document.getElementById("imagePreview");
      if (imagePreview && e.target) {
        imagePreview.src = e.target.result;
        imagePreview.style.display = "block";
      }
    };
    reader.readAsDataURL(file);
  }
};
