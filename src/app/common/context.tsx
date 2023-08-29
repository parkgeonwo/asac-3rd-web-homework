'use client';

// import React, { useState, createContext, Dispatch, SetStateAction, useContext, useReducer } from 'react'

// interface IGlobalContext {
//   displayModal?: string;
//   setDisplayModal?: Dispatch<SetStateAction<string>>;
//   modalContent?: string;
//   setModalContent?: Dispatch<SetStateAction<string>>;
// }

// export const GlobalContext = createContext<IGlobalContext>({
//   displayModal: "",
//   setDisplayModal : ():string=>'',
//   modalContent : "",
//   setModalContent : ():string=>'',
// });





// export const GlobalContextProvider = ({ children })=>{
//   const [displayModal, setDisplayModal] = useState('none');
//   const [modalContent, setModalContent] = useState('');
//   const [modalDisplayReducer, setModaldisplayReducer] = useReducer(modalReducer, 'none');
  
//   return(
//     <GlobalContext.Provider value={{displayModal, setDisplayModal, modalContent, setModalContent}}>
//       {children}
//     </GlobalContext.Provider>
//   )
// }

// export const useGlobalContext = () => useContext(GlobalContext);



import React, { useReducer, createContext, Dispatch, useContext } from 'react'


// 나중에 다른 컴포넌트에서 타입을 불러와서 쓸 수 있도록 내보내겠습니다.
const ModalStateContext = createContext<string | undefined>(undefined);

type Action =
  | { type: 'SHOW'; text:string }
  | { type: 'HIDDEN'; text:string };

type ModalDispatch = Dispatch<Action>;
const ModalDispatchContext = createContext<ModalDispatch | undefined>(
  undefined
);

function modalReducer(state: string, action: Action): string{
  switch (action.type) {
    case 'SHOW':
      return action.text;
    case 'HIDDEN':
      return action.text;
    default:
      throw new Error('Unhandled action');
  }
}


export const TodosContextProvider = ({ children })=>{
  const [modalDisplayReducer, setModaldisplayReducer] = useReducer(modalReducer, 'none');
  
  return(
    <ModalDispatchContext.Provider value={setModaldisplayReducer}>
      <ModalStateContext.Provider value={modalDisplayReducer}>
        {children}
      </ModalStateContext.Provider>
    </ModalDispatchContext.Provider>
  )
}



export function useModalState() {
  const state = useContext(ModalStateContext);
  if (!state) throw new Error('TodosProvider not found');
  return state;
}

export function useSetModalState() {
  const dispatch = useContext(ModalDispatchContext);
  if (!dispatch) throw new Error('TodosProvider not found');
  return dispatch;
}






