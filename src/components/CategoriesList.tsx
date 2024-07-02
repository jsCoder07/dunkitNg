import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CategoriesList() {
  return (
    <div className='px-4 overflow-x-scroll scrollBarHidden'>
      <div className="flex gap-4 md:gap-8">
<Link href='/list?catgory=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4  xl:w-1/6'>
<div className="relative bg-slate-200 h-96 w-full">
    <Image src='/pexels-godisable.jpg' alt='' fill className='object-cover' sizes='20vw'/>
</div>
<h1 className="mt-8 font-light tracking-wide text-xl">Category Name</h1>
</Link>

<Link href='/list?catgory=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4  xl:w-1/6'>
<div className="relative bg-slate-200 h-96 w-full">
    <Image src='/pexels-godisable.jpg' alt='' fill className='object-cover' sizes='20vw'/>
</div>
<h1 className="mt-8 font-light tracking-wide text-xl">Category Name</h1>
</Link>


<Link href='/list?catgory=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4  xl:w-1/6'>
<div className="relative bg-slate-200 h-96 w-full">
    <Image src='/pexels-godisable.jpg' alt='' fill className='object-cover' sizes='20vw'/>
</div>
<h1 className="mt-8 font-light tracking-wide text-xl">Category Name</h1>
</Link>


<Link href='/list?catgory=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4  xl:w-1/6'>
<div className="relative bg-slate-200 h-96 w-full">
    <Image src='/pexels-godisable.jpg' alt='' fill className='object-cover' sizes='20vw'/>
</div>
<h1 className="mt-8 font-light tracking-wide text-xl">Category Name</h1>
</Link>


<Link href='/list?catgory=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4  xl:w-1/6'>
<div className="relative bg-slate-200 h-96 w-full">
    <Image src='/pexels-godisable.jpg' alt='' fill className='object-cover' sizes='20vw'/>
</div>
<h1 className="mt-8 font-light tracking-wide text-xl">Category Name</h1>
</Link>

<Link href='/list?catgory=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4  xl:w-1/6'>
<div className="relative bg-slate-200 h-96 w-full">
    <Image src='/pexels-godisable.jpg' alt='' fill className='object-cover' sizes='20vw'/>
</div>
<h1 className="mt-8 font-light tracking-wide text-xl">Category Name</h1>
</Link>


<Link href='/list?catgory=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4  xl:w-1/6'>
<div className="relative bg-slate-200 h-96 w-full">
    <Image src='/pexels-godisable.jpg' alt='' fill className='object-cover' sizes='20vw'/>
</div>
<h1 className="mt-8 font-light tracking-wide text-xl">Category Name</h1>
</Link>


<Link href='/list?catgory=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4  xl:w-1/6'>
<div className="relative bg-slate-200 h-96 w-full">
    <Image src='/pexels-godisable.jpg' alt='' fill className='object-cover' sizes='20vw'/>
</div>
<h1 className="mt-8 font-light tracking-wide text-xl">Category Name</h1>
</Link>
      </div>
    </div>
  )
}

export default CategoriesList
