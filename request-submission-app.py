import requests

url = "http://localhost/uyeOl"

data = {
    'username': 'yarrak',
    'lastname': 'hamdi'
}
response = requests.post(url, data)

if response.ok:

    print(response.text)
else:

    print('Hata kodu:', response.status_code)
    print(response.text)
