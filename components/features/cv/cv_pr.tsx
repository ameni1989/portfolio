import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function Cv_pr() {
  return (
    <div className="max-w-xl mx-auto text-center space-y-6 px-4 py-2" id="resume">
        <h1 className="text-4xl font-bold sm:text-4xl py-2">My Resume </h1>

      {/* Aperçu du CV (image) */}
      <img
        src="amenicv.PNG"
        alt="CV Preview"
        width={600}
        height={700}
        className="rounded-xl shadow-md mx-auto"
      />

      {/* Bouton de téléchargement */}
      <a href="/Ameni_weslati.pdf" download>
        <Button variant="default" className="mt-4">
          <Download className="mr-2 h-4 w-4" />
          Download CV
        </Button>
      </a>
    </div>
  )
}
