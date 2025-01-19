// Correct approach using transactions:
firebase.database().ref('counter').transaction((currentCount) => {
  return (currentCount || 0) + 1;
}).then((result) => {
  if (result.committed) {
    console.log('Counter updated successfully:', result.snapshot.val());
  } else {
    console.error('Counter update failed:', result.error);  
  }
});

//Alternative using optimistic locking (requires additional client-side state management):
// ...implementation omitted for brevity...