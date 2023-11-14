**Tags HTML e Regras CSS Utilizadas:**

1. **`<!DOCTYPE html>`:** Define a versão do HTML utilizada (HTML5).

2. **`<html lang="PT_br">`:** Define o início do documento HTML e especifica o idioma como português brasileiro.

3. **`<head>`:** Contém meta informações sobre o documento, como conjunto de caracteres, viewport e o título da página.

   - **`<meta charset="UTF-8">`:** Especifica o conjunto de caracteres UTF-8 para suportar caracteres especiais.
   - **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`:** Configura a escala inicial e a largura do viewport para dispositivos móveis.
   - **`<title>`:** Define o título da página exibido na aba do navegador.

4. **`<link rel="stylesheet" type="text/css" href="style.css">`:** Conecta o documento HTML ao arquivo de estilo CSS externo.

5. **`<body>`:** Contém o conteúdo principal da página.

6. **`<header>`:** Representa o cabeçalho da página, contendo a logo, o menu de navegação e os links sociais.

   - **`.logo img`:** Aplica regras de estilo à imagem dentro da classe "logo".
   - **`header`:** Define regras de estilo para o cabeçalho, como exibição flexível, altura mínima e espaçamento uniforme.

7. **`.menu nav ul, .social ul`:** Seleciona as listas não ordenadas dentro dos elementos de navegação e sociais e aplica um estilo de exibição flexível.

8. **`.menu nav ul li, .social ul li`:** Estiliza os itens de lista dentro dos elementos de navegação e sociais, adicionando margens entre eles.

9. **`.menu, .social`:** Configura o estilo de exibição flexível e alinhamento central para os elementos de menu e social.

10. **`.menu a, .social a`:** Aplica estilos aos links de navegação e sociais, removendo decoração de texto, definindo a cor do texto e evitando sublinhado.

**Estrutura do Site:**

- **Header:** Contém a logo, o menu de navegação e os links sociais.
- **Section:** Espaço destinado ao conteúdo principal da página (ainda não implementado no código fornecido).
- **Footer:** Rodapé da página.

**Exemplos Adicionais:**

1. **Uso de Imagem em Outra Página:**
   ```html
   <body>
       <header>
           <div class="logo"><a href="outra_pagina.html"><img src="logo.png" /></a></div>
           <!-- Restante do código -->
       </header>
       <!-- Restante do conteúdo -->
   </body>
   ```

2. **Adição de uma Seção de Projetos no CSS:**
   ```css
   section {
       padding: 20px;
       background-color: #f4f4f4;
   }
   ```

   ```html
   <section>
       <h2>Projetos Recentes</h2>
       <!-- Conteúdo dos projetos -->
   </section>
   ```

3. **Estilo para Links no Rodapé:**
   ```css
   footer a {
       text-decoration: underline;
       color: #555;
   }
   ```

   ```html
   <footer>
       <p>&copy; 2023 Meninas TI. Todos os direitos reservados. | <a href="#">Política de Privacidade</a></p>
   </footer>
   ```
