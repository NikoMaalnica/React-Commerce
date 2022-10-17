import Item from "./Item"

const AppContainer = () => {

    return <div className='products'>
    <Item 
    nombre="PC GAMER N|1"
    precio={90000}
    descripcion="Amd Ryzen 5 4600g 16gb Nvme 240 Radeon Vega"
    tag="MAS POPULAR"
    imagen="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/474/949/products/diseno-sin-titulo-501-196c9bb9221af6c02a16210497196268-640-0.png"
    />
    <Item 
    nombre="PC GAMER N|2"
    precio={180000}
    descripcion="Amd Ryzen 7 5700g Ram 32gb 960g Ssd Wifi"
    tag="ENVIO GRATIS"
    imagen="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/474/949/products/diseno-sin-titulo-501-196c9bb9221af6c02a16210497196268-640-0.png"
    />
    <Item 
    nombre="PC GAMER N|3"
    precio={340000}
    descripcion="Ryzen 9 5900x A520 16gb Ssd 240 Rtx 3060 12gb"
    tag="ENVIO GRATIS"
    imagen="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/474/949/products/diseno-sin-titulo-501-196c9bb9221af6c02a16210497196268-640-0.png"
    />
    <Item 
    nombre="PC GAMER N|3"
    precio={340000}
    descripcion="Ryzen 9 5900x A520 16gb Ssd 240 Rtx 3060 12gb"
    tag="ENVIO GRATIS"
    imagen="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/474/949/products/diseno-sin-titulo-501-196c9bb9221af6c02a16210497196268-640-0.png"
    />
    </div>
}

export default AppContainer;