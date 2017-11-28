<!DOCTYPE html>
<html>

<head>
  <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.js"></script>
  <link rel="stylesheet" type="text/css" href="style.css">
  <title>Building the Note Board</title>
</head>

<body>
  <div id='react-container'></div>
  <script type="text/babel">

    class Note extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          editing:false
        };
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
      }
      edit() {
        this.setState({editing:true})
      }
      save() {
        var val = this.textInput.value;
        alert('later we will save this value ' + val);
        this.setState({editing: false})
      }
      remove() {
        alert('remove notes');
      }
      renderForm() {
        return (
          <div className="note"> 
            <textarea 
              ref={(input) => { this.textInput = input; }}
            ></textarea>
            <button onClick={this.save}>Save </button>
          </div>
        )
      }
      renderDisplay() {
        return (
          <div className = "note">
            <p>{this.props.children}</p>
            <span>
              <button onClick={this.edit}> Edit</button>
              <button onClick={this.remove}> X </button>
            </span>
          </div>
        )
      }

      render() {
        if(this.state.editing) {
          return this.renderForm()
        } else {
          return this.renderDisplay()
        }
      }
      
    }

    ReactDOM.render(<Note> Hello world! </Note>,
    document.getElementById('react-container'));

  </script>
</body>

</html>