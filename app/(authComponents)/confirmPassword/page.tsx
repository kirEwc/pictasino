"use client"

import { validationConfirmPassword } from '@/lib/validation/validationConfirmPassword';
import ButtonNext from '@/components/Next_ui_elements/button/ButtonNext';
import InputPassword from '@/components/Next_ui_elements/inputPassword/InputPassword';
import { GameIconsConfirmed, User } from '@/icons/Icons';

import ApiRequest from '@/services/ApiRequest';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { AlertData } from '@/interfaces/alertData/AlertData';
import { ReusableAlert } from '@/app/messages/reusableAlert/ReusableAlert';

const ConfirmPassword = () => {
  const router = useRouter();
  const [alert, setAlert] = useState<AlertData | null>(null);

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
      setAlert({
        title: "Error en el formulario",
        description: firstError.message,
        color: "danger",
      });
    
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
          setAlert({
            title: "Error",
            description:"No se pudo cambiar la contraseña.",
            color: "danger",
          });
        }

      } catch (error) {
        console.log(error)
      }

    }

  }






  return (
    <div  className="h-screen w-screen bg-[url('/images/images-auth/3.webp')] bg-cover bg-center bg-no-repeat">    
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
      <div className="flex justify-center items-center h-full ">
          <div className="border border-t-small border-solid w-80 h-64 rounded-2xl bg-gradient-to-b from-purple-900 to-blue-700">
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
                  icon={<GameIconsConfirmed className="h-6 w-6"/>}
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