import React from 'react'
import { useFormStatus } from 'react-dom'

interface ISubmitBtnProps {
  color?: 'primary' | 'secondary'
}

const SubmitBtn: React.FC<ISubmitBtnProps> = ({ color = 'primary' }) => {
  const { pending } = useFormStatus()

  const buttonStyles = `px-8 py-3 rounded-3xl font-semibold ${
    color === 'primary'
      ? 'bg-primary text-white'
      : color === 'secondary'
        ? 'bg-secondary text-white'
        : `bg-${color} text-white`
  }`

  return (
    <button type="submit" className={buttonStyles} disabled={pending}>
      {pending ? (
        <div className="h-5 w-5 mx-auto animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>Send Request</>
      )}
    </button>
  )
}

export default SubmitBtn
