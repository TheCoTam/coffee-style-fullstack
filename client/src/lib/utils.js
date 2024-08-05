import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price) {
  let numberStr = price.toString();
  let formattedNumber = numberStr.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return `${formattedNumber} đ`;
}

export function formatDate(time) {
  const date = new Date(time);
  const day = date.getDate();
  const monthNames = date.toLocaleString("en-US", {
    month: "long",
  });
  const year = date.getFullYear();

  return `${day} ${monthNames} ${year}`;
}
