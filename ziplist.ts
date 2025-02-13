function zipList(list1: string[], list2: number[]): (string|number)[] {
  const zippedList = [];
  for (let i = 0; i < list1.length; i++) {
    zippedList.push(list1[i]);
    zippedList.push(list2[i]);
  }
  return zippedList;
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));