import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "../components/Forms/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import Router from "next/router";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail Obrigatorio!").email("E-mail Invalido!"),
  password: yup.string().required("Senha Obrigatoria!"),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);

    let login = "agske13@gmail.com";
    let senha = "5323896";
    if (values.email === login && values.password === senha) {
      Router.push("/dashboard");
    }
  };

  const { errors } = formState;
  console.log(errors);

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection={"column"}
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={"4"}>
          <Input
            name="email"
            label="E-Mail"
            type="email"
            {...register("email")}
            error={errors.email}
          />
          <Input
            name="password"
            label="Senha"
            type="password"
            {...register("password")}
            error={errors.password}
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme={"pink"}
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
