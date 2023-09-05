import Link from 'next/link'

export default function JobDescriptionListPage(  ) {

  return (
    <div className="p-5 flex flex-col">
      <Link href={'/jd/123'} className='w-32'>
        <button className="mb-3 w-32 bg-slate-200 p-1">무신사</button>
      </Link>
      <Link href={'/jd/456'} className='w-32'>
        <button className="mb-3 w-32 bg-slate-200 p-1">비즈데이터</button>
      </Link>
      <Link href={'/jd/789'} className='w-32'>
        <button className="mb-3 w-32 bg-slate-200 p-1">똑똑한개발자</button>
      </Link>
    </div>
  )
}