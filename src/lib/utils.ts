import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Convert USD to Indian Rupees
 * @param usdPrice - Price in USD (without currency symbol)
 * @returns Price in Indian Rupees
 */
export function convertToINR(usdPrice: number): number {
  // Using an approximate exchange rate of 1 USD = 83 INR
  // In a real application, this should be fetched from an API
  const exchangeRate = 83;
  return Math.round(usdPrice * exchangeRate);
}

/**
 * Format price in Indian Rupees with proper currency symbol
 * @param amount - Amount in rupees
 * @returns Formatted price string in Indian Rupees
 */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}