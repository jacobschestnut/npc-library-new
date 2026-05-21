import AudioRecorder from "./audioRecorder";
import { NPC } from "../../types/NPC";
import { useState, Dispatch, SetStateAction } from "react";

type NPCCardProps = {
  npc: NPC;
  setNPCs: Dispatch<SetStateAction<NPC[]>>;
};

export default function NPCCard({npc, setNPCs}: NPCCardProps) {
  const [isRecording, setIsRecording] = useState(false);

  async function handleDelete() {
    try {
      const res = await fetch(`/api/npc/${npc.id}/audio`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const err = await res.json();
        console.error("DELETE API ERROR:", err);
        throw new Error(err.error || "Failed to delete NPC.");
      }

      setNPCs(prev => prev.filter(n => n.id !== npc.id));

    } catch (err) {
      console.error(err);
      alert("Error deleting NPC");
    }
  }

  return (
    <div className="w-full min-w-0 max-w-sm flex flex-col justify-center overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl dark:bg-slate-900">
      <div className="p-5">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row justify-between items-center w-full">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
              {npc.name}
            </h3>
            <button 
              className="text-slate-600 cursor-pointer hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
          {isRecording && <div className="w-2 h-2 bg-red-500 rounded-full"></div>}
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {npc.desc || "No description available."}
        </p>
        <AudioRecorder currentNPC={npc} onIsRecordingChange={setIsRecording}/>
      </div>
    </div>
  );
}