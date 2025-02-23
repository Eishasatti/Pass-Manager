"use client";

import { ThemeProvider as ShadcnThemeProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <ShadcnThemeProvider {...props}>{children}</ShadcnThemeProvider>;
}
