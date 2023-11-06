const toggleList = (
  listTitle: string,
  state: string,
  setState: (value: string | null) => void
) => {
  if (state === listTitle) {
    setState(null);
  } else {
    setState(listTitle);
  }
};

export default toggleList;
