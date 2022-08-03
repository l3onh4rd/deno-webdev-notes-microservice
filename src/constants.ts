/**
 * - provides constants
 */

export const DATA_API_KEY = String(Deno.env.get("WDC_DATA_API_KEY"));
export const BASE_URI = `https://data.mongodb-api.com/app/${Deno.env.get("WDC_APP_ID")}/endpoint/data/beta/action`;
export const DATA_SOURCE = String(Deno.env.get("WDC_DATA_SOURCE"));
export const DATABASE = String(Deno.env.get("WDC_DATABASE"));
export const DATABASE_USER = String(Deno.env.get("WDC_DATABASE_USER"));
