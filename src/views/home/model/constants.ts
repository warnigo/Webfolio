import { Contact } from "@widgets/Contact"
import { Essence } from "@widgets/Essence"
import { Experience } from "@widgets/Experience"
import { Expertise } from "@widgets/Expertise"
import { Introduction } from "@widgets/Introduction"

/**
 * The `homeSections` object maps section names to their respective components.
 * These components will be rendered dynamically on the Home page.
 */
export const homeSections = {
  Introduction: Introduction,
  Expertise: Expertise,
  Essence: Essence,
  Experience: Experience,
  Contact: Contact,
}
