import { Label as LabelInput } from './styles'

import React from 'react';

export default function Label({children}) {
 return (
   <LabelInput>
       {children}
   </LabelInput>
 );
}