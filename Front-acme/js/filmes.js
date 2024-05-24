let link = "http://localhost:8080"

export async function getFilmes() {
    const url = `${link}/v2/acmefilmes/filmes`
    const response = await fetch(url)
    const data = await response.json()
    return data.filmes
}

export async function getFilme(id) {
    const url = `${link}/v2/acmefilmes/filme/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data.filme
}

export async function getFilmeByName(nome) {
    const url = `${link}/v2/acmefilmes/filtro/filme/?nome=${nome}`
    const response = await fetch(url)
    const data = await response.json()
    return data.filme
}

export async function getFotoFilmes() {
    const url = `${link}/v2/acmefilmes/filme/foto_capa`
    const response = await fetch(url)
    const data = await response.json()
    return data.filmes

}

export async function postFilme (filme) {
    const url = `${link}/v2/acmefilmes/filme/`
    
    const options = {
        method: 'POST',
        headers: {
            'Content-type' : 'Application/json',
        },
        body: JSON.stringify(filme)
    }
    const response = await fetch(url,options)

    return response.ok
}

export async function putFilme (filme) {
    const url = `${link}/v2/acmefilmes/updateFilme/${filme.id}`
    
    const options = {
        method: 'PUT',
        headers: {
            'Content-type' : 'Application/json',
        },
        body: JSON.stringify(filme)
    }
    const response = await fetch(url,options)

    window.location.reload()

    return response.ok
}

export async function deletefilme (id) {
    const url = `${link}/v2/acmefilmes/deleteFilme/${id}`
    
    const options = {
        method: 'DELETE',
        headers: {
            'Content-type' : 'Application/json',
        }
    }
    const response = await fetch(url,options)

    window.location.reload()

    return response.ok
}