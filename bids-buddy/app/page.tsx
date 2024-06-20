import Image from "next/image";
import { database } from "@/db/database";
import { bids as bidSchema } from "@/db/schema";

export default async function Home() {
  const bids = await database.query.bids.findMany();


  return (
    <main className="">

      <form action={
        async (formData: FormData) =>{
          "use server"
          await database.insert(bidSchema).values({})
        }
      }>
        <input type="text" placeholder="enter bid"/>
        <button type="submit">Place Bid</button>
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
