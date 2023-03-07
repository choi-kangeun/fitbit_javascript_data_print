import requests

# Implicit Grant Flow
# Get this token from requesting in browser

access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzk2WVkiLCJzdWIiOiJCR0hRWDQiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJlY2cgcnNldCByb3h5IHJudXQgcnBybyByc2xlIHJjZiByYWN0IHJyZXMgcmxvYyByd2VpIHJociBydGVtIiwiZXhwIjoxNjc4MTc3MjA2LCJpYXQiOjE2NzgxNDg0MDZ9.x55VPq1caciBFuGkHpKK35ibmvmo5HVSXmCtD8yFqUs"

header = {'Authorization': 'Bearer {}'.format(access_token)}
response = requests.get("https://api.fitbit.com/1/user/-/hrv/date/2023-03-03/all.json", headers=header).json()

print(response['user'])

for k, v in response['user'].items():
    print(k)
    print(v)
    print("\n")


