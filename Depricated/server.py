import requests

def fetch_user_file(filename):
    url = f"https://gpmod.github.io/auth/users/{filename}"
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raises error for HTTP codes 4xx/5xx
        print(f"Contents of {filename}:\n")
        print(response.text)
    except requests.exceptions.HTTPError as e:
        print(f"HTTP error: {e}")
    except requests.exceptions.RequestException as e:
        print(f"Request failed: {e}")

# Example usage
fetch_user_file("1591521169568152.user")
