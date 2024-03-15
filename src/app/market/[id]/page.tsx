import Image from 'next/image'
import React from 'react'

const MarketDetail = async({params: {id}}: any) => {
    const respone = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/novel/${id}`)
    const Marketbook = await respone.json()
  return (
    <div>
    <div className='flex flex-col md:flex-row'>
        <Image src={Marketbook.images} alt='...' width={450} height={450}/>
        <div className='ml-10'>
            <h3 className='text-md font-medium text-gray-400'>{Marketbook.description}</h3>
        </div>
    </div>
</div>
  )
}

export default MarketDetail