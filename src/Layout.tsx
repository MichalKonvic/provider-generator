import { PropsWithChildren } from 'react'
const Layout = ({children}:PropsWithChildren) => {
  // TODO styling
  return (
    <div className=''>
      {children}
    </div>
  )
}

export default Layout