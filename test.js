let obj = {meetha:30, saada:20}

let customerName = 'sidhsh'
let thalis = [{name:"Rajasthani Thali", items:["dal","churma"], price:250, isVeg:true},
              {name:"Delhi Thali", items:["dal","churma"], price:50, isVeg:true}]
 let total = thalis.reduce((acc,thali)=>{ return  acc + thali.price},0)
 let count = thalis.length
 let lineItems = thalis.map((thali)=> `-${thali.name} x Rs.${thali.price}`)

console.log( `THALI RECEIPT
---
Customer: ${customerName.toUpperCase()}
${lineItems.join('\n')}
---
Total: Rs.${total}
Items: ${count}`)




