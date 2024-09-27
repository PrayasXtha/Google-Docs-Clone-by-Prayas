'use client'

import React, { useTransition } from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation';
import { createNewDocument } from '@/actions/actions';
import { createContext } from 'react'

function NewDocumentButton() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    
    const handleCreateNewDocument = () => {
            startTransition(async () => {
                const { docId } = await createNewDocument();
                router.push(`/doc/${docId}`);
            })
    }
        

  return (
    <div className=''>
  <Button onClick={handleCreateNewDocument} disabled ={isPending}>
    {isPending ? "Creating..." : "New Document"}</Button>
    </div>
  )
}

export default NewDocumentButton
