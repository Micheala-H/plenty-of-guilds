const postReview = async (event) => {
    event.preventDefault();
  
    const rating = document.querySelector('#character-rating').value.trim();
    const comment = document.querySelector('#character-review').value.trim();
  
    if (rating && comment) {
      const response = await fetch(`/api/reviews`, {
        method: 'POST',
        body: JSON.stringify({ rating, comment }),
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