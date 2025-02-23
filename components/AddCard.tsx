"use client"

import type React from "react"


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { Card,  CardHeader, CardTitle } from "@/components/ui/card"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"


import {
  Form,
  FormControl,

  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"


import { z } from "zod";

const formSchema = z.object({
  cardName: z
    .string()
    .min(2, { message: "Card holder name must be at least 2 characters." })
    .max(100, { message: "Card holder name must not exceed 100 characters." })
    .regex(/^[a-zA-Z\s'-]+$/, {
      message: "Card holder name can only contain letters, spaces, hyphens, and apostrophes.",
    }),

  cardNumber: z
    .string()
    .length(16, { message: "Card number must be exactly 16 digits." })
    .regex(/^\d{16}$/, { message: "Card number must contain only digits." }),

    expiryDate: z
    .string()
    .regex(/^\d{2}\/\d{2}$/, {
      message: "Expiration date must be in DD/MM format.",
    })
    .refine((date) => {
      const [day, month] = date.split('/').map(Number);
      const isValidDay = day >= 1 && day <= 31;
      const isValidMonth = month >= 1 && month <= 12;

      // Check months with only 30 days
      const monthsWith30Days = [4, 6, 9, 11];
      if (monthsWith30Days.includes(month) && day > 30) return false;

      // February check (assuming no year input, limit to 29)
      if (month === 2 && day > 29) return false;

      return isValidDay && isValidMonth;
    }, { message: "Invalid date. Please enter a valid day and month." }),


  cvv: z
    .string()
    .length(3, { message: "CVV must be exactly 3 digits." })
    .regex(/^\d{3}$/, { message: "CVV must contain only digits." }),
});
function onSubmit(values: z.infer<typeof formSchema>) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  console.log(values)
}

export default function AddCard() {
  

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })
  

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Card</CardTitle>
      </CardHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="cardNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Card Number</FormLabel>
                <FormControl>
                  <Input placeholder="Card Number" {...field} />
                </FormControl>
             
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="cardName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Card Holder Name</FormLabel>
                <FormControl>
                  <Input placeholder="Card Holder Name" {...field} />
                </FormControl>
              
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="expiryDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Expiry Date</FormLabel>
                <FormControl>
                  <Input placeholder="MM/YY" {...field} />
                </FormControl>
             
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="cvv"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CVV</FormLabel>
                <FormControl>
                  <Input placeholder="cvv" {...field} />
                </FormControl>
               
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>

     
    </Card>
  )
}

