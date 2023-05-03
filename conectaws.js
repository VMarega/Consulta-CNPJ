const url = `https://receitaws.com.br/v1/cnpj/${cnpj}`;
const options = {method: 'GET', headers: {Accept: 'application/json'}};


(async function(){
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
})()

