const searchArguments = (str: string | number, val: string | number) => {
  return String(val).toLowerCase().includes(str.toString().toLowerCase());
};

export default searchArguments;
