/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Sidebar from '../components/SideBar'

const Page = () => {
    return (
        <div sx={{variant: 'containers-fluid.page'}}>
              
                <div sx={{ height: `calc(100vh - 60px)`}}>
                    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
                    <h1 sx={{fontSize: 8, my: 0}}>This is a really dope note taking app.</h1>
                </div>
            </div>      
        </div>
    )
}

export async function getStaticProps(context) {
    console.log(context);
    return {
      props: {}
    }
}
export default Page;



