// Elements
const features = document.querySelector('.features')
const button = document.createElement('button')
  button.className = 'continue'
  button.textContent = `Continue`



// Main function
const createElements = (category, img, score) => {
  // Elements
  const type = document.createElement('div'),
  image = document.createElement('img'),
  text = document.createElement('div'),
  values = document.createElement('div'),
  title = document.createElement('span'),
  scoreSpan = document.createElement('span'),
  percent = document.createTextNode('/ 100')

  // Values
  values.className = 'values'
  text.className = 'text'
  image.src = img
  type.className = category.toLowerCase()
  title.textContent = category
  scoreSpan.textContent = score

  // Appends
  text.appendChild(image)
  text.appendChild(title)

  type.appendChild(text)
  type.appendChild(values)
  
  values.appendChild(scoreSpan)
  values.appendChild(percent)

  features.appendChild(type)
}

// Data
fetch('./data.json')
  .then((res) => res.json())
  .then((data) => {
    data.map(item => {
      createElements(item.category, item.icon, item.score)
      features.appendChild(button)
    })
}).catch(err => {
  console.log('Error', err)
}) 

