export const formatCEP = (value: string) =>
  value
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .substring(0, 9);

export const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const formatPhone = (value: string): string =>
  value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .substring(0, 15);

export const formatUF = (value: string): string =>
  value
    .replace(/[^a-zA-Z]/g, "")
    .toUpperCase()
    .substring(0, 2);
