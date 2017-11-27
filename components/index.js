<!DOCTYPE html>
<html>
<head>
	<title>React Components</title>
	<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.js"></script>
</head>
<body>
	<div class="react-components"></div>
  
  <script type="text/babel">

		class CheckBox extends React.Component {
		  render() {
		  return (
		    <div>
		    	<input type="CheckBox"/>
		    </div>
		    )
	    }
	  }

	  ReactDOM.render(<CheckBox/>,
	  document.getElementById('react-components'));
		
	</script>

</body>
</html>