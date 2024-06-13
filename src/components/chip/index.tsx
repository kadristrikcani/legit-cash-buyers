import React from 'react'

interface IChipProps {
  children: React.ReactNode
}

const Chip: React.FC<IChipProps> = ({ children }) => {
  const chipStyles = `px-3 py-1.5 rounded-3xl font-semibold bg-primary/20 text-primary text-center text-[12px]`

  return <div className={chipStyles}>{children}</div>
}

export default Chip
