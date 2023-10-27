const dateSort = (data) =>
  data.sort((a: { dueDate: any }, b: { dueDate: any }) => {
    const dateA = new Date(`${a.dueDate}`).valueOf();
    const dateB = new Date(`${b.dueDate}`).valueOf();
    if (dateA > dateB) {
      return 1;
    }
    return -1;
  });

export default dateSort;
