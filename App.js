import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppText } from './src/components/AppText';
import { BannerOffline } from './src/components/BannerOffline';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import CadastroScreen from './src/screens/CadastroScreen';
import DetalheCargoScreen from './src/screens/DetalheCargoScreen';
import DetalheErroScreen from './src/screens/DetalheErroScreen';
import HistoricoScreen from './src/screens/HistoricoScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import PerfilScreen from './src/screens/PerfilScreen';
import QuizScreen from './src/screens/QuizScreen';
import ResultadoScreen from './src/screens/ResultadoScreen';
import { ThemeProvider, useTheme } from './src/theme/ThemeProvider';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: colors.surface },
        headerTintColor: colors.text,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarIcon: ({ color, size }) => {
          const icones = {
            Inicio: 'home-outline',
            Historico: 'bar-chart-outline',
            Perfil: 'person-outline',
          };
          return (
            <Ionicons
              name={icones[route.name] ?? 'ellipse-outline'}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{ title: 'Início' }}
      />
      <Tab.Screen
        name="Historico"
        component={HistoricoScreen}
        options={{ title: 'Histórico' }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{ title: 'Perfil' }}
      />
    </Tab.Navigator>
  );
}

function Routes() {
  const { usuario, dbPronto, erroDb } = useAuth();
  const { isDark, colors } = useTheme();

  const navTheme = {
    ...(isDark ? DarkTheme : DefaultTheme),
    colors: {
      ...(isDark ? DarkTheme.colors : DefaultTheme.colors),
      background: colors.background,
      card: colors.surface,
      text: colors.text,
      border: colors.border,
      primary: colors.primary,
    },
  };

  if (erroDb) {
    return (
      <View
        style={[styles.centralizado, { backgroundColor: colors.background }]}
      >
        <AppText variant="body" color="danger">
          {erroDb}
        </AppText>
      </View>
    );
  }

  if (!dbPronto) {
    return (
      <View
        style={[styles.centralizado, { backgroundColor: colors.background }]}
      >
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={[styles.flex, { backgroundColor: colors.background }]}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <BannerOffline />
      <NavigationContainer theme={navTheme}>
        {usuario ? (
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: colors.surface },
              headerTintColor: colors.text,
            }}
          >
            <Stack.Screen
              name="Início"
              component={MainTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DetalheCargo"
              component={DetalheCargoScreen}
              options={({ route }) => ({
                title: route.params?.cargoNome ?? 'Como Funciona o Cargo',
              })}
            />
            <Stack.Screen
              name="Quiz"
              component={QuizScreen}
              options={({ route }) => {
                const mod = route.params?.modalidade;
                if (mod === 'area') {
                  return {
                    title: `Mini-Quiz · ${route.params?.areaNome ?? 'Área'}`,
                  };
                }
                if (mod === 'longo') {
                  return { title: 'Quiz Longo (60 questões)' };
                }
                return { title: 'Quiz Curto (30 questões)' };
              }}
            />
            <Stack.Screen
              name="Resultado"
              component={ResultadoScreen}
              options={{ title: 'Estatísticas e Desempenho' }}
            />
            <Stack.Screen
              name="DetalheErro"
              component={DetalheErroScreen}
              options={{ title: 'Revisão da Questão' }}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: colors.surface },
              headerTintColor: colors.text,
            }}
          >
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cadastro"
              component={CadastroScreen}
              options={{ title: 'Criar conta' }}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  centralizado: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});
