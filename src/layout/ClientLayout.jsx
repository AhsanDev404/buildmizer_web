import React from 'react'
import Header from '../pages/client/Header'
import Footer from '../pages/client/Footer'
import { Box } from '@chakra-ui/react'

export default function ClientLayout({children}) {
  return (
    <div>
    <Header />
    <Box minH={'95vh'} p={5}>{children}</Box>
    <Footer />
  </div>
  )
}
