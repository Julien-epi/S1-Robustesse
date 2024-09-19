import gleam/list

pub fn square_of_sum(n: Int) -> Int {
  let sum = list.fold(list.range(1, n + 1), 0, fn(x, acc) { acc + x })
  sum * sum
}

pub fn sum_of_squares(n: Int) -> Int {
  list.fold(list.range(1, n + 1), 0, fn(x, acc) { acc + { x * x } })
}

pub fn difference(n: Int) -> Int {
  square_of_sum(n) - sum_of_squares(n)
}
