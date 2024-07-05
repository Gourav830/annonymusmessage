// import {SessionProvider}
'use client'
import { SessionProvider } from "next-auth/react";

export default function AuthProvider({ children }:{children :React.ReactNode}) {
  return <SessionProvider>{children}</SessionProvider>;
}

// function Auth({ children }) {
//   // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
//   const { status } = useSession({ required: true });

//   if (status === "loading") {
//     return <div>Loading...</div>;
//   }

//   return children;
// }
