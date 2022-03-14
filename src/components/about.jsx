export const About = (props) => {
  return (
    <div id="registry">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <h2>Ubicacion del jardin</h2>
            <p>La dirección es: <b style={{"font-size":"20px"}}>Av. Santa Ana 76</b>, el jardín se llama "Jardín Mosada" También puedes darle <b style={{"font-size":"20px"}}>click a la imagen</b> y debería abrirte el mapa para llegar.</p><br/>
            
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
            <li>Entrar a las opciones de tu cuenta (el botón de la personita hasta arriba a la derecha)</li>
            <li>Hasta abajo de a pagina hay opciones para cambiar de país, da click ahí y cambia la tienda de <b style={{"font-size":"20px"}}>Estados Unidos</b></li>
            <li>Una vez cambiada recarga la página</li>
            <li>Si te pide código postal, usa <b style={{"font-size":"20px"}}>98106</b></li>
            <li>Ahora puedes buscar por la mesa de regalos y debería aparecer todo normal.</li>
          </ul>
          
          </div>
          <div className="col-xs-12 col-md-6">
            <a href="https://www.amazon.com/baby-reg/ricardo-hernandez-daniela-miro-august-2022-seattle/YCYG8RS6VUCM ">
              <img src="img/baby-reg.png" className="img-responsive" alt="" />
            </a>
          </div>
          </div>
        </div>
      </div>
  );
};
