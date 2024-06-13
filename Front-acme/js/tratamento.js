function tratarData(data) {

    const dataSemTempo = data.split('T')[0]

    const [ano, mes, dia] = dataSemTempo.split('-')

    const nomeMes = obterNomeMes(mes)

    const dataFormatada = `${dia} de ${nomeMes} de ${ano}`

    return dataFormatada
}

function tratarDataSimples(data) {

    const dataSemTempo = data.split('T')[0]

    const dataFormatada = `${dataSemTempo}`

    return dataFormatada
}

function obterNomeMes(numeroMes) {
    const meses = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ]

    const nomeMes = meses[parseInt(numeroMes) - 1]

    return nomeMes
}

function tratarDuracao(tempo) {
    // Remover tudo 'T' e depois do último caractere 'Z'
    const tempoSemData = tempo.split('T')[1].split('.')[0]

    // Separar as horas e os minutos
    const [horas, minutos] = tempoSemData.split(':')

    // Verificar se o número de horas é maior que 1
    if (parseInt(horas) > 1) {
        const duracaoFormatada = `${horas} horas e ${minutos} minutos`
        return duracaoFormatada
    } else {
        const duracaoFormatada = `${horas} hora e ${minutos} minutos`
        return duracaoFormatada
    }
}

function tratarDuracaoSimples(tempo) {
    // Remover tudo 'T' e depois do último caractere 'Z'
    const tempoSemData = tempo.split('T')[1].split('.')[0]

    const duracaoFormatada = `${tempoSemData}`
    return duracaoFormatada
}

function tratarValorUnitario(valorUnitario) {
    const strValorUnitario = valorUnitario.toString()

    const digito0 = strValorUnitario.split("")[0];
    const digito1 = strValorUnitario.split("")[1];
    const digito2 = strValorUnitario.split("")[2];
    const digito3 = strValorUnitario.split("")[3];
    const digito4 = strValorUnitario.split("")[4];

    const valorUnitarioCurto = `${digito0}${digito1}${digito2}${digito3}${digito4}`

    const valorUnitarioFormatado = `${valorUnitarioCurto}`

    return valorUnitarioFormatado
}

export { tratarData, tratarDuracao, tratarDataSimples, tratarDuracaoSimples, tratarValorUnitario }