"use client";

import { Game, NotoTrophy, RiUser5Fill, StreamlineBagDollarSolid, StreamlineGraphBarIncrease } from "@/icons/Icons";
import React, { useEffect, useState } from "react";

type Member = {
  game: string;
  player: string;
  bet: number;
  multiplier: number;
  win: number;
};

type MemberListProps = {
  initialMembers: Member[];
};

const MemberList: React.FC<MemberListProps> = ({ initialMembers }) => {
  const [visibleMembers, setVisibleMembers] = useState<Member[]>([]);

  useEffect(() => {


    // Muestra los primeros 5 miembros
    setVisibleMembers(initialMembers.slice(0, 5));

    const interval = setInterval(() => {
      setVisibleMembers((prev) => {
        const newVisibleMembers = [...prev];
        const nextIndex = initialMembers.indexOf(prev[prev.length - 1]) + 1;

        // Si no hemos llegado al final, agregamos el siguiente miembro
        if (nextIndex < initialMembers.length) {
          newVisibleMembers.shift(); // Elimina el primer miembro visible
          newVisibleMembers.push(initialMembers[nextIndex]); // Agrega el siguiente miembro
        } else {
          // Reinicia desde el primer miembro si hemos llegado al final
          newVisibleMembers.shift();
          newVisibleMembers.push(initialMembers[0]);
        }

        return newVisibleMembers;
      });
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, [initialMembers]);

  return (
    <div className="rounded-2xl">
      <table className="w-full text-sm text-left text-white bg-[#101720] border border-gray-700 rounded-2xl">
        <thead className="text-xs uppercase bg-gray-800 border-b border-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3 ">Juego</th>
            <th scope="col" className="px-6 py-3">Jugador</th>
            <th scope="col" className="px-6 py-3 hidden sm:table-cell">Apuesta</th>
            <th scope="col" className="px-6 py-3 hidden sm:table-cell">Multiplicador</th>
            <th scope="col" className="px-6 py-3">Ganancia</th>
          </tr>
        </thead>
        <tbody>
          {visibleMembers.map((member, index) => (
            <tr key={index} className="border-b border-gray-700 bg-gray-800">

              <td className="px-6 py-4 whitespace-nowrap text-left">
                <div className="flex items-center gap-2">
                  <Game className="w-5 h-5 text-blue-400" /> {member.game}
                </div>
              </td>

              <td className="px-6 py-4 whitespace-nowrap text-left">
                <div className="flex items-center gap-2">
                  <RiUser5Fill className="w-5 h-5 text-green-400" /> {member.player}
                </div>
              </td>

              <td className="px-6 py-4 whitespace-nowrap text-left">
                <div className="flex items-center gap-2">
                  <StreamlineBagDollarSolid className="w-5 h-5 text-green-400" /> {member.bet}
                </div>
              </td>

              <td className="px-6 py-4 whitespace-nowrap text-left">
                <div className="flex items-center gap-2">
                  <StreamlineGraphBarIncrease className="w-5 h-5 text-green-400" /> {'x'+member.multiplier}
                </div>
              </td>

              
              <td className="px-6 py-4 whitespace-nowrap text-left">
                <div className="flex items-center gap-2">
                  <NotoTrophy className="w-5 h-5 text-green-400" />  {'$ ' + member.win}
                </div>
              </td>          

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberList;
