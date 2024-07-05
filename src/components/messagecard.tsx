// // import React from 'react';
// "use client";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//     AlertDialog,
//     AlertDialogAction,
//     AlertDialogCancel,
//     AlertDialogContent,
//     AlertDialogDescription,
//     AlertDialogFooter,
//     AlertDialogHeader,
//     AlertDialogTitle,
//     AlertDialogTrigger,
//   } from "@/components/ui/alert-dialog"
// import { Button } from "./ui/button";
// import { X } from "lucide-react";
// import { Message } from "@/model/user";
// import { useToast } from "./ui/use-toast";
// import axios from "axios";
// import { ApiResponse } from "@/types/ApiResponse";
//   type MessageCardProps = {
//     message:Message;
//     onMessageDelete :(messageId:string)=> void
//   }
// const Messagecard = ( {message,onMessageDelete}:MessageCardProps) => {
//     const {toast} = useToast();
 
//     const handleDelConfirm = async ()=>{
//        const response =  axios.delete<ApiResponse>(`/api/delete-message/${message._id}`)
//                 toast({title:(await response).data.message,
                   
//                 })
//                 onMessageDelete(message._id)
//     }  

//     return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Card Title</CardTitle>
//         <AlertDialog>
//       <AlertDialogTrigger asChild>
//         <Button variant="destructive"><X className="w-5 h-5"/>Show Dialog</Button>
//       </AlertDialogTrigger>
//       <AlertDialogContent>
//         <AlertDialogHeader>
//           <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
//           <AlertDialogDescription>
//             This action cannot be undone. This will permanently delete your
//             account and remove your data from our servers.
//           </AlertDialogDescription>
//         </AlertDialogHeader>
//         <AlertDialogFooter>
//           <AlertDialogCancel>Cancel</AlertDialogCancel>
//           <AlertDialogAction onClick={handleDelConfirm}>Continue</AlertDialogAction>
//         </AlertDialogFooter>
//       </AlertDialogContent>
//     </AlertDialog>

//         <CardDescription>Card Description</CardDescription>
//       </CardHeader>
//       <CardContent>
//       </CardContent>
     
//     </Card>
//   );
// };

// export default Messagecard;
import React from 'react';

const Messagecard = () => {
  return (
    <div>
      message
    </div>
  );
}

export default Messagecard;
