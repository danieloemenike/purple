"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { useEffect, useState } from "react"

const FormSchema = z.object({
  email: z.string().email( {
    message: "Invalid Email Address",
  }),
})

export default function SubscriberForm() {
 
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, [])
  
    
    
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: " "
  }
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
   
  }

  return (

   
      <Form { ...form } >
     <div className="w-[495px] h-[76px] mt-[64px]">
          
        <form onSubmit={ form.handleSubmit(onSubmit) } className=" w-full flex space-x-4 ">


        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full focus:border-transparent focus:outline-nonefocus:border-transparent focus:outline-none ">
              <FormControl>
                <Input placeholder="Enter your email" {...field}  className="w-full h-[48px] py-[12px] focus:border-transparent focus:outline-none"/>
              </FormControl>
              <FormDescription className="text-[14px] leading-[20px] mt-8 ">
                We care about your data in our <span className="underline underline-offset-3"> privacy policy </span>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
            />
        

         
            <Button type="submit"> Subscribe </Button>
         
        
        </form>
        </div>
    </Form>
     
  )
}
