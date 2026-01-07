// src/lib/utils.ts
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * This function merges Tailwind classes safely.
 * Example: If you pass "bg-red-500" and then "bg-blue-500",
 * this ensures the last one wins without breaking styles.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}