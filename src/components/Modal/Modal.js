import React from 'react';
import Modal from 'react-modal';
import s from './Modal.module.scss';
import Map from './components/Map/Map';
import Gallery from './components/Gallery/Gallery';
import { Icon } from '@material-ui/core';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

const customStyles = {
    content : {
      top: '1rem',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translateX(-50%)',
      background: 'none',
      border: "none",
      overflow: "none",
      flexGrow: '0',
      maxWidth: "80%",
      maxHeight: "80%",
      flexBasis: "100%",
    },
    overlay: {
        backgroundColor: "rgba(22, 57, 91, 0.8)"
    }
  };

function ModalWindow({ modalIsOpen, closeModal, type }) {
    return (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <Icon 
            style={{color: "#fff", position: "relative", left: "100%", cursor: "pointer"}}
            onClick={closeModal}
          >
            <CloseOutlinedIcon />
          </Icon>
          {type === "map"
            ? <Map />
            : <Gallery />
          }
        </Modal>
    )
}

export default ModalWindow;