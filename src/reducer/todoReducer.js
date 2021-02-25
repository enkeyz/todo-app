const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        ...state,
        todoArray: [...state.todoArray, action.payload],
      };
    }
    case "REMOVE_TODO": {
      return {
        ...state,
        todoArray: state.todoArray.filter(
          (todoItem) => todoItem.id !== action.payload.id
        ),
      };
    }
    case "CLEAR_ALL_TODOS": {
      return {
        ...state,
        todoArray: [],
      };
    }
    case "EDIT_TODO": {
      return {
        ...state,
        todoArray: state.todoArray.map((todoItem) => {
          if (todoItem.id === action.payload.id)
            return { ...todoItem, text: action.payload.text };
          return todoItem;
        }),
      };
    }
    case "COMPLETE_TODO": {
      return {
        ...state,
        todoArray: state.todoArray.map((todoItem) => {
          if (todoItem.id === action.payload.id)
            return { ...todoItem, isCompleted: action.payload.isCompleted };
          return todoItem;
        }),
      };
    }

    default:
      return new Error("Invalid action type");
  }
};

export { todoReducer };
