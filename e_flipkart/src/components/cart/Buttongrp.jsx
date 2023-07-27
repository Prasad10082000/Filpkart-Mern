import { Button, ButtonGroup, styled } from '@mui/material';
import React from 'react'

const Componenet = styled(ButtonGroup)`
margin-top: 30px;
`

const Stylebtn = styled(Button)`
border-radius: 50%;
`

const Grpbtn = () => {
  return (
    <Componenet>
        <Stylebtn>-</Stylebtn>
        <Button disabled>1</Button>
        <Stylebtn>+</Stylebtn>
    </Componenet>
  )
}

export default Grpbtn;