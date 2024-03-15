import Image from 'next/image'
import React from 'react'

const BookDetail = async({params: {id}}: any) => {
    const respone = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/Best-seller/${id}`)
    const Detailbook = await respone.json()
  return (
    <div>
        <div className='flex flex-col md:flex-row'>
            <Image src={Detailbook.images} alt='...' width={450} height={450}/>
            <div className='ml-10'>
                <h3 className='text-md font-medium text-gray-400'>{Detailbook.description}</h3>
            </div>
        </div>
    </div>
  )
}

export default BookDetail  