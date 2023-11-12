export const rules = {
  name: {
    required: {
      value: true,
      message: "Please add your Providers name",
    },
  },
  goal: {
    required: {
      value: true,
      message: "Please add the cost of your bill",
    },
    minLength: {
      value: 1,
      message: "Make sure the amount is greater than £1",
    },
  },
  progress: {
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
