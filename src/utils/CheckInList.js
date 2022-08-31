export function checkInList(list, product) {
  return list.find((c) => c.id === product.id);
}
