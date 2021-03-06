import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
   margin: 0;
   padding: 0;
   outline: 0;
   box-sizing: border-box;
}

@media(max-width: 1080px) {
    html {
        font-size: 93.75%;
    }
}

@media(max-width: 720px) {
    html {
        font-size: 87.5%;
    }
}

body {
  color: #617480;
  background: #F5F8FA;
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font-family: 'Heebo', sans-serif;
  font-weight: 500;
  font-size: 1rem;
}

h1, h2, h3, h4, h5, h6, strong {
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  color: #123952;
}

button {
  cursor: pointer;
}

`;
