// 'use client';

// import { useState } from 'react';
// import datas from '../js.json';


// export default function SearchPage(  ) {

//   const jobCategoryBtn = ( category:string )=>{
//     if(category === 'all'){
//       setDataState( datas );
//     } else {
//       const filterdArr = datas.filter( (element)=> element.category === category );
//       setDataState( filterdArr );
//     }
//   }

//   const [dataState, setDataState] = useState(datas);

//   return (
//     <div className="p-5">
//       <div className="flex">
//         <button className="mb-3 mr-3 w-32 bg-slate-200 p-1" onClick={()=>{ jobCategoryBtn('all'); }}>전체</button>
//         <button className="mb-3 mr-3 w-32 bg-slate-200 p-1" onClick={()=>{ jobCategoryBtn('data'); }}>데이터</button>
//         <button className="mb-3 mr-3 w-32 bg-slate-200 p-1" onClick={()=>{ jobCategoryBtn('front-end'); }}>프론트앤드</button>
//       </div>
//       <div className="flex">
//         {
//           dataState.map(( data,index )=>{
//             return(
//               <div key={index} className='w-1/4 mr-3'>
//                 <img src={data.image}/> 
//                 <div>{data.title}</div>
//               </div>
//             )
//           })
//         }
//       </div>
//     </div>
//   )
// }