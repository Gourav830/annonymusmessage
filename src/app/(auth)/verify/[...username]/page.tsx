import { useToast } from '@/components/ui/use-toast';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';

const Page = () => {
    const router = useRouter();
    const param = useParams<{username:string}>();
    const {toast} = useToast();
    
    return (
        <div>
            hello from verify
        </div>
    );
}

export default Page;
