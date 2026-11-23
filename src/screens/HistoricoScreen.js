import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppText } from '../components/AppText';
import { Card } from '../components/Card';
import { useAuth } from '../context/AuthContext';
import { listarHistoricoUsuario } from '../database/db';
import { useTheme } from '../theme/ThemeProvider';

function formatarDataHora(isoString) {
  try {
    const data = new Date(isoString);
    return data.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return isoString;
  }
}

export default function HistoricoScreen({ navigation }) {
  const { colors, radius, spacing } = useTheme();
  const { usuario } = useAuth();

  const [tentativas, setTentativas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useFocusEffect(
    useCallback(() => {
      let ativo = true;

      async function carregarHistorico() {
        if (!usuario) return;
        setCarregando(true);
        try {
          const lista = await listarHistoricoUsuario(usuario.id);
          if (ativo) setTentativas(lista);
        } catch (erro) {
          console.error('Erro ao carregar histórico:', erro);
        } finally {
          if (ativo) setCarregando(false);
        }
      }

      carregarHistorico();

      return () => {
        ativo = false;
      };
    }, [usuario])
  );

  function corDoPercentual(percentual) {
    if (percentual >= 70) return 'success';
    if (percentual >= 50) return 'warning';
    return 'danger';
  }

  function rotuloModalidade(totalQuestoes) {
    if (totalQuestoes > 30) return 'Longo · 60q';
    if (totalQuestoes <= 15) return `Mini · ${totalQuestoes}q`;
    return 'Curto · 30q';
  }

  return (
    <SafeAreaView
      edges={['bottom']}
      style={[styles.safeArea, { backgroundColor: colors.background }]}
    >
      {carregando ? (
        <View style={styles.centralizado}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      ) : (
        <FlatList
          data={tentativas}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={{
            padding: spacing.lg,
            gap: spacing.sm,
            flexGrow: 1,
          }}
          ListHeaderComponent={
            <Card level={2} style={{ marginBottom: spacing.sm }}>
              <AppText variant="caption" color="textMuted">
                Total de realizações do quiz
              </AppText>
              <AppText variant="title" color="primary">
                {tentativas.length}{' '}
                {tentativas.length === 1 ? 'tentativa' : 'tentativas'}
              </AppText>
            </Card>
          }
          ListEmptyComponent={
            <View style={styles.centralizado}>
              <AppText
                variant="body"
                color="textMuted"
                style={styles.textoVazio}
              >
                Você ainda não finalizou nenhuma tentativa do quiz. Inicie uma
                partida na aba Início!
              </AppText>
            </View>
          }
          renderItem={({ item, index }) => {
            const numeroTentativa = tentativas.length - index;
            const corNota = corDoPercentual(item.percentual);

            return (
              <View style={[styles.itemWrapper, { borderRadius: radius.md }]}>
                <Pressable
                  onPress={() =>
                    navigation.navigate('Resultado', { tentativa: item })
                  }
                  accessibilityRole="button"
                  accessibilityLabel={`Tentativa ${numeroTentativa}, ${item.percentual}% de acerto`}
                  android_ripple={{ color: 'rgba(128, 128, 128, 0.15)' }}
                  style={({ pressed }) => [
                    styles.itemCard,
                    {
                      backgroundColor: colors.surface,
                      borderColor: colors.border,
                      borderRadius: radius.md,
                      padding: spacing.md,
                    },
                    pressed && styles.pressed,
                  ]}
                >
                  <View style={styles.infoCol}>
                    <View style={styles.tituloRow}>
                      <AppText variant="subtitle">
                        Tentativa #{numeroTentativa}
                      </AppText>
                      <View
                        style={[
                          styles.modoPill,
                          {
                            backgroundColor: colors.primarySoft,
                            borderRadius: radius.pill,
                          },
                        ]}
                      >
                        <AppText
                          variant="caption"
                          color="primary"
                          style={styles.modoTexto}
                        >
                          {rotuloModalidade(item.total_questoes)}
                        </AppText>
                      </View>
                    </View>
                    <AppText variant="caption" color="textMuted">
                      {formatarDataHora(item.data_hora)}
                    </AppText>
                    <AppText
                      variant="caption"
                      color="textMuted"
                      style={{ marginTop: spacing.xs }}
                    >
                      Acertos: {item.total_acertos}/{item.total_questoes} ·
                      Toque para ver estatísticas e erros
                    </AppText>
                  </View>

                  <View
                    style={[
                      styles.notaBadge,
                      {
                        backgroundColor: colors.background,
                        borderRadius: radius.md,
                        paddingHorizontal: spacing.sm + 4,
                        paddingVertical: spacing.sm,
                      },
                    ]}
                  >
                    <AppText variant="subtitle" color={corNota}>
                      {item.percentual}%
                    </AppText>
                  </View>
                </Pressable>
              </View>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  centralizado: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
  },
  textoVazio: {
    textAlign: 'center',
  },
  itemWrapper: {
    overflow: 'hidden',
  },
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: StyleSheet.hairlineWidth,
    gap: 12,
  },
  pressed: {
    opacity: 0.85,
  },
  infoCol: {
    flex: 1,
  },
  tituloRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
  },
  modoPill: {
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  modoTexto: {
    fontSize: 11,
    fontWeight: '700',
  },
  notaBadge: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
