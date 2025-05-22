import { deletePost } from "../api";

const useArticleDelete = (id) => {
  const handleDelete = async () => {
    try {
      const response = await deletePost(id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return { handleDelete };
};

export default useArticleDelete;
