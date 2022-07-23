import React from 'react'
import { ReactComponent as StarSVG } from '../../svgs/star.svg'
import BaseIcon from '../BaseIcon'

interface StarProps {
    
}

const Star = ({}: StarProps) => {
  // return <StarSVG />
  return <BaseIcon SVGComponent={StarSVG} />
}

export default Star
