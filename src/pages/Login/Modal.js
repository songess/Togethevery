import React from 'react'
import './Modal.css'


export default function Modal({isOpen,onClose}) {
  if(!isOpen) return null;
  return (
    <div className='modal_background'>
      <div onClick={onClose} className='modal'>
        <p className='modal_wrong'>아이디 또는 비밀번호를 잘못 입력하였습니다.</p>
        <p> 입력하신 내용을 다시 확인해주세요.</p>
      </div>
    </div> 
  )
}
