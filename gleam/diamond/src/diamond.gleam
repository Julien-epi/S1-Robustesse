import gleam/string
import gleam/list
import gleam/float

// Fonction principale pour construire le diamant
pub fn build(letter: String) -> String {
  case string.to_uppercase(letter) {
    Ok(upper_letter) ->
      if string.length(upper_letter) == 1 && is_letter(upper_letter) {
        let n = letter_to_position(upper_letter)

        let top_half = list.range(0, n)
          |> list.map(fn(i) { build_line(i, n) })

        let bottom_half = list.range(0, n - 1)
          |> list.reverse
          |> list.map(fn(i) { build_line(i, n) })

        let all_lines = top_half ++ bottom_half

        list.join(all_lines, "\n")
      } else {
        ""
      }

    Error(_) ->
      ""
  }
}

fn is_letter(s: String) -> Bool {
  case string.codepoints(s) {
    [code] ->
      (code >= 65 && code <= 90) || (code >= 97 && code <= 122)
    _ ->
      false
  }
}

fn letter_to_position(s: String) -> Int {
  case string.codepoints(s) {
    [code] ->
      if code >= 65 && code <= 90 {
        code - 65
      } else if code >= 97 && code <= 122 {
        code - 97
      } else {
        0
      }
    _ ->
      0
  }
}

// Fonction auxiliaire pour construire une ligne spécifique du diamant
fn build_line(i: Int, n: Int) -> String {
  let letter_code = 65 + i
  let letter = string.from_codepoints([letter_code])

  let leading_spaces = string.replicate(n - i, ' ')

  if i == 0 {
    leading_spaces <> letter
  } else {
    let inner_spaces = string.replicate(2 * i - 1, ' ')
    leading_spaces <> letter <> inner_spaces <> letter
  }
}
