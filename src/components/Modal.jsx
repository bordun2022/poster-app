import React from "react";
import cls from '../components/Modal.module.css'
import { useState } from "react";

const Modal = (props) => {
  return <>
  <div className={cls.backdrop} onClick={props.onHide}></div>
  <dialog open className={cls.modal}>{props.children}</dialog>
  </> // це children для NewPost, тобто сюди передає всі пропси компоненту NewPost
}

export default Modal;