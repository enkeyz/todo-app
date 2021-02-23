const getLocalStorageItems = () => {
  return JSON.parse(localStorage.getItem("todo-list")) || [];
};

export default getLocalStorageItems;
