import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import createBidAction from './actions'

type Props = {}

const createBid = (props: Props) => {
  return (
    <div className='container p-4'>

<h1 className="text-4xl font-bold mb-8">Post an Item</h1>


<form className='flex flex-col gap-4 border p-8 rounded-xl max-w-lg'
 action={createBidAction}>
        <Input className='max-w-lg' type="text" name="name" placeholder="Enter Bid Item"/>
        <Input className='max-w-lg'
         type="number" step="0.01" name="startingPrice" 
         placeholder="Enter Starting Amount "/>
        <Button className="self-end" type="submit">Post Bid</Button>

      </form>
    </div>
  )
}

export default createBid