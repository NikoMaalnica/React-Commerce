const products = [
    {
        nombre: "PC GAMER N|1",
        precio: 90000,
        descripcion: "Amd Ryzen 5 4600g 16gb Nvme 240 Radeon Vega",
        tag: "MAS POPULAR",
        imagen: "https://www.imagensempng.com.br/wp-content/uploads/2021/10/78-2.png",
        id:0,
        categoria: "pc",
    },
    {
        nombre: "PC GAMER N|2",
        precio: 180000,
        descripcion: "Amd Ryzen 7 5700g Ram 32gb 960g Ssd Wifi",
        tag: "ENVIO GRATIS",
        imagen: "https://www.imagensempng.com.br/wp-content/uploads/2021/10/978.png",
        id:1,
        categoria: "pc",
    },
    {
        nombre: "PC GAMER N|3",
        precio: 340000,
        descripcion: "Ryzen 9 5900x A520 16gb Ssd 240 Rtx 3060 12gb",
        tag: "ENVIO GRATIS",
        imagen: "https://www.imagensempng.com.br/wp-content/uploads/2021/10/910.png",
        id:2,
        categoria: "pc",
    },
    {
        nombre: "PC GAMER N|4",
        precio: 500000,
        descripcion: "Ryzen 9 5900x A520 64gb Ssd 240 Rtx 3090 12gb",
        tag: "ENVIO GRATIS",
        imagen: "https://www.imagensempng.com.br/wp-content/uploads/2021/10/640.png",
        id:3,
        categoria: "pc",
    },
    {
        nombre: "PROCESADROR AMD RYZEN 7",
        precio: 68000,
        descripcion: "Procesador Amd Ryzen 7 5700g Am4",
        tag: "ENVIO GRATIS",
        imagen: "https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-6117831.jpg",
        id:4,
        categoria: "componentes",
    },
    {
        nombre: "PROCESADROR AMD RYZEN 9",
        precio: 200000,
        descripcion: "Procesador Amd Ryzen 9 7950x Am5",
        tag: "ENVIO GRATIS",
        imagen: "https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-9361221.jpg",
        id:5,
        categoria: "componentes",
    },
    {
        nombre: "TECLADO HYPERX ALLOY ORIGINS",
        precio: 200000,
        descripcion: "Teclado HyperX Alloy Origins RGB Mecanico switch Hyperx HX-K",
        tag: "ENVIO GRATIS",
        imagen: "https://katech.com.ar/wp-content/uploads/TGA178.jpg",
        id:6,
        categoria: "perifericos",
    },
    {
        nombre: "MOUSE RAZER DEATHADDER",
        precio: 6000,
        descripcion: "Mouse Razer Deathadder V2 Lite",
        tag: "ENVIO GRATIS",
        imagen: "https://www.qloud.ar/SITES/IMG/gaming-point-06-2021/221_13-10-2022-12-10-52-concepto-7414849_ccexpress.png",
        id:7,
        categoria: "perifericos",
    },
];

export const getProducts = (categoria) =>
    new Promise((res, rej) => {
        const response = categoria ? products.filter((filtro) => filtro.categoria === categoria) : products;
        setTimeout(() => {
            res(response);
        }, 3000);
    });

export const getProduct = (itemId) => 
    new Promise((res, rej) => {
        const response = products.find((item) => item.id === +itemId);
        setTimeout(() => {
        res(response);
        }, 3000);
    });