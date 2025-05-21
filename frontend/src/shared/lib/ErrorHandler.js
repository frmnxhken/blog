export const ErrorHandler = (error) => {
  if (error.response) {
    return {
      success: false,
      status: error.response.status,
      message: error.response.data.message,
      errors: error.response.data.errors,
    };
  }
  return {
    success: false,
    message: error.message,
  };
};
