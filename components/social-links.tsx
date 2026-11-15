import type { ComponentType } from "react"
import { Github, Linkedin, Mail } from "lucide-react"

import { GoogleCloudIcon, GoogleDeveloperIcon, LeetCodeIcon } from "@/components/brand-icons"
import { site } from "@/lib/data/site"
import { cn } from "@/lib/utils"

export type Social = {
  /** accessible name / tooltip */
  label: string
  href: string
  /** opens in a new tab */
  external: boolean
  Icon: ComponentType<{ className?: string }>
}

/**
 * One ordered list of profile links so the hero, header, mobile menu, contact
 * section and footer can never drift apart.
 */
export const socials: Social[] = [
  { label: "Email", href: `mailto:${site.email}`, external: false, Icon: Mail },
  { label: "GitHub", href: site.github, external: true, Icon: Github },
  { label: "LinkedIn", href: site.linkedin, external: true, Icon: Linkedin },
  { label: "LeetCode", href: site.leetcode, external: true, Icon: LeetCodeIcon },
  { label: "Google Cloud Skills Boost", href: site.cloudSkillsBoost, external: true, Icon: GoogleCloudIcon },
  { label: "Google Developer Profile", href: site.googleDeveloper, external: true, Icon: GoogleDeveloperIcon },
]

type SocialLinksProps = {
  className?: string
  size?: "sm" | "md"
}

export default function SocialLinks({ className, size = "sm" }: SocialLinksProps) {
  const box = size === "md" ? "h-10 w-10" : "h-8 w-8 shrink-0"

  return (
    <ul className={cn("flex flex-nowrap items-center gap-1", className)}>
      {socials.map(({ label, href, external, Icon }) => (
        <li key={label}>
          <a
            href={href}
            title={label}
            aria-label={label}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={cn(
              box,
              "grid place-items-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary",
            )}
          >
            <Icon className="h-[18px] w-[18px]" />
          </a>
        </li>
      ))}
    </ul>
  )
}
