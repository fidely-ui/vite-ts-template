import * as React from "react"
import { fidely } from "@fidely-ui/react"
import { styled } from "@fidely-ui/styled-system/jsx"
import type { HTMLStyledProps } from "@fidely-ui/styled-system/types"

const StyledIcon = styled(fidely.svg, {}, { defaultProps: { asChild: true } })

export interface IconProps extends Omit<HTMLStyledProps<"svg">, "as"> {}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  function Icon(props, ref) {
    return (
      <StyledIcon ref={ref} focusable={false} aria-hidden="true" {...props} />
    )
  }
)

Icon.displayName = "Icon"