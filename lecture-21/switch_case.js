// Conditional statement: switch... case

function getPrice(fruit) {
  switch(fruit) {
    case 'papaya':
      console.log('papaya $3.39/pound')
      break // break is to break out of this "case"
    case 'orange':
      console.log('orange $1.33/pound')
      break
    default:
      console.log('flat rate:', fruit, '$2.99/pound')
      break
  }
}

getPrice('orange') // orange $1.33/pound
getPrice('papaya') // papaya $3.39/pound
getPrice('mango') // flat rate: mango $2.99/pound
getPrice('blueberry') // flat rate: blueberry $2.99/pound