export const rules = {
  email: {
    required: {
      value: true,
      message: "Please enter your email address",
    },
  },
  password: {
    required: {
      value: true,
      message: "Please enter your password",
    },
  },
};

export const defaultValues = {
  email: "",
  password: "",
};
