import React from 'react'
import '../src/Main';
import dynamic from 'next/dynamic'

const App = dynamic(
  () => import('../src/Main'),
  { ssr: false },
)

export default App;