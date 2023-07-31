// You can define an array of dog breeds with their corresponding traits
const dogBreeds = [
    { breed: 'Cocker Spaniel', size: 'small', activityLevel: 'laid-back',temper: 'sporting' },
    { breed: 'American Staffordshire Terrier', size: 'small', activityLevel: 'laid-back' ,temper: 'terror' },
    { breed: 'Bulldog', size: 'small', activityLevel: 'laid-back',temper: 'friendly'  },
    { breed: 'Welsh Springer Spaniel', size: 'small', activityLevel: 'active',temper: 'sporting'  },
    { breed: 'Bull Terrier', size: 'small', activityLevel: 'active',temper: 'terror' },
    { breed: 'American Eskimo Dog', size: 'small', activityLevel: 'active',temper: 'friendly'  },
    { breed: 'Golden Retriever', size: 'large', activityLevel: 'laid-back', temper: 'friendly' },
    { breed: 'Greyhound', size: 'large', activityLevel: 'active', temper: 'terror' },
    { breed: 'Boerboels', size: 'large', activityLevel: 'active', temper: 'sporting' },
    { breed: 'Irish Red and White Setter', size: 'large', activityLevel: 'active', temper: 'friendly' },
    { breed: 'Bloodhound', size: 'large', activityLevel: 'laid-back', temper: 'terror' },
    { breed: 'Bracco Italiano', size: 'large', activityLevel: 'laid-back', temper: 'sporting' },
  ];
  
  // Function to determine the recommended dog breed based on questionnaire responses
  function findRecommendedBreed(answers) {
    
    for (const breed of dogBreeds) {
      if (breed.size === answers.q1 && breed.activityLevel === answers.q2 && breed.temper === answers.q3) {
        return breed;
      }
    }
  
    // If no match is found
    return null;
  }
  
  function handleSubmit(event) {
    event.preventDefault();
  
    const form = event.target;
    const answers = {
      q1: form.q1.value,
      q2: form.q2.value,
      q3: form.q3.value,
    };
  
    const recommendedBreed = findRecommendedBreed(answers);
  
    if (recommendedBreed) {
      // Redirect to the result page and pass the recommended breed as a query parameter
      window.location.href = `result.html?breed=${recommendedBreed.breed}`;
    } else {
      // Handle the case when no breed is found
      alert('No recommended breed found for your answers. Please try again.');
    }
  }
  
  // Attach the form submission handler to the form
  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
  