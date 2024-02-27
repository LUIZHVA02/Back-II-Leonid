export async function getFilmes() {
    const url = 'http://10.107.134.43:8080/v2/acme/filmes'
    const response = await fetch(url)
    const data = await response.json()
    return data.filmes

}

export async function getFilme(id) {
    const url = `http://10.107.134.43:8080/v2/acme/filme/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data.filme
}