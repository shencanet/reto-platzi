const fruits = [
    { id: 1, name: 'Kiwi', quantity: 5 },
    { id: 2, name: 'Banana', quantity: 30 },
    { id: 3, name: 'Pineapple', quantity: 3 },
  ];
  
  const count = fruits.some((fruit) => fruit.quantity > 30);
  