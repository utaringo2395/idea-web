document.addEventListener("DOMContentLoaded", function (event) {
  consultas();
});


function consultas() {
  axios
  .get("/json/blog_historias.json")
  .then(function (response) {
    document.getElementById("divHistorias").innerHTML = "";
    response.data.forEach((element) => {

     
      document.getElementById("divHistorias").innerHTML += `
      
      <div class="col-lg-6 mb-4">
      <div class="blogImagen">
        <div class="imgCont"  style="background-image: url(${element.imgs})">
        
        </div>
        
          <div class="card-body">
            <h5 class="subtitulo">${element.titulos}</h5>
            <p class="text">
            ${element.cuerpos.slice(0, 150)}...
            </p>


            <div class="cardFooter">
              
            <button type="button"  class="btn  openLink" onclick="verMass
            (${"'" + element.titulos + "'"}
            ,${"'" + element.fechas + "'"},
            ${"'" + element.imgs + "'"},${"'" + element.cuerpos + "'"})">Seguir leyendo &#8594;</button>


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

function verMass(titulos,fechas,imgs,cuerpos) {
  document.getElementById("divModals").innerHTML = "";
  document.getElementById("divModals").innerHTML = `
            
      <div
        class="modal fade"
        id="exampleModal"
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
            <h5 class="titulo c_base" id="exampleModalLabel">${titulos}</h5>
            <span class="fecha etiqueta bg-gris c-carbon">${fechas}</span>
            <div class="col-sm-12">
            <div class="imgCont"  >
            <img src="${imgs}" alt="${titulos}" />
          </div>
              <div class="col-sm-12 text-justify">${cuerpos}</div> 
                </div>
              </div>
              <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
        `;
  //lanzamos el modal
  var modals = new bootstrap.Modal(document.getElementById("exampleModal"));
  modals.show();
  
}
