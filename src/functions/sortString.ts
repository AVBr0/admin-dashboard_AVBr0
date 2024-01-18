const sortString = (str1: string, str2: string) => {
  const a = str1.toLowerCase();
  const b = str2.toLowerCase();
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

export default sortString;
