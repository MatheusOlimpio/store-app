export function serialize(obj) {
  let queryString = "";
  for (let key in obj) {
    queryString += `&${key}=${obj[key]}`;
  }

  return queryString;
}

export function formataPreco(value) {
  if (!isNaN(value)) {
    return Number(value).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
  return value;
}
