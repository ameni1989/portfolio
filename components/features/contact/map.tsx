import { Mail, Phone, MapPin, Globe, Linkedin, Twitter, Navigation } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function ContactMap() {
  const address = "Mansoura, Kairouan, Tunisia"
  const  coordinates = "35.652610, 10.087611"; // ✅ Latitude, Longitude pour Kairouan Mansoura
  const nom_pr="Ameni Weslati"
  const job="Développeur Full Stack"
  const email="ameni.weslati889@gmail.com"
  const addresse="125 rue sayeb thakfi mansoura "
  const tel1=99713575
  const tel2=23851419
  return (
    <div className="w-full max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Carte de contact */}

      <Card className="h-fit">
        <CardHeader className="text-center pb-4">
          <Avatar className="w-24 h-24 mx-auto mb-4">
            <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Photo de profil" />
            <AvatarFallback className="text-lg font-semibold">AM</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-bold">{nom_pr}</h2>
            <p className="text-muted-foreground">{job}</p>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-sm font-medium">Email</p>
                <a
                  href="mailto"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-sm font-medium">Phone 1</p>
                <a
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {tel1}
                </a>
              </div>
              
            </div>
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-sm font-medium">Phone 2</p>
                <a
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {tel2}
                </a>
              </div>
              
            </div>

            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-sm font-medium">Address</p>
                <p className="text-sm text-muted-foreground">
               {addresse}
                  <br />
                 3199 kairouan
                </p>
              </div>
            </div>

          
          </div>


        </CardContent>
      </Card>
      <Card className="h-fit">
  <CardHeader>
    <h3 className="text-lg font-semibold flex items-center ">
      <MapPin className="h-5 w-5" />
      Localisation
    </h3>
  </CardHeader>
  <CardContent className="p-0">
    <div className="relative w-full h-93 rounded-b-lg overflow-hidden">
      <iframe
        src={`https://maps.google.com/maps?q=${coordinates}&z=17&output=embed`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="Localisation - Ma Maison à Mansoura"
      />
    </div>
    <div className="p-4 bg-muted/30 text-center">
    
      <a
        href={`https://maps.google.com/?q=${coordinates}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="outline" className="mt-2">
        View on Google Maps        </Button>
      </a>
    </div>
  </CardContent>
</Card>


    </div>
  )
}
