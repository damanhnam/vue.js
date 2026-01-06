// Giả lập gọi API
export const apiService = {
    getUsers() {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
    }
}
