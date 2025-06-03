import React from 'react'

const Page = async ({params}: {params: Promise<{id: string}>}) => {
  console.log( (await params).id)
  return (
    <div>
      Page
    </div>
  )
}

export default Page
