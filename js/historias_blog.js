//Este evento se ejecuta al iniciarse la pagina
document.addEventListener("DOMContentLoaded", function (event) {
    //Metodo de consulta
    consultas();
  });
  
  //Modal para visualizar la informacion,este metodo recibe como parametros 4 variables,titulo, fecha, img, nota
  function verMass(titulos,fechas,imgs, cuerpos) {
    document.getElementById("divModals").innerHTML = "";
    //Creamos el modal dinamico
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
              <span class="etiqueta bg-gris c-carbon">${fechas}</span>

              <div class="row">
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
    console.log(titulos, imgs, cuerpos);
  }
  
  function consultas() {
    axios
    .get("/json/blog_historias.json")
    .then(function (response) {
      document.getElementById("divHistorias").innerHTML = "";
      response.data.forEach((element) => {

        var img =
          "https://eservicios2.aguascalientes.gob.mx/ssi/utilerias/files/portal/b" +
          element.id_boletinportal +
          ".png";

        document.getElementById("divHistorias").innerHTML += `
        
        <div class="col-lg-6 mb-4">
            <div class="blogImagen" >
            

              <div class="cardBody">
              
                            
                <div id="hgea"></div>
              
                <div class="containers" >
                <div id="divHistorias" class="row"></div>
                <div id="divModals"></div>
              
              </div>
            <div id="fgea"></div> 
        </div>
        


          <div class="col-mb-4">
          <img src="${element.imgs}" class="img-fluid" >
          
        </div>
          <div class="col-mb-4">
          <h2 class="titulo c_base">${element.titulos}</h2>
          
          <span class="etiqueta bg-gris c-carbon">${element.fechas}</span>
          <p class="text-justify">${element.cuerpos.slice(0, 100)}...</p>
          
          <button type="button" class="btn btn-principal" onclick="verMass(
            ${"'" + element.titulos + "'"},
            ${"'" + element.fechas + "'"},
            ${"'" + element.imgs + "'"},
            ${"'" + element.cuerpos + "'"})"  >
            Seguir leyendo   &#8594;</button>
  
        
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
  
  function verMass(titulos,fechas,imgs, cuerpos) {
    document.getElementById("divModals").innerHTML = "";
    //Creamos el modal dinamico
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
              <span class="etiqueta bg-gris c-carbon">${fechas}</span>

              <div class="row">
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
    console.log(titulos, imgs, cuerpos);
  }