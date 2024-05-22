let link = "http://localhost:8080"

export async function getClassificacoes() {
    const url = `${link}/v2/acmefilmes/classificacoes`
    const response = await fetch(url)
    const data = await response.json()
    return data.classificacoes
}