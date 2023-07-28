document.addEventListener("DOMContentLoaded", function (event) {
  consultaex();
});


function consultaex() {
  const urlex =
  "https://egobierno2.aguascalientes.gob.mx/geaws/api/gea/bol/ws/btportalJSON";
//const data = { "": "Idea1" };
//const data = { "": "Idea2" };
const data = { "": "Idea3" };
const headers = { "Content-Type": "application/x-www-form-urlencoded" };

axios
  .post(urlex, data, { headers })
  .then((response) => {
    //Si la llamda fue éxito maniputamos la informacion
    //La informacion esta en formato json

    //1.- Limpiamos el div
    document.getElementById("divExperiencia").innerHTML = "";
    //2.-Realizamos un ciclo para recorrer la data
    response.data.forEach((element) => {
      //element:es cada elemento de mi json
      //img:es una variable para obtener las imagenes https://eservicios2.aguascalientes.gob.mx/ssi/utilerias/files/portal/ + b + el id del boletín + .png
      var img =
        "https://eservicios2.aguascalientes.gob.mx/ssi/utilerias/files/portal/b" +
        element.id_boletinportal +
        ".png";

     
      document.getElementById("divExperiencia").innerHTML += `
      
      <div class="col-lg-6 mb-4">
      <div class="blogImagen">
        <div class="imgCont"
        style="background-image: url(${img})">
        
        </div>
        
        <div class="cardBody">
        <p class="subtitulo">${element.titulo.slice(0, 50)}...</p>
        <span class="fecha">${moment
          .utc(element.fecha)
          .format("MM/DD/YYYY")}</span>
        <p class="text">
        ${element.nota.slice(0, 232)}...
        </p>
        <div class="cardFooter">
        
           <button type="button"  class="btn  openLink" onclick="verMasex(${
             "'" + encodeURIComponent(element.titulo) + "'"
           },${"'" + element.fecha + "'"},${"'" + img + "'"},${
"'" + encodeURIComponent(element.nota) + "'"
})">Seguir leyendo &#8594;</button>


            </div>
            
          
        </div>
      </div>
    </div>

    `;
  }) ;
  })

 .catch(function (error) {
  console.log(error);
 })
 .finally(function () {

 });

}

function verMasex(titulo, fecha, img, nota) {
  document.getElementById("divModalEx").innerHTML = "";
  //Creamos el modal dinamico
  document.getElementById("divModalEx").innerHTML = `
        <div
          class="modal fade"
          id="ModalExperiencia"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <h1 class="titulo fs-5" id="exampleModalLabel">
                ${decodeURIComponent(titulo)}
                </h1>
                <span class="fecha"> ${moment
                  .utc(fecha)
                  .format("MM/DD/YYYY")}</span>
                <div class="imgCont"  >
                  <img src="${img}" alt="${titulo}" />
                </div>
                <p class="text">
                ${decodeURIComponent(nota)}
                </p>
                </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
          `;
  //lanzamos el modal
  var modalEx = new bootstrap.Modal(document.getElementById("ModalExperiencia"));
  modalEx.show();
  
}
