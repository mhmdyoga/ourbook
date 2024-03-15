import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Beranda = async() => {
    const product = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/Best-seller`)
    const Books = await product.json()  


  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 m-12">
        <div className='p-10 mt-[40px] mx-4 font-bold text-white text-center md:text-start'>
            <h2 className='font-bold md:text-5xl text-2xl w-full text-transparent  bg-clip-text bg-gradient-to-r from-sky-500 to-pink-600'>Ayo jelajahi berbagai macam buku di Ourbook.</h2>
            <p className='text-sky-600 font-semibold text-sm md:text-xl mt-4'>Buku adalah jendela dunia, Ayoo.</p>
            <div>
              <button className='bg-sky-600 text-white px-4 rounded-full mt-4 transition-all hover:bg-black hover:text-white'>
                <p className='font-medium text-xs md:text-sm p-2'>Ayo Jelajahi</p>
              </button>
            </div>
        </div>
          <div className='mt-[40px]'>
                <Image src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbq8WtO0R1pVPCPucCOiO05rmwLbCBesKGVkX56thuyGcGRVkOtzLSdBiRJVAK_7xKq0QXpB-17SffMH1UAu2F1YEj0-pbsK6arkCeNtGVP-_Y9Jih-n-v81gwM5naVSu5g3X0Vfx_ILouD-rHP0mrPw-BYuzy5Tcb3mx1ezimL3BqVFL3-UDiKrD-XXT7/s1832/novel.png" alt='...' width={745} height={432}/>
          </div>
    </div>
    <div className=''>
      <div className=''>
        <div className='mx-6 p-4'>
          <h2 className='text-2xl font-bold text-sky-600'>Best Seller</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
           {Books.map((book: any) => (
          <div key={book.id} className='mx-6'>
           <Link href={`/Books/${book.id}`}>
           <Image src={book.images} alt='...' width={270} height={280} />
           <div className='p-4 text-center ml-[-98px] font-bold'>
            <h3>{book.name}</h3>
            <p>Rp.{book.price}</p>
           </div>
           </Link>
          </div>
        ))}
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Beranda