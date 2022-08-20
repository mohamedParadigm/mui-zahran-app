export const uniqueId = () => Math.random().toString(16).slice(2);

export const cookieExpireDate = (days) => {
  const date = new Date();
  const expireMs = days * 24 * 60 * 60 * 1000;
  date.setTime(date.getTime() + expireMs);

  return date;
};
