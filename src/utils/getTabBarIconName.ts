const getTabBarIconName = (name: string) => {
  switch (name) {
    case "BillsScreen":
      return "file-alt";
    case "SavingsScreen":
      return "wallet";
    case "DebtScreen":
      return "chart-line";
    case "BorrowingScreen":
      return "receipt";
    default:
      return "";
  }
};

export default getTabBarIconName;
