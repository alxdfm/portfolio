export const formatDateTime = (datetime: string) => {
  const splitPoint = datetime.split('.');
  const splitT = splitPoint.at(0)?.split('T');
  const dateTimeSpliter = splitT?.at(0)?.split('-');
  const formatDate = dateTimeSpliter?.at(2) + '/' + dateTimeSpliter?.at(1) + '/' + dateTimeSpliter?.at(0);
  const hour = splitT?.at(1);

  return formatDate + ' às ' + hour;
}