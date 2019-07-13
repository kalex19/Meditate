var thirty = $('#thirty')
var sixty = $('#sixty')
var ninty = $('#ninty')
var btn = $('#begin-btn')
var posInput = $('.positive')
var negInput = $('.negative')


btn.on('click', breathe)

function breathe() {
  const pos = posInput.val()
  const neg = negInput.val()
  $('.word-input').val("")
  localStorage.setItem('positiveWord', JSON.stringify(pos))
  localStorage.setItem('negativeWord', JSON.stringify(neg))
}