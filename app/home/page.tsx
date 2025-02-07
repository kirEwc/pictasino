import Carousel from "@/components/my-components/carousel/Carousel";
import { images } from "@/components/my-components/carousel/ImagePath";
import { members } from "@/components/my-components/memberList/members";
import MemberList from "@/components/my-components/memberList/MemberList ";
import SportsCard from "@/components/SportsCard";



export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4">  
      <section id='carrusel de imagenes'className="w-full" >   
        <Carousel images={images} />
      </section>

      <section id='cards de juegos generales' className="">
          <SportsCard />
      </section>

      <section id="tabla de miembros " className="w-full">
        <MemberList initialMembers={members} />
      </section>
    </div>
  );
}
