import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
const Sidebar = () => {
   const data = [
       {
           page : 'Algo',
           link: 'algo',
           title: 'Algorithm'
       },
       {
           page: 'dbms',
           link: 'dbms',
           title: 'Database'
       }
   ]

    return (
      <Bar>
          {
              data.map((e, i)=>(
                  <Link key={i} href="/notes/[id]" as={`/notes/${e.link}`}>
                      <a>{e.title}</a>
                  </Link>
              ))
          }
      </Bar>
    )
}

export default Sidebar

const Bar =styled.div`
    display: flex;
    flex-direction: column;
`

