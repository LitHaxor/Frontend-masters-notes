import React from 'react';
import {ThemeProvider} from 'theme-ui'
import theme from '../theme';
import '../components/styles/global.css'
import NavBar from '../components/NavBar';
const _app = ({Component, pageProps}) => {
    return (
      <ThemeProvider theme={theme}>
           <>
           <NavBar/>
            <Component {...pageProps}/>
           </>
      </ThemeProvider>
    )
}

export default _app
