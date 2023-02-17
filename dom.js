class MarcaVehiculos {
    constructor (id, name, img){
        this.id = id
        this.name = name
        this.img = img
    }
}

let marcasV = []

let marcas = document.getElementById("prueba")
for(let marca of marcasV){
    let marcaNueva = document.createElement("div")
    marcaNueva.innerHTML = `<img ${marca.img} alt="">`
    marcas.appendChild(marcaNueva)
    
}

const cargarMarcas = async ()=> {
    const response = await fetch("imagen.json")
    const datos = await response.json()
    console.log(datos)
    for (let marcaVehiculos of datos){
    let marcaNueva = new MarcaVehiculos (marcaVehiculos.id, marcaVehiculos.name, marcaVehiculos.img)
    marcasV.push(marcaNueva)
    }
}

cargarMarcas()