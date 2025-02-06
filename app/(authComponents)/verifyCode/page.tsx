"use client"


import ButtonNext from '@/components/Next_ui_elements/button/ButtonNext';
import { Number, User } from '@/icons/Icons';
import ApiRequest from '@/services/ApiRequest';
import { useRouter } from 'next/navigation';
import React from 'react'
import InputNumberNext from '@/components/Next_ui_elements/inputNumber/InputNumberNext';
import { validationVerifyCode } from '@/lib/validation/validationVerifyCode';
import CustomLink from '@/components/link/Link';

const VerifyCode = () => {
  const router = useRouter();

  const handleCode = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
     const formData = new FormData(event.currentTarget);
    const { code } = Object.fromEntries(formData);
   
    const validatedFields = validationVerifyCode.safeParse({
      code: code,
    })

    if (!validatedFields.success) {
      const firstError = validatedFields.error.errors[0];
      const messageError = String(firstError.message);
      // ErrorMessage(messageError);
    } else {
     
      try {
        const response = await ApiRequest({
          method: 'GET',
          url: 'https://eclipse-production-cfda.up.railway.app/api/User/ConfirmChangeToken/'+code,
        });


        if (response.status === 200) {        
          router.push('/confirmPassword');
        } else {
          // ErrorMessage('Código incorrecto');
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
          <div className="border border-t-small border-solid w-80 h-60 rounded-2xl bg-gradient-to-b from-blue-400 to-blue-700 ">
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