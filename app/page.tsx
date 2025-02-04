import Carousel from "@/components/carousel/Carousel";
import { images } from "@/components/carousel/ImagePath";
import { members } from "@/components/memberList/members";
import MemberList from "@/components/memberList/MemberList ";



export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4">  
      <section className="w-full" >   
        <Carousel images={images} />
      </section>

      <section className="w-full">
        <MemberList initialMembers={members} />
      </section>
    </div>
  );
}
