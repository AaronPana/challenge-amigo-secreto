// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

// * Constantes
const friends = [];

const friendNameInput = document.getElementById("amigo");
const addFriendButton = document.getElementsByClassName("button-add")[0];
const chooseFriendButton = document.getElementsByClassName("button-draw")[0];
const friendsList = document.getElementById("listaAmigos");
const resultList = document.getElementById("resultado");

//  * Limpiar listas
friendsList.innerHTML = "";
resultList.innerHTML = "";

// * Funciones para el boton añadir
const validateInput = () => {
	if (friendNameInput.value === "") {
		alert("Por favor, inserte un nombre.");
		return false;
	}
	return true;
};

const addListItem = (name) => {
	const listItem = document.createElement("li");
	listItem.innerText = name;
	friendsList.appendChild(listItem);
};

const addFriend = () => {
	if (!validateInput()) return;
	friends.push(friendNameInput.value);
	addListItem(friendNameInput.value);
	friendNameInput.value = "";
};

// * Evento para el boton añadir
addFriendButton.addEventListener("click", addFriend);

// * Funciones para el boton seleccionar
const validateListContent = () => {
	if (friends.length === 0) {
		alert("No hay amigos registrados.");
		return false;
	}
	return true;
};

const generateRandomNumber = (max) => {
	return Math.floor(Math.random() * max);
};

const chooseFriend = () => {
	if (!validateListContent()) return;
	const randomIndex = generateRandomNumber(friends.length);
	resultList.innerHTML = `<li>${friends[randomIndex]}</li>`;
};

// * Evento para el boton seleccionar
chooseFriendButton.addEventListener("click", chooseFriend);
