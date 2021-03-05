/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Sidebar from '../components/SideBar'

const Page = ({content}) => {
    return (
        <div sx={{variant: 'containers-fluid.page'}}>
              
                <div sx={{ height: `calc(100vh - 60px)`}}>
                    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
                    <h1 sx={{fontSize: 8, my: 0}}>{content.title}</h1>
                </div>
            </div>      
        </div>
    )
}

export default Page;




