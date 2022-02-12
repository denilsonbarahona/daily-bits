import styled from "styled-components";
import IconFont from '../../styles/icon-font';

export const IconStyle = styled.i`

  ${IconFont}

  &::before{
    content: "${props=>props.icon}";
  }
`
