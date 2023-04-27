//let host = process.env.NEXT_PUBLIC_BACKEND_HOST;

let orderHost = "https://final-orderservice-production.up.railway.app";
let customerHost = "https://final-customerservice-production.up.railway.app";
let receiptHost = "https://final-receiptservice-production.up.railway.app";

let findAllCustomers = () => {
    return fetch(customerHost + '/customers')
    .then(x => x.json())}

let findCustomerByEmail = (em) => {
    console.log("Here")
    let data = findAllCustomers().then((x) => {
    for(let i = 0; i < x.length; i++){
        console.log("here", x[i].email, x[i].id)
        if(x[i].email.toUpperCase() == em.toUpperCase()){
            return x[i].id
        }
    }
    return -1;
})
}

let getReceipt = (id) => {
    console.log(id)
    return fetch(receiptHost + '/receipts/' + id).then(x => x.json())
}

let generateSides = (small, medium, large, chips, chipType) => {
    let drinks = [small, medium, large]
    let sides = []
    for(let d = 0; d < 3; d++){
        for(let i = 0; i < drinks[d]; i++){
            sides.push({
                type: "Drink",
                size: d+1,
                name: "Coke"
            })
        }
    }
    for(let c = 0; c < chips; c++){
        sides.push({
            type: "Chips",
            name: chipType
        })
    }
    return sides;
}


let findAllOrders = () => {
    return fetch(orderHost + '/orders')
    .then(x => x.json())
}

let saveCustomer = (customer) => {
    return fetch(customerHost + "/customers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: customer.name,
            email: customer.email
        })
    }).then(response =>
    {
        if (response.status == 200 || response.status == 201) return response.json();
        return null;
    })
        .then(id => id)
        .catch(error => {
            console.log(error);
            return null;
        });
}


let saveOrder = (order) => {
    return fetch(orderHost + "/orders", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            turkeyCount: order.turkey,
            avocadoCount: order.avocado,
            hamCount: order.ham,
            customerId: findCustomerByEmail(order.email),
            vegetables: order.vegetables,
            cheese: order.cheese,
            bread: order.bread,
            sides: generateSides(order.smalldrink, order.mediumdrink, order.largedrink, order.chips, order.chipType)
        })
    }).then(response =>
    {
        if (response.status == 200 || response.status == 201) return response.json();
        return null;
    })
        .then(id => id)
        .catch(error => {
            console.log(error);
            return null;
        });
}

let reorder = (id) =>  {
    return fetch(orderHost + "/orders/reorder/" + id, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }//,
        // body: JSON.stringify({
        //     turkeyCount: order.turkey,
        //     avocadoCount: order.avocado,
        //     hamCount: order.ham,
        //     customerId: findCustomerByEmail(order.email),
        //     vegetables: order.vegetables,
        //     cheese: order.cheese,
        //     bread: order.bread,
        //     sides: generateSides(order.smalldrink, order.mediumdrink, order.largedrink, order.chips, order.chipType)
        // })
    }).then(response =>
    {
        if (response.status == 200 || response.status == 201) return response.json();
        return null;
    })
        .then(id => id)
        .catch(error => {
            console.log(error);
            return null;
        });
}

let data = {
    customers: findAllCustomers,
    saveCustomer: saveCustomer,
    saveOrder: saveOrder,
    findAllOrders: findAllOrders,
    reorder: reorder,
    getReceipt: getReceipt
};

export default data;