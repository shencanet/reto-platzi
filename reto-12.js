const fruits = [
    { id: 1, name: 'Lime', quantity: 3 },
    { id: 2, name: 'Apple', quantity: 2 },
    { id: 3, name: 'Pineapple', quantity: 4 },
  ];
  
  const count = fruits.some((fruit) => fruit.quantity > 4);
  console.log(count);