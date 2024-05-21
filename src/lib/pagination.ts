export const getRange = (page: number, limit: number = 10) => {
  limit = limit ? +limit : 10;
  const from = page ? (page - 1) * limit : 0;
  const to = page ? from + limit - 1 : limit - 1;

  return { from, to };
};
