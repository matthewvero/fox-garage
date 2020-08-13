import React from 'react'
import { PageContainer } from './page.styles';

const Page = ({children}) => {

      return (
            <PageContainer>
                {children}
            </PageContainer>
      )
}

export default Page
