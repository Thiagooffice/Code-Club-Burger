import {Button as ButtonStyle} from './styles'

import React from 'react';

export default function Button({children}) {
 return (
   <ButtonStyle>
       {children}
   </ButtonStyle>
 );
}