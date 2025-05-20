export const ErrorHandler = (error) => {
  if (error.response) {
    return {
      error: true,
      message: error.response.data?.message || "Server Error",
    };
  } else if (error.request) {
    return {
      error: true,
      message: "No response from server. Please check your connection.",
    };
  } else {
    return {
      error: true,
      message: error.message || "Unexpected error occurred",
    };
  }
};
