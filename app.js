const tags = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
createTags(e.target.value)
if(e.key === 'Enter') {
 setTimeout(()=> {
  e.target.value = ''
 },10)
 randomSelect()
}
})

function createTags(input) {

 const tagEl = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
 
 tags.innerHTML = ''
 tagEl.forEach(tag => {
  const tagE = document.createElement('span')
  tagE.classList.add('tag')
  tagE.innerText = tag
  tags.appendChild(tagE)
 })
}

function randomSelect() {
 const times =30
const interval = setInterval(() => {
 const randomTag = pickRandomTag()
 highlight(randomTag)
 setTimeout(() => {
  unHighlight(randomTag)
 }, 100);
}, 100);
setTimeout(() => {
 clearInterval(interval)
 setTimeout(() => {
  const random = pickRandomTag()
  highlight(random)
 }, 100);
}, times * 100);
}
function pickRandomTag() {
 const classTag = document.querySelectorAll('.tag')
 return classTag[Math.floor(Math.random() * classTag.length)]
}

function highlight(tag) {
tag.classList.add('highlight')
}
function unHighlight(tag) {
tag.classList.remove('highlight')
}