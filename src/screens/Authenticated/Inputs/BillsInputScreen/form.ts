export const rules = {
  provider: {
    required: {
      value: true,
      message: "Please add your Providers name",
    },
  },
  price: {
    required: {
      value: true,
      message: "Please add the cost of your bill",
    },
    minLength: {
      value: 0,
      message: "Make sure the amount is greater than £0",
    },
  },
  date: {
    required: {
      value: true,
      message: "Please select a payment date",
    },
  },
  occurrence: {
    required: {
      value: true,
      message: "Please select how often the bill is paid",
    },
  },
  category: {
    required: {
      value: true,
      message: "Please select a category",
    },
  },
};

export const defaultValues = {
  provider: "",
  price: "",
  date: "",
  occurrence: "",
  category: "",
};
