const iconsArr = [
  {
    name: "cat",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "crow",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "dog",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "dove",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "dragon",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "horse",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "hippo",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "fish",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "carrot",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "apple-alt",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "lemon",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "pepper-hot",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "user-astronaut",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
  {
    name: "user-graduate",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
  {
    name: "user-ninja",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
  {
    name: "user-secret",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
];
// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.
//creare un'icona campione e visualizzarla in pagina
//creare un ciclo per generare tutte le icone

// Milestone 2
// Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
//aggiungere la classe color alla mia icona

let icons = [];

//container icone
let container = document.createElement("div");
container.className = "container";
let body = document.querySelector("body");
body.append(container);

//select
let selectContainer = document.createElement("div");
selectContainer.innerHTML = `
	<select name="category" id="category">
		<option value="all">All</option>
		<option value="animal">animal</option>
		<option value="vegetable">vegetable</option>
		<option value="user">user</option>
	</select>
`;

body.prepend(selectContainer);

let select = document.querySelector("#category");

select.addEventListener("change", function () {
  document.querySelector(".container").innerHTML = "";

  filterIconsByType(select.value || null);
  iconGenerator();
});


filterIconsByType();
iconGenerator();

function filterIconsByType(type) {
  icons = [];
  let arr = [...iconsArr];
  
  if (type && type !== 'all') {
	arr = iconsArr.filter(icon => icon.type === type);
  }

  arr.forEach((icon) => {
	let generateIcon = `${icon.family} ${icon.prefix}${icon.name} ${icon.color}`;
	icons.push(generateIcon);
  });
}

function iconGenerator() {
  for (let i = 0; i < icons.length; i++) {
    //container icone
    let iconContainer = document.createElement("div");
    iconContainer.className = "icon-container";
    container.append(iconContainer);

    //icone
    let icon = document.createElement("i");
    iconContainer.append(icon);
    icon.className = `${icons[i]}`;

    //nome icone
    let iconName = document.createElement("p");
    iconContainer.append(iconName);
    iconName.innerHTML += `${iconsArr[i].name}`;
  }
}
