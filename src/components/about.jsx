export const About = (props) => {
  return (
    <div id="registry">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
          <h2>Mesa de regalos</h2>
          <h4>Instrucciones para comprar en Amazon (en móvil)</h4>
          <ul>
            <li>Da click a la imágen de abajo (baby registry)</li>
            <li>Entrar a las opciones de tu cuenta (el botón de la personita hasta arriba a la derecha)</li>
            <li>Hasta abajo de a pagina hay opciones para cambiar de país, da click ahí y cambia la tienda de <b>Estados Unidos</b></li>
            <li>Una vez cambiada recarga la página</li>
            <li>Si te pide código postal, usa <b>98106</b></li>
            <li>Ahora puedes buscar por la mesa de regalos y debería aparecer todo normal.</li>
          </ul>
          <a href=" https://www.amazon.com/baby-reg/ricardo-hernandez-daniela-miro-august-2022-seattle/YCYG8RS6VUCM ">
            <img src="img/baby-reg.png" className="img-responsive" alt="" />
          </a>
          </div>
          <div className="col-xs-12 col-md-6">
            <h2>Ubicacion del jardin</h2>
            <p>La dirección es: <b>Av. Santa Ana 76</b>, el jardín se llama "Jardín Mosada" También puedes darle click a la imagen y debería abrirte el mapa para llegar.</p><br/>
            <a href="https://www.google.com.mx/maps/place/Jardin+Mosada/@19.328962,-99.1214313,17z/data=!3m1!4b1!4m5!3m4!1s0x85ce01da80bc215f:0xbffaeba55ba856b1!8m2!3d19.328962!4d-99.1192426">
            <img src="img/ubicacion-pink.jpg" className="img-responsive" alt="" />
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};
