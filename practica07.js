const app = document.getElementById("app")
const fieldset = (p1, p2, p3) => {
    return `
     <fieldset>
      <legend>${p1}</legend>
      <label for="${id1}">${p2}</label>
      <input type="text" id="${id1}">
      <label for="${id2}">${p3}</label>
      <input type="text" id="${id2}">
    </fieldset>`
}
app.innerHTML = fieldset()