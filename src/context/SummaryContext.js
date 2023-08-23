import React from 'react'

const ConfigurationContext = React.createContext({
  summary: '',
  changeSummary: () => {},
})

export default ConfigurationContext
