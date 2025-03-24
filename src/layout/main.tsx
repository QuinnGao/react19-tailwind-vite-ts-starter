import { cn } from "@/lib/utils"
import { toast } from "sonner"

interface MainProps extends React.HTMLAttributes<HTMLElement> {
  fixed?: boolean
  ref?: React.Ref<HTMLElement>
}
const Main = ({ fixed, ...props }: MainProps) => {
  return (
    <main
      className={cn(
        "peer-[.header-fixed]/header:mt-16",
        "px-4 py-6",
        fixed && "fixed-main flex flex-grow flex-col overflow-hidden"
      )}
      {...props}
    />
  )
  //     <div className="p-2">
  //       <h3>Welcome Home!</h3>
  //       <button onClick={() => toast("hello")}> toast </button>
  //     </div>
  //   )
}

Main.displayName = "Main"

export default Main
