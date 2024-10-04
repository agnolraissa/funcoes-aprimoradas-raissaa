export function aleatorio(lista){
    const posicao = Math.floor(Math.ranfom()*lista.length)
    return lista[posicao];
}