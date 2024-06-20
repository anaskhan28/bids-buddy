import Image from "next/image";
import { database } from "@/db/database";
import { bids as bidSchema } from "@/db/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { revalidatePath } from "next/cache";

export default async function Home() {
  const bids = await database.query.bids.findMany();


  return (
    <main className="container max-auto py-12">

      <form action={
        async (formData: FormData) =>{
          "use server"
          await database.insert(bidSchema).values({})
          revalidatePath("/")
        }
      }>
        <Input type="text" placeholder="enter bid"/>
        <Button className="my-6" type="submit">Place Bid</Button>

      </form>
      {
        bids.map((bid) => (
          <div key={bid.id}>
          {bid.id}
          </div>
        ))
      }
    </main>
  );
}
