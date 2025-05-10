import { Contact } from "@widgets/Contact"
import { Experience } from "@widgets/Experience"
import { Introduction } from "@widgets/Introduction"

/**
 * The `homeSections` object maps section names to their respective components.
 * These components will be rendered dynamically on the Home page.
 */
export const homeSections = {
  Introduction: Introduction,
  Experience: Experience,
  // Expertise: Expertise,
  // Essence: Essence,
  Contact: Contact,
}
