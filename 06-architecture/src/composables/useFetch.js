import { ref } from 'vue'

export function useFetch(url) {
    const data = ref(null)
    const error = ref(null)

    const fetchData = async () => {
        try {
            const res = await fetch(url)
            data.value = await res.json()
        } catch (err) {
            error.value = err
        }
    }

    return { data, error, fetchData }
}
