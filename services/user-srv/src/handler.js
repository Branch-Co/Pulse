exports.getUser = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "User service working!" }),
  };
};
