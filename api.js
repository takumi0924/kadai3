export async function fetchImages(breed) {
    const response = await fetch(
      // `https://dog.ceo/api/breed/${breed}/images/random/12`
      `https://www.amiiboapi.com/api/amiibo/?name=${breed}`
    );
  
    const data = await response.json();
    return data.amiibo;
  }