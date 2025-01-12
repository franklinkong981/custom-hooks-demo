import React, {useState, useEffect} from "react";

const useLocalStorageState = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    //this is just for demo purposes, but for best practice you'll want a try-catch block to handle potential errors from JSON.parse.
    let value = JSON.parse(window.localStorage.getItem(key) || defaultValue);
    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state]);

  return [state, setState];
};

export default useLocalStorageState;