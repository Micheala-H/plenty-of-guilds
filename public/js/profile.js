const deleteCharacter = async (event) => {
    console.log(`in character delete`);
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/characters/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };

  const deleteReview = async (event) => {
    console.log(`in review delete`);
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/reviews/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };

  document
  .querySelector('#delete-character-btn')
  .addEventListener('click', deleteCharacter);
  document
  .querySelector('.delete-review-btn')
  .addEventListener('click', deleteReview);
  

  //let deleteCharacterEl = document.querySelector(`#delete-character-btn`)
//let deleteReviewEl = document.querySelector(`.delete-review-btn`)
//reviewButtonEl = document.getElementById('#save-review')
//deleteReviewEl.addEventListener('click', deleteReview);
//deleteCharacterEl.addEventListener('click', deleteCharacter)
//reviewButtonEl.addEventListener('click', postReview);