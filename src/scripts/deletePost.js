// src/scripts/deletePost.js

export const deletePost = async (postId) => {
  if (confirm("Are you sure you want to delete this post?")) {
    try {
      const response = await fetch(`/api/deletePost/${postId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Post deleted successfully.");
        location.reload(); // Recarrega a página após exclusão
      } else {
        alert("Failed to delete the post.");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("An error occurred while deleting the post.");
    }
  }
};
