import {
    Code,
    Database,
    Figma,
    FileCode,
    Github,
    Globe,
    Layers,
    Lightbulb,
    Palette,
    Server,
    Smartphone,
    Terminal,
  } from "lucide-react";
  import { Progress } from "@/components/ui/progress";
  import { Badge } from "@/components/ui/badge";
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
  import { cn } from "@/lib/utils";
  const competences="Technologies I regularly work with include React, Next.js, TypeScript, Tailwind CSS, and Material UI.These tools are constantly evolving, and I truly enjoy learning every day. My passion, curiosity, and dedication drive me to stay up to date and continuously improve."
  // Technical Skills with proficiency levels
  const technicalSkills = [
    { name: "JavaScript/TypeScript", proficiency: 95 },
    { name: "React ", proficiency: 70 },
    { name: "Angular ", proficiency: 90 },
    { name: "php ", proficiency: 85 },
    { name: "Laravel ", proficiency: 70 },
    { name: "Node.js & Express", proficiency: 88 },
    { name: "Next.js", proficiency: 40 },
    { name: "HTML/CSS", proficiency: 95 },
    { name: "SQL & NoSQL Databases", proficiency: 82 },
    { name: "Python", proficiency: 82 },


  ];
  
  // Tools categorized by type
  const tools = [
    {
      category: "Frontend",
      icon: <Globe className="h-5 w-5" />,
      items: [
        { name: "React", icon: <Code /> },
        { name: "Angular", icon: <Code /> },
        { name: "JQuery", icon: <Code /> },
        { name: "Next.js", icon: <FileCode /> },
        { name: "TypeScript", icon: <FileCode /> },
        { name: "Tailwind CSS", icon: <Palette /> },
        { name: "shadcn", icon: <Palette /> },
      ],
    },
    {
      category: "Backend",
      icon: <Server className="h-5 w-5" />,
      items: [
        { name: "Node.js", icon: <Server /> },
        { name: "Laravel", icon: <Server /> },
        { name: "Express", icon: <Server /> },
        { name: "Mysql", icon: <Database /> },
        { name: "MongoDB", icon: <Database /> },
        { name: "REST API", icon: <Globe /> },
      ],
    },
   
  ];
  
  export default function Skills_pr() {
    // Function to determine skill level label
    const getSkillLevel = (proficiency: number) => {
      if (proficiency >= 90) return "Expert";
      if (proficiency >= 80) return "Advanced";
      if (proficiency >= 70) return "Proficient";
      if (proficiency >= 50) return "Intermediate";
      return "Beginner";
    };
  
    // Function to get color class based on proficiency
    const getColorClass = (proficiency: number) => {
      if (proficiency >= 90) return "text-green-500";
      if (proficiency >= 80) return "text-blue-500";
      if (proficiency >= 70) return "text-indigo-500";
      if (proficiency >= 50) return "text-amber-500";
      return "text-gray-500";
    };
  
    return (
      <div className="bg-background py-16 md:py-22" id="skills">
        <div className="container mx-auto px-4 2xl:max-w-[1400px]">
          <div className="mb-10 flex flex-col gap-3 text-center">
          <h1 className="text-4xl font-bold sm:text-4xl">Skills Technologies</h1>

            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
             {competences}
            </p>
          </div>
  
          <Tabs defaultValue="skills" className="max-w-4x mx-auto">
            <TabsList className="grid h-fit w-full grid-cols-1 md:grid-cols-2">
              <TabsTrigger value="skills">Technical Skills</TabsTrigger>
              <TabsTrigger value="tools">Tools Technologies</TabsTrigger>
            </TabsList>
  
            {/* Technical Skills Tab */}
            <TabsContent value="skills" className="mt-6">
              <div className="bg-card rounded-xl border p-6">
                <h3 className="mb-4 text-xl font-semibold">
                  <Lightbulb className="text-primary mr-2 inline h-5 w-5" />
                  Skill Proficiency Levels
                </h3>
  
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  {technicalSkills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{skill.name}</p>
                        <span
                          className={cn(
                            "text-sm font-semibold",
                            getColorClass(skill.proficiency),
                          )}
                        >
                          {getSkillLevel(skill.proficiency)}
                        </span>
                      </div>
                      <Progress value={skill.proficiency} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
  
            {/* Tools & Technologies Tab */}
            <TabsContent value="tools" className="mt-6">
              <div className="bg-card rounded-xl border p-6">
                <h3 className="mb-6 text-xl font-semibold">
                  <Terminal className="text-primary mr-2 inline h-5 w-5" />
                  Tools Technologies
                </h3>
  
                <div className="grid gap-8 sm:grid-cols-2">
                  {tools.map((toolCategory) => (
                    <div
                      key={toolCategory.category}
                      className="space-y-4 rounded-lg border p-4"
                    >
                      <h4 className="flex items-center gap-2 font-medium">
                        {toolCategory.icon}
                        {toolCategory.category}
                      </h4>
  
                      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                        {toolCategory.items.map((tool) => (
                          <div
                            key={tool.name}
                            className="bg-muted/40 hover:border-muted flex items-center gap-2 rounded-md border border-transparent px-3 py-2 text-sm transition-colors"
                          >
                            <span className="text-primary">{tool.icon}</span>
                            {tool.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    );
  }
  