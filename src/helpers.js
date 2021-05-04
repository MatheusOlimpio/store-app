export function serialize(obj) {
  let queryString = "";
  for (let key in obj) {
    queryString += `&${key}=${obj[key]}`;
  }

  return queryString;
}

export function formataPreco(value) {
  const price = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  console.log(price);
  return price;
}
