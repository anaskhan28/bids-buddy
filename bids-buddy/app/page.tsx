import Image from "next/image";
import { database } from "@/db/database";
import { bids as bidSchema, items as itemSchema } from "@/db/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { revalidatePath } from "next/cache";
import { SignIn } from "@/components/signIn";
import { SignOut } from "@/components/signOut";
import { auth } from "@/auth"

export default async function Home() {
 const allItems = await database.query.items.findMany()
 
  if(!allItems) return null

  return (
    <main className="container max-auto py-8">
    
    <h1 className="text-4xl font-bold mb-8">Item for Sale</h1>
     
     <div className=" grid grid-cols-4 gap-2">
      {
        allItems?.map((item) => (
          <div className="border p-8 rounded-xl" key={item.id}>
          {item.name}  Starting Price: {item.startingPrice/100}
          </div>
        ))
      }
      </div>
     
    </main>
  );
}
