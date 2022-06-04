import { Grid, Typography } from '@mui/material'

import React from 'react'

interface IStat{
    value: string;
    label: string
}
const Stat = (props: IStat) => {
  const { value, label } = props
    return (
    <Grid justifyContent="center" container spacing={1} direction="row">
        <Grid item>
            <Typography textAlign="center" variant="h5" color={"#f39c12"} >{value}</Typography>
        </Grid>
        <Grid item>
            <Typography textAlign="center" variant="h6" >{label}</Typography>
        </Grid>
    </Grid>
  )
}

export default Stat