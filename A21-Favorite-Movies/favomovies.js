let movies = [{
  title: 'The Avengers',
  image: 'https://bit.ly/2NQOG6H',
  rating: 0
},
{
  title: 'Our Times',
  image: 'https://bit.ly/2OsGmv2',
  rating: 0
},
{
  title: 'Aquaman',
  image: 'https://bit.ly/2zmcLxo',
  rating: 0
}]

// 函式
function displayMovieList(data) {
  let htmlContent = `
    <table class="table">
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Rating</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
    `

  for (let i = 0; i < data.length; i++) {
    htmlContent += `
        <tr>
          <td>
            <img src = ${data[i].image} width = "70" class="img-thumbnail" >
          </td>
          <td>${data[i].title}</td>
          <td>
            <span class="fa fa-thumbs-up"></span>
            <span class="fa fa-thumbs-down px-2"></span>
            <span>${data[i].rating}</span>
          </td>
          <td>
            <button class="btn btn-sm btn-danger">X</button>
          </td>
        </tr>
      `
  }

  htmlContent += `
      </tbody>
    </table>
  `

  dataPanel.innerHTML = htmlContent
}

// 主程式
const dataPanel = document.querySelector('#data-panel')
displayMovieList(movies)


dataPanel.addEventListener('click', function (event) {
  if (event.target.matches('.fa-thumbs-up') || event.target.matches('.fa-thumbs-down')) {
    const scorebox = event.target.parentElement.children[2]
    console.log(scorebox)
    let score = Number(scorebox.innerText)
    if (event.target.matches('.fa-thumbs-up')) {
      score += 1
    } else if (event.target.matches('.fa-thumbs-down')) {
      score -= 1
      if (score <= 0) {
        score = 0    // 不要出現負分
      }
    }
    console.log(score)
    scorebox.innerText = score
  }
  else if (event.target.matches('.btn-danger')) {
    console.log(event.target)
    let tr = event.target.parentElement.parentElement
    console.log(tr)
    tr.remove()
  }
})