import Carousel from "@/components/my-components/carousel/Carousel";
import { images } from "@/components/my-components/carousel/ImagePath";
import { members } from "@/components/my-components/memberList/members";
import MemberList from "@/components/my-components/memberList/MemberList ";
import SportsCard from "@/components/SportsCard";
import AnimatedButton from "@/components/ui/BotonAnimado/AnimatedButton";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4">
      <section id="carrusel de imagenes" className="w-full">
        <Carousel images={images} />
      </section>

      <section
        id="cards de juegos generales"
        className="flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-4 lg:w-full"
      >
        <div>
        <SportsCard />
        </div>

        <div>
        <SportsCard manchaColor="bg-blue-700" />
        </div>
          
        <div className="col-start-1 row-start-2">
        <SportsCard manchaColor="bg-green-700" />
        </div>
          
        <div className="col-start-2 row-start-2">
        <SportsCard manchaColor="bg-red-700" />
        </div>
          
        <div className="row-span-2 col-start-3 row-start-1">
        <SportsCard manchaColor="bg-yellow-700" />
        </div>
          

      </section>

      <section id="tabla de miembros " className="w-full">
        <MemberList initialMembers={members} />

      </section>
    </div>
  );
}
