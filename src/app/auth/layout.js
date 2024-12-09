import React from 'react'
import AuthLayout from '../layouts/AuthLayout/layout'

export default function layout({children}) {
  return (
    <div>
      <AuthLayout>{children}</AuthLayout>
    </div>
  )
}
