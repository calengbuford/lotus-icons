import React from 'react'

interface BaseIconProps {
  SVGComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }>
}

const svgAttrs = {
  focusable: false,
  "aria-hidden": true,
  "data-testid": 'starIcon',
}

const svgStyles = {
  userSelect: 'none' as 'auto'|'none'|'text'|'all',
  width: '1em',
  height: '1em',
  display: 'inline-block',
  flexShrink: 0,
  // transition: 'fill ...'
}

const BaseIcon = ({ SVGComponent }: BaseIconProps) => {
  return <SVGComponent {...svgAttrs} style={svgStyles} />
}

export default BaseIcon
