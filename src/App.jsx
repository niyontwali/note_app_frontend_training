import React from 'react'
import Button from './components/Button'

const App = () => {
  return (
    <div className='flex gap-4 justify-center'>
      <Button title="Sign in" buttonBg="bg-red-500"/>
      <Button title="Register" />
      <Button title="Logout" disabled />
    </div>
  )
}

export default App