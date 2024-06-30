import { signinSchema } from '@/schemas/loginSchema';
// import { signupSchema } from '@/schemas/signupSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const Page = () => {

  const form = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    defaultValues: {  identifier: "", password: "" },
  });
  return (
    <div>
      
    </div>
  );
}

export default Page;
