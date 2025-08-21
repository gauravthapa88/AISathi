import React from 'react'
import Provider from './provider'

function WorkspaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen w-full 
                    bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 
                    text-white relative overflow-hidden">

      
      <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl"></div>

      
      <Provider>
        <div className="relative z-10">
          {children}
        </div>
      </Provider>
    </div>
  )
}

export default WorkspaceLayout
