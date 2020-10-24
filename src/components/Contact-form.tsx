/** @jsx jsx */
import { jsx, Styled, Flex, Input } from "theme-ui"
import React from "react"
import { useForm } from "react-hook-form"
import {
  Label,
  ErrorMessage,
  inputStyles,
  buttonStyles,
} from "./Contact-form-components"

export default function ContactForm(props) {
  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onChange",
    shouldFocusError: true,
  })
  function onSubmit(data) {
    console.log(JSON.stringify(data))
  }
  const { dirtyFields, isSubmitting, isSubmitSuccessful } = formState

  return (
    <form
      data-netlify="true"
      id="contact-form"
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <Flex sx={{ flexDirection: "column" }}>
        <Label for="name">Naam</Label>
        <input
          type="text"
          autoFocus
          name="name"
          placeholder="Naam"
          ref={register({ required: true, minLength: 2, maxLength: 30 })}
          sx={{
            ...inputStyles,
            backgroundColor: `${
              dirtyFields.name && !errors.name ? "#ebfff0" : "inherit"
            }`,
          }}
        />
        {errors.name ? (
          <ErrorMessage>Dit is een verplicht veld</ErrorMessage>
        ) : null}
        <Label for="email">E-mail</Label>
        <input
          type="email"
          name="email"
          placeholder="E-mail adres"
          ref={register({
            required: "Dit is een verplicht veld.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Ongeldige e-mail adres.",
            },
          })}
          sx={{
            ...inputStyles,
            backgroundColor: `${
              dirtyFields.email && !errors.email ? "#ebfff0" : "#fff"
            }`,
          }}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <Label for="message">Bericht</Label>
        <textarea
          name="message"
          form="contact-form"
          ref={register({
            required: true,
            minLength: 12,
            maxLength: 2000,
          })}
          placeholder="Uw vraag of boodschap"
          rows={6}
          sx={{
            ...inputStyles,
            backgroundColor: `${
              dirtyFields.message && !errors.message ? "#ebfff0" : "#fff"
            }`,
          }}
        ></textarea>
        {errors.message && (
          <ErrorMessage>Het bericht is te kort of te lang</ErrorMessage>
        )}
        <button type="submit" sx={buttonStyles}>
          {isSubmitSuccessful ? "Verstuurd" : "Verstuur >"}
        </button>
        {isSubmitSuccessful ? (
          <span sx={{ color: "green", marginLeft: "3", marginTop: "1" }}>
            U bericht is verstuurd.
          </span>
        ) : null}
      </Flex>
    </form>
  )
}
