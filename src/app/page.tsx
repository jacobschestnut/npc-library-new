"use client";

import { useEffect, useState } from "react";
import { NPC } from "../types/NPC";
import NPCCard from "./components/npcCard";
import NPCForm from "./components/npcForm";
import Navbar from "./components/navbar";

export default function Home() {
  const [npcs, setNPCs] = useState<NPC[]>([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isLoadingNPCs, setIsLoadingNPCs] = useState(false);

  useEffect(() => {
    const loadNPCs = async () => {
      try {
        setIsLoadingNPCs(true);
        const res = await fetch("/api/npc");
        const data = await res.json();

        if (!res.ok) {
          throw new Error("Error fetching NPCs");
          setNPCs([]);
        }
        setNPCs(data);
        setIsLoadingNPCs(false);
      } catch (error) {
        console.log(error);
        setNPCs([]);
      }
    };

    loadNPCs();
  }, []);

  const handleNPCCreated = async () => {
    try {
      const res = await fetch("/api/npc");
      const data: NPC[] = await res.json();
      setNPCs(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormClose = () => {
    setIsFormVisible(false)
  }

  return (
    <div>
      <Navbar onToggleForm={() => setIsFormVisible(prev => !prev)} />

      <main className="flex flex-col justify-center items-center gap-4 mt-4">
        <NPCForm
          onCreated={handleNPCCreated}
          isVisible={isFormVisible}
          closeForm={handleFormClose}
        />

        {isLoadingNPCs ? (
          <div className="flex items-center justify-center">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />
          </div>
        ) : (
          <ul className="w-3/4 grid gap-4 grid-cols-1 2xl:grid-cols-4 list-none">
            {npcs.map((npc) => (
              <li key={npc.id} className="flex justify-center">
                <NPCCard
                  npc={npc}
                  setNPCs={setNPCs}
                />
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}