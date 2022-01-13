import React from 'react'

function Main({ children }) {
  return (
    <main className="h-full overflow-y-auto z-40">
      <div className="container grid px-6 mx-auto">{children}</div>
    </main>
  )
}

export default Main
