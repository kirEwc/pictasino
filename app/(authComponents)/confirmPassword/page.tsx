"use client"

import { validationConfirmPassword } from '@/lib/validation/validationConfirmPassword';
import ButtonNext from '@/components/Next_ui_elements/button/ButtonNext';
import InputPassword from '@/components/Next_ui_elements/inputPassword/InputPassword';
import { User } from '@/icons/Icons';

import ApiRequest from '@/services/ApiRequest';
import { useRouter } from 'next/navigation';
import React from 'react'

const ConfirmPassword = () => {
  const router = useRouter();

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const { password, confirmPassword } = Object.fromEntries(formData);

    const validatedFields = validationConfirmPassword.safeParse({     
      password: password,
      confirmPassword: confirmPassword,
    })

    if (!validatedFields.success) {
      const firstError = validatedFields.error.errors[0];
      const messageError = String(firstError.message);
      // ErrorMessage(messageError);
    } else {
      const email = localStorage.getItem('email');
      try {
        const response = await ApiRequest({
          method: 'PATCH',
          url: 'https://eclipse-production-cfda.up.railway.app/api/User/ChangePassword',
          body: {           
            password: password,
            email: email,            
          },
        });

        if (response.status === 200) {
          router.push('/login');
        } else {
          // ErrorMessage('Error al registrarce');
        }

      } catch (error) {
        console.log(error)
      }

    }

  }






  return (
    <div className="h-screen w-screen bg-[url('/images/fondo/1.webp')] bg-cover bg-center bg-no-repeat">
        <div className="flex justify-center items-center h-full ">
          <div className="border border-t-small border-solid w-80 h-64 rounded-2xl bg-gradient-to-b from-blue-400 to-blue-700 ">
            <div className="flex justify-center mb-4 mt-4">
              <User className="text-5xl text-white opacity-90" />
            </div>

            <form onSubmit={handleRegister}>
              <div className="flex items-center justify-center flex-grow flex-col">
            
                <div className="w-2/3">
                  <InputPassword
                  name="password"
                  placeholder='nueva contraseña'
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
                    text="Confirmar"
                    type="submit"
                  />
                </div>

              </div>
            </form>


          </div>
        </div>
      </div>
  )
}

export default ConfirmPassword;