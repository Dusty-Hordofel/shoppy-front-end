export const handleError = (setError: any, errorMsg: any) => {
  setError(errorMsg);
  alert(`Erreur: ${errorMsg}`);
};

export const resetMessages = (setError: any, setSuccess: any) => {
  setError("");
  setSuccess("");
};

export const handleResponse = async (
  response: any,
  form: any,
  setSuccess: any,
  successMessage: any,
  resetFileInput: any
) => {
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || "Une erreur est survenue");
  }
  setSuccess(successMessage);
  form.reset();
  resetFileInput();
  alert("Le Produit a été créé avec succès");
};
