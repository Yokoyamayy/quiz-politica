import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppText } from '../components/AppText';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../theme/ThemeProvider';

export default function LoginScreen({ navigation }) {
  const { colors, spacing } = useTheme();
  const { entrar } = useAuth();

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function handleLogin() {
    setErro('');

    if (!login.trim() || !senha.trim()) {
      setErro('Informe seu login e sua senha para entrar.');
      return;
    }

    setCarregando(true);
    try {
      await entrar({ login, senha });
    } catch (e) {
      setErro(e.message || 'Não foi possível realizar o login.');
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
          <View style={{ marginBottom: spacing.lg }}>
            <AppText variant="title" style={styles.centralizado}>
              Quiz Político
            </AppText>
            <AppText
              variant="body"
              color="textMuted"
              style={[styles.centralizado, { marginTop: spacing.xs }]}
            >
              Instituições políticas e atribuições de seus representantes
            </AppText>
          </View>

          <Card level={2} style={{ gap: spacing.md }}>
            <AppText variant="subtitle">Acessar conta</AppText>

            <Input
              label="Login"
              placeholder="Digite seu usuário"
              value={login}
              onChangeText={setLogin}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
            />

            <Input
              label="Senha"
              placeholder="Digite sua senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
              returnKeyType="done"
              onSubmitEditing={handleLogin}
            />

            {erro ? (
              <AppText variant="caption" color="danger">
                {erro}
              </AppText>
            ) : null}

            <Button
              title="Entrar"
              onPress={handleLogin}
              loading={carregando}
              style={{ marginTop: spacing.xs }}
            />

            <Button
              title="Criar nova conta"
              variant="outline"
              onPress={() => navigation.navigate('Cadastro')}
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
  centralizado: {
    textAlign: 'center',
  },
});
