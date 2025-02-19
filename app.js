// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

const friends = [];

const friendNameInput = document.getElementById("amigo");
const addFriendButton = document.getElementsByClassName("button-add")[0];
const friendsList = document.getElementById("listaAmigos");

friendsList.innerHTML = "";

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
	console.log({ friends });
	friendNameInput.value = "";
};

addFriendButton.addEventListener("click", addFriend);
