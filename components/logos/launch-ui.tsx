import * as React from "react"

const LaunchUI = (props: React.SVGProps<SVGSVGElement>) => {
  const size =
    typeof props.width === "number"
      ? props.width
      : typeof props.height === "number"
        ? props.height
        : 24

  return (
    <span
      className={props.className}
      style={{
        display: "inline-block",
        width: size,
        height: size,
        lineHeight: 0,
        flex: "0 0 auto",
      }}
      aria-label="Monwhooper logo"
      role="img"
    >
      <img
        src="/monwhooperlogo.png"
        alt="Monwhooper logo"
        width={Number(size)}
        height={Number(size)}
        style={{ width: "100%", height: "100%", display: "block" }}
      />
    </span>
  )
}

export default LaunchUI
