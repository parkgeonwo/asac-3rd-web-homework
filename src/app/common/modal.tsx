'use client';

import { useModalState, useSetModalState } from './context';
import './modal.css';
// import { useGlobalContext } from './context';

export default function Modal() {

  // context api로 state 가져오기
  // const { displayModal, setDisplayModal, modalContent } = useGlobalContext(); 

  // return (
  //   <div className="signup-modal-back" style={{display:displayModal}}>
  //     <div className="signup-modal-content-back">
  //       <div>회원가입 실패</div>
  //       <div>{modalContent}</div>
  //       <button className='mt-3 p-2' style={{background:"rgba(0,0,0,0.3)"}} onClick={()=>{ setDisplayModal?.('none'); }}>닫기</button>
  //     </div>
  //   </div>
  // )

  const modalState = useModalState();
  const dispatch = useSetModalState();

  return (
    <div className="signup-modal-back" style={{display:modalState}}>
      <div className="signup-modal-content-back">
        <div>회원가입 실패</div>
        <div>{}</div>
        <button className='mt-3 p-2' style={{background:"rgba(0,0,0,0.3)"}} onClick={()=>{ 
          dispatch({
            type: 'HIDDEN',
            text: 'none'
          });

        }}>닫기</button>
      </div>
    </div>
  )
}


