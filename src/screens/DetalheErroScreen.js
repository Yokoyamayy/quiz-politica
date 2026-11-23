import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AlternativaItem } from '../components/AlternativaItem';
import { AppText } from '../components/AppText';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { buscarPerguntaPorId } from '../data/perguntas';
import { useTheme } from '../theme/ThemeProvider';

const LETRAS = ['A', 'B', 'C', 'D'];

export default function DetalheErroScreen({ route, navigation }) {
  const { erro } = route.params;
  const { colors, radius, spacing } = useTheme();

  const pergunta = buscarPerguntaPorId(erro.pergunta_id);

  if (!pergunta) {
    return (
      <SafeAreaView
        edges={['bottom']}
        style={[
          styles.safeArea,
          styles.centralizado,
          { backgroundColor: colors.background, padding: spacing.lg },
        ]}
      >
        <AppText variant="body">Questão não encontrada.</AppText>
        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
          style={{ marginTop: spacing.md }}
        />
      </SafeAreaView>
    );
  }

  const naoRespondida = erro.resposta_usuario === 'SEM_RESPOSTA';

  return (
    <SafeAreaView
      edges={['bottom']}
      style={[styles.safeArea, { backgroundColor: colors.background }]}
    >
      <ScrollView
        contentContainerStyle={{ padding: spacing.lg, gap: spacing.md }}
      >
        <Card level={2} style={{ gap: spacing.sm }}>
          <View style={styles.headerRow}>
            <AppText variant="label" color="primary">
              Questão {erro.ordem_exibicao} da tentativa
            </AppText>
            <AppText variant="caption" color="textMuted">
              Banco #{pergunta.id}
            </AppText>
          </View>

          <View
            style={[
              styles.categoriaBadge,
              {
                backgroundColor: colors.primarySoft,
                borderRadius: radius.sm,
                paddingHorizontal: spacing.sm,
                paddingVertical: spacing.xs,
              },
            ]}
          >
            <AppText
              variant="caption"
              color="primary"
              style={{ fontWeight: '600' }}
            >
              {pergunta.categoria}
            </AppText>
          </View>

          <AppText variant="subtitle">{pergunta.enunciado}</AppText>
        </Card>

        <Card style={{ gap: spacing.xs }}>
          <AppText variant="label" color="danger">
            {naoRespondida
              ? 'Sua resposta: Não respondida (contabilizada como incorreta por interrupção)'
              : `Sua resposta: ${erro.resposta_usuario}) ${pergunta.alternativas[erro.resposta_usuario]}`}
          </AppText>
          <AppText variant="label" color="success">
            Resposta correta: {erro.resposta_correta}){' '}
            {pergunta.alternativas[erro.resposta_correta]}
          </AppText>
        </Card>

        {pergunta.explicacao ? (
          <Card
            style={[
              styles.explicacaoCard,
              {
                backgroundColor: colors.primarySoft,
                borderColor: colors.primary,
                gap: spacing.xs,
              },
            ]}
          >
            <View style={styles.explicacaoHeader}>
              <Ionicons
                name="book-outline"
                size={18}
                color={colors.primary}
              />
              <AppText variant="label" color="primary">
                Por que esta é a correta?
              </AppText>
            </View>
            <AppText variant="body">{pergunta.explicacao}</AppText>
          </Card>
        ) : null}

        <View style={{ gap: spacing.sm }}>
          {LETRAS.map((letra) => {
            let status = 'padrao';
            if (letra === erro.resposta_correta) {
              status = 'correta';
            } else if (!naoRespondida && letra === erro.resposta_usuario) {
              status = 'errada';
            }

            return (
              <AlternativaItem
                key={letra}
                letra={letra}
                texto={pergunta.alternativas[letra]}
                status={status}
                disabled
              />
            );
          })}
        </View>

        <Button
          title="Voltar ao resultado"
          variant="outline"
          onPress={() => navigation.goBack()}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  centralizado: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoriaBadge: {
    alignSelf: 'flex-start',
  },
  explicacaoCard: {
    borderWidth: 1,
  },
  explicacaoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
