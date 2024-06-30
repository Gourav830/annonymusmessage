'use client'

import { useToast } from '@/components/ui/use-toast';
import { verifySchema } from '@/schemas/verifySchema';
import { ApiResponse } from '@/types/ApiResponse';
import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError } from 'axios';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod'
const Page = () => {
    const router = useRouter();
    const param = useParams<{username:string}>();
    const {toast} = useToast();
    const form = useForm<z.infer<typeof verifySchema>>({
        resolver: zodResolver(verifySchema),
      });
      const onSubmit = async (data:z.infer<typeof verifySchema>)=>{
            try {
              const response =   await axios.post(`/api/verify-code`,{
                    username : param.username,
                    code :data.code
                })
                toast({
                    title:'success',
                    description:response.data.message
                })
                router.replace('sign-in')
            } catch (error) {
                console.log("error in sighup user", error);
                const axiosErrors = error as AxiosError<ApiResponse>;
                // setUsernameMesssage(axiosErrors.response?.data.message??"Error Checking username")
                let errMessage = axiosErrors.response?.data.message;
                toast({
                  title:" failed to verify",
                  description : errMessage,
                  variant : 'destructive'
                })
              }
      }
    return (
        <div>
            hello from verify
        </div>
    );
}

export default Page;
