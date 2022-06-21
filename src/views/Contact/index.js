import React, { useState, useCallback, useEffect } from "react";
import { toast } from "react-toastify";
import Lottie from "lottie-react-web";
import { useNavigate } from "react-router-dom";

import { api } from "@/services/api";

// Redux
import { useDispatch } from 'react-redux';
import { addNewUser } from '@/store/module/user/reducer';

import batman from "@/animation/batman.json";

import Card from "@/assets/cars/batmobile.png";
import { menuItem } from "@/shared/Constants";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import { FormContainer, ContactCard } from "./style";

const Contact = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState();
  const [isSending, setIsSendind] = useState(false);
  const [allUsers, setAllUsers] = useState(() => {
    const userStorage = localStorage.getItem('@users');
    if (userStorage) {
      return JSON.parse(userStorage);
    }
    return [];
  });

  const sendData = useCallback(
    (e) => {
      e.preventDefault();
      setIsSendind(true);

      const { name, email, phone } = data;

      localStorage.setItem('@users', JSON.stringify([...allUsers, { name, email, phone }]))
      setTimeout(() => {
        setIsSendind(false);
      }, 500)
      // api
      //   .post("", data)
      //   .then(() => {
      //     toast.success("Mensagem enviada com sucesso", {
      //       type: "success",
      //       onClose: () => {
      //         navigate("/");
      //       },
      //     });
      //   })
      //   .catch(() =>
      //     toast.error("ERRO", {
      //       type: "error",
      //     })
      //   )
      //   .finally(() => {
      //     setIsSendind(false);
      //   });
    },
    [data, allUsers]
  );

  useEffect(() => {
    allUsers.map(user => dispatch(addNewUser(user)))
  }, [])
  return (
    <div>
      <Nav logo={Card} item={menuItem} />
      <FormContainer>
        <h1>BatContato</h1>
        <ContactCard>
          <form onSubmit={sendData}>
            <input
              type="text"
              placeholder="Informe seu nome"
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Informe seu email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Informe seu telefone"
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            />
            {!isSending ? (
              <>
                <input type="submit" value="Enviar" />
              </>
            ) : (
              <>
                <Lottie options={{ animationData: batman }} />
              </>
            )}
          </form>
        </ContactCard>
      </FormContainer>
      <Footer />
    </div>
  );
};

export default Contact;
