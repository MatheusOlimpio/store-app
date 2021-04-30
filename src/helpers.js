export function serialize(obj) {
  let queryString = "";
  for (let key in obj) {
    queryString += `&${key}=${obj[key]}`;
  }

  return queryString;
}

export function formataPreco(value) {
  return value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}
