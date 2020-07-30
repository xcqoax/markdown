
import React, { Component } from 'react';
import  marked  from 'marked';

const init = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    contenido : init
  };

  this.actualizar = this.actualizar.bind(this);
  this.getMarked = this.getMarked.bind(this);
}

actualizar(e){

  this.setState({
    contenido: e.target.value
  });
}

getMarked() {
  let markdown = marked(this.state.contenido);
 return {__html: markdown }
}

  render() {


    return (
      <div> 
          <form>
            <textarea name="editor" onChange={this.actualizar} value={this.state.contenido} id="editor"/>
            <div dangerouslySetInnerHTML={ this.getMarked()} id="preview" />
        </form>      
       </div>
    );
  }
}

export default App;

