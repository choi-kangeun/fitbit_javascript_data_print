
const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzk2WVkiLCJzdWIiOiJCR0hRWDQiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJlY2cgcnNldCByb3h5IHJudXQgcnBybyByc2xlIHJjZiByYWN0IHJyZXMgcmxvYyByd2VpIHJociBydGVtIiwiZXhwIjoxNjc4MTc3MjA2LCJpYXQiOjE2NzgxNDg0MDZ9.x55VPq1caciBFuGkHpKK35ibmvmo5HVSXmCtD8yFqUs"

const Data = fetch('https://api.fitbit.com/1/user/-/hrv/date/2023-02-27/2023-03-07/all.json', {
  method: "GET",
  headers: {"Authorization": "Bearer " + access_token},
  cache: 'no-cache',
  mode: 'cors'
})
.then(response => response.json()) 
.then(json => console.log(json))
.catch(error => console.error(error));

console.log(Data);
