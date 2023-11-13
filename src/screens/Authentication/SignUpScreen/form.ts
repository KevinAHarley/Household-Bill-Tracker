export const rules = {
  name: {
    required: {
      value: true,
      message: "Please enter your name",
    },
  },
  dateOfBirth: {
    required: {
      value: true,
      message: "Please select your date of birth",
    },
  },
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
  name: "",
  email: "",
  dateOfBirth: undefined,
  password: "",
};
