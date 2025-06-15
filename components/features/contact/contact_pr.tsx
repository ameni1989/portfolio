import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BrainCircuit, MessageSquare, Wrench } from "lucide-react";
import Link from "next/link";
import ContactMap from "./map";

export default function Contact_pr() {
 const text_contact="Don't hesitate to get in touch with me; I will respond as quickly as possible"
  return (
    <div className="container mx-auto px-4 py-2 md:px-6 lg:py-20 2xl:max-w-[1400px]" id="contact">
      {/* Title */}
      <div className="mx-auto max-w-xl text-center ">
        <h1 className="text-3xl font-bold sm:text-4xl py-2">Contact us</h1>
        <p className="text-muted-foreground mt-3 py-4">
          {text_contact}
        </p>
      </div>
      <ContactMap />
    </div>
  );
}
