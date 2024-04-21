export const requestRepoInfo = async () => {
  const url = `https://api.github.com/repos/ashika-verma/ashika-verma.github.io/branches/main`;
  const data = await fetch(url).then((x) => x.json());

  const dateEdited = new Date(data.commit.commit.author.date);
  return `${dateEdited.getMonth() + 1}/${dateEdited.getDate()}/${
    dateEdited.getFullYear() - 2000
  }`;
};
