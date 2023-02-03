const formatDate = (date: string, t: Function) => {
  const time = Math.round((Date.now() - +new Date(date)) / 60000);
  if (time < 60) {
    return time + ' ' + t('min');
  } else if (time < 1440) {
    return Math.round(time / 60) + ' ' + t('hour');
  } else {
    return Math.round(time / 60 / 24) + ' ' + t('day');
  }
};
export default formatDate;
