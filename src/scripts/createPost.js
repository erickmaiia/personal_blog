export const createPost = async (formData) => {
  try {
    const response = await fetch("/api/createPost", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Post created successfully.");
      location.href = "/admin"; // Redireciona para a página de administração
    } else {
      alert("Failed to create the post.");
    }
  } catch (error) {
    console.error("Error creating post:", error);
    alert("An error occurred while creating the post.");
  }
};
