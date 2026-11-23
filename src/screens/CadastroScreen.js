import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
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

export default function CadastroScreen({ navigation }) {
  const { colors, spacing } = useTheme();
  const { cadastrar } = useAuth();

  const [nome, setNome] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function handleCadastrar() {
    setErro('');

    if (!nome.trim() || !login.trim() || !senha) {
      setErro('Preencha nome, login e senha.');
      return;
    }

    if (login.trim().length < 3) {
      setErro('O login deve ter pelo menos 3 caracteres.');
      return;
    }

    const erroSenha = validarSenha(senha);
    if (erroSenha) {
      setErro(erroSenha);
      return;
    }

    if (senha !== confirmarSenha) {
      setErro('As senhas digitadas não coincidem.');
      return;
    }

    setCarregando(true);
    try {
      await cadastrar({ nome, login, senha });
    } catch (e) {
      setErro(e.message || 'Não foi possível concluir o cadastro.');
    } finally {
      setCarregando(false);
    }
  }

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: colors.background }]}
    >
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={[
            styles.scrollContent,
            { padding: spacing.lg },
          ]}
          keyboardShouldPersistTaps="handled"
        >
          <Card level={2} style={{ gap: spacing.md }}>
            <AppText variant="title">Novo cadastro</AppText>
            <AppText variant="body" color="textMuted">
              Crie sua conta para responder ao quiz e acompanhar seu histórico.
            </AppText>

            <Input
              label="Nome completo"
              placeholder="Ex.: Maria Silva"
              value={nome}
              onChangeText={setNome}
              autoCapitalize="words"
            />

            <Input
              label="Login"
              placeholder="Escolha um nome de usuário"
              value={login}
              onChangeText={setLogin}
              autoCapitalize="none"
              autoCorrect={false}
            />

            <Input
              label="Senha"
              placeholder="Entre 8 e 30 caracteres"
              value={senha}
              onChangeText={setSenha}
              maxLength={MAX_TAMANHO_SENHA}
              secureTextEntry
            />

            <RequisitosSenha senha={senha} />

            <Input
              label="Confirmar senha"
              placeholder="Repita sua senha"
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              maxLength={MAX_TAMANHO_SENHA}
              secureTextEntry
              returnKeyType="done"
              onSubmitEditing={handleCadastrar}
            />

            {erro ? (
              <AppText variant="caption" color="danger">
                {erro}
              </AppText>
            ) : null}

            <Button
              title="Cadastrar e entrar"
              onPress={handleCadastrar}
              loading={carregando}
              style={{ marginTop: spacing.xs }}
            />

            <Button
              title="Já tenho conta"
              variant="outline"
              onPress={() => navigation.goBack()}
              disabled={carregando}
            />
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
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
