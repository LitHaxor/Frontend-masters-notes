/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import React from 'react'
import styled from '@emotion/styled'
const NavBar = () => {
    return (
        <>
           <Nav>
                <a href={process.env.HELP_APP_URL} sx={{color: 'muted',fontWeight: 'bold', fontSize: 4, cursor: 'pointer'}}>Note App</a>
               <ul>
                   <li><Link href="/notes/"><a>Notes</a></Link></li>
                   <li><Link href="/notes/"><a>Docs</a></Link></li>
               </ul>
           </Nav> 
        </>
    )
}

export default NavBar;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 1rem 1rem;
    background: #0E1116;
    a{
            text-decoration: none;
            color: #F3EFE0;
            font-size: clamp(1.2rem, 3vw, 1.3rem);
            &:hover{
            color: #4F9C44;
            }
        }
    h2{
        color: #F3EFE0;
    }
    ul{
        display: flex;
        list-style: none;
        justify-content: space-between;
    }
    li{
        padding: 0 1rem;
        
    }
`
