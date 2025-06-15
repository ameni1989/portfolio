import React from 'react'
import { Vortex } from '@/components/ui/vortex'
function Home_pr() {
  const nom_prenom="Hi I'm Weslati Ameni"
  const about_me=" I’m a Full Stack Developer with solid experience in JavaScript, PHP, and Python."
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden mt-2"  id="home">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          {nom_prenom}
          </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          {about_me}
        </p>
    
      </Vortex>
    </div>
  )
}

export default Home_pr
