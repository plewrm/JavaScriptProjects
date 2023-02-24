const generateJokes = async () => {
  const mainHeader = {
    headers: {
      Accept: "application/json",
    },
  };
  const resp = await fetch("https://icanhazdadjoke.com/", mainHeader);
  const data = await resp.json();
  joke.innerHTML = data.joke;
};

jokeBtn.addEventListener('click',generateJokes);
generateJokes();