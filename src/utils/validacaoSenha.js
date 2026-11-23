export const MIN_TAMANHO_SENHA = 8;
export const MAX_TAMANHO_SENHA = 30;
export const CARACTERES_ESPECIAIS_PERMITIDOS = '@ . - _ # * ? + = $';

const REGEX_MINUSCULA = /[a-z]/;
const REGEX_MAIUSCULA = /[A-Z]/;
const REGEX_ESPECIAL = /[@.\-_#*?+=$]/;

export function verificarRequisitosSenha(senha) {
  return {
    tamanho:
      senha.length >= MIN_TAMANHO_SENHA && senha.length <= MAX_TAMANHO_SENHA,
    minuscula: REGEX_MINUSCULA.test(senha),
    maiuscula: REGEX_MAIUSCULA.test(senha),
    especial: REGEX_ESPECIAL.test(senha),
  };
}

export function validarSenha(senha) {
  if (senha.length < MIN_TAMANHO_SENHA) {
    return `A senha deve ter pelo menos ${MIN_TAMANHO_SENHA} caracteres.`;
  }

  if (senha.length > MAX_TAMANHO_SENHA) {
    return `A senha deve ter no máximo ${MAX_TAMANHO_SENHA} caracteres.`;
  }

  if (!REGEX_MINUSCULA.test(senha)) {
    return 'A senha deve conter pelo menos uma letra minúscula.';
  }

  if (!REGEX_MAIUSCULA.test(senha)) {
    return 'A senha deve conter pelo menos uma letra maiúscula.';
  }

  if (!REGEX_ESPECIAL.test(senha)) {
    return `A senha deve conter pelo menos um caractere especial (${CARACTERES_ESPECIAIS_PERMITIDOS}).`;
  }

  return null;
}
