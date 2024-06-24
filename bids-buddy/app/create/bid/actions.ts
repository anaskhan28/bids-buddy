 "use server"
import { auth } from "@/auth"
import { database } from "@/db/database"
import { items as itemSchema } from "@/db/schema"
import { redirect } from "next/navigation"
const createBidAction = async (formData: FormData) =>{

    const session = await auth();
   if(!session?.user) return null

   const startingPrice = formData.get('startingPrice') as string
   const priceAsCent = Math.floor(parseFloat(startingPrice)*100)
    await database.insert(itemSchema).values({
      name: formData.get('name') as string,
      startingPrice: priceAsCent,
      userId: session.user.id!
    })
    redirect('/')
  }

  export default createBidAction
