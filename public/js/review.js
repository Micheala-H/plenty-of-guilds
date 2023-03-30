const postReview = async (event) => {
    console.log('in post');
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




document
  .querySelector('.new-review-form')
  .addEventListener('submit', postReview);