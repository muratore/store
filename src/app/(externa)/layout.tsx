import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const layout = (props:any) => {
  return (
    <div >
         <Header />
        {props.children}
        <Footer />
    </div>
  )
}

export default layout