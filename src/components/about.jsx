export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
          <h2>Mesa de regalos</h2>
          <a href=" https://www.amazon.com/baby-reg/ricardo-hernandez-daniela-miro-august-2022-seattle/YCYG8RS6VUCM ">
            <img src="img/baby-reg.png" className="img-responsive" alt="" />{" "}
          </a>
          </div>
          <div className="col-xs-12 col-md-6">
            <h2>Ubicacion del jardin</h2>
            <a href="https://www.google.com.mx/maps/place/Jardin+Mosada/@19.328962,-99.1214313,17z/data=!3m1!4b1!4m5!3m4!1s0x85ce01da80bc215f:0xbffaeba55ba856b1!8m2!3d19.328962!4d-99.1192426">
            <img src="img/ubicacion-pink.jpg" className="img-responsive" style={{"min-height":"520px"}} alt="" />{" "}
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};
