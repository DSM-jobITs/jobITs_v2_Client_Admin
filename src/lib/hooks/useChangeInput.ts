import { useState, useCallback } from "react";

export default (initalValue: object) => {
  const [data, setData] = useState(initalValue);

  const handler = useCallback(
    (e) => {
      const { value, name } = e.target;
      setData((prev) => ({ ...prev, [name]: value }));
    },
    [data]
  );
  return [data, handler];
};
