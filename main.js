let senhaAtual = document.querySelector('.painel').innerHTML
let minhaSenha = document.querySelector('.suaSenha').innerHTML

function senhaAdi() {
  if (minhaSenha > senhaAtual) {
    senhaAtual++

    if (senhaAtual < 10) {
      document.querySelector('.painel').innerHTML = '00' + senhaAtual
    } else if (senhaAtual < 100) {
      document.querySelector('.painel').innerHTML = '0' + senhaAtual
    } else {
      document.querySelector('.painel').innerHTML = senhaAtual
    }
  }
}

function novaSenha() {
  minhaSenha++
  if (minhaSenha < 10) {
    document.querySelector('.suaSenha').innerHTML = '00' + minhaSenha
  } else if (minhaSenha < 100) {
    document.querySelector('.suaSenha').innerHTML = '0' + minhaSenha
  } else {
    document.querySelector('.suaSenha').innerHTML = minhaSenha
  }
}
