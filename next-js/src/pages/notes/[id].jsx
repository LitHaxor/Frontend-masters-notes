import React from 'react'
import {useRouter} from 'next/router'
const page = () => {
    const router = useRouter();
    const { id } = router.query;
    console.log(id);
    return (
        <div>
            note page : {id}
        </div>
    )
}

export default page
