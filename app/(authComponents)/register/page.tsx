"use client";

import { useRouter } from 'next/navigation';
import React from 'react'

import { User } from '@/icons/Icons';

import InputEmail from '@/components/Next_ui_elements/inputEmail/InputEmail';
import InputPassword from '@/components/Next_ui_elements/inputPassword/InputPassword';
import ButtonNext from '@/components/Next_ui_elements/button/ButtonNext';

import ApiRequest from '@/services/ApiRequest';
import { validationRegister } from '@/lib/validation/validationRegister';
import CustomLink from '@/components/link/Link';



const Register: React.FC = () => {
  const router = useRouter();


  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const { email, password, confirmPassword } = Object.fromEntries(formData);

    const validatedFields = validationRegister.safeParse({
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    })

    if (!validatedFields.success) {
      const firstError = validatedFields.error.errors[0];
      const messageError = String(firstError.message);
      // ErrorMessage(messageError);
    } else {
      try {
        const response = await ApiRequest({
          method: 'POST',
          url: 'https://eclipse-production-cfda.up.railway.app/api/User/CrearUsuario',
          body: {
            email: email,
            password: password,
            token: null,
          },
        });

        if (response.status === 200) {
          router.push('/login');
        } else {
          // ErrorMessage('Error al registrarse');
        }

      } catch (error) {
        console.log(error)
      }

    }

  }

  return (
    <>
      <div className="h-screen w-screen bg-[url('/images/fondo/1.webp')] bg-cover bg-center bg-no-repeat">
        <div className="flex justify-center items-center h-full ">
          <div className="border border-t-small border-solid w-80 h-80 rounded-2xl bg-gradient-to-b from-blue-400 to-blue-700 ">
            <div className="flex justify-center mb-4 mt-4">
              <User className="text-5xl text-white opacity-90" />
            </div>

            <form onSubmit={handleRegister}>
              <div className="flex items-center justify-center flex-grow flex-col">
                <div className="mb-4 w-2/3">
                  <InputEmail
                    name="email"
                  />
                </div>

                <div className="w-2/3">
                  <InputPassword
                    name="password"
                  />
                </div>

                <div className="w-2/3 mt-4">
                  <InputPassword
                    placeholder="verificar contraseña"
                    name="confirmPassword"
                  />
                </div>

                <div className="mt-3 w-2/3">
                  <ButtonNext
                    text="Registrarse"
                    type="submit"
                  />
                </div>

              </div>
            </form>

            <div className="flex justify-between mt-2 mx-2">
              <CustomLink
                href="/"
                text="Cancelar"
                className="text-white"
              />
              <CustomLink
                href="/login"
                text="Login"
                className="text-white"
              />
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
