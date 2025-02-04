import Carousel from "@/components/carousel/Carousel";
import { images } from "@/components/carousel/ImagePath";
import { members } from "@/components/memberList/members";
import MemberList from "@/components/memberList/MemberList ";



export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">  
    <section className="w-[40rem]" >   
      <Carousel images={images} />
    </section>


    <section className="mt-4 flex flex-col items-center justify-center w-full mx-4">
    <MemberList initialMembers={members} />
      </section>
      
    </div>
  );
}
