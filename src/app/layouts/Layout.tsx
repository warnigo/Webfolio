import { type FCRequiredChildren } from "@shared/types"
import { BetaBanner } from "@widgets/BetaBanner"
import { Footer } from "@widgets/Footer"
import { Header } from "@widgets/Header"

// Layout component wrapping the main structure of the page
export const Layout: FCRequiredChildren = ({ children }) => (
  <div className="flex min-h-screen flex-col">
    <BetaBanner />

    <Header />

    <main className="grow" id="main-content">
      {children}
    </main>

    <Footer />
  </div>
)

Layout.displayName = "Layout"
