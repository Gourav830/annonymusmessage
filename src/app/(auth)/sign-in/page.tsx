"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useDebounceValue } from "usehooks-ts";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
// import axios, { AxiosError } from "axios";
// import { ApiResponse } from "@/types/ApiResponse";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signinSchema } from "@/schemas/loginSchema";
import { signIn } from "next-auth/react";
// import { DESTRUCTION } from "dns";
// import { Button } from "@react-email/components";
const Page = () => {
//  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    defaultValues: { identifier: "", password: "" },
  });
  
  const onSubmit = async (data: z.infer<typeof signinSchema>) => {
   const result =  await signIn('credentials',{redirect:false,identifier:data.identifier,password:data.password})
   if (result?.error) {
    // if (result.error === 'CredentialsSignin') {
      toast({
        title: 'Login Failed',
        description: 'Incorrect username or password',
        variant: 'destructive',
      });
    // } else {
      toast({
        title: 'Error',
        description: result.error,
        variant: 'destructive',
   });
      // }
  }

  if(result?.url ){
      router.replace('/dashboard') 
  }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
            Join True Feedback
          </h1>
          <p className="mb-4">Sign in to start your anonymous adventure</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              name ="identifier"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email/Username</FormLabel>
                  <Input
                  placeholder="Email/Username"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                    }}
                  />

                  <FormMessage />
                </FormItem>
              )}
            />
            

            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" {...field} name="password" placeholder="Password"/>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className='w-full' >
             SignIn
            </Button>
          </form>
        </Form>
        <div className="text-center mt-4">
         
        </div>
      </div>
    </div>
  );
}

export default Page;
