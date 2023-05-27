const fruits = [
    { id: 1, name: 'Lime', quantity: 5 },
    { id: 2, name: 'Apple', quantity: 30 },
    { id: 3, name: 'Pineapple', quantity: 3 },
  ];
  
  const count = fruits.some((fruit) => fruit.quantity > 5);
  console.log(count); // true