function Earth() {
    return (
        <div className="earth">
            Earth
            <Crust>
                <Mantle>
                    <OuterCore>
                        <InnerCore />
                    </OuterCore>
                </Mantle>
            </Crust>
        </div>
    );
}

function Crust({ children }) {
    return (
        <div className="crust">
            Crust
            {children}
        </div>
    );
}

function Mantle({ children }) {
    return (
        <div className="mantle">
            Mantle
            {children}
        </div>
    );
}

function OuterCore({ children }) {
    return (
        <div className="outer-core">
            Outer core
            {children}
        </div>
    );
}

function InnerCore() {
    return <div className="inner-core">Inner core</div>;
}

function App() {
    return (
        <div>
            <h1 className="title is-1">React Component Composition</h1>
            <hr />
            <Earth />
            <Earth />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));
