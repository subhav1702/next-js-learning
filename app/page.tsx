import React from 'react'
import Link from 'next/link'

export default function Home ()  {
  return (
    <>
    <h1>Home page</h1>
    <Link href="/blog">Blog</Link>
    <br/>
    <Link href="/product">Product</Link>
    </>
  )
}
