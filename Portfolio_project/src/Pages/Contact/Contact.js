import React from 'react'
import ModalForm from '../../components/ModalForm/ModalForm'
import s from './Contact.module.css'

function Contacts() {
  return (
    <div className={s.form}> 
      <ModalForm />
    </div>
  )
}

export default Contacts