import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppText } from '../components/AppText';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { RequisitosSenha } from '../components/RequisitosSenha';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../theme/ThemeProvider';
import { MAX_TAMANHO_SENHA, validarSenha } from '../utils/validacaoSenha';

export default function PerfilScreen() {
  const { colors, isDark, toggleTheme, spacing } = useTheme();
  const { usuario, atualizarCadastro, excluirConta, sair } = useAuth();

  const [nome, setNome] = useState(usuario?.nome ?? '');
  const [login, setLogin] = useState(usuario?.login ?? '');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');
  const [salvando, setSalvando] = useState(false);

  useEffect(() => {
    if (usuario) {
      setNome(usuario.nome);
      setLogin(usuario.login);
    }
  }, [usuario]);

  async function handleSalvar() {
    setErro('');
    setSucesso('');

    if (!nome.trim() || !login.trim()) {
      setErro('Nome e login são obrigatórios.');
      return;
    }

    if (login.trim().length < 3) {
      setErro('O login deve ter pelo menos 3 caracteres.');
      return;
    }

    if (novaSenha.length > 0) {
      const erroSenha = validarSenha(novaSenha);
      if (erroSenha) {
        setErro(erroSenha);
        return;
      }
      if (novaSenha !== confirmarSenha) {
        setErro('As senhas digitadas não coincidem.');
        return;
      }
    }

    setSalvando(true);
    try {
      await atualizarCadastro({
        nome,
        login,
        senha: novaSenha,
      });
      setNovaSenha('');
      setConfirmarSenha('');
      setSucesso('Cadastro atualizado com sucesso!');
    } catch (e) {
      setErro(e.message || 'Não foi possível atualizar o cadastro.');
    } finally {
      setSalvando(false);
    }
  }

  function confirmarExclusao() {
    Alert.alert(
      'Excluir cadastro',
      'Ao confirmar, você será desconectado e não poderá mais entrar com este login e senha. Deseja continuar?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir conta',
          style: 'destructive',
          onPress: async () => {
            try {
              await excluirConta();
            } catch {
              Alert.alert('Erro', 'Não foi possível excluir a conta.');
            }
          },
        },
      ]
    );
  }

  return (
    <SafeAreaView
      edges={['bottom']}
      style={[styles.safeArea, { backgroundColor: colors.background }]}
    >
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={{ padding: spacing.lg, gap: spacing.md }}
          keyboardShouldPersistTaps="handled"
        >

          <Card level={2} style={{ gap: spacing.xs }}>
            <View style={styles.temaRow}>
              <View style={styles.temaInfo}>
                <View style={styles.temaTituloRow}>
                  <Ionicons
                    name={isDark ? 'moon-outline' : 'sunny-outline'}
                    size={20}
                    color={colors.primary}
                  />
                  <AppText variant="subtitle">Aparência</AppText>
                </View>
                <AppText variant="caption" color="textMuted">
                  {isDark
                    ? 'Modo escuro ativo (padrão do app)'
                    : 'Modo claro ativo'}
                </AppText>
              </View>

              <Switch
                value={isDark}
                onValueChange={toggleTheme}
                trackColor={{
                  false: colors.border,
                  true: colors.primary,
                }}
                thumbColor="#FFFFFF"
                accessibilityLabel="Alternar entre modo escuro e modo claro"
              />
            </View>
          </Card>

          <Card level={2} style={{ gap: spacing.md }}>
            <AppText variant="subtitle">Alterar dados cadastrais</AppText>

            <Input
              label="Nome completo"
              value={nome}
              onChangeText={setNome}
              autoCapitalize="words"
            />

            <Input
              label="Login"
              value={login}
              onChangeText={setLogin}
              autoCapitalize="none"
              autoCorrect={false}
            />

            <Input
              label="Nova senha (opcional)"
              placeholder="Deixe em branco para manter a atual"
              value={novaSenha}
              onChangeText={setNovaSenha}
              maxLength={MAX_TAMANHO_SENHA}
              secureTextEntry
            />

            {novaSenha.length > 0 ? <RequisitosSenha senha={novaSenha} /> : null}

            <Input
              label="Confirmar nova senha"
              placeholder="Repita a nova senha"
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              maxLength={MAX_TAMANHO_SENHA}
              secureTextEntry
            />

            {erro ? (
              <AppText variant="caption" color="danger">
                {erro}
              </AppText>
            ) : null}

            {sucesso ? (
              <AppText variant="caption" color="success">
                {sucesso}
              </AppText>
            ) : null}

            <Button
              title="Salvar alterações"
              onPress={handleSalvar}
              loading={salvando}
            />
          </Card>

          <Card style={{ gap: spacing.sm }}>
            <AppText variant="subtitle">Sessão e conta</AppText>

            <Button
              title="Sair da conta"
              variant="outline"
              onPress={sair}
              disabled={salvando}
            />

            <Button
              title="Excluir meu cadastro"
              variant="danger"
              onPress={confirmarExclusao}
              disabled={salvando}
            />

            <AppText variant="caption" color="textMuted">
              A exclusão desativa permanentemente o acesso com este login e
              senha.
            </AppText>
          </Card>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  temaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  temaInfo: {
    flex: 1,
    gap: 2,
  },
  temaTituloRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
