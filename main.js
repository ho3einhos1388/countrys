const countris = document.getElementById("countris");
const btnl = document.getElementById("btnl")
const btnd = document.getElementById("btnd");


fetch(
  "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,cca3"
)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((value) => {
      countris.innerHTML += `
            <li>
      <img src=${value.flags.png} alt="" />
      <div>
        <span>${value.name.common}</span>
        <p>Population: ${value.population}</p>
        <p>Region: ${value.region}</p>
        <p>Capital: ${value.capital[0]}</p>
      </div>
    </li>
        `;
    });
  });
btnd.addEventListener("click", () => { 
document.documentElement.classList.add("dark")

})
btnl.addEventListener("click", () => { 
document.documentElement.classList.remove("dark")

})
