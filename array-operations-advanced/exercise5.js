const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };
//deep copy
let copiedOrder=structuredClone(order)
copiedOrder.customer.address.city='guntur'
copiedOrder.items[0].price=80000
console.log(order)
console.log(copiedUser)