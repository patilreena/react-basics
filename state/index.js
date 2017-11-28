<!DOCTYPE html>
<html>
<head>
  <title>React state</title>
  <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.js"></script>
</head>
<body>
  <div id="app"> </div>
  <script type="text/babel">
    
  class Note extends React.Component {
    render() {
      return (
        <div>
          <textarea> </textarea>
          <span>
            <button> Edit</button>
            <button> X</button>
          </span>
        </div>
      )
    }
  }

  ReactDOM.render(<Note/>,
  document.getElementById('app'));
  </script>
  

</body>
</html>