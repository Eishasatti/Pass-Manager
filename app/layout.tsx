import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
// app/layout.tsx or app/layout.js

import './globals.css'; 
import {Toaster} from "react-hot-toast";
 
import Navbar from '@/components/Navbar'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
       
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            
            enableSystem

            disableTransitionOnChange
          >
              <Navbar/>
     
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}