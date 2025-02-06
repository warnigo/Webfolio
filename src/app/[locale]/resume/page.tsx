import { type FC } from "react"

import { Resume } from "@views/resume"

export { metadata } from "@views/resume"

const ResumePage: FC = () => <Resume />

ResumePage.displayName = "ResumePage"
export default ResumePage
