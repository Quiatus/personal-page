const joke = document.getElementById('joke');
const generateJoke = document.getElementById('generateJoke');

const getJoke = async () => {
    const respose = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            Accept: "text/plain"
        }
    });
    const fetchData = await respose.text();
    joke.textContent = fetchData;
}

generateJoke.addEventListener('click', getJoke);

getJoke();