import React from "react";

export default function ComParametro(props) {
  const status = props.nota >= 7 ? "Aprovado" : "Recuperação";
  return (
    <React.Fragment>
      <h2>{props.titulo}</h2>
      <p>
        <strong>{props.aluno}</strong> tem nota {props.nota} e foi{" "}
        <strong>{status}</strong>!
      </p>
    </React.Fragment>
  );
}
