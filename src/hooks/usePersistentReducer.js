import { useReducer, useEffect } from "react";

const usePersistentReducer = (reducer, initialState, key) => {
  const stored = localStorage.getItem(key);
  const init = stored ? JSON.parse(stored) : initialState;
  const [state, dispatch] = useReducer(reducer, init);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, dispatch];
};

export { usePersistentReducer };
