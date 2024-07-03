'use client'

import { useSession,signOut } from 'next-auth/react';
import {User} from 'next-auth'
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    const {data:session} = useSession()
    const user:User = session?.user
    
    
    return (
        <div>
            navbar
        </div>
    );
}

export default Navbar;
