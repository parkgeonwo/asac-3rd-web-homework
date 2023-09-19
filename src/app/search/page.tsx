'use client';

import './search.css';
import { useEffect, useState } from 'react';
import datas from './js.json';
import {  useSearchParams } from 'next/navigation';
import Link from 'next/link';


export default function SearchPage(  ) {

  // const pathname = usePathname();

  const searchParams = useSearchParams();

  useEffect(()=>{
    if(searchParams.get('category') === 'all'){
      setDataState( datas );
    } else {
      const filterdArr = datas.filter( (element)=> element.category === searchParams.get('category') );
      setDataState( filterdArr );
    }
  },[searchParams.get('category')])


  const [dataState, setDataState] = useState(datas);





  return (
    <div className="p-5">
      <div className="flex">
        <Link href={{
            pathname: '/search',
            query: { category : 'all' },
          }} className="mb-3 mr-3 w-32 bg-slate-200 p-1 text-center">
            전체
        </Link>
        <Link href={{
            pathname: '/search',
            query: { category : 'data' },
          }} className="mb-3 mr-3 w-32 bg-slate-200 p-1 text-center">
            데이터
        </Link>
        <Link href={{
            pathname: '/search',
            query: { category : 'front-end' },
          }} className="mb-3 mr-3 w-32 bg-slate-200 p-1 text-center">
            프론트앤드
        </Link>
      </div>
      <div className="search-data-back">
        {
          dataState.map(( data,index )=>{
            return(
              <div key={index} className=''>
                <img src={data.image}/> 
                <div>{data.title}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
