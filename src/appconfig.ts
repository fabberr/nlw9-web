/**
 * File: appconfig.ts
 * 
 * This file ensures that certain environment variables loaded into Vite will 
 * have default values if they're not present in a dotenv file and exports them 
 * alongside additional variables derived from their values.
*/

export const API_HOSTNAME = import.meta.env.VITE_API_HOSTNAME || 'localhost';
export const API_PORT     = import.meta.env.VITE_API_PORT     || '3333';

export const API_BASE_URL = `${API_HOSTNAME}:${API_PORT}`;
