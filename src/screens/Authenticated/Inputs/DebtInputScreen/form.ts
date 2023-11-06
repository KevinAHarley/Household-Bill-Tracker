export const rules = {
  provider: {
    required: {
      value: true,
      message: "Please add your Providers name",
    },
  },
  owed: {
    required: {
      value: true,
      message: "Please add the cost of your bill",
    },
    minLength: {
      value: 1,
      message: "Make sure the amount is greater than £1",
    },
  },
  paid: {
    required: {
      value: true,
      message: "Please select a category",
    },
    minLength: {
      value: 0,
      message: "Make sure the amount is greater than £0",
    },
  },
};

export const defaultValues = {
  provider: "",
  owed: "",
  paid: "",
};
