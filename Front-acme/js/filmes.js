export async function getFilmes() {
    const url = 'http://localhost:8080/v2/acmefilmes/filmes'
    const response = await fetch(url)
    const data = await response.json()
    return data.filmes
}

export async function getFilme(id) {
    const url = `http://localhost:8080/v2/acmefilmes/filme/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data.filme
}

export async function getFotoFilmes() {
    const url = 'http://localhost:8080/v2/acmefilmes/filme/foto_capa'
    const response = await fetch(url)
    const data = await response.json()
    return data.filmes

}

export async function postFilme (filme) {
    const url = 'http://localhost:8080/v2/acmefilmes/filme/'
    
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
    const url = `http://localhost:8080/v2/acmefilmes/filme/${filme.id}`
    
    const options = {
        method: 'PUT',
        headers: {
            'Content-type' : 'Application/json',
        },
        body: JSON.stringify(filme)
    }
    const response = await fetch(url,options)

    return response.ok
}

export async function deletefilme (id) {
    const url = `http://localhost:8080/v2/acmefilmes/filme/${id}`
    
    const options = {
        method: 'DELETE',
        headers: {
            'Content-type' : 'Application/json',
        },
        body: JSON.stringify(filme)
    }
    const response = await fetch(url,options)

    return response.ok
}