import React from 'react'
import { useModal } from '../../../Context/ModalProvider';
import './Back.scss'

const Back = () => {

    const {
        modal,
        closeModal,
    } = useModal();

    return modal ? <div className="back" onClick={closeModal}></div> : null
};

export default Back;