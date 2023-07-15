import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

/*
Título do projeto: Aplicativo de Gerenciamento de Finanças Pessoais

Descrição do projeto: O objetivo deste projeto é desenvolver um aplicativo de gerenciamento de finanças pessoais que ajude os usuários a controlarem suas despesas e receitas. O aplicativo permitirá que os usuários cadastrem suas transações financeiras, categorizem-nas e acompanhem seus gastos ao longo do tempo. Os usuários poderão visualizar gráficos e relatórios sobre seus gastos por categoria, monitorar seus saldos e definir metas financeiras.

Obs: Não é obrigatório implementar os requisitos apresentados acima na totalidade, pode fazer o que for possível, mas seja criativo.

Tecnologias sugeridas:
Frameworks de frontend  como React/NextJS ou Flutter
Gerenciador de estado
Bibliotecas de UI, como Bootstrap ou Material-UI, ou qualquer outro
Armazenamento local, utilizando o localStorage ou qualquer outra alternativa

*/