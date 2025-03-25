import NProgress from "nprogress"
import "nprogress/nprogress.css"

NProgress.configure({
  // Animation type
  easing: "ease",
  // Speed of progress bar increment
  speed: 500,
  // Whether to display the loading icon
  showSpinner: false,
  // Auto-increment interval
  trickleSpeed: 200,
  // Minimum percentage when initialized
  minimum: 0.3,
  // Parent element of the loading bar
  parent: "#app",
})

export default NProgress
