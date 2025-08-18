import { generalRedirects } from "./data/general";
/**
 * This file imports all redirects from ./data
 * and exports them as a single array.
 * When you make a new redirect file, import it here.
 * This will allow us to scope redirects to separate files
 * for better organization.
 */
export const allRedirects = { ...generalRedirects };
