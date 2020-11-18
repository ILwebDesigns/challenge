import React from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
import styles from './LoadingSpinner.styles'
import { Box, Paper, Typography } from '@material-ui/core'

const useStyles = makeStyles(styles)

function LoadingSpinner({ size }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>      
      <Box p={10} component={Paper} className={classes.progress}>
        <CircularProgress mode="indeterminate" size={size || 80} />
        <Typography className={classes.text}>Cargando...</Typography>
      </Box>
    </div>
  )
}

LoadingSpinner.propTypes = {
  size: PropTypes.number
}

export default LoadingSpinner
