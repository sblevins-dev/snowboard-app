import userService from "./userService";

// get user
export const getUser = async (req, res) => {
  try {
      const token = req.data
      console.log(token)
    //   return await userService.getUser(token)
  } catch (error) {
    // const message =
    //   (error.response.data && error.response.data.message) ||
    //   error.message ||
    //   error.toString();

    // return message;
  }
};

export default getUser
