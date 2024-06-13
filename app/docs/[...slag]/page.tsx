import React from 'react'

export default function Docs({ params }: { params: { slag: string, } }) {

    if (params.slag?.length === 2) {
        return  <h1>view doc for feature {params.slag[0]} and concept {params.slag[1]}</h1>


    } else if (params.slag?.length === 1) {
        return <h1>view doc for feature {params.slag[0]}</h1>
    }
    else{

        return <h1>Doc home page</h1>
    }


}
