async function postActivityToAPI(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formProps),
  };
  await fetch('http://localhost:3002/Activities', options).then((response) => response.json());
}

async function deleteActivityToAPI(id) {
  const options = {
    method: 'DELETE',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  };
  console.log(id);
  await fetch('http://localhost:3002/Activities', options).then((response) => response.json());
}

module.exports = { postActivityToAPI, deleteActivityToAPI };
