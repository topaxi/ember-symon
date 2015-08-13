const { floor, random } = Math

export default function(server) {
  for (let customer of server.createList('customer', rrange(30, 50))) {
    server.createList('host', rrange(1, 8), { customer: customer.id })
    server.createList('host-group', rrange(0, 2), { customer: customer.id })
  }
}

function rrange(start, end) {
  return floor(random() * end) + start
}
