import * as React from "react"

const LaunchUI = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <image
      href="/monwhooperlogo.png"
      xlinkHref="/monwhooperlogo.png"
      x="0"
      y="0"
      width="24"
      height="24"
      preserveAspectRatio="xMidYMid meet"
    />
  </svg>
)

export default LaunchUI
