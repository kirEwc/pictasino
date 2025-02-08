"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import InputPassword from "@/components/Next_ui_elements/inputPassword/InputPassword";
import InputEmail from "@/components/Next_ui_elements/inputEmail/InputEmail";
import { ReusableAlert } from "@/app/messages/reusableAlert/ReusableAlert";
import ButtonNext from "@/components/Next_ui_elements/button/ButtonNext";
import { validationLogin } from "@/lib/validation/validationLogin";
import CustomLink from "@/components/my-components/link/Link";
import { AlertData } from "@/interfaces/alertData/AlertData";
import { setAuthCookie } from "@/app/actions/setAuthCookie";
import { SolarLoginBold, User } from "@/icons/Icons";
import ApiRequest from "@/services/ApiRequest";

const Login: React.FC = () => {
  const router = useRouter();
  const [alert, setAlert] = useState<AlertData | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const { email, password } = Object.fromEntries(formData) as {
      email: string;
      password: string;
    };

    const validatedFields = validationLogin.safeParse({ email, password });
    if (!validatedFields.success) {
      const firstError = validatedFields.error.errors[0];
      setAlert({
        title: "Error en el formulario",
        description: firstError.message,
        color: "danger",
      });
      return;
    }

    try {
      const response = await ApiRequest({
        method: "POST",
        url: "https://eclipse-production-cfda.up.railway.app/api/User/login",
        body: { email, password },
      });

      if (response?.status === 200) {
        const data = await response.json();
        const token = data.token;
        const role = data.userRol;

        await setAuthCookie(token, role);
        router.push("/");
      } else {
        setAlert({
          title: "Error",
          description: "Credenciales incorrectas",
          color: "danger",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-screen w-screen bg-[url('/images/images-auth/3.webp')] bg-cover bg-center bg-no-repeat relative">
      {/* Alerta flotante, sin botón para reabrirla */}
      {alert && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 w-72">
          <ReusableAlert
            title={alert.title}
            description={alert.description}
            color={alert.color}
            variant="faded"
            onClose={() => setAlert(null)}
          />
        </div>
      )}

      <div className="flex justify-center items-center h-full">
        <div className="border border-t-small border-solid w-80 h-72 rounded-2xl bg-gradient-to-b from-purple-900 to-blue-700">
          <div className="flex justify-center mb-4 mt-4">
            <User className="text-5xl text-white opacity-90" />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-center flex-grow flex-col">
              <div className="mb-4 w-2/3">
                <InputEmail name="email" />
              </div>

              <div className="w-2/3">
                <InputPassword name="password" />
              </div>

              <div className="mt-3 w-2/3">
                <ButtonNext
                  text="Iniciar Sesión"
                  type="submit"
                  icon={<SolarLoginBold />}
                />
              </div>
            </div>
          </form>

          <div className="flex justify-between mt-6 mx-2">
            <CustomLink
              href="/recoveryPassword"
              text="Olvidaste la contraseña"
              className="text-white"
            />
            <CustomLink
              href="/register"
              text="Regístrarse"
              className="text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
