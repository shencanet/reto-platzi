const getName = (obj) => {
    obj.name ??= 'Sin Nombre';
    return obj;
  };
  console.log(getName({}));
  