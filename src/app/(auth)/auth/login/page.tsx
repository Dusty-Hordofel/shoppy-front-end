"use client";
import AuthForm from "@/components/auth/auth-form";
import LoginForm from "@/components/auth/auth-form";

const LoginPage = () => {
  return (
    <main className="flex justify-center items-center h-screen">
      <AuthForm
        errorMessage="Erreur de connexion. Veuillez vérifier vos identifiants."
        successMessage="Connexion réussie. Bienvenue !"
        title="Connexion à votre compte"
        description="Connectez-vous pour accéder à votre compte"
        buttonLabel="Se connecter"
      />
    </main>
  );
};

export default LoginPage;
