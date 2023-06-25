const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 
'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 
'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 
'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 
'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 
'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 
'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 
'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	// TODO
	// // Loop through each fruit and check if it starts with the given input string
	for (let fruitItem of fruit) {
	for (let fruitItem of fruit) {
		if (fruitItem.toLowerCase().startsWith(str.toLowerCase())) {
		  results.push(fruitItem);
		}
	  }

	return results;
}

function searchHandler(e) {
	// TODO
	const inputVal = e.target.value;
  const results = search(inputVal);
  return showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';
	// TODO

	if (results.length > 0) {
		// Display each matching fruit as a list item
		for (let result of results) {
		  const li = document.createElement('li');
		  li.textContent = result;
		  suggestions.appendChild(li);
		}
	  } else {
		// If no matching fruits found, display a message
		const li = document.createElement('li');
		li.textContent = 'No matching fruits found.';
		suggestions.appendChild(li);
	  }
}

function useSuggestion(e) {
	// TODO
	if (e.target.tagName === 'LI') {
		// When a suggestion is clicked, set the input value to the selected fruit
		searchInput.value = e.target.textContent;
		suggestions.innerHTML = '';
		suggestions.parentNode.classList.remove('has-suggestions');
	  }
}
// Event listeners
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
}