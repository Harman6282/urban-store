import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// convert prisma object into a regular JS object

export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

//Format number with decimal places

export function formatNumberWithDecimal(num: number): string {
/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Formats a number to a string with at least two decimal places.
 * 
 * @param num - The number to format.
 * @returns A string representing the number formatted with at least two decimal places.
 *          If the number has fewer than two decimal places, zeroes are added.
 */

/*******  d1e73221-b619-45ba-9bcb-98c51b69251b  *******/  const [int, decimal] = num.toString().split(".");
  return decimal ? `${int}.${decimal.padEnd(2, "0")}` : `${int}.00`;
}
