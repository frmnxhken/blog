import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost } from "../api";
import { useLocation, useNavigate } from "react-router-dom";

const useArticleDelete = (id) => {
  const queryClient = useQueryClient();
  const location = useLocation();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["articles_dashboard"]);
      navigate(location.pathname, {
        state: { type: "success", message: "Data has been deleted!" },
      });
    },
  });

  const handleDelete = async () => {
    let confirmation = confirm("Are you sure?");
    if (confirmation) {
      mutation.mutate(id);
    }
  };

  return { handleDelete };
};

export default useArticleDelete;
