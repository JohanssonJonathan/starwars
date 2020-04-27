export const sortMovies = (movies, property) => {
  function sortThings(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();

    return a < b ? -1 : b < a ? 1 : 0;
  }
  const titlesInOrder = movies
    .map(
      ({ fields: { title } }) => title.match(/-.*/gm) && title.match(/-.*/gm)[0]
    )
    .sort(sortThings);

  const episodesInOrder = movies
    .map(({ fields: { episode_id } }) => episode_id)
    .sort();

  const releaseDatesInOrder = movies
    .map(({ fields: { release_date } }) => new Date(release_date).getTime())
    .sort((a, b) => a - b);

  const inOrder =
    property === "title"
      ? titlesInOrder
      : property === "release_date"
      ? releaseDatesInOrder
      : episodesInOrder;

  return inOrder.map((order) => {
    const movie = movies.filter((movie) => {
      if (property === "title") {
        return (
          movie.fields.title.match(/-.*/gm) &&
          movie.fields.title.match(/-.*/gm)[0].includes(order) &&
          movie
        );
      } else if (property === "release_date") {
        const date = new Date(movie.fields.release_date).getTime();
        return order === date;
      }

      return movie.fields.episode_id === order;
    });

    return movie && movie[0];
  });
};
