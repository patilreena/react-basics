<!DOCTYPE html>
<html>

<head>
  <script src="https://fb.me/react-15.2.1.js"></script>
  <script src="https://fb.me/react-dom-15.2.1.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.js"></script>
  <title>Intro to State</title>
</head>

<body>
  <div id='react-container'></div>
  <script type="text/babel">

    class CheckBox extends React.Component {
      constructor(props){
        super(props);
        this.handleCheck = this.handleCheck.bind(this);
        this.state = {
          checked: false
        };
      }

      handleCheck() {
        this.setState({checked: !this.state.checked});
      }

      render() {
        let msg;
        if(this.state.checked) {
          msg = "checked"
        } else {
          msg = "unchecked"
        }
        return (
          <div>
            <input type="checkbox" onChange={this.handleCheck}/>
            <p> This box is {msg} </p>
          </div>
        )
      }
    };

    ReactDOM.render(<CheckBox/>,
    document.getElementById('react-container'));
  </script>
</body>

</html>