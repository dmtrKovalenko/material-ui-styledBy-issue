import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles'
import { Button } from '@material-ui/core'

const styledBy = (property, mapping) => props => mapping[props[property]];
const useStyles = makeStyles(({ palette }) => ({
  container: {
    position: 'absolute',
    top: '40%',
    left: 'calc(50% - 100px)'
  },
  styledPaper: {
    width: 200,
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',

    backgroundColor: styledBy("selected", {
      true: palette.primary.main,
      false: palette.secondary.main,
    }),
  }
}))

function App() {
  const [selected, setSelected] = useState(false)
  const styles = useStyles({ selected })

  return (
    <div className={styles.container}>
      <Button
        onClick={_ => setSelected(!selected)}
        className={styles.styledPaper}
      >
        {`${selected}`}
      </Button>
    </div> 
  )
}

export default App;