import React from 'react'
import { LinearProgress } from 'react-md/lib/Progress'
const LoadingStyles = {
  alignItems: 'center',
  background: 'white',
  display: 'flex',
  flexFlow: 'column nowrap',
  height: 'calc(100vh - 5em)',
  justifyContent: 'center',
  marginBottom: '0',
  padding: '0 2rem',
  width: '100%'
}

const Loading = () => (
  <div style={LoadingStyles}>
    <LinearProgress />
    <p className="md-display-3">Loading...</p>
  </div>
)

export default Loading
