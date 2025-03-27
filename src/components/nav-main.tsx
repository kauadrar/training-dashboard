"use client";

import { ChevronRight } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { reactCourse } from "@/data/react-course";
import { Checkbox } from "./ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export function NavMain() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Sections</SidebarGroupLabel>
      <SidebarMenu>
        {reactCourse.sections.map((section) => (
          <Collapsible
            key={section.title}
            asChild
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={section.title}>
                  {section.icon && <section.icon />}
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="truncate">
                        <span>{section.title}</span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{section.title}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {section.videos?.map((video) => (
                    <SidebarMenuSubItem key={video.title}>
                      <SidebarMenuSubButton asChild>
                        <div className="gap-2">
                          <Checkbox />
                          <p className="text-xs max-h-9 overflow-hidden flex-1">
                            {video.title}
                          </p>
                          <span className="text-xs text-gray-400">
                            {video.duration}
                          </span>
                        </div>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
