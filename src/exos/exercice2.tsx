import { RefObject } from "react";

// Implement the useHover hook that returns a boolean value indicating whether the element is being hovered over or not.
export function useHover<T extends HTMLElement = HTMLElement>(
    elementRef: RefObject<T>,
  ): boolean {
    return true
  }