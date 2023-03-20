const formatISOString =
  /((\d{4})-(\d{2})-(\d{2}))T((\d{2}):(\d{2}):(\d{2})).\d{3}Z/;
// 0: total

// 1: Date(YYYY-MM-DD)
// 2: Full Year
// 3: Mounth
// 4: Day

// 5: Time(HH-MM-SS)
// 6: Hour
// 7: Minute
// 8: Second

/**
 * Revise time unit from Iso string
 * @param isoString 
 */
const reviseISOString = function (isoString: string) {
  const localISOString = new Date(
    Date.parse(isoString) - new Date().getTimezoneOffset() * 60 * 1000
  ).toISOString();
  const separateDateTime = formatISOString.exec(localISOString);
  let obj: Record<string, any> = {};
  if (separateDateTime) {
    obj = {
      whole: separateDateTime[0],
      date: separateDateTime[1],
      year: separateDateTime[2],
      month: separateDateTime[3],
      day: separateDateTime[4],
      time: separateDateTime[5],
      hour: separateDateTime[6],
      minute: separateDateTime[7],
      second: separateDateTime[8],
    };
  }
  return obj;
};

export default reviseISOString;
