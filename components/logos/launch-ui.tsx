import Image from "next/image"
import * as React from "react"

const LaunchUI = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/monwhooperlogo.png"
      alt="Monwhooper logo"
      width={24}
      height={24}
      className={className}
      priority
    />
  )
}

export default LaunchUI
