import React from 'react'
import { Grid } from '@mui/material'
import { Paper } from '@mui/material'

const GridTest = () => {
  return (
    <Grid container>
      <Grid item>
        <Paper>1</Paper>
      </Grid>
      <Grid item>
        <Paper>2</Paper>
      </Grid>
      <Grid item>
        <Paper>3</Paper>
      </Grid>
      <Grid item>
        <Paper>4</Paper>
      </Grid>
    </Grid>
  )
}

export default GridTest
