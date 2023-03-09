import React from 'react'

type Props = {
  title: string
  children: React.ReactNode
}

const Tab = ({ children }: Props) => {
  return <div>{children}</div>
}

export default Tab
