// 3) Write a function that rotates a list by k elements. For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2].
// Try solving this without creating a copy of the list.

function rotateTheList(list, count) {
  for (let i = 0; i < count; i++) {
    list.push(list.shift());
  }
}

let arr = [1, 2, 3, 4, 5, 6];
rotateTheList(arr, 2);

arr.forEach(number => console.log(number));
