import React, { Fragment, useState, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import IconInv from "../Images/Rectangle 673.png";

export default function ModalWelcome() {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const cancelButtonRef = useRef(null);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={closeModal}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center lg:block lg:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden lg:inline-block lg:align-middle lg:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 lg:translate-y-0 lg:scale-95"
              enterTo="opacity-100 translate-y-0 lg:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 lg:scale-100"
              leaveTo="opacity-0 translate-y-4 lg:translate-y-0 lg:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all lg:my-8 lg:align-middle lg:max-w-2xl lg:w-full px-4">
                <div className="bg-white md:px-24 pt-5 pb-4 lg:p-6 lg:pb-4 justify-center items-center">
                  <div className="lg:flex lg:items-center justify-center">
                    <div className="mt-3 text-center lg:mt-0 lg:text-center py-8 justify-center items-center space-y-2">
                      <div className="flex flex-col justify-center items-center space-y-4">
                        <div className="flex-grow-0 overflow-y-auto md:w-24 md:h-20 text-white justify-center items-center rounded-full -mt-16">
                          <img src={IconInv} alt="Tanda" />
                        </div>

                        <Dialog.Title
                          as="h1"
                          className="md:text-base text-xs font-sans leading-6 font-sans justify-center items-center md:px-4 px-4"
                        >
                          Selamat datang di website Pernikahan Sara & Kelvin
                        </Dialog.Title>
                        <div className="mt-2 items-center pt-4 md:px-8 px-0 text-left">
                          <p className="text-sm text-gray-500">
                            Apabila Anda dapat hadir pada acara pernikahan kami
                            (21 November 2021), mohon ikuti{" "}
                            <u className="italic">Prosedur</u> berikut :
                            <p>1. Tekan tombol "Buka QR"</p>
                            <p>2. Masukkan Nomor Handphone Anda</p>
                            <p>
                              3. Tunjukkan Kode QR pada hari pernikahan kepada
                              petugas (sebagai pengganti buku tamu dan
                              pengambilan sovenir)
                            </p>
                            <p className="font-sans text-xs text-red-400 font-light text-justify mt-8">
                              *Jika nomor handphone kalian tidak terdaftar atau
                              gagal mendapatkan kode QR harap menghubungi Sara /
                              Kelvin sebelum hari pernikahan.
                            </p>
                          </p>
                        </div>

                        {/* <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                            onClick={closeModal}
                          >
                            Got it, thanks!
                          </button>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
