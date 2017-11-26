<!DOCTYPE html>
<html>
  <head>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.js"></script>
    <title>My First React File</title>
  </head>
  <body>
    <div id='react-container'></div>
    <script type="text/babel">
      ReactDOM.render(
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>,
        document.getElementById('react-container'))
    </script>
  </body>
</html>