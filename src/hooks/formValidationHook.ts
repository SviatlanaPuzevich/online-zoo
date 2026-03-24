import { useState, useCallback } from 'react';

type FieldState = {
  value: string;
  isValid: boolean;
};

type FormState = Record<string, FieldState>;

export const useFormValidation = (initialState: FormState = {}) => {
  const [formState, setFormState] = useState<FormState>(initialState);

  const handleChange = useCallback((id: string) => (value: string, isValid: boolean) => {
    setFormState((prev) => ({
      ...prev,
      [id]: { value, isValid }
    }));
  }, []);

  const isFormValid = Object.values(formState).every((state) => state.isValid);

  const getFormData = () => {
    return Object.fromEntries(
      Object.entries(formState).map(([key, field]) => [
        key,
        field.value,
      ])
    );
  };

  return {
    formState,
    handleChange,
    isFormValid,
    getFormData,
  };
};