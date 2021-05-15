const dataSource = [
    {
        img:'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
        title: 'Silla negra de madera',
        description: 'lorem ipsum dolor sit am id, consectetur adipiscing elit',
        price: 'Q.150.00'

    }, {
        img: 'https://images.unsplash.com/photo-1573866926487-a1865558a9cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
        title: 'Sillon café de cuero',
        description: 'lorem ipsum dolor sit am id, consectetur adipiscing elit',
        price: 'Q.2300.00'
    }, {
        img: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
        title: 'Silla gris de tela',
        description: 'lorem ipsum dolor sit am id, consectetur adipiscing elit',
        price: 'Q.1300.00'
    }, {
        img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: 'Sillon verde de poliester',
        description: 'lorem ipsum dolor sit am id, consectetur adipiscing elit',
        price: 'Q.2500.00'
    }, {
        img: 'https://images.unsplash.com/photo-1499933374294-4584851497cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
        title: 'Mesa blanca',
        description: 'lorem ipsum dolor sit am id, consectetur adipiscing elit',
        price: 'Q.1000.00'
    }, {
        img: 'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
        title: 'Banco blanco de madera',
        description: 'lorem ipsum dolor sit am id, consectetur adipiscing elit',
        price: 'Q.1000.00'
    }, {
        img: 'https://images.unsplash.com/photo-1541558869434-2840d308329a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1349&q=80',
        title: 'Silla azul de tela',
        description: 'lorem ipsum dolor sit am id, consectetur adipiscing elit',
        price: 'Q.750.00'
    }, {
        img: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80',
        title: 'Silla negra de plastico',
        description: 'lorem ipsum dolor sit am id, consectetur adipiscing elit',
        price: 'Q.600.00'
    }, {
        img: 'https://images.unsplash.com/photo-1554104707-a76b270e4bbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
        title: 'Silla blanca de plastico',
        description: 'lorem ipsum dolor sit am id, consectetur adipiscing elit',
        price: 'Q.700.00'
    }
];

let productHTML = '';
for ( i = 0 ; i < dataSource.length; i++) {
    productHTML += `
    <div id="product">
        <div class="product-img">
            <picture>
                <img src="${dataSource[i].img}" alt="furniture image">
            </picture>
        </div>
        <div class="details">
            <h3 class="title">${dataSource[i].title}</h3>
            <h5 class="description">${dataSource[i].description}</h5>
            <h3 class="price">${dataSource[i].price}</h3>
        </div>
    </div>`;
}
document.getElementById("grid").innerHTML = productHTML;
