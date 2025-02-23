"use client";

import dynamic from "next/dynamic";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { theme, setTheme } = useTheme();

  if (!mounted) return null;

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <nav className="bg-primary/40 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl text-foreground">
              My Pass
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <Link href="/" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/services" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                  Services
                </Link>
                <Link href="/about" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                  About Us
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon" onClick={toggleTheme}>
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline">Sign In</Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button>Sign Up</Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
