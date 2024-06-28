"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDebounceValue } from "usehooks-ts";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { signupSchema } from "@/schemas/signupSchema";
import axios from "axios";
import { messageSchema } from "../../../schemas/messageSchema";
import { ResponseCookies } from 'next/dist/compiled/@edge-runtime/cookies';
const Page = () => {
  const [username, setUsername] = useState("");
  const [usernameMesssage, setUsernameMesssage] = useState("");
  const [isCheckingMessage, setIsCheckingMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const debouncedUsername = useDebounceValue(username, 300);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver<z.infer<typeof signupSchema>>(signupSchema),
    defaultValues: { username: "", email: "", password: "" },
  });
  useEffect(() => {
    const checkUsernameUniquie = async () => {
      if (debouncedUsername) {
        setIsCheckingMessage(true);
        setUsernameMesssage("");
        try {
          const response = await axios.get(
            `/api/check-username-unique? username={debouncedUsername}`
          );
          setUsernameMesssage(response.data.message);
        } catch (error) {
          const axiosErrors = error as AxiosError<ApiResponse>;
setUsernameMesssage(axiosErrors.response?.data.message?"Error Checking username")

}finally{
  checkUsernameUniquie(false);
}
      }
    };
  }, [debouncedUsername]);
  return (
    <div>
      <>
        <>
          <>hello test for route</>
        </>
      </>
    </div>
  );
};

export default Page;
