const { Component } = React;
// const { connect, Provider } = ReactRedux;
// const { combineReducers, createStore } = Redux;

/*
--------------------------------------------
File: app.js
--------------------------------------------
*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accordionStore: initalAccordionComponentState
    };
  };
  
  onAccordionStoreUpdate(accordionStore) {
    this.setState({
      accordionStore
    });
  }
  
  render () {
    return (
      <main className="App">
        <Accordion
          className="App-accordion"
          title={{ className:"App-accordionTitle", value: "Title Goes here" }}
          caret={{ className: "App-accordionCaret" }}
          content={{ className: "App-accordionContent" }}
          store={this.state.accordionStore}
          onStoreUpdate={this.onAccordionStoreUpdate.bind(this)}
          >
          <div>Content goes here!</div>
        </Accordion>
      </main>
    );
  }
}

/*
--------------------------------------------
File: components/accordion/index.js
--------------------------------------------
*/
const Accordion = ({
  className = EMPTY.STRING,
  title: { className: titleClassName = EMPTY.STRING, style: titleStyle = EMPTY.OBJECT, value: titleValue } = EMPTY.OBJECT,
  caret: { className: caretClassName = EMPTY.STRING, style: caretStyle = EMPTY.OBJECT } = EMPTY.OBJECT,
  content: { className: contentClassName = EMPTY.STRING, style: contentStyle = EMPTY.OBJECT } = EMPTY.OBJECT,
  store = EMPTY.OBJECT,
  onStoreUpdate = EMPTY.FUNCTION,
  children = EMPTY.ELEMENT
}) => (
  <section
    className={`Accordion ${className}`.trim()}
   >
    <div onClick={onAccordionToggle(store)(store.isExpanded)(onStoreUpdate)}>
      <Title
        className={`Accordion-title ${titleClassName}`.trim()}
        style={titleStyle}
       >
        {titleValue}
      </Title>
      <Caret
        className={`Accordion-caret ${caretClassName}`.trim()}
        type={caretType(store.isExpanded)}
        style={caretStyle}
      />
    </div>
    <div
      className={`Accordion-content ${contentClassName} ${stateClassName(store.isExpanded)}`.trim()}
      style={contentStyle}
    >
      {children}
    </div>
  </section>
);

/*
--------------------------------------------
File: components/title/index.js
--------------------------------------------
*/
const Title = ({
  className = EMPTY.STRING,
  children = EMPTY.ELEMENT,
  style = EMPTY.OBJECT
}) => (
  <div
    className={`Title ${className}`.trim()}
    style={style}
   >
    {children}
  </div>
);

/*
--------------------------------------------
File: components/caret/index.js
--------------------------------------------
*/
const Caret = ({
  className = EMPTY.STRING,
  type = CARET_ARROW_TYPE.UP,
  style = EMPTY.OBJECT
}) => (
  <span
    className={`Caret ${className} ${classNames({ [caretTypeStateClassName(type)]: type })}`.trim()}
    style={style} 
  />
);

/*
--------------------------------------------
File: components/accordion/action-handlers.js
--------------------------------------------
*/
/**
 * LocalActionHandler
  Syntax: const functionName = (currentStore) => (dataRelatedToStoreUpdate) => (actionHandlerFromParentComponent) => (LocalActionHandlerCallbackParameters)
 * @param store {Object} - Current Local State/Store
 * @param isExpanded {Boolean} - Current status of accordion 
 * @param onToggle {Function} - Parent component handler to handle the toggle event with data
 * @param event {Object} - Click event object
 */
const onAccordionToggle = (store = EMPTY.OBJECT ) => (isExpanded) => (onToggle = EMPTY.FUNCTION) => (event = EMPTY.EVENT) => {
  event.preventDefault();
  const newState = localReducer(store, onAccordionTogglePayloadCreator(isExpanded));
  onToggle(newState);
};

/*
--------------------------------------------
File: store/accordion/payload-creator.js
--------------------------------------------
*/

/**
 * Component Local PayloadCreator
 * Payload creation logic should live at here
 */
const onAccordionTogglePayloadCreator = (isExpanded) => PayloadCreator({
  isExpanded: !isExpanded
});

/*
--------------------------------------------
File: store/initial-state.js
--------------------------------------------
*/
const initalAccordionComponentState = Object.freeze({
  isExpanded: true
});

/*
--------------------------------------------
File: store/local-reducer.js
--------------------------------------------
*/

/**
 * Component Local Reducer
 * It updates the current state with given data by immutable way and returns the updated state
 * @param {Object} state - Component's local State
 * @param {PayloadCreator} data - Data created by PayloadCreator factory
 */
const localReducer = (state = {}, data = {}) => (
  { ...state, ...data.payload }
);

/*
--------------------------------------------
File: modules/index.js
--------------------------------------------
*/
const stateClassName = (isExpanded) => isExpanded ? "is-expanded" : "is-collapsed";
const CARET_ARROW_TYPE = Object.freeze({
  UP: "upArrow",
  DOWN: "downArrow"
});
const caretType = (isExpanded) => isExpanded ? CARET_ARROW_TYPE.UP : CARET_ARROW_TYPE.DOWN;
const caretTypeStateClassName = (type) => type ? `is-${type}` : "";

const classNames = (allClassNames) => (
  Object.keys(allClassNames).filter(name => (
    allClassNames[name] !== undefined && allClassNames[name] !== ""
  )).join(" ")
);

const PayloadCreator = (payload) => Object.freeze({
  payload
});

const EMPTY = Object.freeze({
  OBJECT: {},
  STRING: "",
  FUNCTION: () => { console.log("EMPTY.FUNCTION called. Make sure that there is no missing params/props callback.") },
  ELEMENT: <noscript />,
  EVENT: { preventDefault: () => { } }
});

/*
--------------------------------------------
File: index.js
--------------------------------------------
*/
ReactDOM.render(
  <App />,
  document.getElementById("root")
)
