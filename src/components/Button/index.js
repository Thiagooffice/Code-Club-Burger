import {Button as ButtonStyle} from './styles'

import React from 'react';

export default function Button({children ,...props}) {
 return (
   <ButtonStyle {...props}>
       {children}
   </ButtonStyle>
 );
}