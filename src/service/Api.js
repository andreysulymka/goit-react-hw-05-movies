class ApiService {
    apiKey = "5e356cec5efbbb712369ae1e5d7c53be";
    baseUrl = "https://api.themoviedb.org/3";
    mostPoularUrl = "/trending/movie/day";
    byKeyWordUrl = "/search/company";
    wholeMovieInformationUrl = "/movie/";
    actorsUrl = "/movies/";
    viewsUrl = "/movie/";
 

    async getMostPopularMovies() {
        try {
    const response = await fetch(`${this.baseUrl}${this.mostPoularUrl}?api_key=${this.apiKey}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(`fetch error: ${error}`);
    throw error;
  }
    };

    async getMoviesByKeyWord(keyWord) {
        try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${keyWord}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.log(`fetch error: ${error}`);
        throw error;
    }
    };

    async getWholeMovieInformation(id) {
  try {
    const response = await fetch(`${this.baseUrl}${this.wholeMovieInformationUrl}${id}?api_key=${this.apiKey}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

    async getMovieCast(id) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.apiKey}&language=en-US`);
        const data = await response.json();
        return data.cast;
    } catch (error) {
        console.log(`fetch error: ${error}`);
        throw error;
    }
};

    async getMovieReviews(id) {
  try {
    const response = await fetch(`${this.baseUrl}/movie/${id}/reviews?api_key=${this.apiKey}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

   async getMovieActors(id) {
    try {
        const response = await fetch(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`);
        const data = await response.json();
        return data.cast;
    } catch (error) {
        console.log(error);
        throw error;
    }
    };
};

export const apiService = new ApiService();