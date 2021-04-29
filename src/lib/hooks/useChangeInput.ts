import { useState, useCallback } from "react";

function useInputs(initForm: object) {
  const [form, setForm] = useState(initForm);
  // change
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);
  const reset = useCallback(() => setForm(initForm), [initForm]);
  return [form, onChange, reset];
}

export default useInputs;
