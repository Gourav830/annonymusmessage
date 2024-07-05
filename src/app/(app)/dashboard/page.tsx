"use client";

import { useToast } from "@/components/ui/use-toast";
import { Message, user } from "@/model/user";
import { acceptMessageSchema } from "@/schemas/acceptMessageSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { ApiResponse } from "@/types/ApiResponse";
import { AxiosError } from "axios";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import Messagecard from "@/components/messagecard";
import { Loader2, RefreshCcw } from "lucide-react";

const Page = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isloading, setIsLoading] = useState(false);
  const [isSwitchLoading, setIsSwitchLoadinfg] = useState(false);
  const { toast } = useToast();

  const handleDeleteMessage = (messageId: string) => {
    setMessages(messages.filter((message) => message._id !== messageId));
  };
  const { data: session } = useSession();
  const form = useForm({
    resolver: zodResolver(acceptMessageSchema),
  });

  const { register, watch, setValue } = form;
  const acceptMessages = watch("acceptMessages");

  const fetchAcceptMesssage = useCallback(async () => {
    setIsSwitchLoadinfg(true);
    try {
      const response = await axios.get<ApiResponse>("/api/accept-messages");
      setValue("acceptMessages", response.data.isAcceptingMessage);
    } catch (error) {
      const AxiosError = error as AxiosError<ApiResponse>;
      toast({
        title: "Error",
        description:
          AxiosError.response?.data.message ||
          "Failed to fetch Message settings",
        variant: "destructive",
      });
    } finally {
      setIsSwitchLoadinfg(false);
    }
  }, [setValue]);

  const fetchMessages = useCallback(
    async (refresh: boolean = false) => {
      setIsLoading(true);
      setIsSwitchLoadinfg(false);
      try {
        const response = await axios.get("/api/get-messages");
        setMessages(response.data.messages || []);
        if (refresh) {
          toast({
            title: "Refreshead Messages",
            description: "Showing latest Messages",
          });
        }
      } catch (error) {
        const AxiosError = error as AxiosError<ApiResponse>;
        toast({
          title: "Error",
          description:
            AxiosError.response?.data.message ||
            "Failed to fetch Message settings",
          variant: "destructive",
        });
      } finally {
        setIsSwitchLoadinfg(false);
        setIsLoading(false);
      }
    },
    [setIsLoading, setMessages]
  );
  useEffect(() => {
    if (!session || !session.user) {
      return;
    }
    fetchMessages();
    fetchAcceptMesssage();
  }, [session, setValue, fetchAcceptMesssage, fetchMessages]);

  const handleSwitchCase = async () => {
    try {
      const response = await axios.post<ApiResponse>("/api/accept-messages", {
        acceptMessages: !acceptMessages,
      });
      setValue("acepptMessages", !acceptMessages);
      toast({
        title: response.data.message,
        variant: "default",
      });
    } catch (error) {
      const AxiosError = error as AxiosError<ApiResponse>;
      toast({
        title: "Error",
        description:
          AxiosError.response?.data.message ||
          "Failed to fetch Message settings",
        variant: "destructive",
      });
    }
  };

  const {username} = session?.user as user
  
  
  if (!session || !session.user) {
    return <>please login first to access further</>;
  }

  return (
    <div className="my-8 mx-4 md:mx-8 lg:mx-auto p-6 bg-white rounded w-full max-w-6xl">
      <h1 className="text-4xl font-bold mb-4">User Dashboard</h1>

      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Copy Your Unique Link</h2>{" "}
        <div className="flex items-center">
          <input
            type="text"
            value={profileUrl}
            disabled
            className="input input-bordered w-full p-2 mr-2"
          />
          <Button onClick={copyToClipboard}>Copy</Button>
        </div>
      </div>

      <div className="mb-4">
        <Switch
          {...register("acceptMessages")}
          checked={acceptMessages}
          onCheckedChange={handleSwitchChange}
          disabled={isSwitchLoading}
        />
        <span className="ml-2">
          Accept Messages: {acceptMessages ? "On" : "Off"}
        </span>
      </div>
      <Separator />

      <Button
        className="mt-4"
        variant="outline"
        onClick={(e) => {
          e.preventDefault();
          fetchMessages(true);
        }}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <RefreshCcw className="h-4 w-4" />
        )}
      </Button>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {messages.length > 0 ? (
          messages.map((message, index) => (
            <Messagecard
              key={message._id}
              message={message}
              onMessageDelete={handleDeleteMessage}
            />
          ))
        ) : (
          <p>No messages to display.</p>
        )}
      </div>
    </div>
  );
};
