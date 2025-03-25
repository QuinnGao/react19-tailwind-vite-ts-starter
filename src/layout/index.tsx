import Main from "./main"
import { toast } from "sonner"

const Layout = () => {
  return (
    <>
      <Main>
        <div className="p-2">
          <h3>Welcome Home!</h3>
          <button onClick={() => toast("hello")}> toast </button>
        </div>
      </Main>
    </>
  )
}

Layout.displayName = "Layout"

export default Layout
