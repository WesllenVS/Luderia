interface Product {
    id: number;
    name: string;
    plays: string;
    price: number;
    time: string;
    image: string 
}

const dataProducts: Product[] = [
    {
        "id": 1,
        "name": "Everdell",
        "plays": "1-4",
        "price": 40.00,
        "time": "80 min",
        "image": "/Everll.png"
    },
    {
        "id": 2,
        "name": "Catan",
        "plays": "3-4",
        "price": 35.00,
        "time": "90 min",
        "image": "/catan.png"
    },
    {
        "id": 3,
        "name": "Terraforming Mars",
        "plays": "2-5",
        "price": 40.00,
        "time": "120 min",
        "image": "/terraforming_mars.png"
    },
    {
        "id": 4,
        "name": "Zombicide: Segunda Edição",
        "plays": "1-6",
        "price": 50.00,
        "time": "60 min",
        "image": "/zombicide.png"
    },
    {
        "id": 5,
        "name": "Ticket to Ride Europa",
        "plays": "2-5",
        "price": 35.00,
        "time": "60 min",
        "image": "/ticket_to_ride.png"
    }
]

export default dataProducts;