import Image from "next/image"
import * as React from "react"

type LogoProps = {
  className?: string
}

const LaunchUI = ({ className }: LogoProps) => {
  return (
    <Image
      src="/monwhooperlogo.png"
      alt="Monwhooper logo"
      width={24}
      height={24}
      priority
      className={className}
    />
  )
}

export default LaunchUI
