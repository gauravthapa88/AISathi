"use client"
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

import AIassistantsList from '@/services/AIassistantsList'
import { Assistant } from 'next/font/google'
import Image from 'next/image'
import React, { useState } from 'react'

export type ASSISTANT = {
    id: number,
    name: string,
    title: string,
    image: string,
    instruction:
      string,
    userInstruction:
      string,
    samplequestions: string[],
}
function AIassistants() {
  const [selectedAssistant, setSelectedAssistant] = useState<ASSISTANT[]>([]);

  const onSelect = (assistant: ASSISTANT) => {
    const item =selectedAssistant.find((item:ASSISTANT) => item.id == assistant.id);
    if(item)
    {
      setSelectedAssistant(selectedAssistant.filter((item:ASSISTANT) => item.id!==assistant.id))
      return;
    }
      setSelectedAssistant(prev=>[...prev, assistant]);
  }
  const IsAssistantSelected = (assistant:ASSISTANT) => {
    const item =selectedAssistant.find((item:ASSISTANT) => item.id == assistant.id)
    return item?true:false
  }
  return (
    <div className="px-6 md:px-12 pt-0">
  <div className="relative z-10 max-w-6xl mx-auto 
                  bg-white/10 backdrop-blur-lg 
                  rounded-2xl shadow-xl p-8 border border-white/20">
        
        {/* Heading + description */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white drop-shadow-md">
            Welcome to AI Sathi ⭐
          </h2>
          <p className="text-xl mt-2 text-gray-200 max-w-xl mx-auto drop-shadow-sm">
            Please choose your AI companion 🚀
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-end mt-1">
          <Button className="px-6 py-3 text-lg">Continue</Button>
        </div>

        {/* Assistants Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
                     gap-5 mt-8"
        >
          {AIassistantsList.map((assistant) => (
            <div
              key={assistant.id}
              className="hover:border p-3 rounded-xl hover:scale-105 
                         transition-all ease-in-out cursor-pointer 
                         bg-white/5 backdrop-blur-sm shadow-md border border-white/10"
            >
              {/* Square image frame */}
              <div className="relative aspect-square w-full rounded-xl 
                              bg-gradient-to-t from-sky-200 via-white to-white 
                              dark:from-slate-800 dark:via-slate-900 dark:to-black 
                              backdrop-blur-md overflow-hidden shadow-xl border border-white/20"onClick={() => onSelect(assistant)} > 

                            
                <Checkbox  className="absolute top-2 left-2 h-6 w-6 border-2 border-white bg-black/20 
             data-[state=unchecked]:bg-black/30 data-[state=unchecked]:border-white
             data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500
             data-[state=checked]:text-white"checked={IsAssistantSelected(assistant)}/>
                <Image
                  src={assistant.image}
                  alt={assistant.title}
                  fill
                  className="object-contain p-4" 
                  sizes="(min-width:1280px) 200px, (min-width:1024px) 180px, (min-width:768px) 200px, 45vw"
                  priority={assistant.id === 1}
                />
              </div>

              <h2 className="text-center font-bold text-lg mt-2 text-white">
                {assistant.name}
              </h2>
              <h3 className="text-center text-gray-300">
                {assistant.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AIassistants
