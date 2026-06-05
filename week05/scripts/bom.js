// 1. Establish references to the DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// 2. Initialize the chapters array from localStorage OR fall back to an empty array
let chaptersArray = getChapterList() || [];

// 3. Populate the displayed list with existing chapters on initial load
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// 4. Button click event listener (handles input processing and array updating)
button.addEventListener('click', () => {
  if (input.value !== '') {              // Make sure the input is not empty
    displayList(input.value);          // Output the submitted chapter to the DOM
    chaptersArray.push(input.value);   // Add the new chapter to our tracking array
    setChapterList();                  // Update localStorage with the mutated array
    input.value = '';                  // Clear out the input field
    input.focus();                     // Return focus back to the input field
  }
});

// 5. Function to dynamically build and display a list item
function displayList(item) {
  let li = document.createElement('li');
  let deleteButton = document.createElement('button');
  
  li.textContent = item; 
  deleteButton.textContent = '❌';
  deleteButton.classList.add('delete'); // Applies sizing styles from your CSS
  
  li.append(deleteButton);
  list.append(li);
  
  // Handle click event on the individual item's delete button
  deleteButton.addEventListener('click', function () {
    list.removeChild(li);              // Remove element from HTML DOM
    deleteChapter(li.textContent);     // Call function to strip character and clean arrays
    input.focus();                     // Return focus back to input field
  } );
}

// 6. Function to stringify and store the current array in localStorage
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// 7. Function to pull the raw string data out of localStorage and parse it back to an array
function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// 8. Function to filter out the deleted chapter and synchronize storage
function deleteChapter(chapter) {
  // Slice off the '❌' icon attached to the end of the textContent string
  chapter = chapter.slice(0, chapter.length - 1);
  
  // Filter array to keep everything EXCEPT the exact chapter match we want removed
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  
  // Update localStorage with the newly shrunk array
  setChapterList();
}