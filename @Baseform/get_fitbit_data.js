const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzk2WVkiLCJzdWIiOiJCR0hRWDQiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJlY2cgcnNldCByb3h5IHJudXQgcnBybyByc2xlIHJjZiByYWN0IHJsb2MgcnJlcyByd2VpIHJociBydGVtIiwiZXhwIjoxNjc4NDYzNDAwLCJpYXQiOjE2Nzg0MzQ2MDB9.TahNNwoGw2RELlZ7fjLLlPlI72KUKVH1FKgGRjg0N7w"

fetch('https://api.fitbit.com/1.2/user/-/sleep/date/2023-03-02.json', {
  method: "GET",
  headers: {"Authorization": "Bearer " + access_token}
})
.then(response => response.json()) 
.then(json => console.log(json)); 