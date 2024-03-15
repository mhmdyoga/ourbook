import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Marketplace = async() => {

  const market = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/novel`)
  const data = await market.json()

  return (
    <div className='p-4 '>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
      {data.map((market: any) => (
          <div key={market.id} className='mx-6'>
           <Link href={`/market/${market.id}`}>
           <Image src={market.images} alt='...' width={270} height={280} />
           <div className='p-4 text-center ml-[-98px] font-bold'>
            <h3>{market.name}</h3>
            <p>Rp.{market.price}</p>
           </div>
           </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Marketplace