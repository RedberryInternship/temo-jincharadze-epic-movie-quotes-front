const formatNumber = (number: number) => {
  return number?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.');
};

export default formatNumber;
