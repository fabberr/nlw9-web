/**
 * File: appconfig.ts
 * 
 * This file ensures that certain environment variables loaded into Vite will 
 * have default values if they are not present in a dotenv fil, then exports 
 * them alongside additional variables derived from their values.
*/

// from ENV
export const API_HOSTNAME = import.meta.env.VITE_API_HOSTNAME || 'localhost'; /** LAN IP adress of the server or `localhost`. */
export const API_PORT     = import.meta.env.VITE_API_PORT     || '3333';      /** Port the server is listening for connection on. */

// additional values
export const API_BASE_URL = `${API_HOSTNAME}:${API_PORT}`;
