const filterInput = document.querySelector("#filterInput")


filterInput.addEventListener('keyup', filterNames)

function filterNames() {
  let filterValue = filterInput.value.toUpperCase()

  const li = document.querySelectorAll('li.list-group-item')

  for (let i = 0; i < li.length; i++) {
    if (li[i].textContent.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = ""
    } else {
      li[i].style.display = "none"
    }
  }

}