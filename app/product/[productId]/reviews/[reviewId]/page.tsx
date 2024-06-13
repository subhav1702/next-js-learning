import React from 'react'

export default function ReviewsDetails({ params }: { params: { productId: string ,reviewId:string} }) {
  return (
    <>
      <h1>Reviews {params.reviewId} about product: {params.productId}</h1>

    </>
  )
}
