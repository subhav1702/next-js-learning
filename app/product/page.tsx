import React from 'react'
import Link from 'next/link'

export default function ProductList() {
  return (
    <>
    <Link href="/product">Product</Link>
      <h1>Product List</h1>
      <h2>Product 1</h2>
      <h2>Product 2</h2>
      <h2>Product 3</h2>
    </>
  )
}
