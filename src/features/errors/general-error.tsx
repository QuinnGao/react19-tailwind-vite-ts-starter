import { useNavigate, useRouter } from "@tanstack/react-router"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

interface GeneralErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  minimal?: boolean
}

export default function GeneralError({
  className,
  minimal = false,
}: GeneralErrorProps) {
  const { t } = useTranslation("error")
  const navigate = useNavigate()
  const { history } = useRouter()
  return (
    <div className={cn("h-svh w-full", className)}>
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        {!minimal && (
          <h1 className="text-[7rem] font-bold leading-tight">500</h1>
        )}
        <span className="font-medium">
          {t("Oops! Something went wrong")} {`:')`}
        </span>
        <p className="text-center text-muted-foreground">
          {t("We apologize for the inconvenience.")} <br />{" "}
          {t("Please try again later.")}
        </p>
        {!minimal && (
          <div className="mt-6 flex gap-4">
            <Button variant="outline" onClick={() => history.go(-1)}>
              {t("Go Back")}
            </Button>
            <Button onClick={() => navigate({ to: "/" })}>
              {t("Back to Home")}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
