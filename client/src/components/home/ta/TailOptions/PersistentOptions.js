import * as React from 'react';
import {
  IconButton, Button, Toolbar
} from '@mui/material'

import {
    Delete
} from '@mui/icons-material';

import ExtraStudentOptions from './ExtraStudentOptions';

export default function PersistentOptions(props) {

  const {
    theme, student, index, isHelping, setIsHelping, helpIdx,
    removeRef, confirmRemove, handleRemoveButton, handleClickHelp
  } = props

  return (
    <Toolbar sx={{alignItems: 'center', justifyContent:'flex-end', justifySelf: 'flex-end'}} disableGutters>

        <div ref={removeRef} onClick={() => handleRemoveButton()}>
          {confirmRemove ?
            (<Button color="error" variant="contained" sx={{m:0.5}} onClick={() => console.log(`Removed ${student.name}`)}>Remove</Button>)
            :
            (<IconButton color="error">
              <Delete />
            </IconButton>)
          }
        </div>

        <div>
          <ExtraStudentOptions student={student}></ExtraStudentOptions>
        </div>

    </Toolbar>
  )
}