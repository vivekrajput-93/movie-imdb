export const Mutation = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/authentication/guest_session/new",
        {
          method: "GET",
          mode: "cors", // Use 'cors' mode instead of 'no-cors' for actual error details
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODcxMzYzODkzZjZkOWVmNWM2YzA1NDFkNmQ4M2IzYiIsInN1YiI6IjY1NjU5YmM4MTU2Y2M3MDBlYmMwZDEwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ujJbbgrjNjTiP4cM_ITOPJe0o3unx3aV6UaG00NBzb4",
          },
        }
      );
  
      if (!res.ok) {
        throw new Error(`Request failed with status: ${res.status}`);
      }
  
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  