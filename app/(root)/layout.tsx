import About_pr from "@/components/features/about/About_pr";
import Contact_pr from "@/components/features/contact/contact_pr";
import Cv_pr from "@/components/features/cv/cv_pr";
import Footer_pr from "@/components/features/footer/footer_pr";
import Home_pr from "@/components/features/home/Home_pr";
import Skills_pr from "@/components/features/skills/skills_pr";
import { Navbar } from "@/components/layout/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
      <>     <Navbar /> 
     
       <Home_pr />
       <About_pr />
       <Skills_pr  />
       <Cv_pr />
       <Contact_pr />
    <Footer_pr />

       </>

  );
}
