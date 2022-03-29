import Modal from "react-bootstrap/Modal";
import React from "react";

export const About = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [imgSrc, setImgSrc] = React.useState("");

  const showImg = (imgSrc) => {
    setImgSrc(imgSrc);
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <div id="registry">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <h2>Ubicacion del jardin</h2>
            <p>La dirección es: <b style={{"fontSize":"20px"}}>Av. Santa Ana 76</b>, el jardín se llama "Jardín Mosada" También puedes darle <b style={{"fontSize":"20px"}}>click a la imagen</b> y debería abrirte el mapa para llegar.</p><br/>
            
            </div>
            <div className="col-xs-12 col-md-6">
            <a href="https://goo.gl/maps/LkY7vLmmGRPvCKvV6">
            <img src="img/ubicacion-pink.jpg" className="img-responsive" alt="" />
            </a>
          </div>
        </div>
        <div className="row" >
          <div className="col-xs-12 col-md-6">
          <h2>Mesa de regalos</h2>
          <h4>Instrucciones para comprar en Amazon (en móvil)</h4>
          <ul>
            <li>Da click a la imágen de abajo (baby registry)</li>
            <li>
              En la parte de arriba te sale algo así como "enviar a: (una direccion). Da click ahí
              <button type="button" className="btn btn-sm btn-primary" onClick={()=>{showImg("img/mesa_1.jpeg")}}>
                Ver imagen
              </button>
            </li>
            <li>
            Casi hasta abajo dice "Introduce un código postal en EE UU". Da click y usa el codigo postal <b style={{"fontSize":"20px"}}>98106</b> 
             <button type="button" className="btn btn-sm btn-primary" onClick={()=>{showImg("img/mesa_2.jpeg")}}>
             Ver imagen
              </button>
            </li>
            <li>Una vez cambiada recarga la página</li>
            <li>Ahora puedes buscar por la mesa de regalos y debería aparecer todo normal.</li>
            <li>Si te aparece que nada esta disponible puedes mandarme un mensaje y yo te ayudo.</li>
          </ul>
          
          </div>
          <div className="col-xs-12 col-md-6">
            <a href="https://www.amazon.com/baby-reg/ricardo-hernandez-daniela-miro-august-2022-seattle/YCYG8RS6VUCM ">
              <img src="img/baby-reg.png" className="img-responsive" alt="" />
            </a>
          </div>
          </div>
        </div>


        <Modal show={isOpen} onHide={hideModal}>
          <Modal.Header>
            <div style={{textAlign:"right", width:"100%"}}>
            <button  onClick={hideModal} className="btn btn-danger" >X</button> 
            </div>
         
          </Modal.Header>
          <Modal.Body>
            <img style={{maxWidth:"100%"}}  src={imgSrc}/>
          </Modal.Body>
        </Modal>
      </div>
  );
};
