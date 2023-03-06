
const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzk2WVkiLCJzdWIiOiJCR0hRWDQiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJlY2cgcnNldCByb3h5IHJudXQgcnBybyByc2xlIHJjZiByYWN0IHJsb2MgcnJlcyByd2VpIHJociBydGVtIiwiZXhwIjoxNjc4MTA3NzMyLCJpYXQiOjE2NzgwNzg5MzJ9.PMMMD9Qdm3k7svotqTpg0WDkLEI7hZgtm66UpJmADQU"

fetch('https://api.fitbit.com/1/user/-/hrv/date/today/all.json', {
  method: "GET",
  headers: {"Authorization": "Bearer " + access_token},
  cache: 'no-cache',
  mode: 'cors'
})
.then(response => response.json()) 
.then(json => console.log(json)); console.log(fetch);