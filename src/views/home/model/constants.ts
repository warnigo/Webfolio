import { Contact } from "@widgets/Contact"
import { Essence } from "@widgets/Essence"
import { Experience } from "@widgets/Experience"
import { Introduction } from "@widgets/Introduction"
import { Stacks } from "@widgets/Stacks"

/**
 * The `homeSections` object maps section names to their respective components.
 * These components will be rendered dynamically on the Home page.
 */
export const homeSections = {
  Introduction: Introduction,
  Essence: Essence,
  Experience: Experience,
  Stacks: Stacks,
  Contact: Contact,
}
