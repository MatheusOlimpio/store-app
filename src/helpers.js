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

export function createVuexModifiers(options) {
  const obj = {};
  for (let i = 0; i < options.fields.length; i++) {
    const field = [options.fields[i]];
    obj[field] = {
      get() {
        return this.$store.state[options.base][field];
      },
      set(value) {
        this.$store.commit(options.mutation, { [field]: value });
      },
    };
  }
  return obj;
}
