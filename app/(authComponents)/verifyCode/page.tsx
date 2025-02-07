"use client"


import ButtonNext from '@/components/Next_ui_elements/button/ButtonNext';
import { GameIconsConfirmed, Number, User } from '@/icons/Icons';
import ApiRequest from '@/services/ApiRequest';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import InputNumberNext from '@/components/Next_ui_elements/inputNumber/InputNumberNext';
import { validationVerifyCode } from '@/lib/validation/validationVerifyCode';
import CustomLink from '@/components/my-components/link/Link';
import { AlertData } from '@/interfaces/alertData/AlertData';
import { ReusableAlert } from '@/app/messages/reusableAlert/ReusableAlert';

const VerifyCode = () => {
  const router = useRouter();
  const [alert, setAlert] = useState<AlertData | null>(null);

  const handleCode = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const { code } = Object.fromEntries(formData);

    const validatedFields = validationVerifyCode.safeParse({
      code: code,
    })

    if (!validatedFields.success) {
      const firstError = validatedFields.error.errors[0];
      setAlert({
        title: "Error en el formulario",
        description: firstError.message,
        color: "danger",
      });
    } else {

      try {
        const response = await ApiRequest({
          method: 'GET',
          url: 'https://eclipse-production-cfda.up.railway.app/api/User/ConfirmChangeToken/' + code,
        });


        if (response.status === 200) {
          router.push('/confirmPassword');
        } else {
          setAlert({
            title: "Error",
            description: "Código incorrecto",
            color: "danger",
          });
        }

      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <>
      <div className="h-screen w-screen bg-[url('/images/images-auth/3.webp')] bg-cover bg-center bg-no-repeat">
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
          <div className="border border-t-small border-solid w-80 h-60 rounded-2xl bg-gradient-to-b from-purple-900 to-blue-700">
            <div className="flex justify-center mb-4 mt-4">
              <User className="text-5xl text-white opacity-90" />
            </div>

            <form onSubmit={handleCode}>
              <div className="flex items-center justify-center flex-grow flex-col">
                <div className="mb-4 w-48">
                  <InputNumberNext
                    name="code"
                    icon={<Number className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                  />

                </div>

                <div className="mt-3 w-48">
                  <ButtonNext
                    text="Confirmar"
                    type="submit"
                    icon={<GameIconsConfirmed className="h-6 w-6" />}
                  />
                </div>

              </div>
            </form>

            <div className="flex justify-between mt-4 mx-2">
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
  )
}

export default VerifyCode;