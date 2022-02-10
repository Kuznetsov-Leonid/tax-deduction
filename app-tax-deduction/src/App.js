import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Modal } from 'react-bootstrap';
import './styles/app.css';
import { useEffect, useState } from 'react';
import AppModal from './components/modal/appModal/appModal';

import Buttons from './components/UI_kit/button/button';
import Tags from './components/UI_kit/tag/tag';

function App() {

  const TextObj = {
    title : "Налоговый вычет",
    info : "Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода.",
    titleInput : "Ваша зарплата в месяц",
    titleTag : "Что уменьшаем?"
  }

  //Достаём компоненты из ui_kit
  const [butnSolid, setBtnSolid] = useState(); //Кнопки сплошные
  const [butnTransparent, setBtnTransparent] = useState(); //Кнопки полые
  
  useEffect(()=>{
    setBtnSolid(Buttons.BigBtnSolid);
    setBtnTransparent(Buttons.BigBtnTransparent);
      }, []);

    //Модальное окно
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



  return (
  <>
    <Container>
      <div className='btn-start' onClick={handleShow}>
        {butnTransparent}
      </div>
    </Container>

    
    <Modal show={show} onHide={handleClose}>
    <Modal.Header 
      className='close' 
      closeButton>
    </Modal.Header>
      <Container>
        <Modal.Body>
            <div className='Modal-title'>
              <h3>
                {TextObj.title}
              </h3>
            </div>
            <div className='Modal-info'>
              <p>
                {TextObj.info}
              </p>
            </div>
            <div className='Modal-appModal-title'>
              <h5>
                  {TextObj.titleInput}
              </h5>
              <AppModal/>
            </div>
            <div className='Modal-tags-title'>
              <h6>
                {TextObj.titleTag}
              </h6>
              <Tags/>
            </div>
        </Modal.Body>
        <Modal.Body>
            <span>{butnSolid}</span>
        </Modal.Body>
      </Container>
    </Modal>
  </>
  );
}

export default App;
