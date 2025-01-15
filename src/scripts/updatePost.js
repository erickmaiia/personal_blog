export const updatePost = async (postId, formData) => {
  const confirmed = confirm("Are you sure you want to save these changes?");
  if (!confirmed) return;

  try {
    const response = await fetch(`/api/updatePost/${postId}`, {
      method: "PUT",
      body: formData,
    });

    if (response.ok) {
      alert("Post updated successfully.");
      location.reload(); // Recarrega a página após atualização bem-sucedida
    } else {
      alert("Failed to update the post.");
    }
  } catch (error) {
    console.error("Error updating post:", error);
    alert("An error occurred while updating the post.");
  }
};
