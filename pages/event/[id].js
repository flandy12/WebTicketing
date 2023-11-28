import Layout from "@/compoments/layout";
import NavbarClient from "@/compoments/navbar_client";
import Image from "next/image";
import { useRouter } from "next/router"

export default function PagesId() {
    const router = useRouter();
    const { id,name } = router.query
    return (
      
      <div className="flex">
        <div className="w-100">
        <Image src={'/image/card01.jpg'} alt="s" width={800} height={400} />
        </div>
        <div className="w-100 bg-slate-400 ">
        <h1>Event {id} {name ? `nama kamu ${name}` : ''}</h1>
        </div>
      </div>
    );
  }