const env = import.meta.env;

export const apiUrl = env?.VITE_API_URL || "";
export const apiTimeOut = env?.VITE_API_TIMEOUT || 30000;
export const owner = env?.VITE_OWNER || "";
