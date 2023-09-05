
import datas from '../js.json';

type PropsType = {
  params : { id : string }
  searchParams : { [key:string] : string | number }
}


export default function JobDescriptionPage( props : PropsType ) {

  // console.log(props.params);

  // console.log(datas);

  const numberParamsId = parseInt(props.params.id);
  const filterdArr = datas.find( function(data){  return data.id === numberParamsId } );

  return (
    <div className='m-5'>
      <div className='text-2xl font-black'>{filterdArr?.title}</div>
      <div>{filterdArr?.job}</div>
      <div>{filterdArr?.des}</div>
      <img className='w-1/2' src={filterdArr?.image} />
    </div>
  )
}



