export const rules = {
  name: {
    required: {
      value: true,
      message: "Please add your Providers name",
    },
  },
  amount: {
    required: {
      value: true,
      message: "Please add the cost of your bill",
    },
    minLength: {
      value: 1,
      message: "Make sure the amount is greater than £1",
    },
  },
  category: {
    required: {
      value: true,
      message: "Please select a category",
    },
  },
  reason: {
    required: {
      value: true,
      message: "Please select how often the bill is paid",
    },
  },
};
