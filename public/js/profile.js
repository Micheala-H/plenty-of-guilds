let reviewButtonEl = document.querySelector('#save-review')
let deleteCharacterEl = document.querySelector(`#delete-character-btn`)
let deleteReviewEl = document.querySelector(`#delete-review-btn`)

const postReview = async (event) => {
    event.preventDefault();
    const character_id = window.location.pathname.split('/').pop();
    const rating = document.querySelector('#character-rating').value.trim();
    const comment = document.querySelector('#character-review').value.trim();
  
    if (rating && comment) {
      const response = await fetch(`/api/reviews`, {
        method: 'POST',
        body: JSON.stringify({ character_id, rating, comment }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create review.');
      }
    }
  };
  reviewCharacterEl.addEventListener('click', postReview);

  const deleteCharacter = async (event) => {
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

  deleteCharacterEl.addEventListener('click', deleteCharacter)

  const deleteCharacter = async (event) => {
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

  deleteButtonEl.addEventListener('click', deleteCharacter)

  const deleteReview = async (event) => {
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

  deleteReviewEl.addEventListener('click', deleteReview)