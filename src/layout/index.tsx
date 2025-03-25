import Main from "./main"
import { toast } from "sonner"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"

const Layout = () => {
  return (
    <>
      <Main>
        <div className="p-2">
          <h3>Welcome Home!</h3>
          <div className="flex">
            <Button className="mr-2" onClick={() => toast("hello")}>
              toast
            </Button>
            <ModeToggle />
          </div>
        </div>
      </Main>
    </>
  )
}

Layout.displayName = "Layout"

export default Layout
