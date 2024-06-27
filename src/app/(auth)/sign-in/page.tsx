"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { useState } from "react";
import { useDebounceValue } from "usehooks-ts";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { signupSchema } from "@/schemas/signupSchema";
const Page = () => {
  const [username, setUsername] = useState("");
  const [usernameMesssage, setUsernameMesssage] = useState("");
  const [isCheckingMessage, setIsCheckingMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const debouncedUsername = useDebounceValue(username, 300);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver<z.infer <typeof signupSchema>>(signupSchema),
    defaultValues: { username: "", email: "", password: "" },
  });
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
