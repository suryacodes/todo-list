import { useState } from "react";

const useModal = (initialState = false) => {
  const [modal, setModal] = useState(initialState);

  const toggle = () => setModal(!modal);

  return { modal, toggle };
};

export default useModal;
