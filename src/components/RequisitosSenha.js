import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import {
  CARACTERES_ESPECIAIS_PERMITIDOS,
  MAX_TAMANHO_SENHA,
  MIN_TAMANHO_SENHA,
  verificarRequisitosSenha,
} from '../utils/validacaoSenha';
import { AppText } from './AppText';

export function RequisitosSenha({ senha }) {
  const { colors, radius, spacing } = useTheme();
  const status = verificarRequisitosSenha(senha);

  const itens = [
    {
      chave: 'tamanho',
      ok: status.tamanho,
      texto: `Entre ${MIN_TAMANHO_SENHA} e ${MAX_TAMANHO_SENHA} caracteres (${senha.length}/${MAX_TAMANHO_SENHA})`,
    },
    {
      chave: 'minuscula',
      ok: status.minuscula,
      texto: 'Pelo menos 1 letra minúscula (a-z)',
    },
    {
      chave: 'maiuscula',
      ok: status.maiuscula,
      texto: 'Pelo menos 1 letra maiúscula (A-Z)',
    },
    {
      chave: 'especial',
      ok: status.especial,
      texto: `Pelo menos 1 caractere especial (${CARACTERES_ESPECIAIS_PERMITIDOS})`,
    },
  ];

  return (
    <View
      style={[
        styles.box,
        {
          backgroundColor: colors.background,
          borderColor: colors.border,
          borderRadius: radius.sm,
          padding: spacing.sm + 4,
          gap: spacing.xs,
        },
      ]}
    >
      <AppText variant="caption" color="textMuted" style={{ fontWeight: '600' }}>
        Requisitos da senha:
      </AppText>

      {itens.map((item) => (
        <View key={item.chave} style={styles.linha}>
          <Ionicons
            name={item.ok ? 'checkmark-circle' : 'ellipse-outline'}
            size={16}
            color={item.ok ? colors.success : colors.textMuted}
          />
          <AppText
            variant="caption"
            color={item.ok ? 'success' : 'textMuted'}
            style={styles.textoItem}
          >
            {item.texto}
          </AppText>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderWidth: StyleSheet.hairlineWidth,
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  textoItem: {
    flex: 1,
  },
});
